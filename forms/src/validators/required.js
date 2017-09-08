function validate(value) {
    return (value && value != "");
}

let name           = 'required';
let defaultMessage = () => "This field is required";

export default function() {
    return {
        func: validate,
        msg:  defaultMessage,
        name: name,
    }
}
