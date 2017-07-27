import Vue from 'vue';
import Router from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

import App from './components/App';

// Plugins
Vue.config.productionTip = false
Vue.use(Router);
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  template: '<App />',
  components: { App },
});
