const { Schema, model } = require('mongoose');

const userModel = new Schema({
    email: String,
    user: String,
    pass: String
})

module.exports = model('user', userModel);