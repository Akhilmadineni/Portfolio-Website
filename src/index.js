import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const express = require ('express');
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


const app =express();

const log = console.log;
const port =8080;
const path =require('path');

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'Components','Contact.js'));
});