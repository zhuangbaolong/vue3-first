<template>
  <div>
    <h1>登录成功</h1>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { onMounted, reactive } from 'vue';

const state = reactive({
  time:3,//3s倒计时
  timer:0 //定时器对象
})
onMounted(()=>{
  state.timer = setInterval(()=>{
    state.time--;
    if(!state.time){
      router.push('/about2')
    }
  },1000)
})
</script>


<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
  }
} */
</style>
