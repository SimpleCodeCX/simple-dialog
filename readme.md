[@simplexd/dialog](https://www.npmjs.com/package/@simplexd/dialog)
====================================
A class to create dialog.

[dialog-demo](http://www.cxdsimple.com/dialog-demo/)

## Install

```javascript
npm install --save @simplexd/dialog
```

## Usage

```javascript
// commonjs
const Dialog = require('@simplexd/dialog');
const dialog = new Dialog();
dialog.open();
```

or 

```javascript
// es6 module
import Dialog from '@simplexd/dialog';
const dialog = new Dialog();
dialog.open();
```

or 

```javascript
// html script
<link rel="stylesheet" href="${your-asset-src-path}/simple-dialog.min.css">
<script src="${your-asset-src-path}/simple-dialog.min.js"></script>
const dialog = new SimpleDialog();
dialog.open();
```

## Example

```javascript
  const dialog1 = new Dialog();
  dialog1.open();
  dialog1.close();

  const dialog2 = new Dialog({
    title: 'dialog2 title',
    text: 'this is dialog2'
  });
  dialog2.open();
  dialog2.close();

  const dialog3 = new Dialog({
    title: 'normal dialog3',
    text: 'this is dialog3',
    size: 'normal' || 'small' || 'large'
  });
  dialog3.open();
  dialog3.close();
```
