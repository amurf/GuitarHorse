<template>
  <div>
    <p>answers: <code>{{ answers }}</code></p>
    <gh-question v-for="(question, index) in questions" :key="question.name"
      :number="index + 1" :question="question" :answers="answers" :comparisons="comparisons">
    </gh-question>
    <b-btn variant="success" size="lg" @click="save">Save</b-btn>
  </div>
</template>
<script>
import ghQuestion from '../Question';
import axios from 'axios';

export default {
  name: 'gh-form',
  props: ['questions', 'answers', 'comparisons'],
  components: { ghQuestion },
  methods: {
    save: function() {
      axios.put('/api/answer', {answers: this.answers}).then(console.log);
    },
  },
};

</script>
<style lang="scss">
</style>
