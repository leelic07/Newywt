<template>
  <div class="addRoleContent">
    <ol class="breadcrumb col-xs-24">
      <!--<li><a href="#">Home</a></li>-->
      <li>系统配置</li>
      <li class="active">角色管理</li>
      <li class="active">新增角色</li>
    </ol>

    <div class="col-xs-24">
      <h3>新增角色</h3>
    </div>

    <div class="col-xs-24 addPrisonForm">
      <div class="col-xs-10 col-xs-offset-7">
        <div class="form-group col-xs-24">
          <label for="inputRoleName" class="col-xs-4 control-label">角色名称</label>
          <div class="col-sm-15">
            <input type="text" class="form-control" id="inputRoleName" placeholder="">
          </div>
        </div>

        <div class="form-group col-xs-24">
          <label for="inputRoleDescription" class="col-xs-4 control-label">角色描述</label>
          <div class="col-sm-15">
            <!--<input type="text" class="form-control" id="inputEmail1" placeholder="">-->
            <textarea name="" class="form-control" id="inputRoleDescription" cols="30" rows="10"></textarea>
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

    <div></div>
  </div>
</template>

<script>
  export default {
      data(){
          return {

          }
      }
  }
</script>

<style type="text/less" lang="less">
  @contentWidth: 77.9%;
  @marginLeft: 20%;
  @white:#fff;
  @black:#666666;
  @gray:#E6E6E6;
  @darkGray:#9D9D9D;
  @black:#666666;
  @btnBlue:#6495ED;
  @btnRed:#E72E4D;
  .addRoleContent{
    width:@contentWidth;
    margin-left:@marginLeft;
    .breadcrumb{
      background:@white;
      margin-top:20px;
    }
    h3{
      margin:0;
      font-weight:bold;
    }

    .addPrisonForm{
      border:1px solid @gray;
      margin-top:22px;
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

    .button(@bgColor,@color,@borderColor){
      width:119px;
      height:34px;
      color:@color;
      background:@bgColor;
      border:1px solid @borderColor;
      border-radius:2px;
    }

  }
</style>
