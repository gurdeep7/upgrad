const mongoose = require("mongoose")

const checkoutSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course',
        required: true
      }],
},{
    versionKey:false,
    timestamps:true
})

const checkout = mongoose.model("checkout",checkoutSchema)

module.exports = checkout 