import VueCompositionAPI, { provide } from '@vue/composition-api';
import ApolloClient from 'apollo-client';
import Vue from 'vue';
import App from './App.vue';
import { apolloClient } from './config';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);

new Vue({
  router,
  store,
  setup: () => provide(ApolloClient, { default: apolloClient }),
  render: h => h(App),
}).$mount('#app');
