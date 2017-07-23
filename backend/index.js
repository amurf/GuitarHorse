'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 80 });

server.route({
    method: 'GET',
    path: '/ping',
    handler: function (request, reply) {
      let obj = { response: "Hello!" };
      reply(obj);
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});

