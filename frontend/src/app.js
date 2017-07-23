import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios';

// Plugins
Vue.config.productionTip = false
Vue.use(Router);
Vue.use(BootstrapVue);

const routerView = { template: '<router-view></router-view>' };

// Bootstrap app using Index
new Vue({
  el: '#app',
  template: '<h1>Hello. This is vue</h1>',
});
