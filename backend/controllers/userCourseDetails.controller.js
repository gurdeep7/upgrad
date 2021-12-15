const express = require("express")

const userCourseDetail = require("../models/userCourseDetail.model")

const router = express.Router()

router.post("/",async(req,res)=>{
   try {
        const UserCourseDetail =await userCourseDetail.create(req.body)

    res.status(200).send(UserCourseDetail)
}catch(e){

    res.status(500).json({status:e.message})
}
})
router.get("",async(req,res)=>{
    try{
        const UserCourseDetails =await userCourseDetail.find().populate('user_id').populate('checkIncourse_id').lean().exec()
        res.status(201).send(UserCourseDetails)
    }catch(e){
        res.status(500).json({status:e.message})
    }
})
router.get("/:id", async (req, res)=>{
    try {
        const UserCourseDetail = await userCourseDetail.findById(req.params.id).populate('user_id').populate('checkIncourse_id').lean().exec();

        return res.send(UserCourseDetail);
    } catch(e){
        return res.status(500).json({message, status: "Failed"});
    }
});
module.exports = router;