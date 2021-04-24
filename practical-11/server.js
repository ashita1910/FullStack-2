var express = require('express');
var app = express();
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
app.get('/signin', (req, res) => {
    res.sendFile(__dirname + '/html/signin.html');
    auth(req, res);
}); 
function auth(req, res){
    if(req.query.username === "admin" && req.query.password === "123")
        res.sendFile(__dirname + '/html/valid.html');
    else
        res.sendFile(__dirname + '/html/invalid.html');
}
app.use("*", function(req, res){
    res.status(404).sendFile(__dirname + '/html/404.html');
});