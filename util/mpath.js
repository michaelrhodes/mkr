var path = require('path')
var cwd = process.cwd()

module.exports = {
  pkg: path.join(cwd, 'package.json'),
  readme: path.join(cwd, 'readme.md')
}
