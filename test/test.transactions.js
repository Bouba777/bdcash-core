let BDCashCore = require('../src/index.js')
let bdcash = new BDCashCore
bdcash.staticnodes = true
bdcash.debug = true

async function createTransaction(){
    let prv = 'Sq9GWa9vyM1HghsnVan5UJhtx2GumTaLBTHgDhCW4abjzZLmsYmr'
    let from = 'LdRQokR1i3XDtj1V3jnCRqMPrVc7sYkeE2'
    let outputs = {
        "LUvRq5GygoJ4WMjiW8Zjis19jWK2mHdL2b": 0.01
    }
    let transaction = await bdcash.createRawTransaction(from, outputs)
    console.log(transaction)
    if(transaction !== false){
        let signed = await bdcash.signRawTransaction(transaction.hexed, prv)
        console.log(signed)
        let txid = await bdcash.sendRawTransaction(signed)
        console.log(txid)
    }
}
createTransaction()