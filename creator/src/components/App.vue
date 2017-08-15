<template>
  <div class="app-container">
    <gh-navbar></gh-navbar>
    <div class="content container">
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
  padding: 15px 15px 0;
  margin-bottom: 70px;

  display: flex;
  flex:1 1 auto;
  flex-direction: column;
}

.app-container {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

body {
  background-image: url('../img/playstation-pattern.png');
}

</style>
