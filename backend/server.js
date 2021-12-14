const app = require("./index")

const connect = require("./config/db")

var port_number = app.listen(process.env.PORT || 3000);

app.listen(port_number,()=>{  // do not add localhost here if you are deploying it
    console.log("server listening to 3000 ");
});