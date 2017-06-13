<template>
  <div id="app" >
    <div class="top-bar">
        <router-link :to="{path:'/index'}">
            <div class="site-name">
                <h1 class="title">首页</h1>
            </div>
        </router-link>
        <div class="site-nav">
          <ul>
            <li><router-link :to="{path:'/movie'}">电影</router-link></li>
            <li><router-link :to="{path:'/book'}">图书</router-link></li>
            <li><router-link :to="{path:'/music'}">音乐</router-link></li>
            <li><router-link :to="{path:'/sign'}">登录/注册</router-link></li>
          </ul>
        </div>
    </div>
    <div class="pad"></div>
    <div class="content" ref="content" @load="load">
        <transition>
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
         </transition>
    </div>
  <!--   <div class="animate" ref="animate">
        <div class="img-wrapper">
          <img src="./assets/animate.png" width="100" height="123">
        </div>
        努力加载中……
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      signflag: false
    }
  },
  mounted(){
    // this.$refs.content.style.display = 'none'
    // var that = this;
    // setTimeout(function (argument) {
    //   /* body... */
    //     that.load()
    // }, 3000)
    // // this.load()
  },
  methods:{
     load(){
        this.$refs.animate.style.display = 'none'
        this.$refs.content.style.display = 'block'
     },
     sign(){
      console.log(11)
      this.signflag = true
     }
  },
}
</script>

<style scoped>
@keyframes animate {
  0% {top:40%;}
  50% {top:30%;}
  100% {top:40%;}
}
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
   padding: 15px 20px 0 0;
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
#app .top-bar .site-nav ul li:nth-child(4) a{
  font-size: 16px;
  color:#00b600;;
}
#app .content{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app .animate{
  line-height: 40px;
  font-size: 16px;
  font-weight: bold;
  position: fixed;
  top:40%;
  white-space: nowrap;
  left:55%;
  transform: translateX(-50%);
  color:#00b600;
  animation: animate 1s infinite;
}
#app .animate .img-wrapper{
  margin-left: -20px
}
</style>
