<template>
  <div>
    <gh-navbar></gh-navbar>
    <div class="container content">
      <gh-form-builder></gh-form-builder>
    </div>
    <gh-footer></gh-footer>
  </div>
</template>
<script>
import ghNavbar from './Navbar';
import ghFooter from './Footer';
import ghFormBuilder from './FormBuilder';


import axios from 'axios';

export default {
  name: 'app',
  components: { ghNavbar, ghFooter, ghFormBuilder },
}
</script>
<style lang="scss">
.container.content {
  padding: 60px 15px 0;
}
</style>
