var root = require('module-root')()
var repo = require('./util/repo')
var filepath = require('./util/filepath')
var stringify = require('./util/stringify')
var write = require('./util/write')
var read = require('./util/read')

module.exports = format

function format () {
  var existing = read(filepath)
  var epkg = existing && JSON.parse(existing) || {}
  var pkg = {}

  pkg.name = epkg.name
  pkg.author = epkg.author
  pkg.version = epkg.version
  pkg.private = epkg.private
  pkg.bin = epkg.bin
  pkg.main = epkg.main
  pkg.browser = epkg.browser
  pkg.repository = epkg.repository || repo(root)
  pkg.description = epkg.description
  pkg.keyword = epkg.keywords
  pkg.license = epkg.license
  pkg.scripts = epkg.scripts
  pkg.dependencies = epkg.dependencies
  pkg.peerDependencies = epkg.peerDependencies
  pkg.devDependencies = epkg.devDependencies

  write(filepath, stringify(pkg))
}
