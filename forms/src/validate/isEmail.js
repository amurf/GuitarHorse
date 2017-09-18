function validate(value) {
    console.warn('isDate function not implemented yet');
    return true;
}

let name           = 'isEmail';
let defaultMessage = () => "This field must be an email";

export default {
    func: validate,
    msg:  defaultMessage,
    name: name,
}
