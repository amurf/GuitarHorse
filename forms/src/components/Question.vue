<template>
  <div class='question' :id="question.id">
    <div class='question-errors' v-if="errors.length">
      <!-- stevify this -->
      <span class="fa fa-exclamation-circle" aria-hidden="true"></span>
      <ul>
        <li v-for="error in errors">{{ errorMessageFor(error) }}</li>
      </ul>
    </div>
    <div class='question-label'>
      <span class='question-number'>{{ number }}</span>
      <label>{{ question.label }}</label>
      <span class='question-status' v-if="question.required">* Required</span>
    </div>
    <div class='question-input'>
      <component :is="question.component" v-bind="question" :answers="answers"></component>
    </div>
  </div>
</template>
<script>

//Pull in slot types
import ghText from './Text';
import ghNumber from './Number';
import ghEmail from './Email';
import ghScale from './Scale';
import ghSelect from './Select';
import ghCheckbox from './Checkbox';

import Validators from '../validators';

export default {
  name: 'question',
  props: ['number', 'question', 'answers', 'comparisons', 'disableValidations'],
  components: { ghText, ghNumber, ghEmail, ghScale, ghSelect, ghCheckbox },
  computed: {
    errors() {
      if (this.disableValidations) {
          return [];
      }

      let validators = this.$options.validations(this);

      if (!validators.length) {
        return [];
      }

      let value  = this.answers[this.question.name];
      let errors = [];
      validators.forEach(validator => {
        if (!validator.func(value, this.comparisons[validator.compare])) {
          errors.push(validator);
        }
      });

      return errors;
    },
  },
  methods: {
    errorMessageFor(validator) {
      if (this.question.errors && this.question.errors[validator.name]) {
        return this.question.errors[validator.name](validator.compare);
      }

      return validator.msg(validator.compare);
    },
  },
  validations(vm) {
    let validations = [];


    // Define default sets of validations on question types
    // and pull them in and apply them to fields here.
    // I think for extra validations (like comparisons) we
    // can implement it in the builder more so, make it
    // that it fills a validations array appropriately.

    if (vm.question.required) {
      validations.push(Validators.required());
    }

    if (vm.question.comparisons) {
        vm.question.comparisons.forEach(comparison => {
            validations.push(Validators[comparison.type](comparison.slot));
        });
    }

    return validations;
  },
}
</script>

<style lang="scss" scoped>

.question {

  margin: 1em 0em;
  border-width: $border-width;
  border-style: $border-style;
  border-color: $border-color;
  border-radius: $border-radius;

}

.question-errors {
  display: flex;
  padding: 1em;
  background-color: $lightest-gray;
  border-top-left-radius: $border-radius;
  border-top-right-radius: $border-radius;
  border-bottom:$border-color $border-style $border-width;
}

.question-errors ul {
  margin: 0;
}

/* Stevify */
.question-errors .fa {
  font-size: 3em;
  color: $brand-danger;
}

.question-label {

  display:flex;
  justify-content:space-between;
  width: 100%;

  background-color: $lightest-gray;
  padding: 1em;
  border-top-left-radius: $border-radius;
  border-top-right-radius: $border-radius;
  border-bottom:$border-color $border-style $border-width;

}

// Temporary solution, need to apply styles to invidual question types. TODO fix this.

.question-input {

  display: flex;

  background-color: $lightest-gray;
  padding: 1em;
  border-bottom-left-radius: $border-radius;
  border-bottom-right-radius: $border-radius;

}

.question-input > input, .question-input > select {
  flex:1 1 100%;
}

.question-label label {
  display: inline;
  width: 100%;

  margin-left:10px;
}

.question-number {
  display:inline-block;
}

.question-status {

}

</style>
