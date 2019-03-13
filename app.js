const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const mongoose = require('./apps/db/mongoose');

const app = express();

const controllers = require(__dirname + '/apps/controllers');

app.use('/', controllers);

app.use(express.static('public'));

app.use(cookieParser());

app.use(bodyParser());

app.use((req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-type, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Error handler middleware
app.use(function (err, req, res, next) {
    if(err) {
        return res.status(401).json({
            status: 'error',
            code: 'unauthorized'
        });
    }
    next();
});

app.get('/setcookie', function(req, res){
    // setting cookies
    res.cookie('username', 'john doe', { maxAge: 900000, httpOnly: true });
    return res.send('Cookie has been set');
});

app.get('/getcookie', function(req, res) {
    var username = req.cookies['username'];
    if (username) {
        return res.send(username);        
    }

    return res.send('No cookie found');
});

app.use('/test', function (req, res) {
    
})

app.listen(3000, function(){
    console.log("server run " + 3000)
})

