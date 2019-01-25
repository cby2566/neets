<template>
    <div>
        测试组件{{data}}
        <p @click="fun1">跳转</p>
        <p>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
      </p>
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </div>
</template>

<script>
import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }];

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
});



export default {
    data(){
        return {data:'+数据'}
    },
    methods:{
        fun1(){
            console.log('p');
        }
    },
    created(){
        console.log('创建时')
    }
}
</script>
