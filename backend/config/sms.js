require("dotenv").config();

const sendsms = (message,Mobile_number)=>{
const fast2sms = require('fast-two-sms')

var options = {authorization : process.env.API_KEY , message : `${message}` ,  numbers : [`${Mobile_number}`]} 
fast2sms.sendMessage(options);
}
module.exports = sendsms;