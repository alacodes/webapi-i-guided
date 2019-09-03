//import express from 'express'; //ES2015 Modules
const express = require('express'); //same as line 1

//creates server
const server = express();
//we have no code for handling http GET requests to the / URL. This is what the server.get function does
server.get('/', (req, res) => {
    res.send('hellowwwww')
})
const port = 8000;
server.listen(port, () => console.log('API is running'));