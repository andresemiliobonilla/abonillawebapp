const aboutModel = require('../models/aboutModel');
const uiModel = require('../models/uiModel');
const habilidadesModel = require('../models/habilidadesModel');
const serviciosModel = require('../models/serviciosModel');
const portafolioModel = require('../models/portafolioModel');
const contactoModel = require('../models/contactoModel');
const profileController = {};

const servicios = [
    {
        icon: "icon_lightbulb_alt id-color",
        title: "Design",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.            "
    },
    {
        icon: "icon_datareport id-color",
        title: "Photography",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.            "
    },
    {
        icon: "icon_camera_alt id-color",
        title: "Branding",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.            "
    },
    {
        icon: "icon_tag_alt id-color",
        title: "Development",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.            "
    },
    {
        icon: "icon_pencil-edit id-color",
        title: "SEO",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.            "
    },
    {
        icon: "icon_search id-color",
        title: "DesigMarketing",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.            "
    }
]

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

const portafolio = [
    {
        item: "all projects",
        title: "Project Name",
        img1: "/images/portfolio/pf%20(1).jpg",
        img2: "/images/portfolio/pf%20(1).jpg"
    },
    {
        item: "photography",
        title: "Project Name",
        img1: "/images/portfolio/pf%20(2).jpg",
        img2: "/images/portfolio/pf%20(2).jpg"
    },
    {
        item: "mobile",
        title: "Project Name",
        img1: "/images/portfolio/pf%20(3).jpg",
        img2: "/images/portfolio/pf%20(3).jpg"
    },
    {
        item: "website",
        title: "Project Name",
        img1: "/images/portfolio/pf%20(4).jpg",
        img2: "/images/portfolio/pf%20(4).jpg"
    },
    {
        item: "illustration",
        title: "Project Name",
        img1: "/images/portfolio/pf%20(5).jpg",
        img2: "/images/portfolio/pf%20(5).jpg"
    },
    {
        item: "website",
        title: "Project Name",
        img1: "/images/portfolio/pf%20(6).jpg",
        img2: "/images/portfolio/pf%20(6).jpg"
    }
]

const contacto = [
    {
        icon: "icon_mobile",
        title: "Call Us",
        telefono: "(351) 384 8382"
    },
    {
        icon: "icon_house_alt",
        title: "Address",
        telefono: "Collins Street West, London, UK"
    },
    {
        icon: "icon_mail_alt",
        title: "Email Us",
        telefono: "Collins Street West, London, UK"
    }
]

profileController.putUi = async (req, res) => {
    // const ui = await uiModel.findOne();
    // const { logoheader, logocontain, colorui } = req.body;
    // await uiModel.findOneAndUpdate({_id: ui._id}, {
    //     logoheader, 
    //     logocontain, 
    //     colorui
    // })
    res.json({message: req.body});
}

profileController.putAbout = async(req, res) => {
    // const about = await aboutModel.findOne();
    // const {img, title, text, text2} = req.body;
    // await aboutModel.findOneAndUpdate({_id: about._id}, {
    //     img: img,
    //     title: title,
    //     text1: text,
    //     text2: text2
    // });
    res.json({message: req.body});
}

profileController.putHabilidades = async (req, res) => {
    // const {title, progress} = req.body;
    // const newHabilidades = new habilidadesModel({
    //     title: title,
    //     progress: progress
    // })
    // await newHabilidades.save();
    // res.json({message: "guardado"})
    res.json({message: "actualizar habilidades segun id"})
}

profileController.putServicios = async(req, res) => {
    res.json({message: req.body});
}

profileController.putPortafolio = async(req, res) => {
    res.json({message: req.body});
}

profileController.putContacto = async(req, res) => {
    res.json({message: req.body})
}

profileController.getProfile = async(req, res) => {
    const ui = await uiModel.findOne();
    const aboutMe = await aboutModel.findOne();
    const habilidades = await habilidadesModel.find();
    res.render('index', {
        title: "Acerca de mi", 
        numero: projectComplete,
        aboutMe: aboutMe,
        habilidades: habilidades,
        servicios: servicios,
        portafolio: portafolio,
        contacto: contacto,
        ui : ui 
    });
}

module.exports = profileController;