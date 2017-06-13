<template>
  <div id="menuManagement" class="row">
    <div class="menuContent clearfix" v-if="isManage">

      <ol class="breadcrumb col-xs-24">
        <!--<li><a href="#">Home</a></li>-->
        <li>系统配置</li>
        <li class="active">菜单管理</li>
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

              <div class="col-xs-4">
                <label class="pull-left">菜单类型</label>
              </div>

              <div class="col-xs-5">
                <select class="form-control">
                  <option>一级菜单</option>
                  <option>二级菜单</option>
                  <option>三级菜单</option>
                  <option>四级菜单</option>
                  <option>五级菜单</option>
                </select>
              </div>

            </div>
          </div>

        </div>

        <div class="col-xs-24 searchBox">
          <!--<div class="input-group input-group-sm col-xs-10">-->
          <!--<input type="text" class="form-control">-->
          <!--<span class="input-group-btn">-->
          <!--<button type="button" class="btn btn-info btn-flat">Go!</button>-->
          <!--</span>-->
          <!--</div>-->

          <div class="form-group col-xs-10">
            <div class="col-xs-20">
              <input type="text" class="form-control" placeholder="输入菜单名称进行查询">
            </div>
            <div class="col-xs-3">
              <button class="btn btn-block glyphicon glyphicon-search pull-left searchBtn"></button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xs-24 buttonBox">
        <button class="btn btn-flat pull-left" @click="addMenu()">新增菜单</button>
        <button class="btn btn-flat pull-right">批量删除</button>
      </div>

      <div class="col-xs-24 menuTable">
        <table class="table table-responsive table-bordered">
          <thead>
          <tr>
            <th class="col-xs-1">
              <div class="selectBox active"></div>
            </th>
            <th>序号</th>
            <th>菜单名称</th>
            <th>菜单类型</th>
            <th>父级菜单名称</th>
            <th>访问路径</th>
            <th colspan="2">操作</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <div class="selectBox"></div>
            </td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>
              <a href="#" class="textBlue">编辑</a>
              <a href="#" class="textRed">删除</a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="selectBox"></div>
            </td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>
              <a href="#" class="textBlue">编辑</a>
              <a href="#" class="textRed">删除</a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="selectBox"></div>
            </td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>
              <a href="#" class="textBlue">编辑</a>
              <a href="#" class="textRed">删除</a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="selectBox"></div>
            </td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>
              <a href="#" class="textBlue">编辑</a>
              <a href="#" class="textRed">删除</a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="selectBox"></div>
            </td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>
              <a href="#" class="textBlue">编辑</a>
              <a href="#" class="textRed">删除</a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="selectBox"></div>
            </td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>
              <a href="#" class="textBlue">编辑</a>
              <a href="#" class="textRed">删除</a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="selectBox"></div>
            </td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>
              <a href="#" class="textBlue">编辑</a>
              <a href="#" class="textRed">删除</a>
            </td>
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
  @marginTop:70px;
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
  #menuManagement {
    margin-top:@marginTop;
    .menuContent {
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

      .menuTable {
        position: relative;
        margin-bottom: 75px;
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
