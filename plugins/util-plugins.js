// element-ui.js
import Vue from 'vue';
import http from './util/AxiosHttp'
import axios from 'axios'
Vue.prototype.$http = http;
Vue.prototype.$axios=axios;
