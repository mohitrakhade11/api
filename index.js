const express = require("express");
const app= express()
const importData = require("./data.json")
let port = process.env.port || 3000;

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.get("/products",(req, res)=>{
    res.send(importData)
})

app.listen(port,()=>{
    console.log(`example ap is running on port http://localhost:${port}`);
});