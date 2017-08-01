<template>
  <div class="surveybuilder__container">
    <div class="surveybuilder__canvas">


      <h1>{{ form.name }}</h1>
      <draggable v-model="form.questions">
        <transition-group name="list-complete">
          <gh-question v-for="(question, index) in form.questions" :key="question.name"
            :question="question" :number="index + 1" :answers="answers" class="list-complete-item">
          </gh-question>
        </transition-group>
      </draggable>
      <p>output: <code>{{ form }}</code></p>

    </div>
    <div class="surveybuilder__sidebar">
      <input type="text" placeholder="Survey title" v-model="form.name" />
      <b-btn variant="success" size="small" @click="saveForm">Save</b-btn>
      <gh-component-list @question-added="addQuestion"></gh-component-list>
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
  props: ['surveyId'],
  components: { ghComponentList, ghQuestion, draggable },
  data() {
    return {
      answers: {},
      form: {
        name: undefined,
        questions: [],
        sections: undefined,
      },
    };
  },
  created() {
    if (this.surveyId) {
      axios.get('http://localhost:5555/api/form/' + this.surveyId).then(
      response => this.form = response.data.config
      );
    }
  },
  methods: {
    addQuestion: function(question) {
      this.form.questions.push(question);
    },
    saveForm: function() {

      if (this.surveyId) {
        axios.put('http://localhost:5555/api/form/' + this.surveyId, {config: this.form}).then(
          response => console.log(response)
        );
      } else {
        axios.post('http://localhost:5555/api/form', {config: this.form}).then(
        response => {
          if (!this.surveyId) { // update url if first save.
            this.$router.push({ name: 'Form', params: { surveyId: response.data.id }});
          }
        }
        );
      }
    },
  },
}
</script>

<style lang="scss" scoped>

//Formbuilder styles

.surveybuilder__container {
  display:flex;
  flex-direction:row;
  align-items:stretch;
  background-color:green;
}

.surveybuilder__sidebar {
  flex: 1 1 30%;
  background-color:$dark-gray;
  border:1px solid black;
  padding:10px;
}

.surveybuilder__canvas {
  flex: 1 1 auto;
  background-color:$dark-gray;
  border:1px solid black;
  padding:10px;
}

//End Formbuilder styles

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
