function validate(value) {
  return (value && value != "");
}

let name           = 'required';
let defaultMessage = "This field is required";

export default {
  func: validate,
  msg:  defaultMessage,
  name: name,
}
