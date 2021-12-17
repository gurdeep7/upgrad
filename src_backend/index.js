const express = require("express")

const app = express()

const checkinController = require("./controllers/checkin.controller")

app.use(express.json())

app.use("/checkin", checkinController)


module.exports = app