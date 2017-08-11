<template>
  <div class="container">
    <div class='row heading'>
      <div class='col'>
        <h1>Surveys</h1>
      </div>
    </div>
    <div class='row'>
      <b-button to="/form/content" type="sm" variant="success" class='new-survey'>New Survey</b-button>
      <b-button v-for="form in forms" :key="form.id"
             :to="{name: 'form-summary', params: {surveyId: form.id}}"
             type="sm" variant="primary">
        {{ form.config.name }}
      </b-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'survey-list',
  data() {
    return {
      forms: undefined,
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
