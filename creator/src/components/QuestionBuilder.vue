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

.question-builder .question, .question-builder .question-options {
  margin: 0;
}

.question-builder .question, .question-builder .question-input {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.question-builder .question-options {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.question-builder {
  margin: 1em 0;
}
</style>
