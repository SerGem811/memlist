import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/core/services/store';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = 'https://test.memlist.se/api/v3';
// Vue.axios.defaults.headers.common = {'X-Requested-With': 'XMLHttpRequest'}
Vue.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

import '@/core/services/axios.service';

Vue.config.productionTip = false;

// Global 3rd party plugins
import 'popper.js';
import 'tooltip.js';
import PerfectScrollbar from 'perfect-scrollbar';
window.PerfectScrollbar = PerfectScrollbar;
import ClipboardJS from 'clipboard';
window.ClipboardJS = ClipboardJS;

// Vue 3rd party plugins
import i18n from '@/core/plugins/vue-i18n';
// import vuetify from '@/core/plugins/vuetify';
import '@/core/plugins/portal-vue';
import '@/core/plugins/bootstrap-vue';
import '@/core/plugins/perfect-scrollbar';
// import '@/core/plugins/highlight-js';
import '@/core/plugins/inline-svg';
// import '@/core/plugins/apexcharts';
// import '@/core/plugins/treeselect';
import '@/core/plugins/metronic';
import '@mdi/font/css/materialdesignicons.css';
import '@/core/plugins/formvalidation';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading);

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas);
library.add(far);

Vue.component('fa-icon', FontAwesomeIcon);

import { func } from '@/core/services/func.service.js';
Vue.prototype.$func = func;

new Vue({
  router,
  store,
  i18n,
  // vuetify,
  render: h => h(App)
}).$mount('#app');
