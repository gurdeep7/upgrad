const express = require("express")

const checkin = require("../models/checkIn.model");

const router = express.Router()

router.post("",async(req,res)=>{
   try {
        const Checkin =await checkin.create(req.body)

    res.status(200).json({status:"passed",Checkin})
}catch(e){

    res.status(500).json({status:"failed", message:e.message})
}
})
router.get("",async(req,res)=>{
    try{
        const Checkin=await checkin.find().populate("user_id").populate("course_id").lean().exec()
        res.status(201).json({status:"passed",Checkin})
    }catch(e){
        res.status(500).json({status:"failed", message:e.message})
    }
})
router.get("/:id",async(req,res)=>{
    try{
        const Checkin =await checkin.findById(req.params.id).populate("user_id").populate("course_id").lean().exec()
        res.status(201).json({status:"passed",Checkin})
    }catch(e){
        res.status(500).json({status:"failed", message:e.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const Checkin =await checkin.findByIdAndDelete(req.params.id).populate("user_id").populate("course_id").lean().exec()
        res.status(201).json({status:"passed",Checkin})
    }catch(e){
        res.status(500).json({status:"failed", message:e.message})
    }
})
router.patch("/:id",async(req,res)=>{
    try{
        const Checkin =await checkin.findByIdAndUpdate(req.params.id,req.body).populate("user_id").populate("course_id").lean().exec()
        res.status(201).json({status:"passed",Checkin})
    }catch(e){
        res.status(500).json({status:"failed", message:e.message})
    }
})
module.exports = router;