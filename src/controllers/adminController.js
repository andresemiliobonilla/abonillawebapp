const uiModel = require('../models/uiModel');
const aboutModel = require('../models/aboutModel');
const habilidadesModel = require('../models/habilidadesModel');

const {LocalStorage} = require('node-localstorage');
localStorage = new LocalStorage('./scratch');

const adminController = {};

const projectComplete = [{
    num1: 100,
    title: "Hous of Works"
}, 
{
    num1: 200,
    title: "Projects Done"  
},
{
    num1: 300,
    title: "Satisfied Customers" 
},
{
    num1: 400,
    title: "Awards Winning" 
}]

adminController.getProfile = async (req, res) => {
    const ui = await uiModel.findOne();
    const aboutMe = await aboutModel.findOne();
    const habilidades = await habilidadesModel.find();

    res.render('admin', {
        ui : ui,
        aboutMe : aboutMe,
        habilidades: habilidades
    })
}

module.exports = adminController;