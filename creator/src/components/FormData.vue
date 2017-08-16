<template>
  <div class="tab__container">
    <div class="container">
      <div class="row">
          <div class="col">
  <h1>Form Data</h1>
</div>
</div>
</div>
  <b-button>Download CSV</b-button>
  <b-table hover show-empty responsive
           :items="answers"
           :fields="tableConfig">
  </b-table>

  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'form-data',
  props: ['surveyId', 'form'],
  data() {
    return {
      answers: [],
    };
  },
  computed: {
    tableConfig() {

      let config = {
				id: { label: 'Unique ID' },
			};

      let defaultOptions = {};

      this.form.questions.forEach(question => {
        config[question.name] = {
          label: question.label,
        };
      });

      return config;
    },
  },
  created() {
    axios.get(`http://localhost:5555/api/form/${this.surveyId}/answer`).then(
      response => this.answers = response.data.map(row => Object.assign({id: row.id}, row.answers))
    );
  },
}
</script>
<style lang="scss">
</style>
