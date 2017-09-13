import Validators from './index'

function questionsByName(questions) {
    let result = {};

    questions.forEach(question => {
        result[question.name] = question;
    });

    return result;
}
function getValidators(question) {
    let validators = [];

    // Pull in type specific validations
    if (question.required) {
        validators.push(Validators.required());
    }

    let questionComparisons = question.comparisons;
    if (questionComparisons) {
        questionComparisons.forEach(comparison => {
            validators.push(Validators[comparison.type](comparison.slot));
        });
    }

    return validators;
}


function generateComparisons(questions, answers) {
    let result = {};
    let keyByName = questionsByName(questions);

    for (let question of questions) {
        let comparisons = question.comparisons;
        if (!comparisons) {
            continue;
        }

        comparisons.forEach(comparison => {
            if (!keyByName[comparison.slot]) {
                console.error(`Invalid comparison on ${question.name} -  ${comparison.slot} question does not exist`);
            }

            if (result[comparison.slot]) {
                return;
            }

            result[comparison.slot] = {
                question: keyByName[comparison.slot],
                answer: answers[comparison.slot],
            };
        });
    }

    return result;
}


function validate(questions, answers, comparisons) {
    let errors = [];

    // If comparisons not passed in, generate.
    if (!comparisons) {
        comparisons = generateComparisons(questions, answers);
    }

    for (let question of questions) {
        let validators  = getValidators(question);
        let value = answers[question.name];
        validators.forEach(validator => {
            if (!validator.func(value, comparisons[validator.compare])) {
                errors.push(validator);
            }
        });
    }

    return errors;
}

function validateQuestion(question, value, comparisons) {
    let errors     = [];
    let validators = getValidators(question);

    validators.forEach(validator => {
        if (!validator.func(value, comparisons[validator.compare])) {
            errors.push(validator);
        }
    });

    return errors;
}

function hasValidations(question) {
    return (question.comparisons || question.required);
}

function validatorErrorMessage(question, validator) {
    if (question.errors && question.errors[validator.name]) {
        return question.errors[validator.name](validator.compare);
    }

    return validator.msg(validator.compare);
}

export default {
    validatorErrorMessage,
    hasValidations,
    getValidators,
    generateComparisons,
    validateQuestion,
    validate,
};
