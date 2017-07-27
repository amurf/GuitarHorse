<template>
  <div>
    <p>answers: <code>{{ answers }}</code></p>
    <gh-question v-for="(question, index) in form.questions" :key="question.name"
      :number="index + 1" :question="question" :answers="answers">
    </gh-question>
  </div>
</template>


</template>
<script>
import ghQuestion from '../Question';
export default {
  name: 'gh-form',
  props: ['form'],
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
      answers: {
        qTwo: "Default response",
      },
    };
  },
};

</script>
<style lang="scss">
</style>
