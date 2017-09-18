import { isFinite } from 'lodash';

// isNumber allows NaN and Infinity, isFinite does not
function validate(value) {
    let asNumber = parseInt(value);
    return isFinite(asNumber);
}

let name           = 'isNumber';
let defaultMessage = () => "This field must be a number";

export default {
    func: validate,
    msg:  defaultMessage,
    name: name,
}
