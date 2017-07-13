var express = require('express');
var request = require('request');
var app = express();

app.set('view engine', 'ejs');

// &apikey=ed6ba6e4 
// s = search on title
// http://www.omdbapi.com/?&apikey=ed6ba6e4&s=amsterdam

var apikey = '&apikey=ed6ba6e4';

app.get('/search', function (req, res) {
    res.render('search')
})

app.get('/results', function (req, res) {
    console.log(req.query.search);
    request('http://www.omdbapi.com/?&apikey=ed6ba6e4&s=' + req.query.search, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render('results', {
                data: data
            });
        }
    });
});

// // bij cloud 9 met je dit gebruiken, dit is geen hardcoded
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log('Movie App has started!!')
// });

var port = 3000;
app.listen(port, function () {
    console.log('Movie App has started!');
});