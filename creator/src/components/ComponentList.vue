<template>
  <div>
    <b-btn variant="primary" size="md" @click="addQuestion">Add Text</b-btn>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'component-list',
  data() {
    return {
      questionsAdded: 0,
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
    addQuestion: function() {
      let question = {
        name: 'example-' + this.questionsAdded,
        component: 'ghText',
        label: 'the example label'
      };
      this.$emit('question-added', question);
      this.questionsAdded++;
    },
  },
}
</script>

<style lang="scss">
input {
  width: 100%;
}

button {
  width: 100%;
  margin: 2px 0;
}
</style>
