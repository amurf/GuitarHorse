<template>
  <ul>
    <li v-for="option in question.options" :key="option">
      <input type="radio" :id="option" :value="option" v-model="answers[question.name]">
      <label for="option">{{ option }}</label>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'scale',
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
