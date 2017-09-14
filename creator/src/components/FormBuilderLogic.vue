<template>
  <div class="tab__container">
    <div>
      <h1>Logic</h1>

      <add-comparison-modal :questions="form.questions">
      </add-comparison-modal>
    </div>
  </div>
</template>
<script>
import AddComparisonModal from './AddComparisonModal';

export default {
  name: 'form-builder-logic',
  components: { AddComparisonModal },
  props: ['form'],
}
</script>
<style lang="scss">
</style>
