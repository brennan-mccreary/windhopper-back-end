//Imports
const mongoose = require('mongoose');
const config = require('config');

//Connection Initializer
function connectDB() {
    mongoose
        .connect(
            config
                .get('mongoURI'),
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
        .then(() => console.log('Connection to MongoDB established.'))
        .catch((err) => console.error(`Could not connect to MongoDB with error: ${err}`))
};

//Export
module.exports = connectDB;