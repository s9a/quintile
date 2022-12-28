function dream() {
  var capo = [0, 72, 144, 216, 288]
  var deep = [capo]
  var next = n => n + 1
  var i = 1
  while (i < 72) {
    capo = capo.map(next)
    deep[i++] = capo
  }
  return deep
}

if (typeof module != "undefined") {
  module.exports = dream
}
