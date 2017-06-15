<template>
  <div class="addPrisonContent">
    <ol class="breadcrumb col-xs-24">
      <!--<li><a href="#">Home</a></li>-->
      <li>系统配置</li>
      <li class="active">监狱管理</li>
      <li class="active">新增监狱</li>
    </ol>

    <div class="col-xs-24">
      <h3>新增监狱</h3>
    </div>

    <div class="col-xs-24 addPrisonForm">
      <div class="col-xs-10 col-xs-offset-7">
        <div class="form-group col-xs-24">
          <label for="inputEmail0" class="col-xs-4 control-label">监狱名称</label>
          <div class="col-sm-15">
            <input type="text" class="form-control" id="inputEmail0" placeholder="" v-model="prisonName">
          </div>
        </div>

      </div>

      <div class="col-xs-24 buttonBox">
        <div class="col-xs-12">
          <button class="pull-right" @click="addJail()">保存</button>
        </div>
        <div class="col-xs-12s">
          <button class="pull-left" @click="back()">返回</button>
        </div>
      </div>

    </div>

    <div></div>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        prisonName: '', //监狱名称
        zipCode: ''//监狱代码
      }
    },
    methods:{
      //添加监狱
      addJail(){
        axios.post('/jail/addPrison.do',{
          prisonName:this.prisonName,
          zipCode:this.zipCode
        }).then(res=>{
          if(res.data.code == 0) {
            console.log(res.data.msg);
          }
        }).catch(err=>{
          console.log(err);
        })
      },
      back(){
        this.$router.push({
          path:'/prison_management'
        })
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
  .addPrisonContent{
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
