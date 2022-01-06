const { Schema, model } = require("mongoose");

const recruitSchema = new Schema(
  {
    full_name: { type: String, required: true },
    designation: { type: String, required: true },
    company: { type: String, required: true },
    email: { type: String, required: true },
    phone_number: { type: Number, required: true, length: 10 },
    category: [{ type:String}]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = model("recruit", recruitSchema);