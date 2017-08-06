<template>
  <div>
    <b-btn variant="primary" size="md" @click="addText">Add Text</b-btn>
    <b-btn variant="primary" size="md" @click="addScale">Add Scale</b-btn>
    <b-btn variant="primary" size="md" @click="addSelect">Add Select</b-btn>
    <b-btn variant="primary" size="md" @click="addCheckbox">Add Checkbox</b-btn>
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
    addText: function() {
      let question = {
        id: this.questionsAdded,
        name: 'example-' + this.questionsAdded,
        component: 'ghText',
        label: 'the example label'
      };
      this.$emit('question-added', question);
      this.questionsAdded++;
    },
    addScale: function() {
      let question = {
        id: this.questionsAdded,
        name: 'example-' + this.questionsAdded,
        component: 'ghScale',
        options: 3,
        label: 'the example label'
      };
      this.$emit('question-added', question);
      this.questionsAdded++;
    },
    addSelect: function() {
      let question = {
        id: this.questionsAdded,
        name: 'example-' + this.questionsAdded,
        component: 'ghSelect',
        options: ['a', 'b', 'c'],
        label: 'the example label'
      };
      this.$emit('question-added', question);
      this.questionsAdded++;
    },
    addCheckbox: function() {
      let question = {
        id: this.questionsAdded,
        name: 'example-' + this.questionsAdded,
        component: 'ghCheckbox',
        options: ['a', 'b', 'c'],
        label: 'the example label'
      };
      this.$emit('question-added', question);
      this.questionsAdded++;
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  margin-bottom: 5px 0;
}

</style>
