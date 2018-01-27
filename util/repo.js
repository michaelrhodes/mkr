var path = require('path')
var ini = require('ini')
var read = require('./read')

module.exports = repo

function repo (dir) {
  var config = read(path.join(dir, '.git/config'))
  var git = config && ini.parse(config)
  var origin = git && git['remote "origin"']
  return origin && origin.url || void 0
}
