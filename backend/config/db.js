const mongoose = require("mongoose")

module.exports =() =>{ 
    return mongoose.connect("mongodb://127.0.0.1:27017/projecttest")
}
//mongodb+srv://great:great@cluster0.4ran9.mongodb.net/upgrad