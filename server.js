const hapi = require('hapi');
const mongoose = require('mongoose');
const server = new hapi.Server();

mongoose.Promise = require('bluebird');
// Replace "test" with your database name.
mongoose.connect('mongodb://localhost:27017/test');
const child = new mongoose.Schema({
    name: { type: String, required: true unique: true },
    item: { type: [String] },
});

const item = new mongoose.Schema({
  name: { type: String, required: true unique: true reserved: Boolean },
})
const Child = mongoose.model('Child', childSchema);
const Item = mongoose.model('Item', itemSchema );

server.connection({
    host: 'localhost',
    port: 3000,
    routes: {
            cors: true,
  }
});

server.route({
    method: 'GET',
    path:'/',
    handler: function (req, res) {

  return res('hello world')
}
});

server.route({
    method: 'post',
    path:'/',
    handler: function (req, res) {

  return res('hello world')
}
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
