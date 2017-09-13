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

        // TODO: This would be nicer with lodash?
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

// Returns hash of errors: {fieldName: [error, error]}
function validate(questions, answers, comparisons) {
    let errors = {};

    // If comparisons not passed in, generate. XXX: Needed?
    if (!comparisons) {
        comparisons = generateComparisons(questions, answers);
    }

    for (let question of questions) {
        let questionErrors = validateQuestion(question, answers[question.name], comparisons);
        if (questionErrors.length) {
            errors[question.name] = questionErrors;
        }
    }

    return errors;
}

// Returns array of errors for a question
// TODO: Either return error message, or an object of
// { validator, errorMessage } instead.
function validateQuestion(question, value, comparisons) {
    let errors     = [];
    let validators = getValidators(question);

    for (let validator of validators) {
        if (!validator.func(value, comparisons[validator.compare])) {
            let errorMessage = getErrorMessage(question, validator);
            errors.push(errorMessage);
        }
    }

    return errors;
}

function hasValidations(question) {
    return (question.comparisons || question.required);
}

function getErrorMessage(question, validator) {
    if (question.errors && question.errors[validator.name]) {
        return question.errors[validator.name](validator.compare);
    }

    return validator.msg(validator.compare);
}

export default {
    hasValidations,
    getValidators,
    generateComparisons,
    validateQuestion,
    validate,
};