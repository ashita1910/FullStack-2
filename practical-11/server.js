var express = require('express');
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started at Port: %s', PORT);
});
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/html/home.html');
});
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/html/home.html');
});
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/html/about.html');
}); 
app.get('/valid', (req, res) => {
    res.sendFile(__dirname + '/html/valid.html');
});
app.get('/invalid', (req, res) => {
    res.sendFile(__dirname + '/html/invalid.html');
});
app.get('/signin', (req, res) => {
    res.sendFile(__dirname + '/html/signin.html');
});
app.post('/signin', (req, res) => {
    console.log(req.body);
    if(req.query.username === "admin" && req.query.password === "123")
        res.sendFile(__dirname + '/html/valid.html');
    else
        res.sendFile(__dirname + '/html/invalid.html');
});
app.use("*", function(req, res){
    res.status(404).sendFile(__dirname + '/html/404.html');
});