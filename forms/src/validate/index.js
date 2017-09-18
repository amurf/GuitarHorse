import Comparisons from './comparisons'
import DefaultValidations from './defaults';

import { keyBy } from 'lodash';

function getComparisons(question) {
  let comparisons = [];

  let questionComparisons = question.comparisons;
  if (questionComparisons) {
    questionComparisons.forEach(comparison => {
      comparisons.push(Comparisons[comparison.type](comparison.slot));
    });
  }

  return comparisons;
}


function generateComparisons(questions, answers) {
  let result = {};
  let questionsByName = keyBy(questions, 'name');

  for (let question of questions) {
    let comparisons = question.comparisons;
    if (!comparisons) {
      continue;
    }

    // TODO: This would be nicer with lodash?
    comparisons.forEach(comparison => {
      if (!questionsByName[comparison.slot]) {
        console.error(`Invalid comparison on ${question.name} -  ${comparison.slot} question does not exist`);
      }

      if (result[comparison.slot]) {
        return;
      }

      result[comparison.slot] = {
        question: questionsByName[comparison.slot],
        answer: answers[comparison.slot],
      };
    });
  }

  return result;
}

// Returns hash of errors: {fieldName: [error, error]}
function compare(questions, answers, comparisons) {
  let errors = {};

  // If comparisons not passed in, generate. XXX: Needed?
  if (!comparisons) {
    comparisons = generateComparisons(questions, answers);
  }

  for (let question of questions) {
    let questionErrors = compareQuestion(question, answers[question.name], comparisons);
    if (questionErrors.length) {
      errors[question.name] = questionErrors;
    }
  }

  return errors;
}

// Returns array of errors for a question
// TODO: Either return error message, or an object of
// { comparator, errorMessage } instead.
function compareQuestion(question, value, compare) {
  let errors = [];

  let comparisons = getComparisons(question);
  for (let comparator of comparisons) {
    if (!comparator.func(value, compare[comparator.compare])) {
      let errorMessage = getErrorMessage(question, comparator);
      errors.push(errorMessage);
    }
  }

  return errors;
}

function hasComparisons(question) {
  return (question.comparisons || question.required);
}

function getErrorMessage(question, comparator) {
  if (question.errors && question.errors[comparator.name]) {
    return question.errors[comparator.name](comparator.compare);
  }

  return comparator.msg(comparator.compare);
}


// This applies default validations to a component by type.
// i.e number components, must be numbers.
function validateComponent(question, value) {
  let defaults = DefaultValidations[question.component];

  if (!defaults) {
    return;
  }

  let defaultErrors = [];
  for (let validator of defaults) {
    if (!validator.func(value)) {
      let errorMessage = getErrorMessage(question, validator);
      defaultErrors.push(errorMessage);
    }
  }

  if (defaultErrors.length > 0) {
    return defaultErrors;
  }

}


export default {
  getErrorMessage,
  hasComparisons,
  getComparisons,
  generateComparisons,

  validateComponent,
  compareQuestion,
  compare,
};
