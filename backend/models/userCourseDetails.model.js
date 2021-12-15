const mongoose = require("mongoose")

//CREATING USER'S COURSE DETAIL SCHEMA
const userCourseDetailSchema = new mongoose.Schema({
    gender:{ type:String, required:true },
    city:{ type:String, required:true },
    graduation:{ type:String, required:true },
    user_id : { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    checkIncourse_id : { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "checkIncourse",
        required: true
    }
},{
    versionKey:false,
    timestamps:true
})

const userCourseDetail = mongoose.model("userCourseDetail",userCourseDetailSchema)

module.exports = userCourseDetail;