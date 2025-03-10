const mongoose = require('mongoose');
const packageConfig = require('../../package.json');

// Setting for connect MongoDB
const config = packageConfig.mongoose;

mongoose.Promise = global.Promise;

const host = config.host;
const port = config.port;
const database = config.database;


const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};

mongoose.connect(`mongodb://${host}:${port}/${database}`, options).then(
    () => {
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
        console.log("success")
    },
    err => {
        /** handle initial connection error */
        console.log("err");
    }
);

module.exports = mongoose;