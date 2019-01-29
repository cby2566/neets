import App from './main.vue';
import Vue from 'vue/dist/vue.js';
//import Vue from 'vue';

import VueRouter from 'vue-router';
import {routes} from './util/routes.js';

Vue.use(VueRouter);

import Icon from 'vue2-svg-icon/Icon.vue'
Vue.component('icon', Icon);

let router =new VueRouter({routes});

new Vue({el:'#app',
    render:function(argument){
        return argument(App);
    },
    router
});