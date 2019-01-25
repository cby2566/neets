import {username} from './components/text.js';
import App from './main.vue';
import Vue from 'vue/dist/vue.js'



console.log(username);

new Vue({el:'#app',
	//components:{App}
    //使用render加载组件
    render:function(argument){
        return argument(App);
    }
});