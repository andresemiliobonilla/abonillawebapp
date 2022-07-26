const { Schema, model} = require('mongoose');

const uiModel = new Schema({
    logoheader: String,
    logocontain: String,
    colorui: String
})

module.exports = model('Ui', uiModel);