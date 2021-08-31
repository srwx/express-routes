const express = require("express")
const resturantRouter = require("./router/resturants")
const reqMethod = require("./middleware/reqMethod")
const app = express()
const PORT = process.env.PORT || 3000

// ------------------------------------------ Middleware ------------------------------------------
// .use() คือการเรียกใช้ Middleware
// Middleware จะทำงานทุกครั้ง เมื่อมี request ส่งมา
// Middleware
app.use(express.json()) //แปลง JSON String เป็น JSON Object (ทำให้รับข้อมูลมาแบบ JSON (ตอนรับข้อมูลด้วย req.body ใน POST method))
app.use(express.urlencoded({ extended: false })) //แปลงข้อมูลจาก form เป็น Object

// Custom Middleware
app.use(reqMethod.start)
app.use(reqMethod.check)
// Middleware ด้านบน ไม่ได้ระบุ path ทำให้ทำงานทุกครั้งที่มีการส่ง request

// Custom Middleware (with specfic path)
app.use("/test/middleware", (req, res, next) => {
  console.log(`Specfic middleware`)
})
// Middleware function นี้จะทำงานเมื่อ request path เป็น '/test/middleware' เท่านั้น

// ------------------------------------------------------------------------------------------------

app.use("/apis/resturants", resturantRouter) //resturant Router

//set listen port
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`)
})
