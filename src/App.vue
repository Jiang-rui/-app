<template>
  <div id="app">
    <div class="top-bar">
        <router-link :to="{path:'/'}">
            <div class="site-name">
                <h1 class="title">豆瓣</h1>
            </div>
        </router-link>
        <div class="site-nav">
          <ul>
            <li><router-link :to="{path:'/movie'}">电影</router-link></li>
            <li><router-link :to="{path:'/book'}">图书</router-link></li>
            <li><router-link :to="{path:'/music'}">音乐</router-link></li>
          </ul>
        </div>
    </div>
    <div class="pad"></div>
    <div class="content">
        <transition>
           <router-view></router-view>
        </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app .top-bar{
  position: fixed;
  top:0;
  left:0;
  padding: 0 16px;
  width: 100%;
  z-index:10;
  background-color: #fff;
  border-bottom: 1px solid #f5f5f5;
}
#app .pad{
  height: 50px;
  width: 100%;
}
#app .top-bar .title{
  font-size: 22px;
  line-height: 47px;
  color:#00b600;
  float:left;
}
#app .top-bar .site-nav {
   height: 100%;
   float: right;
   padding: 15px 40px 0 0;
}
/*@media screen and (max-width: 320px){
  #app .top-bar .site-nav{
    padding-left: 80px;
  }
}*/
#app .top-bar .site-nav ul li{
   font-size: 17px;
   line-height: 20px;
   float:left;
   margin-right: 16px;
}
#app .top-bar .site-nav ul li:nth-child(1) a{
  color:#2384e8;
}
#app .top-bar .site-nav ul li:nth-child(2) a{
  color:#9f7860;
}
#app .top-bar .site-nav ul li:nth-child(3) a{
  color:#e4a813;
}
#app .content{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
