<template>
  <div>
    <b-tabs>
      <template slot="tabs">
        <b-nav-item :to="{name: 'form-summary', params: $route.params}">Summary</b-nav-item>
        <b-nav-item :to="{name: 'form-config', params: $route.params}">Configuration</b-nav-item>
        <b-nav-item :to="{name: 'form-content', params: $route.params}">Content</b-nav-item>
        <b-nav-item :to="{name: 'form-content-json', params: $route.params}">JSON</b-nav-item>
        <b-nav-item :to="{name: 'form-notes', params: $route.params }">Notes</b-nav-item>
        <b-nav-item :to="{name: 'form-data', params: $route.params }">Data</b-nav-item>
      </template>
    </b-tabs>
    <router-view :form="form"></router-view>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'form-view',
  props: ['surveyId'],
  data() {
    return {
      form: {
        name: undefined,
        questions: [],
        sections: undefined,
      },
    };
  },
  created() {
    if (this.surveyId) {
      axios.get('http://localhost:5555/api/form/' + this.surveyId).then(
        response => this.form = response.data.config
      );
    }
  },
}
</script>

<style lang="scss" scoped></style>
