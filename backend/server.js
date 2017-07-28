'use strict';

const Hapi   = require('hapi');
const server = new Hapi.Server();
server.connection({ port: 80, routes: { cors: true } });

const routes = require('./lib/routes');
routes.forEach(route => server.route(route));


// XXX: Temporary. Ensure we always have a form!
const db = require('./lib/db');
let form = {
  config: {
    name: "The Survey",
  },
  questions: [
    { component: 'ghText', label: "First Question", name: "qOne"},
    { component: 'ghText', label: "Second Question", name: "qTwo"},
    { component: 'ghScale', label: "Third question", name: "qThree", options: ["one", "two", "three" ] },
    { component: 'ghScale', label: "Fourth question", name: "qFour", options: 3 },
  ],
};
db.addForm(form).then(console.log("Added " + form.config.name));

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});

