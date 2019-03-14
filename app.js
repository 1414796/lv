const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const morgan = require('./apps/middleware/logger.morgan');

require('./apps/db/mongoose');

const app = express();

const controllers = require('./apps/controllers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Setting log with morgan
app.use(morgan);

// Setting view engine with ejs
app.set('view engine', 'ejs');
app.engine('.ejs', require('ejs').__express);
app.set('views', './apps/public/views');

// Setting static folder
app.use(express.static(__dirname + '../public'));

app.use(cookieParser());

// Setting controllers for project
app.use('/', controllers);

app.use((req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-type, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Error handler middleware
app.use(function (err, req, res, next) {
    if (err) {
        return err;
    }
    next();
});


app.listen(3000, function () {
    console.log("server run " + 3000)
})