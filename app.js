var express = require("express");
var app = express();


app.use(express.static('www'));

app.get('/', function(req, res) {
    console.log("called on root path")
    res.sendFile('www/home.html', {root: __dirname })
});

var port = 3000;
app.listen(port);
console.log("App up and running on port", port);
