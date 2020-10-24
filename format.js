var root = require('module-root')()
var stringify = require('./util/stringify')
var mpath = require('./util/mpath')
var write = require('./util/write')
var read = require('./util/read')
var repo = require('./util/repo')

module.exports = format

function format () {
  var existing = read(mpath.pkg)
  if (!existing) return

  var epkg = JSON.parse(existing)
  var pkg = {}

  pkg.name = epkg.name
  pkg.author = epkg.author
  pkg.version = epkg.version
  pkg.license = epkg.license
  pkg.private = epkg.private
  pkg.bin = epkg.bin
  pkg.main = epkg.main
  pkg.browser = epkg.browser
  pkg.repository = epkg.repository || repo(root)
  pkg.description = epkg.description
  pkg.keyword = epkg.keywords
  pkg.dependencies = epkg.dependencies
  pkg.peerDependencies = epkg.peerDependencies
  pkg.devDependencies = epkg.devDependencies
  pkg.scripts = epkg.scripts

  write(mpath.pkg, stringify(pkg))
}
