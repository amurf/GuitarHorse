<template>
  <div class="container">
    <div class='row heading'>
      <div class='col'>
        <h1>Surveys</h1>
      </div>
    </div>
    <div class='row'>
      <b-btn to="/form" type="sm" variant="success" class='new-survey'>New Survey</b-btn>
      <b-btn v-for="form in forms" :key="form.id"
             :to="{name: 'Form', params: {surveyId: form.id}}"
             type="sm" variant="primary">
        {{ form.config.name }}
      </b-btn>
    </div>


    <h1>Testing</h1>
    <gh-question-options :component="Scale"></gh-question-options>
  </div>
</template>

<script>
import axios from 'axios';

import ghScale from 'shared/Scale';

import ghQuestionOptions from './QuestionOptions';

export default {
  name: 'survey-list',
  components: { ghScale, ghQuestionOptions },
  data() {
    return {
      forms: undefined,
      Scale: ghScale,
    };
  },
  created() {
    axios.get('http://localhost:5555/api/form').then(
    response => this.forms = response.data
    );
  }
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
