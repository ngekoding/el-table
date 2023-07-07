import Vue from 'vue';
import App from './App.vue';

import ElementUI from 'element-ui';
import ImprovedElTable from 'main';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(ImprovedElTable);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');
