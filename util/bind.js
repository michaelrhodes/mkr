module.exports = bind

function bind (str, data) {
  return grep(str, data)
    .replace(/\n{3,}/, '\n\n')
}

function grep (str, obj) {
  var i = 0, key, keys = Object.keys(obj)
  while (key = keys[i++]) str = (function (x) {
    while (x !== str && (x = str))
      str = str.replace('{' + key + '}', obj[key])
    return x
  })()
  return str
}
