import Vue from 'vue';
import Router from 'vue-router';
import BootstrapVue from 'bootstrap-vue';


// Plugins
Vue.config.productionTip = false
Vue.use(Router);
Vue.use(BootstrapVue);

import App from './components/App';
import Auth from './components/Auth';
import Form from './components/Form';

import "./scss/gh.scss";
import 'bootstrap-vue/dist/bootstrap-vue.css';

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Auth,
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
    },
  ],
});

new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App },
});
