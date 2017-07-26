const db = require('./db');

let routes = [
  route('GET', '/ping', (request, reply) => reply({response: "Hello"})),
  route('POST', '/form', addForm),
];

function addForm(request, reply) {
  db.addForm(request.payload.config).then(
    reply({response: "ok"})
  );
}

module.exports = routes;

function route(method, path, handler) {
  return {
    method:  method,
    path:    path,
    handler: handler,
  };
}
