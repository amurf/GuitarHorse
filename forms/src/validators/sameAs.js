function validate(value, compare) {
    let sameAs = compare.answer;
    return (value && value == sameAs);
}

let name           = 'sameAs';
let defaultMessage = (compare) => `This field must be the same as ${compare}`;

export default function(compare) {
    return {
        func: validate,
        msg:  defaultMessage,
        name: name,
        compare: compare,
    }
}
