<template>
  <input type="text" v-model="answers[question.name]" />
</template>
<script>
export default {
  name: 'text',
  props: ['question', 'answers'],
}
</script>
<style lang="scss">
</style>
