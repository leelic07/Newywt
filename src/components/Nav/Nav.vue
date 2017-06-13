<template>
  <div id="topNav" class="row">
    <div class="col-xs-24">
      <div class="col-xs-16"></div>

      <div class="col-xs-2">
        <div class="photo">

        </div>
      </div>
      <div class="col-xs-3 user">
        <div class="col-xs-24">
          <a href="#" class="col-xs-24 pull-left">
            <span class="pull-left">Administration</span>
            <span class="pull-left glyphicon glyphicon-menu-down"></span>
          </a>
        </div>
      </div>
      <div class="col-xs-2 logout">
        <a href="#" class="pull-right" @click="logOut()">
          退出 <span class="glyphicon glyphicon-log-in"></span>
        </a>
      </div>
    </div>
    <div class="bottomline pull-left"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return {

      }
    },
    methods:{
        logOut(){
          axios.get('/logout.do').then(res=>{
            console.log(res.data)
            if(res.data.code == 0) {
              this.$router.push('/login')
            }else if(res.data.code == 1) {
              console.log(res.data.msg);
              console.log('失败');
            }else if(res.data.code == 2) {
              console.log(res.data.msg);
              console.log('没有权限');
            }else {
              console.log(res.data.msg);
            }
          }).catch(err=>{
              console.log(err);
          })
        }
    }
  }
</script>

<style type="text/less" lang="less">
  @white:#fff;
  @marginLeft:2.4%;
  /**{*/
    /*border:1px solid #000;*/
  /*}*/
  #topNav{
    position:fixed;
    top:0;
    z-index:10;
    width:82%;
    margin-left:18%;
    background:@white;
    /*>div{*/
      /*&:nth-child(2){*/
        /*width:95%;*/

        /*border:1px solid #F0F0F0;*/
      /*}*/
    /*}*/
    .breadcrumb {
      background:@white;
      margin:11px 0;
      margin-left:1%;
    }

    .photo {
      width:50px;
      height:50px;
      border:1px solid #000;
      border-radius:50%;
      margin-top:8px;
      margin-left:17%;
    }

    .user{
      margin-top:20px;
      a{
        color:#5A5A5A;
        span{
          margin-top:3px;
          /*margin-left:1%;*/
          &:nth-child(2){
            margin-left:5%;
          }
        }
      }
    }

    .logout{
      a{
        color:#343434;
        margin-top:23px;
      }
    }

    .bottomline{
      width:95%;
      margin-top:10px;
      margin-left:@marginLeft;
      border-bottom:2px solid #F0F0F0;
    }
  }
</style>
