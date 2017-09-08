function validate(value, answers, compare) {
    let sameAs = answers[compare];
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
