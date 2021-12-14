const express = require("express")

const courses = require("../models/courses.model")

const router = express.Router()

router.post("/",(req,res)=>{
   try {
        const Course = courses.create(req.body)

    res.status(200).send(Course)
}catch(e){

    res.status(500).json({status:e.message})
}
})
router.get("",(req,res)=>{
    console.log("work")
    try{
        const Course = courses.find().lean().exec()
        res.status(201).send(Course)
    }catch(e){
        res.status(500).json({status:e.message})
    }
})
module.exports = router;