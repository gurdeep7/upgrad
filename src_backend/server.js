const app = require("./index")

const connect = require("./configs/db")

var port_number = process.env.PORT || 3000;

app.listen(port_number ,async()=>{  
    await connect();
    console.log("server listening to "+port_number);
});