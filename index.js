//Imports
// //const connectDB = require('./startup/db');
const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');

//Route Imports
// //email route

//Estasblish DB Connection
// //connectDB();

//Intialize middleware
app.use(cors());
app.use(express.json());
// //app.use('./api/emails', emails);

//Listener
const port = process.env.PORT || 5003;
app.listen(port, () => {
    console.log(`Server initialized on port: ${port}`)
})