import Vue from 'vue';
import Router from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

import App from './components/App';


// Plugins
Vue.config.productionTip = false
Vue.use(Router);
Vue.use(BootstrapVue);

import FormBuilderSummary from './components/FormBuilderSummary';
import FormBuilderConfig from './components/FormBuilderConfig';
import FormBuilderContent from './components/FormBuilderContent';
import FormBuilderJSON from './components/FormBuilderJSON';
import FormBuilderNotes from './components/FormBuilderNotes';
import FormData from './components/FormData';
import FormView from './components/FormView';
import SurveyList from './components/SurveyList';

import "./scss/gh.scss";
import 'bootstrap-vue/dist/bootstrap-vue.css';


let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: SurveyList,
    },
    {
      path: '/form/:surveyId?',
      component: FormView,
      props: true,
      children: [
        {
          path: 'summary',
          name: 'form-summary',
          component: FormBuilderSummary,
          props: true,
        },
        {
          path: 'config',
          name: 'form-config',
          component: FormBuilderConfig,
          props: true,
        },
        {
          path: 'content',
          name: 'form-content',
          component: FormBuilderContent,
          props: true,
        },
        {
          path: 'json',
          name: 'form-content-json',
          component: FormBuilderJSON,
          props: true,
        },
        {
          path: 'notes',
          name: 'form-notes',
          component: FormBuilderNotes,
          props: true,
        },
        {
          path: 'data',
          name: 'form-data',
          component: FormData,
          props: true,
        },
      ],
    },
  ],
});

new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App },
});
