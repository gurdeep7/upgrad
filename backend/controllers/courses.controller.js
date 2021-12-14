const express = require("express")

const courses = require("../models/courses.model")

const router = express.Router()

router.post("/",async (req,res)=>{
   try {
        const Course =await courses.create(req.body)

    res.status(200).send(Course)
}catch(e){

    res.status(500).json({status:e.message})
}
})
router.get("/", async (req,res)=>{
    try{
        const Course =await courses.find().lean().exec()
        res.status(201).send(Course)
    }catch(e){
        res.status(500).json({status:e.message})
    }
})
module.exports = router;