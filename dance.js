function dance(degree) {
  return (72 + degree) % 360
}

function group(degree) {
  return [0, 72, 144, 216, 288].map(n => (+degree + n) % 360).sort()
}
