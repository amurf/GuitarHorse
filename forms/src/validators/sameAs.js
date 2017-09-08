function validate(value, answers, validationObj) {
  let sameAs = answers[validationObj.sameAs];
  return (value && value == sameAs);
}

let name           = 'sameAs';
let defaultMessage = `This field must be the same as ${validationObj.sameAs}`;

export default {
  func: validate,
  msg:  defaultMessage,
  name: name,
}
