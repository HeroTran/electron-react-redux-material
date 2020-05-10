const path = require('path');

require('@babel/register')({
  extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.json'],
  cwd: path.join(__dirname, '..', '..'),
});
