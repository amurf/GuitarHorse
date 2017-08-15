<template>
  <input type="number" v-model="answers[name]" />
</template>
<script>
export default {
  name: 'number',
  props: {
    name: {
      type: String,
      label: "Field name",
    },
    required: {
      type: Boolean,
      label: "Required",
    },
    min: {
      type: Number,
      label: "Min",
    },
    max: {
      type: Number,
      label: "Max",
    },

    answers: Object,
  },
}
</script>
<style lang="scss">
</style>
