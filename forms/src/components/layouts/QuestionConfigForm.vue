<template>
  <div>
    <div v-for="question in questions">
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
</style>
