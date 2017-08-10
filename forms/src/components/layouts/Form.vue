<template>
  <div>
    <p>answers: <code>{{ answers }}</code></p>
    <gh-question v-for="(question, index) in form.questions" :key="question.name"
      :number="index + 1" :question="question" :answers="answers">
    </gh-question>
    <b-btn variant="success" size="lg" @click="save">Save</b-btn>
  </div>
</template>


</template>
<script>
import ghQuestion from '../Question';
import axios from 'axios';
export default {
  name: 'gh-form',
  props: ['form', 'formId'],
  components: { ghQuestion },
  computed: {
    questionsByName: function() {
      let questionsByName = {};
      for (let question of this.form.questions) {
        questionsByName[question.name] = question;
      }
      return questionsByName;
    },
  },
  data() {
    return {
      answers: {},
    };
  },
  created() {
    if (sessionStorage.ghJwt) {
      axios.defaults.headers.common['Authorization'] = sessionStorage.ghJwt;
    }
    axios.get('/api/answer').then(response => {
      let answers = response.data.answers;
      if (answers) {
        this.answers = response.data.answers;
      }
    });
  },
  methods: {
    save: function() {
      axios.put('/api/answer', {answers: this.answers}).then(console.log);
    },
  },
};

</script>
<style lang="scss">
</style>
