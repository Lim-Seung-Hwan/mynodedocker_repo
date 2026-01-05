const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    console.log("HI~")
})

app.listen(3001)
