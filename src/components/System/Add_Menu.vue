<template>
  <!--<div id="addMenu" class="row">-->
  <div class="addMenuContent clearfix">
    <ol class="breadcrumb col-xs-24">
      <!--<li><a href="#">Home</a></li>-->
      <li>系统配置</li>
      <li class="active">菜单管理</li>
      <li class="active">新增菜单</li>
    </ol>

    <div class="col-xs-24">
      <h3>新增菜单</h3>
    </div>

    <div class="col-xs-24 addMenuForm">
      <div class="col-xs-10 col-xs-offset-7">
        <div class="form-group col-xs-24">
          <label for="inputEmail0" class="col-xs-4 control-label">菜单名称</label>
          <div class="col-sm-15">
            <input type="text" class="form-control" id="inputEmail0" placeholder="" v-model="menuName">
          </div>
        </div>

        <div class="form-group col-xs-24">
          <label class="col-xs-4 control-label">菜单类型</label>
          <div class="col-xs-5 check">
            <div class="checkBox pull-left" @click="isFirstLevel()">
              <div v-if='firstLevel'></div>
            </div>
            <p class="pull-left">一级菜单</p>
          </div>
          <div class="col-xs-5 check">
            <div class="checkBox pull-left" @click="isSecondLevel()">
              <div v-if="secondLevel"></div>
            </div>
            <p class="pull-left">二级菜单</p>
          </div>


          <!--<div class="form-group">-->
            <!--<label class="">-->
              <!--<div class="iradio_minimal-red checked" aria-checked="true" aria-disabled="false"-->
                   <!--style="position: relative;">-->
                <!--<input type="radio" name="r2" class="minimal-red" checked=""-->
                                                      <!--style="position: absolute; opacity: 0;">-->
                <!--<ins class="iCheck-helper"-->
                     <!--style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 1;"></ins>-->
              <!--</div>-->
            <!--</label>-->
            <!--<label class="">-->
              <!--<div class="iradio_minimal-red" aria-checked="false" aria-disabled="false" style="position: relative;">-->
                <!--<input type="radio" name="r2" class="minimal-red" style="position: absolute; opacity: 0;">-->
                <!--<ins class="iCheck-helper"-->
                     <!--style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 1;"></ins>-->
              <!--</div>-->
            <!--</label>-->
            <!--<label>-->
              <!--<div class="iradio_minimal-red disabled" aria-checked="false" aria-disabled="true"-->
                   <!--style="position: relative;"><input type="radio" name="r2" class="minimal-red" disabled=""-->
                                                      <!--style="position: absolute; opacity: 0;">-->
                <!--<ins class="iCheck-helper"-->
                     <!--style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>-->
              <!--</div>-->
            <!--</label>-->
          <!--</div>-->

        </div>

        <div class="form-group col-xs-24">
          <label for="inputEmail2" class="col-xs-4 control-label">访问路径</label>
          <div class="col-sm-15">
            <input type="text" class="form-control" id="inputEmail2" placeholder="" v-model="menuPath">
          </div>
        </div>

        <div id="parentMenu" class="form-group col-xs-24" v-if="parentMenuShow">
          <label class="col-xs-4 control-label">父级菜单</label>
          <div class="col-xs-6">
            <select class="form-control" v-model="pid">
              <option value="">请选择</option>
              <option v-for="olml in oneLevelMenuList" :value="olml.id" v-text="olml.menuName"></option>
              <!--<option>二级菜单</option>-->
              <!--<option>三级菜单</option>-->
              <!--<option>四级菜单</option>-->
              <!--<option>五级菜单</option>-->
            </select>
          </div>
        </div>

        <div class="form-group col-xs-24">
          <label for="inputEmail3" class="col-xs-4 control-label">显示顺序</label>
          <div class="col-sm-15">
            <input type="text" class="form-control" id="inputEmail3" placeholder="" v-model="menuOrder">
          </div>
        </div>

      </div>

      <div class="col-xs-24 buttonBox">
        <div class="col-xs-12">
          <button class="pull-right" @click="saveMenu()">保存</button>
        </div>
        <div class="col-xs-12">
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
        menuName: '',
        menuPath: '',
        menuType: '',
        menuOrder: '',
        pid:'',
        firstLevel:true,
        secondLevel:false,
        parentMenuShow:false,
        oneLevelMenuList:[]
      }
    },
    watch:{
//      pid(){
//        if(this.parentMenuShow == true){
//          this.pid = this.oneLevelMenuList[0].id;
//        }
//      }
    },
    methods: {
      //保存菜单
      saveMenu() {
        if(this.firstLevel == true){
          this.menuType = 1;
        }else if(this.secondLevel == true){
          this.menuType = 2;
        }
        axios.post('sysmenu/save.do', {
          params: {
            menuName: this.menuName,
            menuPath: this.menuPath,
            menuType: this.menuType,
            menuOrder: this.menuOrder,
            pid: this.pid
          }
        }).then(res => {
          if (res.data.code == 0) {
          }
        }).catch(err => {
          console.log(err);
        })
      },
      getOneLevelMenu() {
        axios.get('sysmenu/oneLevelList.do').then(res => {
          if (res.data.code == 0) {
            this.oneLevelMenuList = res.data.data;
//            if(this.parentMenuShow){
//              this.pid = this.oneLevelMenuList[0].id;
//            }
          }
        }).catch(err => {
          console.log(err);
        })
      },
      //一级菜单
      isFirstLevel(){
        if(this.firstLevel == true){
          this.firstLevel = false;
        }else{
          this.firstLevel = true;
          this.secondLevel = false;
          this.parentMenuShow = false;
        }
      },
      //二级菜单
      isSecondLevel(){
        if(this.secondLevel == true){
          this.secondLevel = false;
          this.parentMenuShow = false;
        }else{
          this.secondLevel = true;
          this.firstLevel = false;
          this.parentMenuShow = true;
        }
      },
      back(){
          this.$router.push({
            path:'/menu_management'
          });
      }
    },
    mounted() {
//      window.location.href="www.baidu.com";
      //Red color scheme for iCheck
//      $('input[type="radio"].minimal-red').iCheck({
//        radioClass: 'iradio_minimal-red'
//      });

//      $('.checkBox').ywtcheckbox();
      this.getOneLevelMenu();
    },
    updated(){
//      $('input[type="radio"].minimal-red').iCheck({
//        radioClass: 'iradio_minimal-red'
//      });
    }
  }
