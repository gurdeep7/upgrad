
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    mobile_number: { type: Number, required: true, length: 10 },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports=model("user",userSchema)