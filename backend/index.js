const express = require("express")

const app = express()

const courseController = require("./controllers/courses.controller")
const checkoutController =require("./controllers/checkout.controller")
const cors = require("cors")

app.use(cors())

app.use(express.json())

app.use("/course", courseController)
app.use("/checkout",checkoutController)

app.get("/",(req,res)=>{
    res.send("hello world")
})
module.exports = app