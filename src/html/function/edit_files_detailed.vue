<template>
  <div class="all_edit_files_detailed">
    <div class="editinformation">
      <h2>档案编辑</h2>
      <div class="input_information2">
        <div class="input_information2_left">
          <el-form :model="EditDetailUser" ref="EditDetailUser" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名:" prop="name">
              <el-input v-model="EditDetailUser.userName" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="民族:" prop="name">
              <el-input v-model="EditDetailUser.nation" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="文化程度:" prop="name">
              <el-input v-model="EditDetailUser.education" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="政治面貌:" prop="name">
              <el-input v-model="EditDetailUser.politicalStatus" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="出生日期:" prop="name">
              <el-input v-model="EditDetailUser.birthday" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="性别:" prop="name">
              <el-input v-model="EditDetailUser.gender" :disabled="true"></el-input>
            </el-form-item>

            <el-form-item label="邮政编码:">
              <el-input v-model="EditDetailUser.zipCode" :disabled="true"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="input_information2_right">
          <el-form :model="EditDetailUser" :rules="rules" ref="EditDetailUser" label-width="100px" class="demo-ruleForm">
            <el-form-item label="合同期限:" prop="end_time">
              <el-input v-model="EditDetailUser.endTime"></el-input>
            </el-form-item>
            <el-form-item label="工种号:" prop="WorkID">
              <el-input v-model="EditDetailUser.workId"></el-input>
            </el-form-item>
            <el-form-item label="工资:" prop="wage">
              <el-input v-model="EditDetailUser.wage"></el-input>
            </el-form-item>
            <el-form-item label="工作时间:" prop="Worktime">
              <el-input v-model="EditDetailUser.wordTime"></el-input>
            </el-form-item>
            <el-form-item label="单位号:" prop="unit_id">
              <el-input v-model="EditDetailUser.unitId"></el-input>
            </el-form-item>
            <el-form-item label="联系电话:" prop="PhoneNumber">
              <el-input v-model="EditDetailUser.phone"></el-input>
            </el-form-item>
            <el-form-item label="家庭住址:" prop="Address">
              <el-input v-model="EditDetailUser.homeAddress"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="infor3">
      <el-button type="primary" @click="back">返回上级</el-button>
      <el-button type="primary" @click="Preservtion">保存</el-button>
    </div>
  </div>
</template>

<script>
  import axios from '../../Axios/Axios'
  export default {
    data() {
      return {
        //绑定到路由传递过来的数据
        EditDetailUser:{
          'userId':this.$route.query.user.userId,
          'unitId':this.$route.query.user.unitId,
          'userName':this.$route.query.user.userName,
          'gender':this.$route.query.user.gender,
          'birthday':this.$route.query.user.birthday,
          'nation':this.$route.query.user.nation,
          'education':this.$route.query.user.education,
          'politicalStatus':this.$route.query.user.politicalStatus,
          'wordTime':this.$route.query.user.wordTime,
          'endTime':this.$route.query.user.endTime,
          'workId':this.$route.query.user.workId,
          'wage':this.$route.query.user.wage,
          'zipCode':this.$route.query.user.zipCode,
          'homeAddress':this.$route.query.user.homeAddress,
          'phone':this.$route.query.user.phone,
        },
        //样式属性
        labelPosition: 'right',
        /*****************************规则*************************************/
        rules: {
          Worktime: [
            // { required: true, message: '工作时间不能为空', trigger: 'blur' },
          ],
          end_time: [
            // { required: true, message: '合同期限不能为空', trigger: 'blur' },
          ],
          WorkID: [
            // { required: true, message: '工种号不能为空', trigger: 'blur' },
          ],
          wage: [
            // { required: true, message: '工资不能为空', trigger: 'blur' },
          ],
          unit_id: [
            // { required: true, message: '单位号不能为空', trigger: 'blur' },
          ],
          PhoneNumber: [
            // { required: true, message: '请输入电话号码', trigger: 'blur' },
            // { min: 11, max: 11, message: '电话号码长度应为11', trigger: 'blur' }
          ],
          Address: [
            // { required: true, message: '家庭住址不能为空', trigger: 'blur' },
          ],
        },
      }
    },
    methods:{
      back(){
        this.$router.go(-1);
      },
      async Preservtion(){
        var IsSuccess
        //若用户输入数据符合条件则进行数据请求
        await this.$refs['EditDetailUser'].validate((valid) => {
          if (valid) {
             axios.post('/user/updateuserinfo',
               this.EditDetailUser
             ).then(response => IsSuccess = response)
            // console.log("修改是否成功"+IsSuccess)
            if(IsSuccess==='success'){
               this.$message='修改失败'
            }
            else {
              this.$message='修改成功'
            }
          }
        })
      },
    }
  }

</script>

<style>
  body {

  }
  .all_edit_files_detailed{
    width: 95%;
    height: 600px;
    margin: auto;
    margin-top: 10px;
    border: 1px solid black;
  }
  .infor1,.infor2{
    float: left;
    margin-left: 15px;
    width: 31%;
  }
  .el-form-item__content>span{
    font-size: 20px;
    font-style: italic;
  }
  .input_information2_left,.input_information2_right{
    width: 48%;
    height: 470px;
    float: left;
  }
  .el-input__inner{
    width: 400px;
  }

</style>
