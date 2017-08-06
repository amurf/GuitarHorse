<template>
  <ul>
    <li v-for="option in options" :key="option">
      <input type="radio" :id="option" :value="option" v-model="answers[name]">
      <label for="option">{{ option }}</label>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'scale',
  props: {
    name: {
      type: String,
      label: "Field name",
    },
    mandatory: {
      type: Boolean,
      label: "Required",
    },
    options: {
      type: Array,
      label: "List of options",
    },

    answers: Object,
  },
}
</script>
<style lang="scss">
</style>
