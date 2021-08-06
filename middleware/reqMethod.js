function check(req, res, next) {
  console.log(`request method : ${req.method}`)
  next()
}

function start(req, res, next) {
  console.log("Hello")
  next()
}

module.exports = { check, start }
