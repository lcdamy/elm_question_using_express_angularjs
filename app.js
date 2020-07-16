var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.set("port", 3000);

app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res) => {
    res
        .status(200)
        .sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(app.get('port'), () => {
    // console.log(app.get('port'));
});

