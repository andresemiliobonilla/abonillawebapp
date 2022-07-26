const express = require('express');
const app = express();
const path = require('path');
require('./db/database');
const cors = require("cors");
const authJwt = require('./middlewares/authJwt')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
require("dotenv").config();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());

app.use('/', require('./router/aboutRoute'));
app.use('/api', require('./router/apiRoute'));
app.use('/admin',[ authJwt ], require('./router/adminRouter'));
app.use('/auth', require('./router/authRouter'));

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log("port", PORT);

