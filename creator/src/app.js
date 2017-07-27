import Vue from 'vue';
import Router from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

import App from './components/App';

// Plugins
Vue.config.productionTip = false
Vue.use(Router);
Vue.use(BootstrapVue);

import FormBuilder from './components/FormBuilder';
import SurveyList from './components/SurveyList';

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: SurveyList,
    },
    {
      path: '/form/:surveyId?',
      name: 'Form',
      component: FormBuilder,
      props: true,
    },
  ],
});

new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App },
});
