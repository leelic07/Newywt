<template>
  <!--<aside class="main-sidebar">-->
    <!--&lt;!&ndash; sidebar: style can be found in sidebar.less &ndash;&gt;-->
    <!--<section class="sidebar">-->
      <!--&lt;!&ndash; Sidebar user panel &ndash;&gt;-->
      <!--<div class="user-panel">-->
        <!--<div class="pull-left image">-->
          <!--<img src="@/../staitc/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">-->
        <!--</div>-->
        <!--<div class="pull-left info">-->
          <!--<p>Alexander Pierce</p>-->
          <!--<a href="#"><i class="fa fa-circle text-success"></i> Online</a>-->
        <!--</div>-->
      <!--</div>-->
      <!--&lt;!&ndash; search form &ndash;&gt;-->
      <!--<form action="#" method="get" class="sidebar-form">-->
        <!--<div class="input-group">-->
          <!--<input type="text" name="q" class="form-control" placeholder="Search...">-->
          <!--<span class="input-group-btn">-->
                <!--<button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>-->
                <!--</button>-->
              <!--</span>-->
        <!--</div>-->
      <!--</form>-->
      <!--&lt;!&ndash; /.search form &ndash;&gt;-->
      <!--&lt;!&ndash; sidebar menu: : style can be found in sidebar.less &ndash;&gt;-->
      <!--<ul class="sidebar-menu">-->
        <!--<li class="header">MAIN NAVIGATION</li>-->
        <!--<li class="treeview">-->
          <!--<a href="#">-->
            <!--<i class="fa fa-dashboard"></i> <span>Dashboard</span>-->
            <!--<span class="pull-right-container">-->
              <!--<i class="fa fa-angle-left pull-right"></i>-->
            <!--</span>-->
          <!--</a>-->
          <!--<ul class="treeview-menu">-->
            <!--<li><a href="../../index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>-->
            <!--<li><a href="../../index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>-->
          <!--</ul>-->
        <!--</li>-->
        <!--<li class="treeview">-->
          <!--<a href="#">-->
            <!--<i class="fa fa-files-o"></i>-->
            <!--<span>Layout Options</span>-->
            <!--<span class="pull-right-container">-->
              <!--<span class="label label-primary pull-right">4</span>-->
            <!--</span>-->
          <!--</a>-->
          <!--<ul class="treeview-menu">-->
            <!--<li><a href="../layout/top-nav.html"><i class="fa fa-circle-o"></i> Top Navigation</a></li>-->
            <!--<li><a href="../layout/boxed.html"><i class="fa fa-circle-o"></i> Boxed</a></li>-->
            <!--<li><a href="../layout/fixed.html"><i class="fa fa-circle-o"></i> Fixed</a></li>-->
            <!--<li><a href="../layout/collapsed-sidebar.html"><i class="fa fa-circle-o"></i> Collapsed Sidebar</a></li>-->
          <!--</ul>-->
        <!--</li>-->
        <!--<li>-->
          <!--<a href="../widgets.html">-->
            <!--<i class="fa fa-th"></i> <span>Widgets</span>-->
            <!--<span class="pull-right-container">-->
              <!--<small class="label pull-right bg-green">new</small>-->
            <!--</span>-->
          <!--</a>-->
        <!--</li>-->
        <!--<li class="treeview">-->
          <!--<a href="#">-->
            <!--<i class="fa fa-pie-chart"></i>-->
            <!--<span>Charts</span>-->
            <!--<span class="pull-right-container">-->
              <!--<i class="fa fa-angle-left pull-right"></i>-->
            <!--</span>-->
          <!--</a>-->
          <!--<ul class="treeview-menu">-->
            <!--<li><a href="../charts/chartjs.html"><i class="fa fa-circle-o"></i> ChartJS</a></li>-->
            <!--<li><a href="../charts/morris.html"><i class="fa fa-circle-o"></i> Morris</a></li>-->
            <!--<li><a href="../charts/flot.html"><i class="fa fa-circle-o"></i> Flot</a></li>-->
            <!--<li><a href="../charts/inline.html"><i class="fa fa-circle-o"></i> Inline charts</a></li>-->
          <!--</ul>-->
        <!--</li>-->
        <!--<li class="treeview">-->
          <!--<a href="#">-->
            <!--<i class="fa fa-laptop"></i>-->
            <!--<span>UI Elements</span>-->
            <!--<span class="pull-right-container">-->
              <!--<i class="fa fa-angle-left pull-right"></i>-->
            <!--</span>-->
          <!--</a>-->
          <!--<ul class="treeview-menu">-->
            <!--<li><a href="../UI/general.html"><i class="fa fa-circle-o"></i> General</a></li>-->
            <!--<li><a href="../UI/icons.html"><i class="fa fa-circle-o"></i> Icons</a></li>-->
            <!--<li><a href="../UI/buttons.html"><i class="fa fa-circle-o"></i> Buttons</a></li>-->
            <!--<li><a href="../UI/sliders.html"><i class="fa fa-circle-o"></i> Sliders</a></li>-->
            <!--<li><a href="../UI/timeline.html"><i class="fa fa-circle-o"></i> Timeline</a></li>-->
            <!--<li><a href="../UI/modals.html"><i class="fa fa-circle-o"></i> Modals</a></li>-->
          <!--</ul>-->
        <!--</li>-->
        <!--<li class="treeview active">-->
          <!--<a href="#">-->
            <!--<i class="fa fa-edit"></i> <span>Forms</span>-->
            <!--<span class="pull-right-container">-->
              <!--<i class="fa fa-angle-left pull-right"></i>-->
            <!--</span>-->
          <!--</a>-->
          <!--<ul class="treeview-menu">-->
            <!--<li class="active"><a href="general.html"><i class="fa fa-circle-o"></i> General Elements</a></li>-->
            <!--<li><a href="advanced.html"><i class="fa fa-circle-o"></i> Advanced Elements</a></li>-->
            <!--<li><a href="editors.html"><i class="fa fa-circle-o"></i> Editors</a></li>-->
          <!--</ul>-->
        <!--</li>-->
        <!--<li class="treeview">-->
          <!--<a href="#">-->
            <!--<i class="fa fa-table"></i> <span>Tables</span>-->
            <!--<span class="pull-right-container">-->
              <!--<i class="fa fa-angle-left pull-right"></i>-->
            <!--</span>-->
          <!--</a>-->
          <!--<ul class="treeview-menu">-->
            <!--<li><a href="../tables/simple.html"><i class="fa fa-circle-o"></i> Simple tables</a></li>-->
            <!--<li><a href="../tables/data.html"><i class="fa fa-circle-o"></i> Data tables</a></li>-->
          <!--</ul>-->
        <!--</li>-->
        <!--<li>-->
          <!--<a href="../calendar.html">-->
            <!--<i class="fa fa-calendar"></i> <span>Calendar</span>-->
            <!--<span class="pull-right-container">-->
              <!--<small class="label pull-right bg-red">3</small>-->
              <!--<small class="label pull-right bg-blue">17</small>-->
            <!--</span>-->
          <!--</a>-->
        <!--</li>-->
        <!--<li>-->
          <!--<a href="../mailbox/mailbox.html">-->
            <!--<i class="fa fa-envelope"></i> <span>Mailbox</span>-->
            <!--<span class="pull-right-container">-->
              <!--<small class="label pull-right bg-yellow">12</small>-->
              <!--<small class="label pull-right bg-green">16</small>-->
              <!--<small class="label pull-right bg-red">5</small>-->
            <!--</span>-->
          <!--</a>-->
        <!--</li>-->
        <!--<li class="treeview">-->
          <!--<a href="#">-->
            <!--<i class="fa fa-folder"></i> <span>Examples</span>-->
            <!--<span class="pull-right-container">-->
              <!--<i class="fa fa-angle-left pull-right"></i>-->
            <!--</span>-->
          <!--</a>-->
          <!--<ul class="treeview-menu">-->
            <!--<li><a href="../examples/invoice.html"><i class="fa fa-circle-o"></i> Invoice</a></li>-->
            <!--<li><a href="../examples/profile.html"><i class="fa fa-circle-o"></i> Profile</a></li>-->
            <!--<li><a href="../examples/login.html"><i class="fa fa-circle-o"></i> Login</a></li>-->
            <!--<li><a href="../examples/register.html"><i class="fa fa-circle-o"></i> Register</a></li>-->
            <!--<li><a href="../examples/lockscreen.html"><i class="fa fa-circle-o"></i> Lockscreen</a></li>-->
            <!--<li><a href="../examples/404.html"><i class="fa fa-circle-o"></i> 404 Error</a></li>-->
            <!--<li><a href="../examples/500.html"><i class="fa fa-circle-o"></i> 500 Error</a></li>-->
            <!--<li><a href="../examples/blank.html"><i class="fa fa-circle-o"></i> Blank Page</a></li>-->
            <!--<li><a href="../examples/pace.html"><i class="fa fa-circle-o"></i> Pace Page</a></li>-->
          <!--</ul>-->
        <!--</li>-->
        <!--<li class="treeview">-->
          <!--<a href="#">-->
            <!--<i class="fa fa-share"></i> <span>Multilevel</span>-->
            <!--<span class="pull-right-container">-->
              <!--<i class="fa fa-angle-left pull-right"></i>-->
            <!--</span>-->
          <!--</a>-->
          <!--<ul class="treeview-menu">-->
            <!--<li><a href="#"><i class="fa fa-circle-o"></i> Level One</a></li>-->
            <!--<li>-->
              <!--<a href="#"><i class="fa fa-circle-o"></i> Level One-->
                <!--<span class="pull-right-container">-->
                  <!--<i class="fa fa-angle-left pull-right"></i>-->
                <!--</span>-->
              <!--</a>-->
              <!--<ul class="treeview-menu">-->
                <!--<li><a href="#"><i class="fa fa-circle-o"></i> Level Two</a></li>-->
                <!--<li>-->
                  <!--<a href="#"><i class="fa fa-circle-o"></i> Level Two-->
                    <!--<span class="pull-right-container">-->
                      <!--<i class="fa fa-angle-left pull-right"></i>-->
                    <!--</span>-->
                  <!--</a>-->
                  <!--<ul class="treeview-menu">-->
                    <!--<li><a href="#"><i class="fa fa-circle-o"></i> Level Three</a></li>-->
                    <!--<li><a href="#"><i class="fa fa-circle-o"></i> Level Three</a></li>-->
                  <!--</ul>-->
                <!--</li>-->
              <!--</ul>-->
            <!--</li>-->
            <!--<li><a href="#"><i class="fa fa-circle-o"></i> Level One</a></li>-->
          <!--</ul>-->
        <!--</li>-->
        <!--<li><a href="../../documentation/index.html"><i class="fa fa-book"></i> <span>Documentation</span></a></li>-->
        <!--<li class="header">LABELS</li>-->
        <!--<li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>-->
        <!--<li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>-->
        <!--<li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>-->
      <!--</ul>-->
    <!--</section>-->
    <!--&lt;!&ndash; /.sidebar &ndash;&gt;-->
  <!--</aside>-->
  <div id="leftSide" class="">
    <div class="col-xs-24 title">
      <router-link to="">狱务通信息管理平台</router-link>
    </div>
    <div class="col-xs-24 list">
      <a href="#">系统匹配<span class="glyphicon glyphicon-menu-right"></span></a>
      <ul class="clearfix">
        <li class="clearfix">
          <router-link to="">用户管理</router-link>
        </li>
        <li class="clearfix">
          <router-link to="">角色管理</router-link>
        </li>
        <li class="clearfix">
          <router-link to="">菜单管理</router-link>
        </li>
        <li class="clearfix">
          <router-link to="">监狱管理</router-link>
        </li>
      </ul>
    </div>
    <div class="col-xs-24 list">
      <a href="#">家属管理<span class="glyphicon glyphicon-menu-right"></span></a>
      <!--<ul class="clearfix">-->
        <!--<li class="clearfix">-->
          <!--<router-link to="">用户管理</router-link>-->
        <!--</li>-->
        <!--<li class="clearfix">-->
          <!--<router-link to="">角色管理</router-link>-->
        <!--</li>-->
        <!--<li class="clearfix">-->
          <!--<router-link to="">菜单管理</router-link>-->
        <!--</li>-->
        <!--<li class="clearfix">-->
          <!--<router-link to="">监狱管理</router-link>-->
        <!--</li>-->
      <!--</ul>-->
    </div>
    <div class="col-xs-24 list">
      <a href="#">订单管理<span class="glyphicon glyphicon-menu-right"></span></a>
      <!--<ul class="clearfix">-->
        <!--<li class="clearfix">-->
          <!--<router-link to="">用户管理</router-link>-->
        <!--</li>-->
        <!--<li class="clearfix">-->
          <!--<router-link to="">角色管理</router-link>-->
        <!--</li>-->
        <!--<li class="clearfix">-->
          <!--<router-link to="">菜单管理</router-link>-->
        <!--</li>-->
        <!--<li class="clearfix">-->
          <!--<router-link to="">监狱管理</router-link>-->
        <!--</li>-->
      <!--</ul>-->
    </div>
    <div class="col-xs-24 list">
      <a href="#">数据管理<span class="glyphicon glyphicon-menu-right"></span></a>
      <!--<ul class="clearfix">-->
        <!--<li class="clearfix">-->
          <!--<router-link to="">用户管理</router-link>-->
        <!--</li>-->
        <!--<li class="clearfix">-->
          <!--<router-link to="">角色管理</router-link>-->
        <!--</li>-->
        <!--<li class="clearfix">-->
          <!--<router-link to="">菜单管理</router-link>-->
        <!--</li>-->
        <!--<li class="clearfix">-->
          <!--<router-link to="">监狱管理</router-link>-->
        <!--</li>-->
      <!--</ul>-->
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
  @list:#252932;
  #leftSide{
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    width:18%;

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
      background:@list;
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
        height:45px;
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
