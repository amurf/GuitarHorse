<template>
  <div>
    <gh-navbar></gh-navbar>
    <div class="container content">
      <router-view></router-view>
    </div>
    <gh-footer></gh-footer>
  </div>
</template>
<script>
import ghNavbar from './Navbar';
import ghFooter from './Footer';

export default {
  name: 'app',
  components: { ghNavbar, ghFooter },
}
</script>
<style lang="scss">
.container.content {
  padding: 60px 15px 0;
}
</style>
