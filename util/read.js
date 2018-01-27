var fs = require('fs')

module.exports = read

function read (filepath) {
  return fs.existsSync(filepath) &&
    fs.readFileSync(filepath, 'utf8')
}
