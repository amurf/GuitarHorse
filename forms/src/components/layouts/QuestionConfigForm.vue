<template>
  <div>
    <div v-for="question in questions" class="question-options__config">
      <label>{{ question.label }}</label>
      <component :is="question.component" :answers="model" v-bind="question">
      </component>
    </div>
  </div>
</template>

<script>
// This is just a custom layout for a question type. Consider a better way to do this in the future.

import ghText from '../Text';
import ghCheckbox from '../Checkbox';

export default {
  name: 'gh-fieldset',
  props: ['questions', 'model'],
  components: { ghText, ghCheckbox },
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
