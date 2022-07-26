const uiModel = require('../models/uiModel');
const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const configToken = require('../config');

const {LocalStorage} = require('node-localstorage');
localStorage = new LocalStorage('./scratch');

const { valiRegister } = require('../validations/validationsRegister');
const { valiLogin } = require('../validations/validationsLogin');

const authController = {}
authController.getLogin = async(req, res) => {
    const ui = await uiModel.findOne();
    res.render('login', {
        ui : ui 
    })
}

authController.getRegister = async(req, res) => {
    const ui = await uiModel.findOne();
    res.render('register', {
        ui : ui 
    })
}

authController.postAuthLogin = async (req ,res) => {
    const {error} = valiLogin(req.body);
    if(error)
    {
        return res.status(400).send(error.details[0].message);
    }
    const user = await userModel.findOne({user: req.body.user});
    if(!user)
    {
        return res.status(400).send("Usuario incorrecto");
    }
    const valiPass = await bcrypt.compare(req.body.pass, user.pass);
    if(!valiPass)
    {
        return res.status(400).send("Clave incorrecta");
    }
    const token = jwt.sign({_id: user._id, user: user.user, email: user.email}, configToken.token_secret);
    localStorage.setItem("x-access-token", token);
    res.redirect('/admin');
}

authController.postAuthRegister = async (req ,res) => {
    const {error} = valiRegister(req.body);
    if(error)
    {
        return res.status(400).send(error.details[0].message);
    }
    const email = await userModel.findOne({email: req.body.email})
    if(email)
    {
        return res.status(400).send("El Email ya esta Registrado");
    }
    const newUser = new userModel({
        email: req.body.email,
        user: req.body.user,
        pass: bcrypt.hashSync(req.body.pass, 8)
    })
    await newUser.save();
    res.redirect('/login')
    res.json({message: "registrado"});
}

module.exports = authController;