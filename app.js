var express = require('express');
var request = require('request');
var app = express();

app.set('view engine', 'ejs');

// &apikey=ed6ba6e4 
// s = search on title
// http://www.omdbapi.com/?&apikey=ed6ba6e4&s=amsterdam

app.get('/search', function (req, res) {
    res.send('search page!')
    //request('http:')
})

app.get('/results', function (req, res) {
    res.send('results page!')
    request('http://www.omdbapi.com/?&apikey=ed6ba6e4&s=amsterdam:', function (error, response, body) {

    });
});

// // bij cloud 9 met je dit gebruiken, dit is geen hardcoded
app.listen(process.env.PORT, process.env.IP, function () {
    console.log('Movie App has started!!')
});

// var port = 3000;
// app.listen(port, function () {
//     console.log('Movie App has started!');
// })