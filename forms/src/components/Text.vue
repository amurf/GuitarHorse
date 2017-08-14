<template>
  <input type="text" v-model="answers[name]" />
</template>
<script>
export default {
  name: 'text',
  props: {
    name: {
      type: String,
      label: "Field name",
    },
    required: {
      type: Boolean,
      label: "Required",
    },
    answers: Object,
  },
}
</script>
<style lang="scss">
</style>
