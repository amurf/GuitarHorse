'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 80 });

const routes = require('./lib/routes');
routes.forEach(route => server.route(route));

const db = require('./lib/db');
db.getForms().then(forms => forms.forEach(x => console.log("Route:", x)));

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});

