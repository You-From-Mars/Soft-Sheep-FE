import Vue from 'vue';
import http from './assets/js/http';
import App from './App.vue';
import router from './router';
import store from './store';
import { Button, Input, Form, FormItem, Radio, Message } from 'element-ui';
import './registerServiceWorker';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.less';
import './assets/css/common.less';

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Radio);

Vue.prototype.$message = Message;
Vue.use(http);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
