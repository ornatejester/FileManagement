<template>
  <div class="all_add_antecedents">
    <div class="top1">
      <el-form :inline="true" class="demo-form-inline" style="text-align: left;margin-left: 50px;">
        <el-form-item label="请输入工号:">
          <el-input placeholder="请输入工号" v-model="UserID"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="AddAntecedentsDoQuery">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div style="margin-top: 20px" v-show="isquery">
      <el-form :inline="true" class="demo-form-inline" style="text-align:left;margin-left: 30px;">
        <el-form-item label="日期">
          <el-input placeholder="日期"></el-input>
        </el-form-item>
        <el-form-item label="履历">
          <el-input placeholder="履历"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="AddAntecedents">添加</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="showtable">
      <template>
        <el-table
          :data="AddAntecedentstableData"
          border
          style="width: 95%;margin: auto"
          height="450">
          <el-table-column
            prop="UserId"
            label="用户ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="data"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="antecedent"
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
        isquery:false,
        information:{
          name:'',
          data:'',
          antecedent:'',
        },
        UserID:'',
        AddAntecedentstableData:[]
      }
    },
    methods: {
      //查询履历
      async AddAntecedentsDoQuery(){
        var newdata
        await axios.post('/api/query_antecedent').then(response =>
          newdata = response.data
        )
        //console.log(newdata);
        this.tableData=[]
        this.tableData=newdata
        this.isquery=true
      },
      AddAntecedents(){
        this.tableData.push(this.information)
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


