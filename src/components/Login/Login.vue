<template>
  <div id="login" class="">
    <div class="row logo">
      <div class="col-xs-5">
        <img class="pull-right" src="@/../static/images/logo.png" alt="">
      </div>
      <div class="col-xs-19">
        <span class="pull-left">狱务通信息管理平台</span>
      </div>
    </div>

    <div class="row loginBox">
      <div class="col-xs-24">
        <div class="col-xs-5 col-xs-push-14">
          <div class="col-xs-24">
            <p>用户登录</p>
          </div>
          <!--<div class="input col-xs-24">-->
            <!--<input type="text" placeholder="请输入用户名">-->
          <!--</div>-->
          <div class="form-group col-xs-20 col-xs-offset-2">
            <!--<label for="exampleInputEmail1">Email address</label>-->
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入用户名">
          </div>
          <!--<div class="input col-xs-24">-->
            <!--<input type="text" placeholder="请输入密码">-->
          <!--</div>-->
          <div class="form-group col-xs-20 col-xs-offset-2">
            <!--<label for="exampleInputPassword1">Password</label>-->
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="请输入密码">
          </div>
          <div class="login-btn col-xs-20 col-xs-offset-2">
            <button type="button" class="btn btn-block btn-login">登录</button>
            <!--<button type="button" class="btn btn-block btn-warning btn-lg">登录</button>-->
          </div>
        </div>
      </div>
    </div>

    <div class="row footer">
      <div class="col-xs-24">
        <p class="text-center">copyright &copy; 2009-2014 www.gouke.com 版权所有</p>
      </div>
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

<style type="text/less" lang="less" scoped>
  @white:#fff;
  @inputGray:#999;
  /**{*/
    /*border:1px solid #000;*/
  /*}*/
  #login{
    .logo{
      /*padding:18px 0 18px 0;*/
      margin-top:5%;
      >div{
        &:first-child{
          padding-right:1%;
        }

        &:nth-child(2){
          color:#6395EE;
          font-weight:bold;
          font-size:20px;
          span{
            margin-top:3px;
            padding:5px 0 5px 0;
            padding-left:1%;
            border-left:2px solid #EBEBEB;
          }
        }
      }
    }

    .loginBox {
      >div {
        &:first-child {
          background:url(../../../static/images/login-background.png) no-repeat center;
          height:500px;
          margin-top:1%;
          >div {
            margin-top:100px;
            background:#47515B;
            border-radius:3px;
            border:2px solid #525D69;
            padding:30px 0 30px 0;
            >div {
              &:first-child {
                p {
                  color:@white;
                  text-align:center;
                  font-size:17px;
                  font-weight:bold;
                }
              }
            }
          }
        }
      }

      .form-group{
        input{
          background-color:transparent;
          border-radius:2px;
          margin-top:10px;
          height:40px;
          color:@inputGray;
        }
      }

      .login-btn{
        margin-top:20px;
        .btn-login{
          height:40px;
          background:#E87710;
          color:@white;
          font-size:16px;
          &:hover{
            background:#D97116;
          }
        }
      }
    }

    .footer {
      margin-top:2%;
      p {
        color:#A0A0A0;
      }
    }
  }
</style>
