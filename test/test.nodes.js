let BDCashCore = require('../src/index.js')
var assert = require('assert')

describe('Addresses', async function () {
    it('Should return all remote nodes', async function () {
        this.timeout(35000)
        let bdcash = new BDCashCore
        let nodes = await bdcash.returnNodes()
        console.log(nodes)
    })
    it('Should return a defined node, same for testnet or mainnet', async function () {
        this.timeout(35000)
        let bdcash = new BDCashCore(false, ['http://nodesh01.bdcashprotocol.com'])
        let nodes = await bdcash.returnNodes()
        console.log('MAINNET', nodes)
        bdcash.testnet = true
        nodes = await bdcash.returnNodes()
        console.log('TESTNET', nodes)
    })
    it('Should return defined nodes, different for testnet or mainnet', async function () {
        this.timeout(35000)
        let bdcash = new BDCashCore(false, {mainnet: ['http://nodesh01.bdcashprotocol.com'], testnet: ['http://testnet.bdcashprotocol.com']})
        let nodes = await bdcash.returnNodes()
        console.log('MAINNET', nodes)
        bdcash.testnet = true
        nodes = await bdcash.returnNodes()
        console.log('TESTNET', nodes)
    })
});