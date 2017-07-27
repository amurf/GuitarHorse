<template>
  <div class='container'>
    <div class='row'>
      <div class='col-9 content'>
        <h1>{{ form.config.name }}</h1>
        <draggable v-model="form.questions">
        <transition-group name="list-complete">
          <gh-question v-for="(question, index) in form.questions" :key="question.name"
                       :question="question" :number="index + 1" :answers="answers" class="list-complete-item">
          </gh-question>
        </transition-group>
        </draggable>
        <p>output: <code>{{ form }}</code></p>
      </div>
      <div class='col sidebar'>
        <input type="text" placeholder="Survey title" v-model="form.config.name" />
        <gh-component-list @question-added="addQuestion"></gh-component-list>
      </div>
    </div>
  </div>
</template>

<script>
import ghComponentList from './ComponentList';

import ghQuestion from 'shared/Question';

import axios from 'axios';
import draggable from 'vuedraggable'

export default {
  name: 'form-builder',
  components: { ghComponentList, ghQuestion, draggable },
  data() {
    return {
      answers: {},
      form: {
        config: {
          name: undefined,
        },
        questions: [],
        sections: undefined,
      },
    };
  },
  methods: {
    addQuestion: function(question) {
      this.form.questions.push(question);
    },
  },
}
</script>

<style lang="scss">
.content {
  padding: 10px;
}

.sidebar {
  padding: 10px;
}


.content {
  cursor: move;
}

// Animations for dragged items?
.list-complete-item {
  transition: all 1s;
}
.list-complete-enter, .list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

</style>
