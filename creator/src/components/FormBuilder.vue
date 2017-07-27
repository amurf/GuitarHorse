<template>
  <div>
    <h1>Builder</h1>
    <input type="text" placeholder="Survey title" v-model="form.config.name" />
    <b-btn variant="primary" size="md" @click="addQuestion">Add Question</b-btn>
    <p>output: <code>{{ form }}</code></p>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'form-builder',
  data() {
    return {
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
      this.form.questions.push({
        name: 'example',
        type: 'text',
      });
    },
  },
}
</script>
<style lang="scss">
.container.content {
  padding: 60px 15px 0;
}
</style>
