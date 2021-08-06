const express = require("express")
const router = express.Router() //สร้าง Router object
var resturantsData = require("../data/resturants")
var resturantsID = 2

//Read
router.get("/", (req, res) => {
  res.status(200)
  res.json(resturantsData) //ส่งข้อมูลที่เป็น JSON Object กลับไป
})

//Create
router.post("/", (req, res) => {
  resturantsID += 1
  var data = {
    id: resturantsID,
    ...req.body,
  }
  resturantsData.push(data)
  res.json(resturantsData)
})

//Update
router.put("/:id", (req, res) => {
  var id = parseInt(req.params.id)
  var index = resturantsData.findIndex((i) => i.id == id)
  var updateData = {
    id: id,
    ...req.body,
  }
  resturantsData[index] = updateData
  res.json(resturantsData)
})

//Delete
router.delete("/:id", (req, res) => {
  var id = parseInt(req.params.id)
  var index = resturantsData.findIndex((i) => i.id == id)
  resturantsData.splice(index, 1)
  res.json(resturantsData)
})

module.exports = router
