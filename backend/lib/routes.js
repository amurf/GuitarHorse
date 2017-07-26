const db = require('./db');

let routes = [
  route('GET', '/ping', ping),
  route('POST', '/form', addForm),
];

function ping(request, reply) {
  reply({response: 'ok'});
}

function addForm(request, reply) {
  db.addForm(request.payload.config).then(
    reply({response: 'ok'})
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
