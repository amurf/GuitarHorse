<template>
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
