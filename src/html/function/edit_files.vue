<template>
  <div class="all_edit_files">
    <div class="top1">
      <el-form :inline="true" class="demo-form-inline" style="text-align: left;margin-left: 50px;">
        <el-form-item label="请输入用户工号:">
          <el-input v-model="UserId" placeholder="请输入工号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="EditFilesDoQuery">查询档案</el-button>
        </el-form-item>
        <span style="line-height: 55px;color: red">
        {{EditFileMsg}}
      </span>
      </el-form>

    </div>

    <div class="showtable">

      <template>
        <el-table
          :data=" EditFileTableData"
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
            width="140">
          </el-table-column>
          <el-table-column
            prop="unitId"
            label="单位号"
            width="140">
          </el-table-column>
          <el-table-column
            prop="gender"
            label="性别"
            width="140">
          </el-table-column>
          <el-table-column
            prop="homeAddress"
            label="地址">
          </el-table-column>
          <el-table-column
            prop="zipCode"
            label="邮编"
            width="150">
          </el-table-column>
          <el-table-column
            label="操作"
            width="150">
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                @click="ChangeFile">
                修改
              </el-button>
              <el-button
                type="text"
                size="small"
                @click="DeleteFile">
                删除
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
        UserId: '',
        EditFileMsg:'',
        loading: false,
        EditFileTableData: []
      }
    },
    methods: {
      //根据ID号来查询用户信息
      async EditFilesDoQuery(){
        var newdata;
        var self=this
        this.EditFileTableData=[]
        if(this.UserId===''){
          this.EditFileMsg='用户ID不能为空'
        }
        else{
          this.EditFileMsg=''
          this.loading=true;
          await axios.post('/user/select',
            {
              id: self.UserId
            }
          ).then(response => newdata = response.data)
          console.log("修改档案的返回数据"+JSON.stringify(newdata));
          this.loading=false
          //覆盖之前的值
          if(newdata===null){
            this.$message='未查找到数据'
          }
          else {
            this.EditFileTableData.push(newdata)
          }
          // console.log(this.EditFiletableData)
        }
         console.log(this.EditFiletableData)
      },
      ChangeFile(){
        //查看详情的时候通过query方式进行传值
        var xdata=this. EditFileTableData[0];
        this.$router.push({path:'edit_files_detailed',query:{user:xdata}})
      },
      async DeleteFile(){
        //直接将ID作为参数
        var IsSuccess=false
        await axios.post('/user/deleteuserinfo',
          {
            id: this.UserId
          }
        ).then(response => IsSuccess = response.data)
        console.log("删除是否成功"+IsSuccess)
        this.EditFiletableData=[]
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
</style>


