<template>
  <div>
    <div class="mt-3"><h1>{{ form.name }}</h1></div>
    <component :is="renderComponent" :questions="form.questions" :comparisons="comparisons" :answers="answers">
    </component>
  </div>
</template>
<script>
// Pull in all components from layouts here.
import { ghForm, ghFormSections } from './layouts';
import axios from 'axios';
import validate from '../validators/validate';
export default {
  name: 'form',
  props: ['form'],
  components: {  ghForm, ghFormSections },
  data() {
    return {
      answers: {},
    };
  },
  computed: {
    renderComponent: function() {
      // Non-default rendering component configured.
      if (this.form.renderComponent) {
        return this.form.renderComponent;
      }

      let hasSections = this.form.hasOwnProperty('sections');
      return hasSections ? 'ghFormSections' : 'ghForm';
    },
    comparisons: function() {
        return validate.generateComparisons(this.form.questions, this.answers);
    },
  },
  created() {
    if (sessionStorage.ghJwt) {
      axios.defaults.headers.common['Authorization'] = sessionStorage.ghJwt;
    }
    axios.get('/api/answer').then(response => {
      let answers = response.data.answers;
      if (answers) {
        this.answers = response.data.answers;
      }
    });
  },
}
</script>
<style lang="scss">

// Misc
.container.content {
  padding: 60px 15px 0;
}
</style>
