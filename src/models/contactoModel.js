const {Schema, model} = require('mongoose');

const contactoModel = new Schema({
    icon: String,
    title: String,
    telefono: String
})

module.exports = model('contacto', contactoModel);