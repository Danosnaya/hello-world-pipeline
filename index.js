var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Pipeline numero 162 correcto')
})

app.get('/dashboard', function (req, res) {
    res.send('hello world')
})
app.get('/dashboard', function (req, res) {
    res.send('hello world 2')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

module.exports = app;
