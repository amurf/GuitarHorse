<template>
  <div class='question'>
    <div class='question-label'>
      <span class='number'>{{ number }}</span>
      <label>{{ question.label }}</label>
      <span class='status'>status</span>
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

export default {
  name: 'question',
  props: ['number', 'question', 'answers'],
  components: { ghText, ghScale },
}
</script>
<style lang="scss">
.question {
  margin: 1em 0em;
}

.question-label {
  background-color: $light-gray;
  width: 100%;
  padding: 1em;
}

.question-input {
  background-color: $not-so-light-gray;
  padding: 1em;
}

.question-label label {
  display: inline;
}
</style>
