<template>
  <div class='question-builder'>
    <div class='question__adminbar'>
      <span class="question__adminbar__questiontype">Question Type <!-- TODO Make this dynamic --></span>
      <span class="question__adminbar__icons">
        <span class='fa fa-pencil' aria-hidden='true'></span>
        <span class='fa fa-clone' aria-hidden='true'></span>
        <span class='fa fa-times-circle-o' aria-hidden='true' @click="toggleView"></span>
      </span>
    </div>
    <transition name="flip-in" mode="out-in">
      <gh-question :question="question" :number="number" :answers="answers" class="list-complete-item" v-if="!editMode"></gh-question>
      <gh-question-options :component="question.component" :model="question" v-if="editMode"></gh-question-options>
    </transition>
  </div>
</template>

<script>

import ghQuestion from 'shared/components/Question';
import ghQuestionOptions from './QuestionOptions';

export default {
  name: 'question-builder',
  props: ['question', 'number', 'answers'],
  components: { ghQuestion, ghQuestionOptions },
  data() {
    return {
      editMode: false,
    };
  },
  methods: {
    toggleView() {
      this.editMode = !this.editMode;
    },
  },
}
</script>

<style lang="scss" scoped>

@keyframes flipInY {
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}

@keyframes flipOutY {
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}

.flip-in-enter-active, .flip-in-leave-active {
  backface-visibility: visible !important;
  animation-duration: 0.5s;
}

.flip-in-enter-active {
  animation-name: flipInY;
}

.flip-in-leave-active {
  animation-name: flipOutY;
}

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

.question__adminbar {

  display: flex;
  justify-content: space-between;

  background-color:rgb(103, 103, 103);
  text-align: right;

  padding:10px;

  border-top-left-radius: $border-radius;
  border-top-right-radius: $border-radius;
}

</style>
