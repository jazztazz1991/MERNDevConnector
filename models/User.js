const mongoose = require('mongoose');

// Data needed to be filled out for each user
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        defualt: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);