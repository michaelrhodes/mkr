var fs = require('fs')
var path = require('path')
var stringify = require('./util/stringify')
var mpath = require('./util/mpath')
var bind = require('./util/bind')
var write = require('./util/write')
var read = require('./util/read')
var repo = require('./util/repo')
var cwd = process.cwd()

module.exports = init

function init () {
  // package.json
  if (!fs.existsSync(mpath.pkg)) {
    write(mpath.pkg, stringify({
      name: path.basename(cwd),
      author: 'Michael Rhodes',
      version: '1.0.0',
      main: 'index.js',
      repository: repo(cwd),
      license: 'MIT'
    }))
  }

  // readme.md
  if (!fs.existsSync(mpath.readme)) {
    var tpl = read(path.join(__dirname, 'readme.md.tpl'))
    var pkg = JSON.parse(read(mpath.pkg))
    write(mpath.readme, bind(tpl, {
      name: pkg.name,
      version: pkg.version,
      description: pkg.description || '',
    }))
  }
}
