<template>
    <div>
        <div class="div1"></div>
        <transition name="data">
            <router-view />
        </transition>
        <ul class="ulx">
            <li v-for="item in path"><router-link :to="item" tag="span" active-class="act">{{item}}</router-link></li>
        </ul>
        <span>123</span>
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

.data-enter-active, .data-leave-active {
  transition: all 0.5s;
  position: relative;
  left:-18px;
  
}
.data-enter, .data-leave-to{
  opacity: 0;
  left:-120px;
}
span{
    font-size: 14px;
}

.div1{
 height: 1.0666666666666666666666666666667rem;
 width: 100%;
 background: #ffde02;
}
</style>
