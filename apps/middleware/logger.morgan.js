const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

morgan.token('id', function getId(req) {
    return req.id
});

// log all requests to access.log
module.exports = morgan(':id :method :url :response-time', {
    stream: fs.createWriteStream(path.join(__dirname, '../../access.log'), {
        flags: 'a'
    })
});