<template>
  <div class="all_query_antecedents">
    <div class="top1">
      <el-form :inline="true" class="demo-form-inline" style="text-align: left;margin-left: 50px;">
        <el-form-item label="请输入搜索关键词:">
          <el-input placeholder="请输入关键词" v-model="QueryAntecedentsWord"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="QueryAntecedentsDoQuery">查询</el-button>
        </el-form-item>
        <span style="line-height: 45px;color: red;">{{QueryAntecedentsMsg}}</span>
      </el-form>
    </div>
    <div class="QueryAntecedentsShowTable">
      <template>
        <el-table
          :data="QueryAntecedentsTableData"
          border
          style="width: 95%;margin: auto">
          <el-table-column
            prop="id"
            label="用户ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="edate"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="event"
            label="履历">
          </el-table-column>
        </el-table>
      </template>
    </div>

  </div>
</template>

<script>
  import axios from '../../Axios/Axios'
  export default {
    data() {
      return {
        //搜索单词
        QueryAntecedentsWord:'',
        //返回数组
        QueryAntecedentsTableData:[],
        //提示信息
        QueryAntecedentsMsg:'',
      }
    },
    methods: {
      async QueryAntecedentsDoQuery(){
        var newdata
        if(this.QueryAntecedentsWord===''){
          this.QueryAntecedentsMsg='搜索词不能为空'
        }
        else{
          this.QueryAntecedentsMsg=''
          await axios.post('/userlectresume', {
            str: this.QueryAntecedentsWord
          }).then(response =>
            newdata = response.data
          )
          // console.log("查询履历的返回数据"+newdata)
          if(newdata===null)
          {
            this.$message='无相关搜索记录'
          }
          else {
            this.QueryAntecedentsTableData=[]
            this.QueryAntecedentsTableData=newdata
          }
        }
      }



    }
  }
</script>

<style>
  body {

  }
  *{
    padding: 0px;
  }
  .top1{
    margin-top: 10px;
  }
  .top1>.bt{
    width: 100px;
    height: 35px;
    background-color: blue;
    color:ghostwhite;
    border-radius: 10px;
  }
  .el-input__inner{
    width: 300px;
  }
  /********************表格样式************************/


</style>

