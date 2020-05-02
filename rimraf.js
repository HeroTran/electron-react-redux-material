const globby = require('globby');
const rimraf = require('rimraf');

globby([
  'app/dist/*',
  'app/dll/*',
  'app/main.prod.js',
  'app/main.prod.js.map',
  'app/main.prod.js.LICENSE.txt',
  'release/*',
]).then(function then(paths) {
  paths.map(function map(item) {
    rimraf.sync(item);
  });
});
