const express = require("express")
const resturantRouter = require("./router/resturants")
const reqMethod = require("./middleware/reqMethod")
const app = express()
const PORT = process.env.PORT || 3000

//Middleware
app.use(express.json()) //แปลง JSON String เป็น JSON Object (ทำให้รับข้อมูลมาแบบ JSON (ตอนรับข้อมูลด้วย req.body ใน POST method))
app.use(express.urlencoded({ extended: false })) //แปลงข้อมูลจาก form เป็น Object

//Custom Middleware
app.use(reqMethod.start)
app.use(reqMethod.check)

app.use("/apis/resturants", resturantRouter) //resturant Router

//set listen port
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`)
})
