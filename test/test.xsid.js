let BDCashCore = require('../src/index.js')
let bdcash = new BDCashCore
var assert = require('assert')
const password = '123456'
bdcash.testnet = true

describe('Addresses', async function () {
    it('Should create an extended BDCashID', async function () {
        this.timeout(35000)
        let xsid = await bdcash.buildxSid('123456', '', false)
        console.log('GENERATING', xsid)
        let checksid = await bdcash.readxKey('123456', xsid.walletstore)
        console.log('READING', checksid)
        let deriveseed = await bdcash.deriveKeyFromSeed(checksid.seed, "m/0'/0/1")
        console.log('DERIVING FROM SEED', deriveseed)

        let derivemnemonic = await bdcash.deriveKeyFromMnemonic(xsid.mnemonic, "m/0'/0/1")
        console.log('DERIVED FROM MNEMONIC', derivemnemonic)
    })

    it('Should create an extended seed and rigenerate same from mnemonic', async function () {
        this.timeout(35000)
        let xsid = await bdcash.buildxSid('123456', 'latin', false)
        console.log(xsid)
        let xsidnew = await bdcash.buildxSid("123456", 'latin', false, xsid.mnemonic)
        
        console.log('SAME XPUB?', xsid.xpub === xsidnew.xpub)
        console.log('XPUBS ARE',xsid.xpub, xsidnew.xpub)
    })

    it('Should generate same key from xpub or xprv', async function () {
        this.timeout(35000)
        let xsid = await bdcash.buildxSid('123456', false)
        let derivexpriv = await bdcash.deriveKeyFromXPrv(xsid.xprv, "m/0/0/2")
        console.log(derivexpriv)
        let derive = await bdcash.deriveKeyfromXPub(xsid.xpub, "m/0/0/2")
        console.log(derive)
    })

    it('Should return same xpub and xprv', async function () {
        this.timeout(35000)
        let xsid = await bdcash.buildxSid('123456', false)
        console.log(xsid)
        let xkeys = await bdcash.returnXKeysFromSeed(xsid.seed)
        console.log(xkeys)
    })

    it('Should derive same address from seed or xprv or xpub', async function () {
        this.timeout(35000)
        let xsid = await bdcash.buildxSid('123456', false)
        console.log(xsid)
        let deriveseed = await bdcash.deriveKeyFromSeed(xsid.seed, "m/0/0/2")
        console.log(deriveseed)
        let derivexpriv = await bdcash.deriveKeyFromXPrv(xsid.xprv, "m/0/0/2")
        console.log(derivexpriv)
        let derive = await bdcash.deriveKeyfromXPub(xsid.xpub, "m/0/0/2")
        console.log(derive)
    })

    it('Should derive same address from seed or derived xpriv', async function () {
        this.timeout(35000)
        let xsid = await bdcash.buildxSid('123456', false)
        let deriveseed = await bdcash.deriveKeyFromSeed(xsid.seed, "m/0/0/0/0/0")
        console.log('DERIVED FROM SEED',deriveseed)
        let samepath = await bdcash.deriveKeyFromXPrv(deriveseed.xprv, "m")
        console.log('DERIVED FROM SAME PATH',samepath)
        console.log(samepath.pub === deriveseed.pub)
        let derivexpriv = await bdcash.deriveKeyFromXPrv(deriveseed.xprv, "m/2")
        console.log('DERIVED FROM RELATIVE XPRV',derivexpriv)
        let testderive = await bdcash.deriveKeyFromSeed(xsid.seed, "m/0/0/0/0/0/2")
        console.log('DERIVED FROM MASTER SEED', testderive)
        console.log(derivexpriv.pub === testderive.pub)
    })
});