<template>
  <div id="app">
    <header id="header">
      <img src="../src/assets/menu_bgs.png" alt="">
    </header>
    <article id="article">
      <nav id="nav">
        <ul>
          <h1 @click="changRouter(0)"><router-link  to="/">HI，管理员</router-link></h1>
          <li :class="{ highLight: Aindex == 1 }" @click="changRouter(1)"><router-link  to="/StoreMsg">店铺信息</router-link></li>
          <li :class="{ highLight: Aindex == 2 }" @click="changRouter(2)"><router-link  to="/ActiveMsg">活动信息</router-link></li>
          <li :class="{ highLight: Aindex == 3 }" @click="changRouter(3)"><router-link to="/AbnormalStore">异常店铺</router-link></li>
          <li :class="{ highLight: Aindex == 4 }" @click="changRouter(4)"><router-link to="/UserCumulant">用户累积量</router-link></li>
          <li :class="{ highLight: Aindex == 5 }" @click="changRouter(5)"><router-link to="/UserSearch">用户信息查询</router-link></li>
          <li :class="{ highLight: Aindex == 6 }" @click="changRouter(6)"><router-link to="/BadcommentMatch">差评信息匹配</router-link></li>
          <li :class="{ highLight: Aindex == 7 }" @click="changRouter(7)"><router-link to="/PopularVegetables">畅销菜品</router-link></li>
          <li :class="{ highLight: Aindex == 8 }" @click="changRouter(8)"><router-link to="/DisfavorvVegetables">低销菜品</router-link></li>
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
  name: 'App', /* 这个name暂时不知道有啥用，官方文档说的是——方便排错 */
  data () {
    return {
      Aindex: 0
    }
  },
  methods: {
    changRouter (index) {
      this.Aindex = index
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html, body{
  min-width: 1200px;
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
  border-right: 1px solid rgb(235,238,245);
  display: flex;
  flex-flow: column wrap;
}
#nav>ul{
  width: 100%;
  height: calc(100% - 50px);
  overflow-y: auto;
}
#nav>ul>h1>a{
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
  color: rgb(96,98,102);
}
#nav>ul>li>a:hover{
  background: rgb(236,245,255);
}
#nav>ul>li.highLight>a{
  background: rgb(236,245,255);
  color: rgb(102,177,255);
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
