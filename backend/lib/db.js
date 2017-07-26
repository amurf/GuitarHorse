const pgp = require('pg-promise')(/* options */);
const db  = pgp(process.env.DB_URI);

module.exports = {
  getForms: getForms,
  addForm: addForm,
};

async function getForms() {
  let forms;

  try {
    forms = await db.any('SELECT * FROM form');
  } catch(e) {
    console.error("Error: ", e);
  }

  return forms;
}

async function addForm(formObj) {
  let newForm;
  try {
    newForm = await db.none('INSERT INTO form(config) VALUES($1)', [formObj]);
  } catch (e) {
    console.error(e);
  }

  return newForm;
}
