const express = require ('express');

const app =express();

const log = console.log;
const port =8080;
const path =require('path');

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'Components','Contact.js'));
});