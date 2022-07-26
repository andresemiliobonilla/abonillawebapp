const {Schema, model} = require('mongoose');

const aboutModel = new Schema({
    img: String,
    title: String,
    text1: String,
    text2: String
})

module.exports = model("about", aboutModel);