<template>
  <div class="vert">
    <b-btn size="md" @click="addText"><span class="fa fa-align-justify" aria-role = "hidden"></span>Add Text</b-btn>
    <b-btn size="md" @click="addScale"><span class="fa fa-balance-scale" aria-role = "hidden"></span>Add Scale</b-btn>
    <b-btn size="md" @click="addSelect"><span class="fa fa-caret-square-o-down" aria-role = "hidden"></span>Add Select</b-btn>
    <b-btn size="md" @click="addCheckbox"><span class="fa fa-check-square-o" aria-role = "hidden"></span>Add Checkbox</b-btn>
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

.vert {
  @extend .btn-group-vertical;
}

.vert > button {
  display: flex;
  justify-content: flex-start;
}

.vert > button > span {
  width:2rem;
}

</style>
