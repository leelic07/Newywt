<template>
  <!--<div id="setAuthority" class="row">-->
    <div class="setAuthorityContent clearfix">
      <ol class="breadcrumb col-xs-24">
        <!--<li><a href="#">Home</a></li>-->
        <li>系统配置</li>
        <li class="active">角色管理</li>
        <li class="active">设置权限</li>
      </ol>

      <div class="col-xs-24">
        <h3>设置权限</h3>
      </div>

    <div class="col-xs-24 selectContent">
      <div class="col-xs-12">
        <div class="col-xs-22">
          <div class="col-xs-24">
            <b class="pull-left">系统配置权限</b>
            <div class="selectBox pull-right"></div>
            <span class="pull-right">全选</span>
          </div>
          <div class="col-xs-24">
            <p class="pull-left">用户管理</p>
            <div class="selectBox active pull-right"></div>
          </div>
          <div class="col-xs-24">
            <p class="pull-left">角色管理</p>
            <div class="selectBox active pull-right"></div>
          </div>
          <div class="col-xs-24">
            <p class="pull-left">菜单管理</p>
            <div class="selectBox active pull-right"></div>
          </div>
          <div class="col-xs-24">
            <p class="pull-left">监狱管理</p>
            <div class="selectBox active pull-right"></div>
          </div>
        </div>

        <div class="col-xs-22">
          <div class="col-xs-24">
            <b class="pull-left">订单管理</b>
            <div class="selectBox pull-right"></div>
            <span class="pull-right">全选</span>
          </div>
          <div class="col-xs-24">
            <p class="pull-left">订单统计</p>
            <div class="selectBox active pull-right"></div>
          </div>
        </div>

        </div>
        <div class="col-xs-12">
          <div class="col-xs-22 col-xs-offset-2">
            <div class="col-xs-24">
              <b class="pull-left">家属管理权限</b>
              <div class="selectBox pull-right"></div>
              <span class="pull-right">全选</span>
            </div>
            <div class="col-xs-24">
              <p class="pull-left">登陆统计</p>
              <div class="selectBox active pull-right"></div>
            </div>
            <div class="col-xs-24">
              <p class="pull-left">注册统计</p>
              <div class="selectBox active pull-right"></div>
            </div>
            <div class="col-xs-24">
              <p class="pull-left">余额统计</p>
              <div class="selectBox active pull-right"></div>
            </div>

          </div>

          <div class="col-xs-22 col-xs-offset-2">
            <div class="col-xs-24">
              <b class="pull-left">数据管理权限</b>
              <div class="selectBox pull-right"></div>
              <span class="pull-right">全选</span>
            </div>
            <div class="col-xs-24">
              <p class="pull-left">商品数据导出</p>
              <div class="selectBox active pull-right"></div>
            </div>
            <div class="col-xs-24">
              <p class="pull-left">犯人数据导入</p>
              <div class="selectBox active pull-right"></div>
            </div>
            <div class="col-xs-24">
              <p class="pull-left">法律法规数据导入</p>
              <div class="selectBox active pull-right"></div>
            </div>

          </div>
        </div>
      </div>

      <div class="col-xs-24 buttonBox">
        <div class="col-xs-12">
          <button class="pull-right">保存</button>
        </div>
        <div class="col-xs-12s">
          <button class="pull-left">返回</button>
        </div>
      </div>

    </div>
  <!--</div>-->
</template>

<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>

<style type="text/less" lang="less">
  @contentWidth: 77.9%;
  @marginLeft: 20%;
  @white:#fff;
  @gray:#C6C6C6;
  @darkGray:#909090;
  @borderGray:#E2E2E2;
  @btnBlue:#6495ED;
  @btnRed:#E72E4D;
  @black:#666666;
  /**{*/
    /*border:1px solid #000;*/
  /*}*/
  /*#setAuthority{*/
    .setAuthorityContent{
      width:@contentWidth;
      margin-left:@marginLeft;
      margin-top: 20px;
      .breadcrumb{
        background:@white;
      }
      h3{
        margin:0;
        font-weight:bold;
      }
      .selectContent{
        margin-top:23px;
        >div{
          >div{
            border:1px solid @borderGray;
            margin-bottom:20px;
            >div{
              &:first-child{
                border-bottom:1px dashed @gray;
                padding-bottom:10px;
                margin-bottom:12px;
                span{
                  margin-top:6px;
                  margin-right:2%;
                  color:@darkGray;
                }

              }
            }
            /*height:50px;*/
            padding:15px 2%;
            .selectBox {
              width: 15px;
              height: 15px;
              border: 1px solid #C9C9C9;
              border-radius: 1px;
              /*margin-left: 25%;*/
              margin-top:10px;
            }
            .active {
              border-color: #FF5050;
              box-shadow: 0 0 3px 0 #FF5050;
              background: url(../../../static/images/boxActive.png) no-repeat center;
            }
          }
        }
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

      .button(@bgColor,@color,@borderColor){
        width:119px;
        height:34px;
        color:@color;
        background:@bgColor;
        border:1px solid @borderColor;
        border-radius:2px;
      }

    }
  /*}*/
</style>
