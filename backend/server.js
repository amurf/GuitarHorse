'use strict';

const Hapi   = require('hapi');
const server = new Hapi.Server();
server.connection({ port: 80, routes: { cors: true } });

const routes = require('./lib/routes');
routes.forEach(route => server.route(route));

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});

