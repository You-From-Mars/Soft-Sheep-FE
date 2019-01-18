import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import { Button, Input, Form, FormItem, Radio, Message } from 'element-ui';
import './registerServiceWorker';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.less';
import './assets/css/common.less';

(<any>Window).$http = axios;

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Radio);
Vue.prototype.$message = Message;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
