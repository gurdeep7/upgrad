//using personsl data for checking
const express = require("express")
const sendMail = require("../utils/sendmail");
const Checkout = require("../models/checkout.model")
const Course = require("../models/courses.model")
const CheckIn = require("../models/checkIn.model")
const router = express.Router()


router.post("/",async(req,res)=>{
   try {
       const checkout = await Checkout.create(req.body)
       // const user =await User.find().lean().exec()
       // const course=await Course.find().lean().exec();
       const checkout2 = await Checkout.findById(checkout._id).populate("user_id").populate("course_id").lean().exec()
       const checkin = await CheckIn.find({course_id:checkout.course_id}).lean().exec()
       const checkin2 = await CheckIn.findByIdAndDelete(checkin._id).lean().exec()
        sendMail(
          "admin@upgrad.com",
          checkout2.user_id.email,
          "Hii! Welcome to Upgrad",
          `${checkout2.user_id.name}  thanks for enrolling course with us in ${checkout2.course_id.title}`,
          `<h1>Hi ${checkout2.user_id.name} thanks for enrolling course with us<h1>
          <h2>you successfully enrolled for course ${checkout2.course_id.title}
          with ${checkout2.course_id.university} University
          Total Duration of Your Course is ${checkout2.course_id.Duration} months<h2>
          <h3>You Will recieve further communication regarding to this Course Soon.<h3>
          `
        ); 

    res.status(200).json({status:"passed", checkout2, deleted:checkin2})
}catch(e){

    res.status(500).json({status:"failed",message:e.message})
}
})
router.get("/",async(req,res)=>{
    
    try{
        const checkout =await Checkout.find().populate("user_id").populate("course_id").lean().exec()
        res.status(200).json({status:"passed", checkout})
    }catch(e){
        res.status(500).json({status:"failed",message:e.message})
    }
});
router.get("/:id",async(req,res)=>{
    
    try{
        const checkout =await Checkout.findById(req.params.id).populate("user_id").populate("course_id").lean().exec()
        res.status(200).json({status:"passed", checkout})
    }catch(e){
        res.status(500).json({status:"failed",message:e.message})
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