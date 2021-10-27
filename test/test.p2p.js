let BDCashCore = require('../src/index.js')
let bdcash = new BDCashCore
// bdcash.staticnodes = true
bdcash.debug = true
bdcash.mainnetIdaNodes = ['https://idanodejs01.bdcashchain.org','https://idanodejs02.bdcashchain.org','https://idanodejs03.bdcashchain.org','https://idanodejs04.bdcashchain.org','https://idanodejs05.bdcashchain.org','https://idanodejs06.bdcashchain.org'] //OVVERIDE IDANODES

bdcash.connectP2P(function(received){
    console.log('Received ' + JSON.stringify(received))
})