<template>
  <select v-model="answers[question.name]">
    <option v-for="option in question.options" :key="option" :value="option">{{ option }}</option>
  </select>
</template>
<script>
export default {
  name: 'select',
  props: ['question', 'answers'],
  computed: {
    options: function() {
      let questionOptions = question.options;
      if (Array.isArray(questionOptions)) {
        return questionOptions;
      }

      var optionsRange = [];
      for (var i = 1; i <= s; i++) {
        optionsRange.push(i);
      }

      return optionsRange;
    },
  },
}
</script>
<style lang="scss">
</style>
