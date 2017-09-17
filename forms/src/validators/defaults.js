
// Defines the default validations applied by type of component.
// For example numbers... must be numbers.

import Validators from './index.js';

// Possible validations for any field.
// isRequired

let defaults = [
    Validators.required,
];


let mapping = {
    ghNumber: [
        Validators.isNumber,
    ],

    date: [
        Validators.isDate,
    ],

    email: [
        Validators.isEmail,
    ],
};


export default mapping;
