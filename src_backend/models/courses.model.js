const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    title:{type:String, required:true},
    image:{type:String, required:true},
    logo:{type:String, required:true},
    university:{type:String, required:true},
    category:{type:String , required:true},
    duration:{type:Number, required:true},
    linke:{type:String, required:false, default:"#"},
    offer:{type:String, required:false}
},{
    versionKey:false,
    timestamps:true
})

const course = mongoose.model("course",courseSchema)

module.exports = course  