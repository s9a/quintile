function sign(degree) {
  var dir = degree < 0 ? -1 : 1
  degree = Math.abs(degree)
  degree = degree % 360
  degree++
  return Math.ceil(degree / 30) * dir
}

if (typeof module != "undefined") {
  module.exports = sign
}
