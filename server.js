const hapi = require('hapi');
const mongoose = require('mongoose');
const server = new hapi.Server();

mongoose.connect('mongodb://localhost:27017/test');
