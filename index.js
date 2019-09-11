//import express from 'express'; //ES2015 Modules
const express = require('express'); //same as line 1



//import the hubs-model file
const Hubs = require('./data/hubs-model'); //use Hubs to get access to the database (kind of like a 3rd party)

//Methods incl. in Hubs: find(), findById(), add(), remove(), update()

//creates server
const server = express();


//we have no code for handling http GET requests to the / URL. This is what the server.get function does
server.get('/', (req, res) => {
    res.send('<h2>hellowwwww</h2>')
})

// see a list of hubs: find() method 
server.get('/hubs', (req, res) => {
    Hubs.find()
        .then(hubs => {

            res.status(200).json(hubs); //.json will try to convert the data passed into JSON
        })
        .catch(error => {
            res.status(500).json({message: 'error getting the list of hubs'})
        })
})

// create a hub using add() -POST-
server.post('/hubs', (req, res) => {
    const hubInfo = result
    Hubs.add(hubInfo)
        .then(result => {
            res.
        })
        .catch(error => {
            res.status(500).json({message: 'error getting the list of hubs', error})
        })
})

// update a hub
// delete a hub










const port = 8000;
server.listen(port, () => console.log('API is running'));