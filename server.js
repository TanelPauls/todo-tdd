require("dotenv").config();
const app = require ("./index.js");

port=process.env.PORT;

app.listen(port, "0.0.0.0", ()=>{
    console.log(`App is started at http://localhost:${port}`);
})