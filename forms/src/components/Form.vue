<template>
  <div>
    <div class="mt-3"><h1>{{ form.name }}</h1></div>
    <component :is="renderComponent" :form="form" :form-id="formId"></component>
  </div>
</template>
<script>
// Pull in all components from layouts here.
import { ghForm, ghFormSections } from './layouts';
export default {
  name: 'form',
  props: ['form', 'formId'],
  components: {  ghForm, ghFormSections },
  computed: {
    renderComponent: function() {
      // Non-default rendering component configured.
      if (this.form.renderComponent) {
        return this.form.renderComponent;
      }

      let hasSections = this.form.hasOwnProperty('sections');
      return hasSections ? 'ghFormSections' : 'ghForm';
    },
  },
}
</script>
<style lang="scss">

// Misc
.container.content {
  padding: 60px 15px 0;
}
</style>
