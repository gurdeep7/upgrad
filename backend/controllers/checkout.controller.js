//using personsl data for checking
const express = require("express")

const Checkout = require("../models/checkout.model")
const Course = require("../models/courses.model")
const User=require("../models/user.model")
const router = express.Router()


router.post("/",async(req,res)=>{
   try {
       const checkout = await Checkout.create(req.body)
        const user =await User.find().lean().exec()
        const course=await Course.find().lean().exec();

    res.status(200).send({checkout,user,course})
}catch(e){

    res.status(500).json({status:e.message})
}
})
router.get("/",async(req,res)=>{
    
    try{
        const checkout =await Checkout.find().populate("user_id").populate("checkIncourse_id").lean().exec()
        res.status(201).send(checkout)
    }catch(e){
        res.status(500).json({status:e.message})
    }
});
router.get("/:id",async(req,res)=>{
    
    try{
        const checkout =await Checkout.findById(req.params.id).populate("user_id").populate("checkIncourse_id").lean().exec()
        res.status(201).send(checkout);
    }catch(e){
        res.status(500).json({status:e.message})
    }
});

// async function userDetail(req,res,next){
//     const loggeduser = await User.find({
//         "name":req.query.name,
//         "email":req.query.email,
//         "mobile_number":req.query.phone_no

//     })
// }
// async function courseDetail(req,res,next){
//     const selectedcourse =await course.find({
//         "title":req.query.title

//     })
// }
// router.post("/", async (req, res) => {
//     try {
//       const user = req.user;
//       const course = req.course
  
//       const checkout = await Checkout.create({
//         name: req.body.name,
//         email: req.body.email,
//         mobile_number:req.body.mobile_number,
//         course: course.course._id,
//       });
  
//       return res.status(201).json({ checkout,user });
//     } catch (e) {
//       return res.status(500).json({ status: "failed", message: e.message });
//     }
//   });
// const loginCheck = async (req,res)=> {
//     var results =await User.find({name:req.body.name});
// sess=req.sesion;
// sess.name=results.name;
// sess.email=results.email;
// sess.mobile_number=results.mobile_number
// }

module.exports = router;