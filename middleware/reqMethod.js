// Middleware จะทำงานทุกๆครั้งเมื่อมี request ส่งมา

function check(req, res, next) {
  console.log(`request method : ${req.method}`)
  next() // ทำงาน Middleware function ถัดไป
}

function start(req, res, next) {
  console.log("Hello")
  next() // ทำงาน Middleware function ถัดไป
}

module.exports = { check, start }
