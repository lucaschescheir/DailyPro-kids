const hapi = require('hapi');
const mongoose = require('mongoose');
const server = new hapi.Server();

mongoose.Promise = require('bluebird');
// Replace "test" with your database name.
mongoose.connect('mongodb://localhost:27017/test');
