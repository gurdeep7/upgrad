const express = require("express")
const authenticate = require("../middlewares/authenticate")
////npm install fast-two-sms --save

const userCourseDetail = require("../models/userCourseDetails.model")

const router = express.Router()

//CREATE OPERATION
router.post("/",authenticate, async(req,res)=>{
   try {
        const UserCourseDetail =await userCourseDetail.create(req.body)

    res.status(200).json({status:"passed",userCourseDetail})
}catch(e){

    res.status(500).json({status:e.message})
}
})
//GET ALL OPERATION
router.get("/",authenticate, async(req,res)=>{
    try{
        const UserCourseDetail =await userCourseDetail.find().populate('user_id').populate('checkIncourse_id').lean().exec()
        res.status(201).json({status:"passed",userCourseDetail})
    }catch(e){
        res.status(500).json({status:e.message})
    }
})
//GET BY ID OPERATION
router.get("/:id", async (req, res)=>{
    try {
        const UserCourseDetail = await userCourseDetail.findById(req.params.id).populate('user_id').populate('checkIncourse_id').lean().exec();

        return res.status(201).json({status:"passed",userCourseDetail});
    } catch(e){
        return res.status(500).json({status: "Failed", message:e.message});
    }
});
//DELETE OPERATION
router.delete("/:id", async (req, res)=>{
    try {
        const UserCourseDetail = await userCourseDetail.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(201).json({status:"passed",userCourseDetail});
    } catch(e){
        return res.status(500).json({status: "Failed", message:e.message});
    }
});
module.exports = router;