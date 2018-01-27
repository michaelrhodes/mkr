module.exports = stringify

function stringify (obj) {
  return JSON.stringify(obj, null, 2) + '\n'
}
