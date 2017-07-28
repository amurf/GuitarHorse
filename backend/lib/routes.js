const db = require('./db');

let routes = [
  route('GET', '/ping', ping),
  route('GET', '/config', config),
  route('GET', '/form', getForms),
  route('GET', '/form/{id}', getForm),
  route('POST', '/form', addForm),
];

function ping(request, reply) {
  reply({response: 'ok'});
}

function config(request, reply) {
  let surveyId = process.env.SURVEY_ID;
  db.getForm(surveyId).then(form => reply(form));
}

function addForm(request, reply) {
  db.addForm(request.payload.config).then(
    form => reply({id: form.id})
  );
}

function getForms(request, reply) {
  db.getForms().then(forms => reply(forms));
}

function getForm(request, reply) {
  db.getForm(request.params.id).then(form => reply(form));
}

module.exports = routes;

function route(method, path, handler) {
  return {
    method:  method,
    path:    path,
    handler: handler,
  };
}
