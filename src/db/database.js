const db = require('mongoose');

const user = "andresb2028";
const pass = "andresb2028";
const dbOnline = `mongodb+srv://${user}:${pass}@cluster0.lljuf3u.mongodb.net/test`;
const dbLocal = "mongodb://localhost:27017/webnode";

db.connect(dbOnline, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(res => console.log('db conect ok'))
    .catch(err => console.log(err))

module.exports = db;