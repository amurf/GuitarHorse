'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 80, routes: { cors: true }});

const routes = require('./lib/routes');

var validate = function (decoded, request, callback) {
  console.log(" - - - - - - - decoded token:");
  console.log(decoded);
  console.log(" - - - - - - - request info:");
  console.log(request.info);
  console.log(" - - - - - - - user agent:");
  console.log(request.headers['user-agent']);

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
  routes.forEach(route => server.route(route));
});




// XXX: Temporary. Ensure we always have a form!
const db = require('./lib/db');
let form = {
  name: "The Survey",
  questions: [
    { component: 'ghText', label: "First Question", name: "qOne"},
    { component: 'ghText', label: "Second Question", name: "qTwo"},
    { component: 'ghSelect', label: "Third question", name: "qThree", options: ["one", "two", "three" ] },
    { component: 'ghScale', label: "Fourth question", name: "qFour", options: 3 },
  ],
};

db.addForm('stratdat', form).then(console.log("Added " + form.name + " for stratdat"));

server.start(error => {
  if (error) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
