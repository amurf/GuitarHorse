const db  = require('./db');
const jwt = require('jsonwebtoken');

let routes = [
  route('GET', '/ping', ping),
  route('GET', '/config', config),
  route('GET', '/form', getForms),
  route('GET', '/form/{id}', getForm),
  route('PUT', '/form/{id}', updateForm),
  route('POST', '/form', addForm),
  route('POST', '/session', generateSession),

  route('PUT', '/answer', saveAnswers, {auth: 'jwt'}),
  route('GET', '/answer', getAnswers, {auth: 'jwt'}),
];

function ping(request, reply) {
  reply({response: 'ok'});
}

function config(request, reply) {
  let surveyId = process.env.SURVEY_ID;
  db.getForm(surveyId).then(form => reply(form));
}

// Answers
function saveAnswers(request, reply) {
  let answerId = request.auth.credentials.answerId;
  db.saveAnswers(answerId, request.payload.answers).then(
    _ => reply({saved: true})
  );
}

function getAnswers(request, reply) {
  let answerId = request.auth.credentials.answerId;
  db.getAnswers(answerId).then(answers => reply(answers));
}

// Session
function generateSession(request, reply) {
  db.generateSession(process.env.SURVEY_ID).then(answer => {
    var token = jwt.sign({ answerId: answer.id, sessionId: answer.session_id }, process.env.JWT_SECRET, {expiresIn: '1h'});
    reply({ token: token });
  });
}

// Form
function addForm(request, reply) {
  db.addForm('stratdat', request.payload.config).then(
    form => reply({id: form.id})
  );
}

function updateForm(request, reply) {
  db.updateForm(request.params.id, request.payload.config).then(
    form => reply({update: true})
  );
}

function getForms(request, reply) {
  db.getForms().then(forms => reply(forms));
}

function getForm(request, reply) {
  db.getForm(request.params.id).then(form => reply(form));
}

module.exports = routes;

function route(method, path, handler, config = {}) {
  return {
    method:  method,
    path:    path,
    handler: handler,
    config:  config,
  };
}
