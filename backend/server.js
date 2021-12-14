const app = require("./index")

const connect = require("./config/db")

var port_number = process.env.PORT || 80;

app.listen(port_number ,async()=>{  // do not add localhost here if you are deploying it
    await connect();
    console.log("server listening to "+port_number);
});