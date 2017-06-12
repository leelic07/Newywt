<template>
  <div id="commodityData" class="row">
    <div class="commodityDataContent clearfix">

      <ol class="breadcrumb col-xs-24">
        <!--<li><a href="#">Home</a></li>-->
        <li>数据管理</li>
        <li class="active">商品数据导出</li>
      </ol>

      <div class="col-xs-24">
        <div class="col-xs-24">
          <div class="col-xs-10">
            <div class="form-group col-xs-11">
              <div class="input-group date">
                <input type="text" class="form-control pull-right" id="datepicker">
                <div class="input-group-addon">
                  <i class="fa fa-calendar"></i>
                </div>
              </div>
              <!-- /.input group -->
            </div>
            <div class="col-xs-1 centerLine"><b class="pull-left">&macr;</b></div>
            <div class="form-group col-xs-11">
              <div class="input-group date">
                <input type="text" class="form-control pull-right" id="datepicker1">
                <div class="input-group-addon">
                  <i class="fa fa-calendar"></i>
                </div>
              </div>
              <!-- /.input group -->
            </div>
          </div>

        </div>

        <div class="col-xs-24 exportButtonBox">
          <input type="button" value="导出">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  //  import Page from '@/components/Paginator/Paginator'

  export default {
    data() {
      return {
        isManage:true,
        toUrl:'',
        fromUrl:''
      }
    },
//    components:{
//      Page
//    },
    watch:{
      $route(to, from) {//监听路由变化
        this.toUrl = to.path;
        this.fromUrl = from.path;
      },
      toUrl() {
        const editUrl = '/menu_management/add_menu';
//        const index = editUrl.lastIndexOf('/');
//        if (this.toUrl.substring(0, index) == "/crimsearch/edit") {//进入编辑页面
//          this.isManage = false;//将管理页隐藏
//        } else {
//          this.isManage = true;
//        }

        if (this.toUrl == '/menu_management/add_menu') {
          this.isManage = false;
        } else {
          this.isManage = true;
        }
      },
      fromUrl() {
        const editUrl = '/menu_management/add_menu';
        if(this.fromUrl == '/menu_management/add_menu'){

        }
      }
    },
    methods:{
      addMenu(){
        this.$router.push({
          path:'/menu_management/add_menu'
        })
      }
    },
    mounted(){
//
      //Date picker
      $('#datepicker').datepicker({
        autoclose: true
      });

      $('#datepicker1').datepicker({
        autoclose: true
      });
    },
    updated(){
      //Date picker
      $('#datepicker').datepicker({
        autoclose: true
      });

      $('#datepicker1').datepicker({
        autoclose: true
      });
    }
  }
</script>

<style type="text/less" lang="less">
  @contentWidth: 77.9%;
  @marginLeft: 20%;
  @white: #fff;
  @btnBlue: #6495ED;
  @btnRed: #E72E4D;
  @gray: #F7F7F7;
  @lightGray:#F4F4F4;
  @textRed: #E9445D;
  @textBlue: #6495ED;
  /**{*/
  /*border:1px solid #000;*/
  /*}*/
  #commodityData {
    .commodityDataContent {
      width: @contentWidth;
      margin-left: @marginLeft;
      margin-top: 20px;
      .breadcrumb{
        background:@white;
      }
      > div {
        &:nth-child(2) {
          background: @gray;
          padding: 10px 30px 15px 30px;
          border: 1px solid #E6E6E6;
        }
        > div {
          margin-top: 20px;
        }
      }
      .centerLine {
        b {
          margin-left: 32%;
          margin-top: 12px;
        }
      }

      .exportButtonBox{
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
