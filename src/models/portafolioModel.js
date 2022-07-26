const {Schema, model} = require('mongoose');

const portafolioModel = new Schema({
    item: String,
    title: String,
    img: String,
    img2: String
})

module.exports = model('portafolio', portafolioModel);