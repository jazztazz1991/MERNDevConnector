
// bring in necesarry dependencies and files
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

//Connects to mongodb atlas using the URI received from the default file
const connectDB = async () => {
    try {
        //wait for the response from mongoose.connect(db)
        await mongoose.connect(db);

        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        //Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;