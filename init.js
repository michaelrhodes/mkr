var fs = require('fs')
var path = require('path')
var stringify = require('./util/stringify')
var filepath = require('./util/filepath')
var write = require('./util/write')
var repo = require('./util/repo')
var cwd = process.cwd()

module.exports = init

function init () {
  if (fs.existsSync(filepath)) return

  var pkg = {
    name: path.basename(cwd),
    author: 'Michael Rhodes',
    version: '0.0.0',
    main: 'index.js',
    repository: repo(cwd),
    license: 'MIT'
  }

  write(filepath, stringify(pkg))
}
