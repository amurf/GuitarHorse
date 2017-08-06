<template>
  <div class='question-builder'>
      <gh-question :question="question" :number="number" :answers="answers" class="list-complete-item"></gh-question>
      <gh-question-options :component="question.component" :model="question"></gh-question-options>
  </div>
</template>

<script>

import ghQuestion from 'shared/Question';
import ghQuestionOptions from './QuestionOptions';

export default {
  name: 'question-builder',
  props: ['question', 'number', 'answers'],
  components: { ghQuestion, ghQuestionOptions },
}
</script>

<style lang="scss" scoped>
.heading {
  padding: 20px 0px;
}

h1, .new-survey {
  display: inline;
}

button, a {
  display: block;
  width: 100%;
  margin-bottom: 5px;
}
</style>
