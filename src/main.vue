<template>
    <div>
        测试组件{{data}}
        <ul class="ulx">
            <li v-for="item in path"><router-link :to="item" tag="span" active-class="act">{{item}}</router-link></li>
        </ul>
        <icon name="home" :w="20" :h="20"></icon>
        <router-view />
    </div>
</template>

<script>

import Vue from 'vue';
import {pathIndex} from './util/routes.js';



export default {
    data(){
        return {data:'+数据',path:pathIndex}
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
<style lang="scss">
.ulx{
    color:rebeccapurple;
}
.act{
    color:red;
    font-weight: bold;
}
</style>
