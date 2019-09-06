<template>
  <div class="all_query_files">
    <div class="QueryFilesTop">
      <el-form :inline="true" class="demo-form-inline" style="text-align: left;margin-left: 50px;">
        <el-form-item label="工号:">
          <el-input v-model="QueryFilesUserId" placeholder="请输入工号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="QueryFilesDoQuery">查询档案</el-button>
        </el-form-item>
        <span style="line-height: 45px;color: red;">{{QueryFilesMsg}}</span>
      </el-form>
    </div>

    <div class="QueryFilesShowTable">
      <template>
        <el-table
          :data=" QueryFilesTableData"
          style="width: 95%;margin: auto"
          max-height="250"
          v-loading="loading">
          <el-table-column
            fixed
            prop="userName"
            label="姓名"
            width="150">
          </el-table-column>
          <el-table-column
            prop="userId"
            label="员工号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="unitId"
            label="单位号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="gender"
            label="性别"
            width="120">
          </el-table-column>
          <el-table-column
            prop="homeAddress"
            label="地址"
            width="300">
          </el-table-column>
          <el-table-column
            prop="zipCode"
            label="邮编"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                @click="QueryFilesDetailed">
                查看详情
              </el-button>
            </template>
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
        QueryFilesUserId: '',
        QueryFilesMsg:'',
        QueryFilesTableData: [],
        loading: false,
      }
    },
    methods: {
      //根据ID号来查询用户信息
      async QueryFilesDoQuery(){
        var newdata;
        var self=this
        if(this.QueryFilesUserId==='')
        {
          this.QueryFilesMsg='搜索关键词不能为空'
        }
        else{
          this.loading=true;
          this.QueryFilesMsg=''
          await axios.post('/user/select',
          {
            id: self.QueryFilesUserId
          }
          ).then(response => newdata = response.data)
          // console.log("返回数据"+JSON.stringify(newdata))
          this.loading=false

          if(newdata===null){
            this.$message='未查找到相关数据'
          }
          else{
            //覆盖之前的值
            this.QueryFilesTableData=[]
            this.QueryFilesTableData.push(newdata)
          }



        }
      },
      QueryFilesDetailed(){
        //查看详情的时候通过query方式进行传值
        var data=this.QueryFilesTableData[0];
        this.$router.push({path:'query_file_detailed',query:{user:data}})
      },
    }
  }
</script>

<style>
  body {

  }
  *{
    padding: 0px;
  }

  .QueryFilesTop{
    margin-top: 10px;
  }
  .QueryFilesTop>.bt{
    width: 100px;
    height: 35px;
    background-color: blue;
    color:ghostwhite;
    border-radius: 10px;
  }
  .el-input__inner{
    width: 300px;
  }
</style>


