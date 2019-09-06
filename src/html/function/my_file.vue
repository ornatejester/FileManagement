<template>
  <div class="all_my_file">
    <h2><i class="el-icon-edit"></i>我的档案</h2>
    <div class="MyFileContent">
    <div class="MyFileContent_left">
      <el-form :label-position="labelPosition" label-width="100px">
        <h3><i class="el-icon-edit"></i>基本信息</h3>
        <el-form-item label="姓名:" style="margin:0px;">
          <span class="myfilespan">{{MyUserName}}</span>
        </el-form-item>
        <el-form-item label="性别:" style="margin-bottom:5px;">
          <span class="myfilespan">{{MyGender}}</span>
        </el-form-item>
        <el-form-item label="出生日期:" style="margin-bottom:5px;">
          <span class="myfilespan">{{MyBirthday}}</span>
        </el-form-item>
        <el-form-item label="民族:" style="margin-bottom:5px;">
          <span class="myfilespan">{{MyNation}}</span>
        </el-form-item>
        <el-form-item label="文化程度:" style="margin-bottom:5px;">
          <span class="myfilespan">{{MyEducation}}</span>
        </el-form-item>
        <el-form-item label="政治面貌:" style="margin-bottom:5px;">
          <span class="myfilespan">{{Mypolitical_status}}</span>
        </el-form-item>
        <el-form-item label="邮编:" style="margin-bottom:5px;">
          <span class="myfilespan">{{Myzip_code}}</span>
        </el-form-item>
        <el-form-item label="家庭住址:" style="margin-bottom:5px;">
          <span class="myfilespan">{{MyAddress}}</span>
        </el-form-item>
        <el-form-item label="联系电话:" style="margin-bottom:5px;">
          <span class="myfilespan">{{MyPhoneNumber}}</span>
        </el-form-item>
      </el-form>
    </div>

    <div class="MyFileContent_right">
      <el-form :label-position="labelPosition" label-width="100px">
        <h3><i class="el-icon-edit"></i>工作信息</h3>
        <el-form-item label="单位号:" style="margin-bottom:5px;">
          <span class="myfilespan">{{Myunit_id}}</span>
        </el-form-item>
        <el-form-item label="工种号:" style="margin-bottom:5px;">
          <span class="myfilespan">{{MyWorkID}}</span>
        </el-form-item>
        <el-form-item label="工资:" style="margin-bottom:5px;">
          <span class="myfilespan">{{Mywage}}</span>
        </el-form-item>
        <el-form-item label="合同期限:" style="margin-bottom:5px;">
          <span class="myfilespan">{{Myend_time}}</span>
        </el-form-item>
        <el-form-item label="工作时间:" style="margin-bottom:5px;">
          <span class="myfilespan">{{MyWorkTime}}</span>
        </el-form-item>
      </el-form>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //绑定到vuex中的数据
        'Myunit_id':this.$store.state.loginuser.unitId,
        'MyUserID':this.$store.state.loginuser.userId,
        'MyUserName':this.$store.state.loginuser.userName,
        'MyBirthday':this.$store.state.loginuser.birthday,
        'MyNation':this.$store.state.loginuser.nation,
        'MyGender':this.$store.state.loginuser.gender,
        'MyEducation':this.$store.state.loginuser.education,
        'Mypolitical_status':this.$store.state.loginuser.politicalStatus,
        'MyAddress':this.$store.state.loginuser.homeAddress,
        'MyWorkTime':this.$store.state.loginuser.wordTime,
        'Myend_time':this.$store.state.loginuser.endTime,
        'MyWorkID':this.$store.state.loginuser.workId,
        'Mywage':this.$store.state.loginuser.wage,
        'Myzip_code':this.$store.state.loginuser.zipCode,
        'MyPhoneNumber':this.$store.state.loginuser.phone,
        //这里通过参数将对齐方式设置为右对齐
        labelPosition: 'right',
        right:'right',
      };
    }
  }

</script>

<style>
  body {

  }
  .all_my_file{
    width: 95%;
    margin: auto;
  }
  .MyFileContent{
    width: 90%;
    margin: auto;
    text-align: left;
    border: 1px solid black;
  }
  .MyFileContent_left,.MyFileContent_right{
    width: 49%;
    height: 500px;
    float: left;
  }
  .myfilespan{
    font-size: 20px;
  }
</style>
