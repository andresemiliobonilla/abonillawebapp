const { Router } = require('express');
const aboutModel = require('../models/aboutModel');
const uiModel = require('../models/uiModel');
const router = Router();
const {postAbout, postUi, getProfile} = require('../controllers/profileController')

router.route('/')
    .get(getProfile)

router.route('/about')
    .post(postAbout)

router.route('/ui')
    .post(postUi)

const  ui = {
    logoHeader: "/images/logo-custom.png",
    logoContain : "/images/misc/logo-1b.png",
    colorUi : "/css/colors/scheme-5.css"
}

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

const aboutMe = {
    img: "/images/misc/pic-profile-3.jpg",
    title: "Acerca de Mi",
    text: "I am a website designer from London, with a strong focus in UI/UX design. I love to get new experiences and always learn from my surroundings. I've done more than 285 projects. You can check it through portfolio section on this website. I looking forward to any opportunities and challenges.",
    text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
    button: "Download"
}

const habilidades = [
    {
        title: "Branding1",
        progress: "70%"
    },
    {
        title: "Branding1",
        progress: "70%"
    },
    {
        title: "Branding1",
        progress: "70%"
    },
    {
        title: "Branding1",
        progress: "70%"
    },
    {
        title: "Branding1",
        progress: "70%"
    },
    {
        title: "Branding1",
        progress: "70%"
    }
]

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

router.get("/", async (req, res) => {
    const aboutMe = await aboutModel.findOne();
    res.render('index', {
            title: "Acerca de mi", 
            numero: projectComplete,
            aboutMe: aboutMe,
            habilidades: habilidades,
            servicios: servicios,
            portafolio: portafolio,
            contacto: contacto,
            ui : ui 
        })
    }
)
router.post('/admin', (req, res) => {
    res.json({data: "gola"})
})



module.exports = router;