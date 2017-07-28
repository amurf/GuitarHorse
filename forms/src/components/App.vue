<template>
  <div>
    <gh-navbar></gh-navbar>
    <!-- Begin page content -->
    <div class="container content">
      <div class="mt-3"><h1>{{ form.config.name }}</h1></div>
      <component :is="renderComponent" :form="form"></component>
    </div>
    <gh-footer></gh-footer>
  </div>
</template>
<script>
import ghNavbar from './Navbar';
import ghFooter from './Footer';

// Pull in all components from layouts here.
import { ghForm, ghFormSections } from './layouts';
import axios from 'axios';

export default {
  name: 'app',
  components: { ghNavbar, ghFooter, ghForm, ghFormSections },
  computed: {
    renderComponent: function() {
      // Non-default rendering component configured.
      if (this.form.config.renderComponent) {
        return this.form.config.renderComponent;
      }

      let hasSections = this.form.hasOwnProperty('sections');
      return hasSections ? 'ghFormSections' : 'ghForm';
    },
  },
  data() {
    return {
      form: undefined,
    }
  },
  created() {
    axios.get('/api/config').then(
      response => this.form = response.data.config
    );
  },
}
</script>
<style lang="scss">
.container.content {
  padding: 60px 15px 0;
}
</style>
