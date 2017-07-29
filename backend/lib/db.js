const pgp = require('pg-promise')(/* options */);
const db  = pgp(process.env.DB_URI);

module.exports = {
  getForms: getForms,
  getForm: getForm,
  addForm: addForm,

  getAnswers: getAnswers,
  saveAnswers: saveAnswers,

  generateSession: generateSession,
};

function errorHandler(e) {
  console.error(e)
}

function doQuery(queryPromise) {
  return queryPromise.catch(errorHandler);
}

function getForms() {
  let query = db.any('SELECT * FROM form');
  return doQuery(query);
}

function saveAnswers(answerId, answersObj) {
  let query = db.none('UPDATE answer SET answers = $2 WHERE id = $1', [answerId, answersObj]);
  return doQuery(query);
}

function getAnswers(answerId) {
  let query = db.one('SELECT answers FROM answer WHERE id = ${id}', {id: answerId});
  return doQuery(query);
}

function getForm(id) {
  let query = db.one('SELECT * FROM form WHERE id = ${id}', {id: id});
  return doQuery(query);
}

function addForm(client, form) {
  let query = db.one('INSERT INTO form(config) VALUES($1) RETURNING id', [form]);
  return doQuery(query);
}

// TODO: This should not expose the db id, but this will work for now.
function generateSession(formId) {
  let queryString = 'WITH rows AS (INSERT INTO session (form_id) VALUES($1) RETURNING id) '
    + 'INSERT INTO answer (session_id) SELECT id FROM rows RETURNING id, session_id';

  let query = db.one(queryString, [formId]);
  return doQuery(query);
}
