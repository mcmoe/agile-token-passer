var express = require("express");
var app = express();


app.use(express.static('www'));

app.get('/', function(req, res) {
    console.log("called on root path")
    res.sendFile('www/home.html', {root: __dirname })
});


app.set('port', (process.env.PORT || 3000))
app.listen(app.get('port'), function() {
  console.log("App up and running on port", app.get('port'));
})
