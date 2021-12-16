const express = require("express")

const app = express()
const { body, validationResult } = require('express-validator');

const courseController = require("./controllers/courses.controller")

const { register, login, check } = require("./controllers/auth.controller");
//const recruitController = require("./controllers/recruit.controller");
//const screeningController = require("./controllers/screening.controller");

const cors = require("cors")

app.use(cors())

app.use(express.json())

app.use("/course", courseController)

app.post("/register", register);
app.post("/login", login); // till not in use
app.get("/check/:email",check)
app.get("/",(req,res)=>{
    res.send("We are upgrad")
})
module.exports = app