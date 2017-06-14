<template>
  <!--<div id="addMenu" class="row">-->
  <div class="editUserContent clearfix">
    <ol class="breadcrumb col-xs-24">
      <!--<li><a href="#">Home</a></li>-->
      <li>系统配置</li>
      <li class="active">用户管理</li>
      <li class="active">新增用户</li>
    </ol>

    <div class="col-xs-24">
      <h3>新增用户</h3>
    </div>

    <div class="col-xs-24 editUserForm">
      <div class="col-xs-10 col-xs-offset-7">
        <div class="form-group col-xs-24">
          <label for="inputLoginName" class="col-xs-4 control-label">登录账号</label>
          <div class="col-sm-15">
            <input type="text" class="form-control" id="inputLoginName" placeholder="" v-model="loginName">
          </div>
        </div>

        <!--<div class="form-group col-xs-24">-->
        <!--<label class="col-xs-4 control-label">菜单类型</label>-->
        <!--<div class="col-xs-5 check">-->
        <!--<div class="checkBox pull-left">-->
        <!--<div></div>-->
        <!--</div>-->
        <!--<p class="pull-left">一级菜单</p>-->
        <!--</div>-->
        <!--<div class="col-xs-5 check">-->
        <!--<div class="checkBox pull-left">-->
        <!--&lt;!&ndash;<div></div>&ndash;&gt;-->
        <!--</div>-->
        <!--<p class="pull-left">二级菜单</p>-->
        <!--</div>-->
        <!--</div>-->

        <div class="form-group col-xs-24">
          <label for="inputEmail2" class="col-xs-4 control-label">登录密码</label>
          <div class="col-sm-15">
            <input type="password" class="form-control" id="inputEmail2" placeholder="" v-model="loginPwd">
          </div>
        </div>

        <div class="form-group col-xs-24">
          <label for="inputUserName" class="col-xs-4 control-label">用户名称</label>
          <div class="col-sm-15">
            <input type="text" class="form-control" id="inputUserName" placeholder="" v-model="realName">
          </div>
        </div>

        <div class="form-group col-xs-24">
          <label for="inputEmail" class="col-xs-4 control-label">用户邮箱</label>
          <div class="col-sm-15">
            <input type="email" class="form-control" id="inputEmail" placeholder="" v-model="email">
          </div>
        </div>

        <div class="form-group col-xs-24">
          <label class="col-xs-4 control-label">用户角色</label>
          <div class="col-xs-6">
            <select class="form-control" v-model="roleId">
              <option value="">全部</option>
              <option v-for="rl in roleList" :value="rl.id" v-text="rl.roleName"></option>
              <!--<option>二级菜单</option>-->
              <!--<option>三级菜单</option>-->
              <!--<option>四级菜单</option>-->
              <!--<option>五级菜单</option>-->
            </select>
          </div>
        </div>

        <div class="form-group col-xs-24">
          <label class="col-xs-4 control-label">监狱</label>
          <div class="col-xs-6">
            <select class="form-control" v-model="jailId">
              <option value="">全部</option>
              <option></option>
              <!--<option>二级菜单</option>-->
              <!--<option>三级菜单</option>-->
              <!--<option>四级菜单</option>-->
              <!--<option>五级菜单</option>-->
            </select>
          </div>
        </div>

      </div>

      <div class="col-xs-24 buttonBox">
        <div class="col-xs-12">
          <button class="pull-right" @click="saveUser()">保存</button>
        </div>
        <div class="col-xs-12s">
          <button class="pull-left" @click="back()">返回</button>
        </div>
      </div>

    </div>

    <div></div>
  </div>
  <!--</div>-->
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        id:'',//用户id
        realName:'',//用户姓名
        loginName:'',//登录用户,
        loginPwd:'',
        email:'',
        jailId:'',
        roleId:'',
        roleList:[]
      }
    },
    methods:{
      getRoles(){
        axios.get('sysrole/list.do').then(res => {
//          console.log(res.data);
          if(res.data.code == 0){
            this.roleList = res.data.data;
          }
        }).catch(err => {
          console.log(err);
        })
      },
      saveUser(){
        axios.post('sysuser/save.do',{
          params:{
            realName:this.realName,
            loginName:this.loginName,
            loginPwd:this.loginPwd,
            email:this.email,
            roleId:this.roleId,
            jailId:this.jailId
          }
        }).then(res => {
//          console.log(res.data);
          if(res.data.code == 0){
            this.roleList = res.data.data;
          }
        }).catch(err => {
          console.log(err);
        })
      },
      back(){
//        window.history.go(-1);
        this.$router.push({
          path:'/user_management'
        })
      }
    },
    mounted(){
//      window.location.href="www.baidu.com";
      this.getRoles();
    }
  }
</script>

<style type="text/less" lang="less">
  @contentWidth:77.9%;
  @marginLeft:20%;
  @gray:#E6E6E6;
  @darkGray:#9D9D9D;
  @black:#666666;
  @white:#fff;
  @btnBlue:#6495ED;
  @btnRed:#E72E4D;
  /**{*/
  /*border:1px solid #000;*/
  /*}*/
  /*#addMenu{*/
  .editUserContent{
    width:@contentWidth;
    margin-left:@marginLeft;
    .breadcrumb{
      background:@white;
      margin-top:20px;
    }
    >div{
      &:first-child{
        height:62px;
      }
    }
    h3{
      margin:0;
      line-height:62px;
      font-weight:bold;
    }

    .editUserForm{
      border:1px solid @gray;
      >div{
        &:first-child{
          margin-top:35px;
          margin-bottom:10px;
        }

        &:nth-child(2){
          height:79px;
          border-top:1px solid @gray;
        }
      }

      .check{
        .checkBox{
          position:relative;
          width:17px;
          height:17px;
          border:1px solid #BDBDBD;
          border-radius:50%;
          margin-top:11px;
          >div{
            position:absolute;
            top:50%;
            left:50%;
            margin-left:-5.5px;
            margin-top:-5.5px;
            width:11px;
            height:11px;
            border:1px solid #EB7C29;
            background:#EB7C29;
            border-radius:50%;
          }
        }
        p{
          margin-top:10px;
          margin-left:5%;
        }
      }

      label{
        height:35px;
        text-align:center;
        line-height:35px;
      }

      .buttonBox{
        >div{
          &:first-child{
            button{
              .button(@btnBlue,@white,@btnBlue);
              margin-top:21px;
              margin-right:10%;
            }
          }
          &:nth-child(2){
            button{
              .button(@white,@black,@gray);
              margin-top:21px;
            }
          }
        }
      }
    }
  }

  .button(@bgColor,@color,@borderColor){
    width:119px;
    height:34px;
    color:@color;
    background:@bgColor;
    border:1px solid @borderColor;
    border-radius:2px;
  }
  /*}*/
</style>
