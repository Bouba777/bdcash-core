let BDCashCore = require('../src/index.js')
let bdcash = new BDCashCore
var assert = require('assert')
const password = '123456'
bdcash.debug = true
describe('Addresses', async function() {
    it('Should hash something', async function (){
        let hash = await bdcash.hash('123456')
        console.log('HASH', hash)
    })
    it('Should fund address', async function(){
        this.timeout(35000)
        let funded = await bdcash.fundAddress('SqKfYCBLjWx3NobRBTdeHN75HXn9f9wgi2po1QkwLvwHxCVHM3Qw', 'LKsWzbbmi43tHb5KPv7jv3zm43eGeYaKJK', 0.001)
        console.log(funded)
    })
    it('Should create a testnet address', async function(){
        this.timeout(35000)
        let address = await bdcash.createAddress('123456')
        console.log('ADDRESS IS', address)
        assert.strictEqual(34, address.pub.length);
    })
    it('Should create a mainnet address', async function(){
        this.timeout(35000)
        let address = await bdcash.createAddress('123456')
        console.log('ADDRESS IS', address)
        assert.strictEqual(34, address.pub.length);
    })
    it('Address can send a transaction', async function(){
        this.timeout(35000)
        let prv = 'SqKfYCBLjWx3NobRBTdeHN75HXn9f9wgi2po1QkwLvwHxCVHM3Qw'
        let pub = 'LY6BHLvjNbHCQxnpGgt6BvXhXjfX6Nk1X2'
        let to = 'LKsWzbbmi43tHb5KPv7jv3zm43eGeYaKJK'
        let amount = 0.001
        let password = 'password'
        await bdcash.importPrivateKey(prv, password)
        bdcash.debug = true
        let tx = await bdcash.send(pub, password, to, amount)
        console.log('TX RESPONSE IS', tx)
        assert.equal(64, tx.length);
    })
    it('Should return all nodes', async function(){
        let nodes = await bdcash.returnNodes()
        assert.equal(16, nodes.length);
    })
    it('Address should be length 34 bytes', async function(){
        let address = await bdcash.createAddress(password, true)
        assert.equal(34, address.pub.length);
    })
    it('PubKey should be length 66 bytes', async function(){
        let address = await bdcash.createAddress(password, true)
        assert.equal(66, address.key.length);
    })
    it('PrivKey should be length 52 bytes', async function(){
        let address = await bdcash.createAddress(password, true)
        assert.equal(52, address.prv.length);
    })
    it('Wallet store shuold be decryptable and address should be the same', async function(){
        let address = await bdcash.createAddress(password, true)
        let readed = await bdcash.readKey(password, address.walletstore)
        assert.equal(readed.key, address.key);
    })
    it('Should import a private key', async function(){
        let address = await bdcash.createAddress(password, true)
        let key = await bdcash.importPrivateKey(address.prv, password)
        assert.equal(key.prv, address.prv);
    })
    it('Should return all identities', async function(){
        let identities = await bdcash.returnIdentities()
        assert.notEqual(0, identities.count);
    })
    it('Should create RSA keys for identity', async function(){
        this.timeout(15000)
        let address = await bdcash.createAddress(password, true)
        await bdcash.createRSAKeys(address.pub, password)
        let identity = await bdcash.returnIdentity(address.pub)
        assert.notEqual(undefined, identity.rsa);
    })
});

describe('Idanodes', async function() {
    it('Should GET first available IdaNode', function(){
        this.timeout(35000)
        return new Promise(async response => {
            let getinfo = await bdcash.get('/wallet/getinfo', 'https://idanodejs09.bdcashchain.org')
            if(getinfo !== false){
                response(getinfo)
            }
        })
    })

    it('Should POST first available IdaNode', async function(){
        this.timeout(35000)
        let Bob = await bdcash.createAddress(password, true)
        let Alice = await bdcash.createAddress(password, true)
        let trustlink = await bdcash.post('/trustlink/init', { addresses: Bob.key + ',' + Alice.key, airdrop: false})
        assert.equal(34, trustlink.data.address.length);
    })
});

describe('Planum', async function() {
    it('Should return a list of unspent', async function(){
        this.timeout(30000)
        bdcash.usePlanum('6ShzCp8oXAqVSZdrkNMSj13ghobwZZRzGm')
        let unspent = await bdcash.listPlanumUnspent('LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT')
        assert.equal(1, unspent.length);
    })
})

describe('P2P Network', async function() {
    it('Should connect to p2p network and send a message', function(){
        this.timeout(15000)
        return new Promise(async response => {
            let address = await bdcash.createAddress(password, true)
            bdcash.connectP2P(function(received){
                response(received)
            })
            setInterval(function(){
                bdcash.broadcast(address.walletstore, password, 'message', 'Now are '+ new Date() +'!')
            },3500)
        })
    })
})
