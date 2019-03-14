const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String
    }
});

module.exports = mongoose.model('User', schema);