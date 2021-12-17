const express = require("express")

const app = express()
const { body, validationResult } = require('express-validator');

const courseController = require("./controllers/courses.controller")

const { register, check, verifyotp } = require("./controllers/auth.controller");
//const recruitController = require("./controllers/recruit.controller");
//const screeningController = require("./controllers/screening.controller");
const checkinController = require("./controllers/checkIn.controller")

const cors = require("cors");
const { verify } = require("./configs/mail");

app.use(cors())

app.use(express.json())

app.use("/course", courseController)

app.post("/register", register);
app.get("/check/:email",check)
app.get("/",(req,res)=>{
    res.send("We are upgrad")
})
app.get("/check/:id/:otp",verifyotp)


module.exports = app