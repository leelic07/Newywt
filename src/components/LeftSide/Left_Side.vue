<template>
  <div id="leftSide" class="pull-left">
    <div class="col-xs-24 title">
      <router-link to="">狱务通信息管理平台</router-link>
    </div>
    <div class="col-xs-24 list">
      <a href="#" class="active">系统匹配<span class="glyphicon glyphicon-menu-right"></span></a>
      <ul class="clearfix">
        <li class="clearfix">
          <router-link to="/user_management">用户管理</router-link>
        </li>
        <li class="clearfix">
          <router-link to="/role_management">角色管理</router-link>
        </li>
        <li class="clearfix">
          <router-link to="/menu_management">菜单管理</router-link>
        </li>
        <li class="clearfix">
          <router-link to="/prison_management">监狱管理</router-link>
        </li>
      </ul>
    </div>
    <div class="col-xs-24 list">
      <a href="#">家属管理<span class="glyphicon glyphicon-menu-right"></span></a>
      <ul class="clearfix">
        <li class="clearfix">
          <router-link to="/login_statistics">登录统计</router-link>
        </li>
        <li class="clearfix">
          <router-link to="/registration_statistics">注册统计</router-link>
        </li>
        <li class="clearfix">
          <router-link to="/balance_statistics">余额统计</router-link>
        </li>
      </ul>
    </div>
    <div class="col-xs-24 list">
      <a href="#">订单管理<span class="glyphicon glyphicon-menu-right"></span></a>
      <ul class="clearfix">
        <li class="clearfix">
          <router-link to="/order_management">订单统计</router-link>
        </li>
        <!--<li class="clearfix">-->
          <!--<router-link to="">角色管理</router-link>-->
        <!--</li>-->
        <!--<li class="clearfix">-->
          <!--<router-link to="">菜单管理</router-link>-->
        <!--</li>-->
        <!--<li class="clearfix">-->
          <!--<router-link to="">监狱管理</router-link>-->
        <!--</li>-->
      </ul>
    </div>
    <div class="col-xs-24 list">
      <a href="#">数据管理<span class="glyphicon glyphicon-menu-right"></span></a>
      <ul class="clearfix">
        <li class="clearfix">
          <router-link to="/commodity_data">商品数据导出</router-link>
        </li>
        <li class="clearfix">
          <router-link to="/criminal_data">犯人数据导入</router-link>
        </li>
        <li class="clearfix">
          <router-link to="">法律法规数据导入</router-link>
        </li>
      </ul>
    </div>

    <div class="col-xs-24 list">
      <a href="#">退款管理<span class="glyphicon glyphicon-menu-right"></span></a>
      <ul class="clearfix">
        <li class="clearfix">
          <router-link to="/refundment_examination">退款审批</router-link>
        </li>
        <!--<li class="clearfix">-->
          <!--<router-link to="/criminal_data">犯人数据导入</router-link>-->
        <!--</li>-->
        <!--<li class="clearfix">-->
          <!--<router-link to="">法律法规数据导入</router-link>-->
        <!--</li>-->
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
      data() {
          return {

          }
      }
  }
</script>

<style type="text/less" lang="less">
  @white:#fff;
  @title:#252932;
  @listColor:#252932;
  #leftSide{
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    width:18%;
    overflow:auto;
    /*height:100%;*/
    background:@listColor;
    a{
      &:hover{
        text-decoration:none;
      }
    }
    .title{
      background:@title;
      a{
        float:left;
        width:100%;
        color:@white;
        text-align:center;
        height:68px;
        line-height:68px;
        font-size:17px;
        /*font-weight:bold;*/
        border-bottom:2px solid #393D49;
      }
    }

    .list{
      background:@listColor;
      .active{
        background:#6495ED;
        color:@white;

      }
      >a{
        position:relative;
        span{
          position:absolute;
          right:20px;
          top:15px;
        }
      }
      a{
        float:left;
        width:100%;
        color:#9B9B9C;
        text-align:center;
        height:48px;
        line-height:45px;
        border-bottom:2px solid #393D49;
        &:hover{
          color:@white;
        }
      }
      ul{
        list-style:none;
        padding:0;
        li{

        }
      }
    }
  }
</style>
