const { Schema, model } = require('mongoose');

const habilidadesModel = new Schema({
    title: String,
    progress: String
})

module.exports = model('habilidade', habilidadesModel);