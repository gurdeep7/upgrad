const app = require("./index")

const connect = require("./config/db")

app.listen(3000,()=>{  // do not add localhost here if you are deploying it
    console.log("server listening to 3000 ");
});