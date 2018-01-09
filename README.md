# simple-pb

[![NPM](https://nodei.co/npm/simple-pb.png)](https://npmjs.org/package/simple-pb)

Simple Node.js terminal progress bar.

## Usage

```console
npm i -s simple-pb
```

```javascript
const SimplePB = require("simple-pb");
const ProgressBar = new SimplePB();

ProgressBar.init(<total>);
ProgressBar.update(<current_value>);
```
