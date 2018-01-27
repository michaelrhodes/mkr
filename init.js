var fs = require('fs')
var path = require('path')
var root = require('module-root')()
var stringify = require('./util/stringify')
var filepath = require('./util/filepath')
var write = require('./util/write')
var repo = require('./util/repo')
var cwd = process.cwd()

module.exports = init

function init () {
  if (fs.existsSync(filepath)) return

  var pkg = {
    name: path.basename(root),
    author: 'Michael Rhodes',
    version: '0.0.0',
    main: 'index.js',
    repository: repo(root),
    license: 'MIT'
  }

  write(filepath, stringify(pkg))
}
