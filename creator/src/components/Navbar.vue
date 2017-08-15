<template>


  <b-navbar toggleable type="inverse" variant="primary" toggle-breakpoint="md">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand href="#" to="/">Creator</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-nav is-nav-bar>
        <b-nav-item>Support</b-nav-item>
        <b-nav-item>Docs</b-nav-item>
        <b-nav-item>Contact Us</b-nav-item>
      </b-nav>
      <b-nav is-nav-bar class="ml-auto">
        <b-nav-item>Logout</b-nav-item>
      </b-nav>
    </b-collapse>
  </b-navbar>

</template>
<script>
export default {
  name: 'gh-navbar',
}
</script>
<style scoped>
</style>
