<template>
  <div class='question'>
    <div class='question-label'>
      <span class='question-number'>{{ number }}</span>
      <label>{{ question.label }}</label>
      <span class='question-status'>* Required</span>
    </div>
    <div class='question-input'>
      <component :is="question.component" :answers="answers" :question="question"></component>
    </div>
  </div>
</template>
<script>

//Pull in slot types
import ghText from './Text';
import ghScale from './Scale';
import ghSelect from './Select';

export default {
  name: 'question',
  props: ['number', 'question', 'answers'],
  components: { ghText, ghScale, ghSelect },
}
</script>
<style lang="scss">

.question {
  margin: 1em 0em;
  border-width: $border-width;
  border-style: $border-style;
  border-color: $border-color;
  border-radius: $border-radius;
}

.question-label {
  background-color: $lightest-gray;
  width: 100%;
  padding: 1em;
  border-top-left-radius: $border-radius;
  border-top-right-radius: $border-radius;
  border-bottom:$border-color $border-style $border-width;

  display:flex;
  justify-content:space-between;
}

.question-input {
  background-color: $lightest-gray;
  padding: 1em;
  border-bottom-left-radius: $border-radius;
  border-bottom-right-radius: $border-radius;
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
