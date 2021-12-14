const app = require("./index")

const connect = require("./config/db")

var port_number = 3000;

app.listen(process.env.PORT,async()=>{  // do not add localhost here if you are deploying it
    await connect();
    console.log("server listening to "+process.env.PORT);
});