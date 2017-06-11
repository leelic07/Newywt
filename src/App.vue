<template>
  <div id="app">
    <LeftSide v-if="isNotLogin"></LeftSide>
    <Nav v-if="isNotLogin"></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import LeftSide from '@/components/LeftSide/Left_Side.vue'
import Nav from '@/components/Nav/Nav.vue'

export default {
  name: 'app',
  data () {
    return {
      isNotLogin:true
    }
  },
  watch:{
    $route(to){//监听路由变化
      const loginUrl = "/login";
      if (to.path == loginUrl ) {//进入登陆页面
        this.isNotLogin = false;//将侧边栏和顶栏隐藏
        // store.dispatch('hideLoginLoading');
      }else {
        this.isNotLogin = true;
      }
    }
  },
  methods: {
    hidebar() {
      const loginUrl = "/login";
      if (this.$route.path == loginUrl ) {//进入登陆页面
        this.isNotLogin = false;//将侧边栏和顶栏隐藏
      }
    }
  },
  components:{
    LeftSide,
    Nav
  },
  mounted(){
    //初始为登陆页时隐藏侧边和顶边栏
    this.hidebar();
  }
}
</script>

<style type="text/less" lang="less">
  *{
    font-family: 'microsoft yahei';
    padding:0;
    margin:0;
  }
  ul,ol{
    margin:0;
  }
</style>
