<template>
  <div class='question'>
    <div class='question-label'>
      <span class='number'>{{ number }}</span>
      <label>{{ question.label }}</label>
      <span class='status'>status</span>
    </div>
    <div class='question-input'>
      <input type="text" v-model="answers[question.name]" />
      <p>Field goes here</p>
      <p>question type: {{ question.type }}<br>name: {{ question.name }}</p>
    </div>
  </div>
</template>
<script>

//XXX: This needs to be shared from the other survey library.
// Will be doing that ASAP so no duplicated code.

export default {
  name: 'question',
  props: ['number', 'question', 'answers'],
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
