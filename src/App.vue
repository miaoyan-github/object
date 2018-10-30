<template>
  <div id="app">
    <header id="header">
      <img src="../src/assets/menu_bgs.png" alt="">
    </header>
    <article id="article">
      <nav id="nav">
        <ul>
          <h1>HI，管理员</h1>
          <li><router-link to="/">店铺信息</router-link></li>
          <li><router-link to="/activeMsg">活动信息</router-link></li>
          <li><router-link to="/abnormalStore">异常店铺</router-link></li>
          <li><router-link to="/userCumulant">用户累积量</router-link></li>
          <li><router-link to="/userSearch">用户信息查询</router-link></li>
          <li><router-link to="/badcommentMatch">差评信息匹配</router-link></li>
          <li><router-link to="/popularVegetables">畅销菜品</router-link></li>
          <li><router-link to="/disfavorvVegetables">低销菜品</router-link></li>
        </ul>
        <img src="../src/assets/menu_bgs.png" alt="">
      </nav>
      <section id="section">
        <router-view/><!--  展示路由页面的内容，如果想跳转用<router-link to='xxx'></router-link> -->
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: 'App' /* 这个name暂时不知道有啥用，官方文档说的是——方便排错 */
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html, body{
  min-width: 800px;
  min-height: 400px;
  overflow: hidden;
}
ul, ol{
  list-style: none;
}
a{
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  color: #000;
}
#app {
  display: flex;
  flex-flow: column wrap;
}
#header{
  width: 100%;
  height: 60px;
  background: rgb(238,241,249);
}
#header>img{
  height: 100%;
}
#article{
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-flow: row wrap;
}
#nav{
  width: 200px;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
}
#nav>ul{
  width: 100%;
  height: calc(100% - 50px);
  background: #EEE;
  overflow-y: auto;
}
#nav>ul>h1{
  text-align: center;
  line-height: 80px;
  font-size: 24px;
  color: rgb(102,177,255);
}
#nav>ul>li{
  text-align: center;
}
#nav>ul>li>a{
  padding: 10px 20px;
  line-height: 20px;
}
#nav>ul>li>a:hover{
  background: #CCC;
  color: #FFF;
}
#nav>img{
  width: 100%;
  height: 50px;
}
#section{
  width: calc(100vw - 200px);
  height: 100%;
}
</style>
