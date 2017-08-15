<template>
  <div class="vert">
    <b-button size="md" @click="addText"><span class="fa fa-align-justify" aria-role = "hidden"></span>Add Text</b-button>
    <b-button size="md" @click="addNumber">Add Number</b-button>
    <b-button size="md" @click="addEmail">Add Email</b-button>
    <b-button size="md" @click="addScale"><span class="fa fa-balance-scale" aria-role = "hidden"></span>Add Scale</b-button>
    <b-button size="md" @click="addSelect"><span class="fa fa-caret-square-o-down" aria-role = "hidden"></span>Add Select</b-button>
    <b-button size="md" @click="addCheckbox"><span class="fa fa-check-square-o" aria-role = "hidden"></span>Add Checkbox</b-button>
  </div>
</template>

<script>

import uuid from 'uuid/v4';

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
    createQuestion(component) {
      return {
        id: uuid(),
        component: component,
      };
    },
    addText: function() {
      this.$emit('question-added', this.createQuestion('ghText'));
    },
    addNumber: function() {
      this.$emit('question-added', this.createQuestion('ghNumber'));
    },
    addEmail: function() {
      this.$emit('question-added', this.createQuestion('ghEmail'));
    },
    addScale: function() {
      let question = this.createQuestion('ghScale');
      question.options = 3;
      this.$emit('question-added', question);
    },
    addSelect: function() {
      let question = this.createQuestion('ghSelect');
      question.options = ['a', 'b', 'c'];
      this.$emit('question-added', question);
    },
    addCheckbox: function() {
      let question = this.createQuestion('ghCheckbox');
      question.options = ['a', 'b', 'c'];
      this.$emit('question-added', question);
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
