require("dotenv").config();
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendmail");
const User = require("../models/user.model");
const send_sms = require("../configs/sms");
var otp;
function generate(){
otp=  Math.floor(1000 + Math.random() * 9000);
}

const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
};

const register = async (req, res) => {
  
  try {
    generate()
    let user = await User.findOne({ email: req.body.email }).lean().exec();
    if (user)
      return res.status(400).json({
        status: "failed",
        message: " Please provide a different email address",
      });

      
    user = await User.create(req.body);
    // sendMail(
    //   "admin@upgrad.com",
    //   req.body.email,
    //   "Hii! Welcome to Upgrad",
    //   `${user.name}  you had just loggedin to upgrad! `,
    //   `<h1>Hi ${user.name}, You Are Just Logged in <h1>`
    // );
    const token = newToken(user);
    send_sms(`Your otp is ${otp}`,user.mobile_number)
    res.status(201).json({status:"passed", user_id:user._id,otp });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message});
  }
}

const check = async(req,res) =>{
    try{ 
      generate()

        let user = await User.findOne({ email: req.params.email });
    if (!user)
    return res.status(201).json({
      status: "failed",
      message: " Email not valid",
    });
    send_sms(`Your otp is ${otp}`,user.mobile_number)
    res.status(201).json({status:"passed",user_id:user._id,otp: otp});
}catch(e){
    return res.status(500).json({ status: "failed", message: e.message });
}
}

const verifyotp = async(req,res)=>{
  try
  {
    if(otp != req.params.otp){
    return  res.status(200).json({status:"failed",message:"invalid otp"})
    }
    
    let user = await User.findById(req.params.id).lean().exec()
    const token = newToken(user);
    return res.status(201).json({status:"passed", name:user.name,email:user.email,mobile:user.mobile_number,user:user.name, token });
  }catch(e){
   return res.status(500).json({status:"failed"})
  }

}

module.exports = { register,  check ,verifyotp};