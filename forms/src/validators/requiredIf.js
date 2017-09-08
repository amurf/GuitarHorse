function validate(value, answers, validationObj) {
  let required = answers[validationObj.requiredIf];
  return (!required || required && value);
}

let name           = 'requiredIf';
let defaultMessage = "This field is required";

export default {
  func: validate,
  msg:  defaultMessage,
  name: name,
}
