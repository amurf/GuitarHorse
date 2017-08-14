<template>
  <select v-model="answers[name]">
    <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
  </select>
</template>
<script>
export default {
  name: 'select',
  props: {
    name: {
      type: String,
      label: "Field name",
    },
    required: {
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
