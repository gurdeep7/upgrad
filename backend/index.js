const express = require("express")

const app = express()

const courseController = require("./controllers/courses.controller")

app.use(express.json())

app.use("/course", courseController)

module.exports = app