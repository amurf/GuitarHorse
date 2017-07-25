const pgp = require('pg-promise')(/* options */);
const db  = pgp(process.env.DB_URI);

module.exports = {
  getForms: getForms,
};

async function getForms() {
  let forms;

  try {
    forms = await db.any('SELECT * FROM formxx');
  } catch(e) {
    console.error("Error: ", e);
  }

  return forms;
}
