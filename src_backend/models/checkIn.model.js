const { Schema, model } = require('mongoose');

const checkInSchema = new Schema({
    courseName:{type:String, required:true},
    user:{
        type:Schema.Types.ObjectId, 
        ref:'user',
        required:true
    },
    courses:{
        type:Schema.Types.ObjectId, 
        ref:'course',
        required:true
    },
},{
    versionKey:false,
    timestamps:true,
});

const Checkin = model('checkin', checkInSchema);

module.exports = Checkin;