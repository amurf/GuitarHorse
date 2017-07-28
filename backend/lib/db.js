const pgp = require('pg-promise')(/* options */);
const db  = pgp(process.env.DB_URI);

module.exports = {
  getForms: getForms,
  getForm: getForm,
  addForm: addForm,
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

function getForm(id) {
  let query = db.one('SELECT * FROM form WHERE id = ${id}', {id: id});
  return doQuery(query);
}

function addForm(form) {
  let query = db.one('INSERT INTO form(config) VALUES($1) RETURNING id', [form]);
  return doQuery(query);
}
