<template>
  <div>
    <gh-question v-for="(question, index) in questions" :key="question.name"
      :number="index + 1" :question="question" :answers="answers" :comparisons="comparisons">
    </gh-question>
  </div>
</template>
<script>
import ghQuestion from '../Question';
export default {
  name: 'gh-form',
  props: ['questions', 'answers', 'comparisons'],
  components: { ghQuestion },
};

</script>
<style lang="scss">
</style>
