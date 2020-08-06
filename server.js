const express = require('express')
var router = express.Router();
var redirect = require("express-redirect");
var bodyParser = require('body-parser');
const path = require('path');
var session = require('express-session');
const app = express();
redirect(app);
const port = process.env.PORT || 9000;
app.listen(port);
console.log('App is listening on port ' + port);

app.use('/', router);
router.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.post('/api/login', (req, res) => {
    console.log("redirect");
    res.send({ redirect: '/#/dashboard' });;
});



module.exports = router;


