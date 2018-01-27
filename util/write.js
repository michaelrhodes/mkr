var fs =  require('fs')

module.exports = write

function write (filepath, content) {
  return fs.writeFileSync(
    filepath, content
  )
}
