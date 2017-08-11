<template>
  <code> {{ formattedFormConfig }} </code>
</template>
<script>
export default {
  name: 'form-builder-config',
  props: ['surveyId', 'form'],
  computed: {
    formattedFormConfig() {
      return JSON.stringify(this.form, undefined, 4);
    }
  },
}
</script>
<style lang="scss" scoped>
code {
  white-space: pre;
}
</style>
