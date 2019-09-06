<template>
    <div class="all_query_company">
      <div style="margin-top: 15px">
        <el-form :inline="true" :model="DoSearch" :rules="rule" ref="DoSearch" class="demo-form-inline" style="text-align: left;margin-left: 50px;">
          <el-form-item label="时间:" prop="DoTime">
            <el-select v-model="DoSearch.DoTime" placeholder="时间" style="width: 200px;">
              <el-option label="最近一天" value="lastday"></el-option>
              <el-option label="最近一月" value="lastmonth"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="操作类型:" prop="DoType" style="margin-left: 10px;">
            <el-select v-model="DoSearch.DoType" placeholder="操作类型" style="width: 200px;">
              <el-option label="增添" value="ADD"></el-option>
              <el-option label="删除" value="DELETE"></el-option>
              <el-option label="修改" value="UPDATE"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="QueryComPanyDoQuery">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="showtable_query_company">
        <template>
          <el-table
            :data="QueryCompanyTableData"
            border
            style="width: 95%;margin: auto">
            <el-table-column
              prop="name"
              label="操作者"
              width="200">
            </el-table-column>
            <el-table-column
              prop="data"
              label="日期"
              width="300">
            </el-table-column>
            <el-table-column
              prop="antecedent"
              label="被操作者"
              width="200">
            </el-table-column>
            <el-table-column
              prop="content"
              label="修改内容"
              width="450">
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
          return{
            DoSearch:{
              'DoType':'',
              'DoTime':'',
            },
            QueryCompanyTableData:[],

            rule:{
              DoTime: [
                { required: true, message: '请选择时间', trigger: 'change' }
              ],
              DoType: [
                { required: true, message: '请选择类型', trigger: 'change' }
              ],
            }
          }
        },
      methods:{
        async QueryComPanyDoQuery(){
          var CanSearch=false
          var newdata
          this.$refs['DoSearch'].validate((valid) => {
            if (valid) {
              CanSearch=true
            }
          })
          if(CanSearch){
            var time
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            switch (this.DoSearch.DoTime){
              case'lastweek':time=year+"-"+month;break;
              case'lastday':time=year+"-"+month+"-"+"day";break;
            }
            await axios.post('/api/query_files',
              {
                Time:this.DoSearch.DoTime,
                Type:this.DoSearch.DoType,
              }
            ).then(response => newdata = response.data)

            if(newdata===null){
              this.$message='未查找到数据'
            }
            else{
              QueryCompanyTableData=[]
              QueryCompanyTableData=newdata
            }

          }
        }
      }
    }
</script>

<style>
  body {

  }
</style>
