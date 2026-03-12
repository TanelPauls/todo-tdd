const express = require ('express');
const app = express();

app.get("/", (req, res) => {
    res.send('express test')
})

const port = 3111;

app.listen(port, "0.0.0.0", ()=>{
    console.log(`App is started at http://localhost:${port}`);
})
