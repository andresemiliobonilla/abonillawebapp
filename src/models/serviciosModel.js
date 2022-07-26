const {Schema, model} = require("mongoose");

const serviciosModel = new Schema ({
    icon: String,
    title: String,
    text: String
})

module.exports = model('servicio', serviciosModel);