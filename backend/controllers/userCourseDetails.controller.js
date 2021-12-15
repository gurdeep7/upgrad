const express = require("express")

const userCourseDetail = require("../models/userCourseDetail.model")

const router = express.Router()

//CREATE OPERATION
router.post("/",async(req,res)=>{
   try {
        const UserCourseDetail =await userCourseDetail.create(req.body)

    res.status(200).send(UserCourseDetail)
}catch(e){

    res.status(500).json({status:e.message})
}
})
//GET ALL OPERATION
router.get("/",async(req,res)=>{
    try{
        const UserCourseDetails =await userCourseDetail.find().populate('user_id').populate('checkIncourse_id').lean().exec()
        res.status(201).send(UserCourseDetails)
    }catch(e){
        res.status(500).json({status:e.message})
    }
})
//GET BY ID OPERATION
router.get("/:id", async (req, res)=>{
    try {
        const UserCourseDetail = await userCourseDetail.findById(req.params.id).populate('user_id').populate('checkIncourse_id').lean().exec();

        return res.send(UserCourseDetail);
    } catch(e){
        return res.status(500).json({message, status: "Failed"});
    }
});
//DELETE OPERATION
router.delete("/:id", async (req, res)=>{
    try {
        const UserCourseDetail = await userCourseDetail.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(201).send(UserCourseDetail);
    } catch(e){
        return res.status(500).json({message, status: "Failed"});
    }
});
module.exports = router;