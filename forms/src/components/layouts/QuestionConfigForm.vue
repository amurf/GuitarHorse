<template>
  <div>
    <div v-for="question in questions" class="question-options__config">
      <label>{{ question.label }}</label>
      <component :is="question.component" :answers="model" v-bind="question">
      </component>
    </div>
    <h3>comparisons - move this to modal?</h3>
    <div v-for="comparison in model.comparisons">
      <gh-select :options="validators" :answers="comparison" name="type"></gh-select>
      <gh-text :answers="comparison" name="slot"></gh-text>
    </div>
    <gh-select :options="validators" :answers="newComparison" name="type"></gh-select>
    <gh-text :answers="newComparison" name="slot"></gh-text>
    <b-button>Add new comparison</b-button>
  </div>
</template>

<script>
// This is just a custom layout for a question type. Consider a better way to do this in the future.

import ghText from '../Text';
import ghNumber from '../Number';
import ghCheckbox from '../Checkbox';
import ghSelect from '../Select';

import Validators from "../../validators";

export default {
  name: 'gh-fieldset',
  props: ['questions', 'model'],
  components: { ghText, ghNumber, ghCheckbox, ghSelect },
  data() {
    return {
			showModal: false,
      newComparison: {},
    };
  },
  computed: {
    validators() {
      // I think we should return a better name here eventually
      return Object.keys(Validators);
    },
  },
};

</script>
<style lang="scss">

.question-options__config {
  display:flex;
  padding:10px;
}

label {
  flex:0 1 20%;
  align-self: flex-start;
}

input {
  flex:1 0 auto;
  align-self: flex-end;
}

ul {
  padding-left:0rem;
}

ul li {
  list-style-type: none;
}

</style>
