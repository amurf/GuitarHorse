<template>
  <footer class="footer">
    <div class="container">
      <span class="text-muted">Place sticky footer content here.</span>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'gh-footer',
}
</script>
<style lang="scss" scoped>
.container {
  padding-right: 15px;
  padding-left: 15px;
}
.footer {
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  line-height: 60px; /* Vertically center the text there */
  background-color: $dark-gray;
}
</style>
