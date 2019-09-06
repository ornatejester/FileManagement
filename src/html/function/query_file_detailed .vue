<template>
  <div class="all_query_file_detailed">
    <h2><i class="el-icon-edit"></i>档案详情</h2>
    <div class="DetailFileContent">
      <div class="DetailFileContent_left">
        <el-form :label-position="labelPosition" label-width="100px">
          <h3><i class="el-icon-edit"></i>基本信息</h3>
          <el-form-item label="姓名:" style="margin:0px;">
            <span class="myfilespan">{{DetailUserName}}</span>
          </el-form-item>
          <el-form-item label="性别:" style="margin-bottom:5px;">
            <span class="myfilespan">{{Detailgender}}</span>
          </el-form-item>
          <el-form-item label="出生日期:" style="margin-bottom:5px;">
            <span class="myfilespan">{{DetailBirthday}}</span>
          </el-form-item>
          <el-form-item label="民族:" style="margin-bottom:5px;">
            <span class="myfilespan">{{DetailNation}}</span>
          </el-form-item>
          <el-form-item label="文化程度:" style="margin-bottom:5px;">
            <span class="myfilespan">{{DetailEducation}}</span>
          </el-form-item>
          <el-form-item label="政治面貌:" style="margin-bottom:5px;">
            <span class="myfilespan">{{Detailpolitical_status}}</span>
          </el-form-item>
          <el-form-item label="邮编:" style="margin-bottom:5px;">
            <span class="myfilespan">{{Detailzip_code}}</span>
          </el-form-item>
          <el-form-item label="家庭住址:" style="margin-bottom:5px;">
            <span class="myfilespan">{{DetailAddress}}</span>
          </el-form-item>
          <el-form-item label="联系电话:" style="margin-bottom:5px;">
            <span class="myfilespan">{{DetailPhoneNumber}}</span>
          </el-form-item>
        </el-form>
      </div>

      <div class="DetailFileContent_right">
        <el-form :label-position="labelPosition" label-width="100px">
          <h3><i class="el-icon-edit"></i>工作信息</h3>
          <el-form-item label="单位号:" style="margin-bottom:5px;">
            <span class="myfilespan">{{Detailunit_id}}</span>
          </el-form-item>
          <el-form-item label="工种号:" style="margin-bottom:5px;">
            <span class="myfilespan">{{DetailWorkID}}</span>
          </el-form-item>
          <el-form-item label="工资:" style="margin-bottom:5px;">
            <span class="myfilespan">{{Detailwage}}</span>
          </el-form-item>
          <el-form-item label="合同期限:" style="margin-bottom:5px;">
            <span class="myfilespan">{{Detailend_time}}</span>
          </el-form-item>
          <el-form-item label="工作时间:" style="margin-bottom:5px;">
            <span class="myfilespan">{{DetailWorktime}}</span>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div>
      <el-form :inline="true" class="demo-form-inline" style="margin-top: 20px">
        <el-form-item>
          <el-button type="primary" @click="back">返回上级</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //绑定到路由传递过来的数据
        'Detailunit_id':this.$route.query.user.unitId,
        'DetailUserID':this.$route.query.user.userId,
        'DetailUserPassword':this.$route.query.user.UserPassword,
        'DetailUserName':this.$route.query.user.userName,
        'DetailBirthday':this.$route.query.user.birthday,
        'DetailNation':this.$route.query.user.nation,
        'Detailgender':this.$route.query.user.gender,
        'DetailEducation':this.$route.query.user.education,
        'Detailpolitical_status':this.$route.query.user.politicalStatus,
        'DetailAddress':this.$route.query.user.homeAddress,
        'DetailWorktime':this.$route.query.user.wordTime,
        'Detailend_time':this.$route.query.user.endTime,
        'DetailWorkID':this.$route.query.user.workId,
        'Detailwage':this.$route.query.user.wage,
        'Detailzip_code':this.$route.query.user.zipCode,
        'DetailPhoneNumber':this.$route.query.user.phone,
        //这里通过参数将对齐方式设置为右对齐
        labelPosition: 'right',
        right:'right',
      };
    },
    methods:{
      back(){
        this.$router.go(-1);
      }
    }
  }

</script>

<style>
  body {

  }
  .all_query_file_detailed{
    width: 90%;
    height: 550px;
    /*border: 1px solid black;*/
    margin: auto;
    margin-top: 15px;
  }
  .DetailFileContent{
    width: 90%;
    height: 500px;
    margin: auto;
    text-align: left;
    border: 1px solid black;
  }
  .DetailFileContent_left,.DetailFileContent_right{
    width: 49%;
    height: 500px;
    float: left;
  }
  .myfilespan{
    font-size: 20px;
  }
</style>
