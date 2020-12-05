//Dependencies

const express = require('express');
const path = require('path');


//Express app setup

const app = express()
const PORT = process.env.port || 3000;

//Data parsing for Express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//ROUTES
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));