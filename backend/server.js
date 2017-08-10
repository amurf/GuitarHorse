'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 80, routes: { cors: true }});


var validate = function (decoded, request, callback) {
  // Always valid atm.
	return callback(null, true);
};

const hapiJwt = require('hapi-auth-jwt2');
server.register(hapiJwt, function(error) {
	if (error) {
		console.log(error);
	}

	server.auth.strategy('jwt', 'jwt', {
		key: process.env.JWT_SECRET,
		validateFunc: validate,
		verifyOptions: { ignoreExpiration: true }
	});

  const routes = require('./lib/routes');
  routes.forEach(route => server.route(route));
});

// XXX: Temporary. Ensure we always have a form!
const db = require('./lib/db');
let form = {
  name: "The Form",
  questions: [
    { component: 'ghText', label: "First Question", name: "qOne", id: 1},
    { component: 'ghText', label: "Second Question", name: "qTwo", id: 2},
    { component: 'ghSelect', label: "Third question", name: "qThree", options: ["one", "two", "three" ], id: 3},
    { component: 'ghScale', label: "Fourth question", name: "qFour", options: [1,2,3], id: 4},
    { component: 'ghCheckbox', label: "Fifth question", name: "qFive", options: ['a', 'b', 'c'], id: 5},
    { component: 'ghCheckbox', label: "Sixth Question", name: "qSix", options: ['Required'], id: 6},
  ],
};

db.addForm('stratdat', form).then(console.log("Added " + form.name + " for stratdat"));

server.start(error => {
  if (error) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
