import { isDate } from 'lodash';

// this will check value is Date object. Do I want this?
function validate(value) {
    return isDate(value);
}

let name           = 'isDate';
let defaultMessage = () => "This field must be a date";

export default {
    func: validate,
    msg:  defaultMessage,
    name: name,
}
