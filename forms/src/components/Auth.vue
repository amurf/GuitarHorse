<template>
  <div>
    <h1>Authenticating..</h1>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'auth',
  created() {
    // Check for existing JWT here.

      axios.post('/api/session').then(
      response => {
        // Set JWT
        let jwt = response.data.token;

        sessionStorage.ghJwt = jwt;
        axios.defaults.headers.common['Authorization'] = jwt;
        this.$router.push('form');
      });
  },
}
</script>
<style lang="scss">
</style>
