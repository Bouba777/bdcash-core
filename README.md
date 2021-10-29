# BDCash-Core NPM

<h2 style="text-align: center;"><a id="user-content-bdcash-identity-framework" class="anchor" href="https://github.com/BDCashProtocol/bdcash-identity-framework/new/master?readme=1#bdcash-identity-framework" aria-hidden="true"></a><strong>BDCash Core</strong></h2>
<p style="text-align: center;">JS implementation of main wallet features.</p>
<p style="text-align: center;"><a title="English &mdash; BDCash Wiki" href="https://en.bdcash.wiki/core/" target="_blank" rel="nofollow noopener"><strong>Wiki English</strong></a>&nbsp;&middot; &middot; &middot;&nbsp;<a title="Italiano &mdash; BDCash Wiki" href="https://it.bdcash.wiki/core/" target="_blank" rel="nofollow noopener"><strong>Wiki italiano</strong></a></p>

<br>This is the main client side library of BDCash Blockchain, written in NodeJS.

You can use this version by installing it directly from npm:

```npm install --save @bdcash-protocol/core```

# Use your own IdaNodes

To override the IdaNodes list you've to rewrite the array like this:

```
let BDCashCore = require('@bdcash-protocol/core')
let bdcash = new BDCashCore
bdcash.staticnodes = true
bdcash.mainnetIdaNodes = ['http://localhost:3001', 'https://anotheridanode.com']
```

# BDCash-Core CLI (WIP)

If you want to use the module as a CLI you have to run:

```sudo npm link```

Then you'll be able to run commands like:
```bdcash getinfo```

This feature is a work in progress and will be released soon.
