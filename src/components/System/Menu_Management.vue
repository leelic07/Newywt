<template>
  <div id="menuManagement" class="row">
    <div class="menuContent clearfix">
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
        <button class="btn btn-flat pull-left">新增菜单</button>
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

  </div>
</template>

<script>
//  import Page from '@/components/Paginator/Paginator'

  export default {
    data() {
        return {

        }
    },
//    components:{
//      Page
//    },
    mounted(){
//      $(function () {
        //Initialize Select2 Elements
//        $(".select2").select2();
//
//        //Datemask dd/mm/yyyy
//        $("#datemask").inputmask("dd/mm/yyyy", {"placeholder": "dd/mm/yyyy"});
//        //Datemask2 mm/dd/yyyy
//        $("#datemask2").inputmask("mm/dd/yyyy", {"placeholder": "mm/dd/yyyy"});
//        //Money Euro
//        $("[data-mask]").inputmask();
//
//        //Date range picker
//        $('#reservation').daterangepicker();
//        //Date range picker with time picker
//        $('#reservationtime').daterangepicker({timePicker: true, timePickerIncrement: 30, format: 'MM/DD/YYYY h:mm A'});
//        //Date range as a button
//        $('#daterange-btn').daterangepicker(
//          {
//            ranges: {
//              'Today': [moment(), moment()],
//              'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
//              'Last 7 Days': [moment().subtract(6, 'days'), moment()],
//              'Last 30 Days': [moment().subtract(29, 'days'), moment()],
//              'This Month': [moment().startOf('month'), moment().endOf('month')],
//              'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
//            },
//            startDate: moment().subtract(29, 'days'),
//            endDate: moment()
//          },
//          function (start, end) {
//            $('#daterange-btn span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
//          }
//        );

        //Date picker
        $('#datepicker').datepicker({
          autoclose: true
        });

        $('#datepicker1').datepicker({
          autoclose: true
        });
        //iCheck for checkbox and radio inputs
//        $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
//          checkboxClass: 'icheckbox_minimal-blue',
//          radioClass: 'iradio_minimal-blue'
//        });
//        //Red color scheme for iCheck
//        $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
//          checkboxClass: 'icheckbox_minimal-red',
//          radioClass: 'iradio_minimal-red'
//        });
//        //Flat red color scheme for iCheck
//        $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
//          checkboxClass: 'icheckbox_flat-green',
//          radioClass: 'iradio_flat-green'
//        });
//
//        //Colorpicker
//        $(".my-colorpicker1").colorpicker();
//        //color picker with addon
//        $(".my-colorpicker2").colorpicker();
//
//        //Timepicker
//        $(".timepicker").timepicker({
//          showInputs: false
//        });
//      });
    }
  }
</script>

<style type="text/less" lang="less">
  @contentWidth:77.9%;
  @marginLeft:20%;
  @white:#fff;
  @btnBlue:#6495ED;
  @btnRed:#E72E4D;
  @gray:#F7F7F7;
  @textRed:#E9445D;
  @textBlue:#6495ED;
  /**{*/
    /*border:1px solid #000;*/
  /*}*/
  #menuManagement{
    .menuContent{
      width:@contentWidth;
      margin-left:@marginLeft;
      margin-top:20px;
      >div{
        &:first-child{
          background:#F7F7F7;
          padding:10px 30px 15px 30px;
          border:1px solid #E6E6E6;
        }
        >div{
          margin-top:20px;
        }
      }
      .centerLine{
        b{
          margin-left:32%;
          margin-top:12px;
        }
      }

      .menuType{
        .form-group{
          >div{
            &:first-child{
              label{
                margin-left:25%;
                margin-top:8px;
              }
            }
          }
        }
      }

      .searchBox{
        input{
          height:38px;
        }
        .searchBtn{
          background:@btnBlue;
          height:36px;
          border:none;
          color:@white;
        }
      }

      .buttonBox{
        margin-top:20px;
        margin-bottom:20px;
        button{
          width:107px;
          height:38px;
          color:@white;
          &:first-child{
            background:@btnBlue;
          }
          &:nth-child(2){
            background:@btnRed;
          }
        }
      }

      .menuTable{
        position:relative;
        margin-bottom:75px;
        .table{
          margin-bottom:0;
          color:#929292;
          /*a{*/
            /*&:hover{*/
              /*text-decoration:none;*/
            /*}*/
          /*}*/
          .textBlue{
            color:@textBlue;
          }
          .textRed{
            color:@textRed;
          }
          thead{
            tr{
              background:@gray;
            }
          }

          tbody{
            tr{
              td{
                a{
                  &:nth-child(2){
                    margin-left:20%;
                  }
                }
              }
            }
          }
          .selectBox{
            width:15px;
            height:15px;
            border:1px solid #C9C9C9;
            border-radius:1px;
            margin-left:25%;
          }
          .active{
            border-color:#FF5050;
            box-shadow:0 0 3px 0 #FF5050;
            background:url(../../../static/images/boxActive.png) no-repeat center;
          }
        }

        .tableFooter{
          position:absolute;
          bottom:-55px;
          background:@gray;
          height:55px;
          border:1px solid #ddd;
          border-top:0;
          -webkit-border-radius-bottomleft:3px;
          -webkit-border-radius-bottomright:3px;
        }
      }
    }
  }
</style>
