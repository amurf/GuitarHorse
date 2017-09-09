function validate(value, compare) {
    let required = compare.answer;
    return (!required || required && value);
}

let name           = 'requiredIf';
let defaultMessage = () => "This field is required";

export default function(compare) {
    return {
        func: validate,
        msg:  defaultMessage,
        name: name,
        compare: compare,
    }
}
