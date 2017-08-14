<template>
  <div class="tab__container">
    <div class="surveybuilder__canvas">
      <h1>{{ form.name }}</h1>
      <draggable v-model="form.questions">
        <transition-group name="list-complete">
          <gh-question-builder v-for="(question, index) in form.questions" :key="question.id"
            :question="question" :number="index + 1" :answers="answers" class="list-complete-item">
          </gh-question-builder>
        </transition-group>
      </draggable>
    </div>
    <div class="surveybuilder__sidebar">
      <div class="surveybuilder__sidebar__options">
        <div class="surveybuilder__sidebar__title">
          <div class="surveybuilder__sidebar__title__header">
            <span>Survey Configuration</span>
          </div>
          <div>
            <input type="text" placeholder="Survey title" v-model="form.name" />
          </div>
        </div>

        <div class="surveybuilder__sidebar__components">
          <span>Components</span>
          <gh-component-list @question-added="addQuestion"></gh-component-list>
        </div>

      </div>
      <div class="surveybuilder__sidebar__save">
        <b-btn variant="primary" size="block"  @click="saveForm">Save</b-btn>
      </div>

    </div>
  </div>
</template>

<script>
import ghComponentList from './ComponentList';
import ghQuestionBuilder from './QuestionBuilder';

import axios from 'axios';
import draggable from 'vuedraggable'

export default {
  name: 'form-builder-content',
  props: ['surveyId', 'form'],
  components: { ghComponentList, ghQuestionBuilder, draggable },
  data() {
    return {
      answers: {},
    };
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
              this.$router.push({ name: 'form-content', params: { surveyId: response.data.id }});
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
.surveybuilder__sidebar {
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: space-between;

  background-color:$not-so-light-gray;
  border-left : 1px solid rgba(210, 210, 210, 0.71);
  padding:10px;
}

.surveybuilder__sidebar__options {
  align-self: flex-start;
  flex:0 0 auto;
}

.surveybuilder__sidebar__options > div {
  margin-bottom:10px;
}

.surveybuilder__sidebar__components {
  @extend .card;
}

.surveybuilder__sidebar__components > span {
  @extend .card-header;
}

.surveybuilder__sidebar__components > div {
  @extend .card-block;
}

.surveybuilder__sidebar__title {
  @extend .card;
}

.surveybuilder__sidebar__title__header {
  @extend .card-header;
}

.surveybuilder__sidebar__title div {
  @extend .card-block;
}

.surveybuilder__sidebar__save {
  flex:1 1 auto;
}

.surveybuilder__canvas {
  flex: 1 1 auto;
  background-color:$light-gray;
  padding:10px;

  -webkit-box-shadow: inset -39px 0px 48px -44px rgba(0,0,0,0.5);
  -moz-box-shadow: inset -39px 0px 48px -44px rgba(0,0,0,0.5);
  box-shadow: inset -39px 0px 48px -44px rgba(0,0,0,0.5);
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

//output container
.output {
  background-color: $not-so-light-gray;
  border-radius:5px;
  padding:10px;
}

</style>
