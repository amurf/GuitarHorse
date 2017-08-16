<template>
  <div class='question'>
    <div class='question-label'>
      <span class='question-number'>{{ number }}</span>
      <label>{{ question.label }}</label>
      <span class='question-status' v-if="question.mandatory">* Required</span>
    </div>
    <div class='question-input'>
      <component :is="question.component" v-bind="question" :answers="answers"></component>
    </div>
  </div>
</template>
<script>

//Pull in slot types
import ghText from './Text';
import ghScale from './Scale';
import ghSelect from './Select';
import ghCheckbox from './Checkbox';

export default {
  name: 'question',
  props: ['number', 'question', 'answers'],
  components: { ghText, ghScale, ghSelect, ghCheckbox },
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
