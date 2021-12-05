let BDCashCore = require('../src/index.js')
let bdcash = new BDCashCore
// bdcash.staticnodes = true
bdcash.debug = true
bdcash.mainnetNodesh = ['https://nodesh01.bdcashprotocol.com', 'https://nodesh02.bdcashprotocol.com'] //OVVERIDE IDANODES
bdcash.connectP2P(function(received){
    console.log('Received ' + JSON.stringify(received))
})