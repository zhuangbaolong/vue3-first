<template>
  
  <div class="common-layout">
    <el-container>
      <el-aside width="180px"><LeftMenu/></el-aside>
      <el-container>
        <el-header><Header /></el-header>
        <el-main><RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import LeftMenu from '../components/LeftMenu.vue'
import Header from '../components/Header.vue'

</script>

<style scoped>
@media (min-width: 1024px) {
  .common-layout {
    height: 100vh;
    width: 100vw;
  }
}
.el-header{
  background-color: darkgrey;
}
.el-container.is-vertical{
  height: 100vh;
}
</style>
