const hapi = require('hapi');
const mongoose = require('mongoose');
const server = new hapi.Server();

mongoose.Promise = require('bluebird');
// Replace "test" with your database name.
mongoose.connect('mongodb://localhost:27017/test');
const childSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    item: { type: [String] },
});

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, reserved: Boolean },
})
const Child = mongoose.model('Child', childSchema);
const Item = mongoose.model('Item', itemSchema );
child = [
  { name: 'Mike' },
  { name: 'Luke' },
  { name: 'Jess' },
  { name: 'Chad' },
  { name: 'Lucas' },
];
item = [
  { name: 'bat' },
  { name: 'ball' },
  { name: 'glove' },
  { name: 'teddy bear' },
  { name: 'truck' },
];
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

  return res(child)
}
});
server.route({
    method: 'GET',
    path:'/items',
    handler: function (req, res) {

  return res(child)
}
});
server.route({
    method: 'post',
    path:'/add',
    handler: function (req, res) {

  return res()
}
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
