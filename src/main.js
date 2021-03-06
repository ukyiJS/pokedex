import { DefaultApolloClient } from '@vue/apollo-composable';
import VueCompositionAPI, { provide } from '@vue/composition-api';
import Vue from 'vue';
import App from './App.vue';
import { apolloClient } from './config';
import './quasar';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);

new Vue({
  router,
  store,
  setup: () => provide(DefaultApolloClient, apolloClient),
  render: h => h(App),
}).$mount('#app');
