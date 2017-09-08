function validate(value, answers, compare) {
  let required = answers[compare];
  return (required || !required && value);
}

let name           = 'requiredUnless';
let defaultMessage = () => "This field is required";

export default function(compare) {
  func: validate,
  msg:  defaultMessage,
  name: name,
  compare: compare,
}
