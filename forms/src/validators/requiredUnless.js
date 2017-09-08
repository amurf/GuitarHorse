function validate(value, answers, validationObj) {
  let required = answers[validationObj.requiredUnless];
  return (required || !required && value);
}

let name           = 'requiredUnless';
let defaultMessage = "This field is required";

export default {
  func: validate,
  msg:  defaultMessage,
  name: name,
}