</script>

<style type="text/less" lang="less">
  @contentWidth: 77.9%;
  @marginLeft: 20%;
  @gray: #E6E6E6;
  @darkGray: #9D9D9D;
  @black: #666666;
  @white: #fff;
  @btnBlue: #6495ED;
  @btnRed: #E72E4D;
  /**{*/
  /*border:1px solid #000;*/
  /*}*/
  /*#addMenu{*/
  .addMenuContent {
    width: @contentWidth;
    margin-left: @marginLeft;
    .breadcrumb {
      background: @white;
      margin-top: 20px;
    }
    > div {
      &:first-child {
        height: 62px;
      }
    }
    h3 {
      margin: 0;
      line-height: 62px;
      font-weight: bold;
    }

    .addMenuForm {
      border: 1px solid @gray;
      > div {
        &:first-child {
          margin-top: 35px;
          margin-bottom: 10px;
        }

        &:nth-child(2) {
          height: 79px;
          border-top: 1px solid @gray;
        }
      }

      .check {
        .checkBox {
          position: relative;
          width: 17px;
          height: 17px;
          border: 1px solid #BDBDBD;
          border-radius: 50%;
          margin-top: 11px;
          > div {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -5.5px;
            margin-top: -5.5px;
            width: 11px;
            height: 11px;
            border: 1px solid #EB7C29;
            background: #EB7C29;
            border-radius: 50%;
          }
          &:hover{
            cursor:pointer;
          }
        }
        p {
          margin-top: 10px;
          margin-left: 5%;
        }
      }

      label {
        height: 35px;
        text-align: center;
        line-height: 35px;
      }

      .buttonBox {
        > div {
          &:first-child {
            button {
              .button(@btnBlue, @white, @btnBlue);
              margin-top: 21px;
              margin-right: 10%;
            }
          }
          &:nth-child(2) {
            button {
              .button(@white, @black, @gray);
              margin-top: 21px;
            }
          }
        }
      }
    }
  }

  .button(@bgColor,@color,@borderColor) {
    width: 119px;
    height: 34px;
    color: @color;
    background: @bgColor;
    border: 1px solid @borderColor;
    border-radius: 2px;
  }

  /*}*/
</style>
