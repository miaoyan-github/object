<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/> <!--  展示路由页面的内容，如果想跳转用<router-link to='xxx'></router-link> -->
  </div>
</template>

<script>
export default {
  name: 'App' /* 这个name暂时不知道有啥用，官方文档说的是——方便排错 */
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
