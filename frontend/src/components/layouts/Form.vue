<template>
  <!--
    In this template we pick a layout to use depending on the configuration object passed in.
    This will potentially get bloated as layouts are added, but i'm taking the KISS approach initially here.
  -->
  <div>
    <h1>No Sections</h1>
    <gh-question v-for="question in form.questions" :key="question.name" :question="question"></gh-question>
  </div>
</template>


</template>
<script>
import ghQuestion from '../Question';
export default {
  name: 'gh-form',
  props: ['form'],
  components: { ghQuestion },
};

</script>
<style lang="scss">
</style>
