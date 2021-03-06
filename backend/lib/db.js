const pgp = require('pg-promise')(/* options */);
const db  = pgp(process.env.DB_URI);

module.exports = {
  getForms: getForms,
  getForm: getForm,
  updateForm: updateForm,
  addForm: addForm,

  getAnswers: getAnswers,
  getAllAnswers: getAllAnswers,
  saveAnswers: saveAnswers,

  generateSession: generateSession,
};

function errorHandler(e) {
  console.error(e)
}

function doQuery(queryPromise) {
  return queryPromise.catch(errorHandler);
}

function saveAnswers(answerId, answersObj) {
  let query = db.none('UPDATE answer SET answers = $2 WHERE id = $1', [answerId, answersObj]);
  return doQuery(query);
}

function getAnswers(answerId) {
  let query = db.one('SELECT answers FROM answer WHERE id = ${id}', {id: answerId});
  return doQuery(query);
}

function getAllAnswers(formId) {
  let queryString = 'SELECT answer.* FROM session LEFT JOIN answer ON (session.id = answer.session_id)'
                      + 'WHERE session.form_id = ${id}';

  let query = db.any(queryString, {id: formId});
  return doQuery(query);
};

function getForms() {
  let query = db.any('SELECT * FROM form');
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

function updateForm(formId, config) {
  let query = db.none('UPDATE form SET config = $1 WHERE id = $2', [config, formId]);
  return doQuery(query);
}

// TODO: This should not expose the db id, but this will work for now.
function generateSession(formId) {
  let queryString = 'WITH rows AS (INSERT INTO session (form_id) VALUES($1) RETURNING id) '
    + 'INSERT INTO answer (session_id) SELECT id FROM rows RETURNING id, session_id';

  let query = db.one(queryString, [formId]);
  return doQuery(query);
}
