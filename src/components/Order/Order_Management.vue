<template>
  <div id="orderManagement" class="row">
    <div class="orderManagementContent clearfix" v-if="isManage">

      <ol class="breadcrumb col-xs-24">
        <!--<li><a href="#">Home</a></li>-->
        <li>订单管理</li>
        <li class="active">订单统计</li>
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

          <div class="col-xs-14 menuType">
            <div class="form-group col-xs-24">

              <div class="col-xs-6">
                <label class="pull-left">支付结果状态</label>
              </div>

              <div class="col-xs-5">
                <select class="form-control" v-model="status">
                  <option value="">请选择</option>
                  <option value="0">支付成功</option>
                  <option value="1">支付失败</option>
                </select>
              </div>

            </div>
          </div>

        </div>

        <div class="col-xs-24 searchBox">
          <div class="form-group col-xs-10">
            <div class="col-xs-20">
              <input type="text" class="form-control" placeholder="输入监狱名称进行查询">
            </div>
            <div class="col-xs-3">
              <button class="btn btn-block glyphicon glyphicon-search pull-left searchBtn" @click="getOrders()"></button>
            </div>
          </div>

          <div class="col-xs-14 menuType">
            <div class="form-group col-xs-24">

              <div class="col-xs-6">
                <label class="pull-left">监狱名称</label>
              </div>

              <div class="col-xs-5">
                <select class="form-control" v-model="jailId">
                  <option v-for="jl in jailList"></option>
                </select>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="col-xs-24 orderTable">
        <table class="table table-responsive table-bordered">
          <thead>
          <tr>
            <th>序号</th>
            <th>日期</th>
            <th>订单数</th>
            <th>支付结果状态</th>
            <th>所属监狱名称</th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="ol,index in orderList">
              <td v-text="index"></td>
              <td>{{ol.createdAt}}</td>
              <td v-text="ol.number"></td>
              <td>{{ol.status}}</td>
              <td v-text="ol.jailId"></td>
            </tr>
          </tbody>
        </table>

        <!--<Page></Page>-->
        <div class="tableFooter col-xs-24">

        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  //  import Page from '@/components/Paginator/Paginator'

  export default {
    data() {
      return {
        isManage:true,
        toUrl:'',
        fromUrl:'',
        page:'', //第几页
        rows:'',//每页多少条
        jailId:'',//监狱ID
        status:'',//状态
        startTime:'',//结束时间
        endTime:'',//开始时间
        orderList:[]//订单列表
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
      },
      //获取订单列表
      getOrders(){
        axios.get('report/orderPage.do',{
          params:{
            page:this.page,
            rows:this.rows,
            jailId:this.jailId,
            status:this.status,
            startTime:this.dateFormat($('#datepicker').val()),
            endTime:this.dateFormat($('#datepicker1').val())
          }
        }).then(res => {
          if (res.data.code == 0) {
            this.orderList = res.data.data;
          }
        }).catch(err => {
          console.log(err);
        })
      },

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

      this.getOrders();
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
  @marginTop: 90px;
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
  #orderManagement {
    margin-top:@marginTop;
    .orderManagementContent {
      width: @contentWidth;
      margin-left: @marginLeft;
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

      .menuType {
        .form-group {
          > div {
            &:first-child {
              label {
                margin-left: 25%;
                margin-top: 8px;
              }
            }
          }
        }
      }

      .searchBox {
        input {
          height: 38px;
        }
        .searchBtn {
          background: @btnBlue;
          height: 36px;
          border: none;
          color: @white;
        }
      }

      .buttonBox {
        margin-top: 20px;
        margin-bottom: 20px;
        button {
          width: 107px;
          height: 38px;
          color: @white;
          &:first-child {
            background: @btnBlue;
          }
          &:nth-child(2) {
            background: @btnRed;
          }
        }
      }

      .orderTable {
        position: relative;
        margin-bottom: 75px;
        margin-top:30px;
        .table {
          margin-bottom: 0;
          color: #929292;
          /*a{*/
          /*&:hover{*/
          /*text-decoration:none;*/
          /*}*/
          /*}*/
          .textBlue {
            color: @textBlue;
          }
          .textRed {
            color: @textRed;
          }
          thead {
            tr {
              background: @gray;
            }
          }

          tbody {
            tr {
              td {
                a {
                  &:nth-child(2) {
                    margin-left: 20%;
                  }
                }
              }
            }
          }
          .selectBox {
            width: 15px;
            height: 15px;
            border: 1px solid #C9C9C9;
            border-radius: 1px;
            margin-left: 25%;
          }
          .active {
            border-color: #FF5050;
            box-shadow: 0 0 3px 0 #FF5050;
            background: url(../../../static/images/boxActive.png) no-repeat center;
          }
        }

        .tableFooter {
          position: absolute;
          bottom: -55px;
          background: @gray;
          height: 55px;
          border: 1px solid @lightGray;
          /*border-top: 0;*/
          -webkit-border-radius-bottomleft: 3px;
          -webkit-border-radius-bottomright: 3px;
        }
      }
    }
  }
</style>
