let routes = [
  route('GET', '/ping', (request, reply) => reply({response: "Hello"})),
];

module.exports = routes;

function route(method, path, handler) {
  return {
    method: method,
    path: path,
    handler: handler,
  };
}
