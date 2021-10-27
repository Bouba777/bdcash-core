# BDCash-Core NPM

<p><a href="https://camo.githubusercontent.com/4e892209b4b1e2d1a773ec97e544a92f068a6f0b/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f333136382f312a31674778414b57714b5135577a635170755f766932412e6a706567" target="_blank" rel="noopener noreferrer"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://camo.githubusercontent.com/4e892209b4b1e2d1a773ec97e544a92f068a6f0b/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f333136382f312a31674778414b57714b5135577a635170755f766932412e6a706567" alt="" data-canonical-src="https://miro.medium.com/max/3168/1*1gGxAKWqKQ5WzcQpu_vi2A.jpeg" /></a></p>
<h2 style="text-align: center;"><a id="user-content-bdcash-identity-framework" class="anchor" href="https://github.com/BDCashProtocol/bdcash-identity-framework/new/master?readme=1#bdcash-identity-framework" aria-hidden="true"></a><strong>BDCash Core</strong></h2>
<p style="text-align: center;">JS implementation of main wallet features.</p>
<p style="text-align: center;"><a title="English &mdash; BDCash Wiki" href="https://en.bdcash.wiki/core/" target="_blank" rel="nofollow noopener"><strong>Wiki English</strong></a>&nbsp;&middot; &middot; &middot;&nbsp;<a title="Italiano &mdash; BDCash Wiki" href="https://it.bdcash.wiki/core/" target="_blank" rel="nofollow noopener"><strong>Wiki italiano</strong></a></p>

<br>This is the main client side library of BDCash Blockchain, written in NodeJS.

You can use this version by installing it directly from npm:

```npm install --save @bdcash/core```

# Use your own IdaNodes

To override the IdaNodes list you've to rewrite the array like this:

```
let BDCashCore = require('@bdcash/core')
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
