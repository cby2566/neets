<template>
  <div>
    <div class="div2">123</div>
    <router-view/>
    <ul>
      <li  v-for="v in pathIndex" :key="v"><a href="function:void(0);" @click="goto(v)">{{v}}</a></li>
    </ul>
  </div>
</template>

<script>
import {pathIndex} from './util/routes';

export default {
  data(){
    return {pathIndex};
  },
  methods:{
    goto(name){
      this.$router.push({name:name.substring(1,name.length)});
    }
  }
}
</script>

<style>
.div2{
  width: 100%;
  height: 40px;
  background: yellow;
}
</style>
