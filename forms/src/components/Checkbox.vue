<template>
  <ul>
    <li v-for="option in options" :key="option">
      <input type="checkbox" :id="option" :value="option" v-model="answers[name]">
      <label for="option">{{ option }}</label>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'checkbox',
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
  created() {
    // Initialise as Array if multiple options. Vue won't watch this
    // unless we use $set.
    if (this.options && this.options.length > 1) {
      this.$set(this.answers, this.name, []);
    }
  },
}
</script>
<style lang="scss">
</style>
