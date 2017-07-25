<template>
  <!--
    In this template we pick a layout to use depending on the configuration object passed in.
    This will potentially get bloated as layouts are added, but i'm taking the KISS approach initially here.
  -->
  <div>
    <h1>No Sections</h1>
  </div>
</template>


</template>
<script>
export default {
  name: 'gh-form',
  props: ['form'],
};

</script>
<style lang="scss">
.container.content {
  padding: 60px 15px 0;
}
</style>
