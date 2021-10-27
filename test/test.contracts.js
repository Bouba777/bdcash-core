let BDCashCore = require('../src/index.js')
let bdcash = new BDCashCore
var assert = require('assert')
const password = '123456'

describe('Contracts', async function () {
    /*it('Should create a contract request', async function () {
        this.timeout(35000)
        let address = await bdcash.createAddress('123456')
        bdcash.debug = true
        bdcash.staticnodes = true
        let request = await bdcash.createContractRequest(address.walletstore, '123456', { contract: "LcD7AGaY74xvVxDg3NkKjfP6QpG8Pmxpnu", function: "check", params: { name: "turinglabs" } })
        let response = await bdcash.sendContractRequest(request, 'http://localhost:3001')
        console.log('CONTRACT RESPONSE IS', response)
        assert.notStrictEqual(false, response);
    })
    it('Should return average time from contracts', async function () {
        this.timeout(35000)
        let response = await bdcash.gettime()
        console.log(response)
        assert.notStrictEqual(false, response);
    })*/
    it('Should write a contract request into the blockchain', async function () {
        this.timeout(35000)
        let wallet = await bdcash.importPrivateKey('Sq9GWa9vyM1HghsnVan5UJhtx2GumTaLBTHgDhCW4abjzZLmsYmr', '-', false)
        bdcash.debug = true
        bdcash.staticnodes = true
        let tx = await bdcash.writeContractRequest(wallet.walletstore, '-', { contract: "LcD7AGaY74xvVxDg3NkKjfP6QpG8Pmxpnu", function: "check", params: { name: "turinglabs" } })
        console.log('CONTRACT TRANSACTION IS', tx)
        assert.notStrictEqual(false, tx);
    })
});