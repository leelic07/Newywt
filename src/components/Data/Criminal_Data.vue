<template>
  <div id="criminalData" class="row">
    <div class="criminalDataContent clearfix">
      <ol class="breadcrumb col-xs-24">
        <!--<li><a href="#">Home</a></li>-->
        <li>数据管理</li>
        <li class="active">犯人数据导入</li>
      </ol>

      <div class="col-xs-24">
        <p>限制文件后缀为 <span class="textRed">.xls</span> 或 <span class="textRed">.xlsx</span> </p>
      </div>

      <div class="col-xs-24 selectButtonBox">
        <!--<input type="file">-->
        <input class="pull-left" type="button" value="选择本地文件">
        <p class="pull-left">已选择"本地文件.xlsx"</p>
      </div>

      <div class="col-xs-24 importButtonBox">
        <input class="pull-left" type="button" value="导入文件">
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

<style type="text/less" lang="less">
  @contentWidth: 77.9%;
  @marginLeft: 20%;
  @marginTop:90px;
  @white: #fff;
  @textRed:#E72F4B;
  @darkGray:#959595;
  #criminalData{
    margin-top:@marginTop;
    .criminalDataContent{
      width:@contentWidth;
      margin-left:@marginLeft;
      .breadcrumb{
        background:@white;
      }

      .textRed{
        color:@textRed;
      }

      .selectButtonBox{
        input{
          .button(#6096EE,@white,#6096EE,117px,33px)
        }

        P{
          color:@darkGray;
          margin-top:7px;
          margin-left:1%;
        }
      }

      .importButtonBox{
        margin-top:40px;
        input{
          .button(@white,#6096EE,#6096EE,117px,33px)
        }
      }

    }
  }

  .button(@color,@bgColor,@borderColor,@width,@height){
    color:@color;
    background:@bgColor;
    border:1px solid @borderColor;
    border-radius:2px;
    width:@width;
    height:@height;
  }
</style>
