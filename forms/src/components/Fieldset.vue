<template>
  <div>
    <h1>Questions</h1>
    <code>{{ answers }}</code>
    <div v-for="question in questions">
      <label>{{ question.label }}</label>
      <component :is="question.component" :answers="answers" :question="question"></component>
    </div>
  </div>
</template>

<script>
import ghText from "shared/Text"

export default {
  name: 'gh-fieldset',
  components: { ghText },
  props: ['questions', 'model'],
  data() {
    return {
      answers: {},
    };
  },
  created() { },
};

</script>
<style lang="scss">
</style>
