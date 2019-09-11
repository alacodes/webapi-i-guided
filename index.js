//import express from 'express'; //ES2015 Modules
const express = require('express'); //same as line 1

//import hubs-model-file, check what options hubs gives us
// the hubs-model has exported methods to: find, findById, add, remove, update
const Hubs = require('./data/hubs-model');

const server = express();
//add this line to teach express to parse in JSON
server.use(express.json())

server.get('/', (req, res) => {
    res.send("<h1>Stop trying to make fetch happen!</h1>");
})

//see a list of Hubs (slack channels) using find method included in hubs-model
server.get('/hubs', (req, res) => {
    //Hubs.find() returns a promise, we need req,res, .then().catch()
    Hubs.find()
        .then(hubs => {
            //lets client know the request went through. ".json" will convert the data passed to JSON. This tells the client we're sending JSON through an HTTP header
            res.status(200).json(hubs);
        })
        .catch(error => {
            res.status(500).json({message: "error getting list of hubs"})
        })
})

//create Hub using add() method and POST request
server.post('/hubs', (req, res) => {
    //http messages are objs with headers and bodies. Example => { headers: {}, body: {all data sent by client}}
    const hubInformation = req.body;
    console.log( 'hub body', hubInformation)
    Hubs.add(hubInformation)
        .then(result => {
            res.status(201).json(result);
        })
        .catch(error => {
            res.status(500).json({message: "error adding hub"})
        })
})

//delete Hub
//update Hub

const port = 8000;
server.listen(port, () => console.log('API is running'));








/* 
steps for section 1: 
'npm i express'
add 'index.js'
added code to set up server
'npm run server' starts the api
*/
