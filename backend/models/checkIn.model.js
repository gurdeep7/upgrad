const { Schema, model } = require('mongoose');

const checkInSchema = new Schema({
    user_id:{
        type:Schema.Types.ObjectId, 
        ref:'user',
        required:true
    },
    course_id:{
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