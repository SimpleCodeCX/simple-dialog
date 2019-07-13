if (process.env.NODE_ENV === 'production') {
  require('./dist/simple-dialog.min.css');
  module.exports = require('./dist/simple-dialog.min.js');
} else {
  require('./dist/simple-dialog.css');
  module.exports = require('./dist/simple-dialog.js');
}
