const express = require("express")

const app = express()

const courseController = require("./controllers/courses.controller")
const userCourseDetailController = require("./controllers/userCourseDetails.controller");

const cors = require("cors")

app.use(cors())

app.use(express.json())

app.use("/course", courseController);
//USER COURSE DETAIL API
app.use("/userCourseDetail", userCourseDetailController);

app.get("/",(req,res)=>{
    res.send("hello world")
})
module.exports = app