<template>
  <div class="all_add_files">
    <div class="top1">
      <el-steps :active="active" finish-status="success" style="width: 95%;margin: auto">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
    </div>
    <!--先输入用户名密码，再输入档案，最后输入履历-->
    <div class="information1" v-show="showinfor1">
      <div><h2>请输入新用户的账户和密码</h2></div>
      <div class="input_information1">
        <el-form :label-position="labelPosition" label-width="80px" :model="NewUser" :rules="rulefirst" ref="NewUser" class="demo-ruleForm">
          <el-form-item label="职位" prop="AddNewUserPosition">
            <el-select v-model="NewUser.AddNewUserPosition" placeholder="请选择" style="width: 387px">
              <el-option label="系统管理员" value="1"></el-option>
              <el-option label="部门经理" value="2"></el-option>
              <el-option label="人事部经理" value="3"></el-option>
              <el-option label="普通员工" value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="新账户:" prop="AddNewUserId">
            <el-input v-model="NewUser.AddNewUserId"></el-input>
          </el-form-item>
          <el-form-item label="新密码:" prop="AddUserPassword">
            <el-input v-model="NewUser.AddUserPassword"></el-input>
          </el-form-item>
        </el-form>
        <!--<span style="text-align: center;color: red;">{{AddFilesMsg}}</span>-->
      </div>
    </div>
    <div class="information2" v-show="showinfor2">
      <div><h2>请输入新用户的档案信息</h2></div>
      <div class="input_information2">
        <div class="input_information2_left">
          <el-form :model="NewUserFileLeft" :rules="ruleleft" ref="NewUserFileLeft" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="UserName">
              <el-input v-model="NewUserFileLeft.UserName"></el-input>
            </el-form-item>
            <el-form-item label="民族" prop="Nation">
              <el-input v-model="NewUserFileLeft.Nation"></el-input>
            </el-form-item>
            <el-form-item label="单位号" prop="unit_id">
              <el-input v-model="NewUserFileLeft.unit_id"></el-input>
            </el-form-item>
            <el-form-item label="文化程度" prop="Education">
              <el-select v-model="NewUserFileLeft.Education" placeholder="请选择" style="width: 387px">
                <el-option label="本科" value="本科"></el-option>
                <el-option label="大专" value="大专"></el-option>
                <el-option label="研究生" value="研究生"></el-option>
                <el-option label="博士生" value="博士生"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="政治面貌" prop="political_status">
              <el-select v-model="NewUserFileLeft.political_status" placeholder="请选择活动区域" style="width: 387px">
                <el-option label="群众" value="群众"></el-option>
                <el-option label="党员" value="党员"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
              <el-radio-group v-model="NewUserFileLeft.gender">
                <el-radio label="男" value="1"></el-radio>
                <el-radio label="女" value="0"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
        </div>
        <div class="input_information2_right">
          <el-form :model="NewUserFileRight" :rules="ruleright" ref="NewUserFileRight" label-width="100px" class="demo-ruleForm">
            <el-form-item label="合同期限" prop="end_time">
              <el-input v-model="NewUserFileRight.end_time"></el-input>
            </el-form-item>
            <el-form-item label="工种号" prop="WorkID">
              <el-input v-model="NewUserFileRight.WorkID"></el-input>
            </el-form-item>
            <el-form-item label="工资" prop="wage">
              <el-input v-model="NewUserFileRight.wage"></el-input>
            </el-form-item>
            <el-form-item label="邮政编码" prop="zip_code">
              <el-input v-model="NewUserFileRight.zip_code"></el-input>
            </el-form-item>

            <el-form-item label="出生日期" required>
              <el-col :span="11">
                <el-form-item prop="Birthday">
                  <el-date-picker type="date" placeholder="选择日期" v-model="NewUserFileRight.Birthday" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="联系电话" prop="PhoneNumber">
              <el-input v-model="NewUserFileRight.PhoneNumber"></el-input>
            </el-form-item>
            <el-form-item label="家庭住址" prop="Address">
              <el-input v-model="NewUserFileRight.Address"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>

    <div class="information3" v-show="showinfor3">
      <div style="margin-top: 20px">
        <el-form :inline="true" class="demo-form-inline" style="text-align: left;margin-left: 50px;">
          <el-form-item label="日期">
            <el-input placeholder="日期" v-model="NewUserAntecedent.edate" style="width: 200px;"></el-input>
          </el-form-item>
          <el-form-item label="履历">
            <el-input placeholder="履历" v-model="NewUserAntecedent.event" style="width: 300px;"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="AddAntecedentsToTable" style="width: 100px;">添加</el-button>
          </el-form-item>
          <span style="text-align: center;color: red;line-height: 45px;">{{AddFilesMsg}}</span>
        </el-form>
      </div>
      <div class="xshowtable">
        <el-table
          :data="NewUserAntecedentsTableData"
          border
          style="width: 95%;margin: auto"
          height="400">
          <el-table-column
            label="用户ID"
            prop="id"
            width="180">
          </el-table-column>
          <el-table-column
            label="日期"
            prop="edate"
            width="180">
          </el-table-column>
          <el-table-column
            label="履历"
            prop="event">
          </el-table-column>
          <el-table-column
            label="操作"
            width="120">
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                @click="DeleteAntecedent(scope.$index, NewUserAntecedentsTableData)">
                移除
              </el-button>
            </template>
          </el-table-column>


        </el-table>
      </div>
    </div>

    <div class="foot">
      <el-button style="margin-top: 12px;" v-show="IsFirst" @click="getback()">上一步</el-button>
      <el-button style="margin-top: 12px;" @click="next()">下一步</el-button>
      <el-button style="margin-top: 12px;width: 90px;" @click="reset()">重置</el-button>
    </div>
  </div>
</template>

<script>
  import axios from '../../Axios/Axios'
  export default {
    data() {
      return {
        //确认是否是第一步
        IsFirst:false,
        //第一个页面完成的数据
        NewUser:{
          'AddNewUserPosition':'',
          'AddNewUserId':'',
          'AddUserPassword':'',
        },
        AddFilesMsg:'',
        //第二个页面完成的数据
        NewUserFileLeft: {
          'unit_id': '',
          'UserName': '',
          'gender': '',
          'Nation': '',
          'Education': '',
          'political_status': '',
        },
        NewUserFileRight:{
          'Birthday': '',
          'Address': '',
          'Worktime': '',
          'end_time': '',
          'WorkID': '',
          'wage': '',
          'zip_code': '',
          'PhoneNumber': ''
        },
        //新用户的履历
        NewUserAntecedent:{
          'id':'',
          'edate':'',
          'event':'',
        },
        //新用户的履历数组
        NewUserAntecedentsTableData:[],
        //用于显示样式
        active: 0,
        showinfor1:true,
        showinfor2:false,
        showinfor3:false,
        labelPosition: 'right',
        //输入判断
        rulefirst: {
          AddNewUserId: [
            { required: true, message: 'ID不能为空', trigger: 'blur' },
            { min: 1, max: 10, message: 'ID应该为10 个字符', trigger: 'blur' }
          ],
          AddUserPassword: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { min: 6, max: 16, message: '密码长度应在6-16之间个字符', trigger: 'blur' }
          ],
          AddNewUserPosition:[
            { required: true, message: '请选择职位', trigger: 'change' }
          ],
        },
        ruleleft: {
          UserName: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
          ],
          unit_id: [
            { required: true, message: '请输入单位号', trigger: 'blur' },
          ],
          Nation: [
            { required: true, message: '请输入民族', trigger: 'blur' },
          ],
          political_status: [
            { required: true, message: '请选择政治面貌', trigger: 'change' },
          ],
          Education: [
            { required: true, message: '请选择文化程度', trigger: 'change' }
          ],
          gender: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
        },
        ruleright:{
          Birthday: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          Address: [
            { required: true, message: '请输入地址', trigger: 'blur' },
          ],
          Worktime: [
            { required: true, message: '请输入工作时间', trigger: 'blur' },
          ],
          end_time: [
            { required: true, message: '请输入合同期限', trigger: 'blur' },
          ],
          WorkID: [
            { required: true, message: '请输入工种号', trigger: 'blur' },
          ],
          wage: [
            { required: true, message: '请输入工资', trigger: 'blur' },
          ],
          zip_code: [
            { required: true, message: '请输入邮政编码', trigger: 'blur' },
          ],
          PhoneNumber: [
            { required: true, message: '请输入电话号码', trigger: 'blur' },
            { min: 11, max: 11, message: '电话号码长度应为11', trigger: 'blur' }
          ],
        },
        tableData:[]
      }
    },
    methods: {
      /*******************************跳转界面和完成档案的添加***************************************/
      async next() {
        //当在第一个界面的时候
        if(this.active===0){
          this.$refs['NewUser'].validate((valid) => {
            if (valid) {
              this.showinfor1=false;
              this.showinfor2=true;
              this.showinfor3=false;
              this.IsFirst=true
              this.active++;
            }
          })
        }
        //当在第二个界面的时候
        else if(this.active===1){
          this.$refs['NewUserFileLeft'].validate((valid) => {
            if (valid) {
              // console.log("左边完成")
              this.$refs['NewUserFileRight'].validate((valid) => {
                if (valid) {
                  // console.log("右边完成")
                  this.showinfor1=false;
                  this.showinfor2=false;
                  this.showinfor3=true;
                  this.active++;
                }
              })
            }
          });
        }
        //当在第三个界面的时候
        else{
          var IsInitUser='fail'
          await axios.post('user/insertuserinfo',
            {
              userAll:{
                userId: this.NewUser.AddNewUserId,
                unitId: this.NewUserFileLeft.unit_id,
                userName: this.NewUserFileLeft.UserName,
                gender: this.NewUserFileLeft.gender,
                birthday: this.NewUserFileRight.Birthday,
                nation: this.NewUserFileLeft.Nation,
                education: this.NewUserFileLeft.Education,
                politicalStatus: this.NewUserFileLeft.political_status,
                wordTime:this.NewUserFileRight.Worktime,
                endTime: this.NewUserFileRight.end_time,
                userPassword: this.NewUser.AddUserPassword,
                workId: this.NewUserFileRight.WorkID,
                wage: this.NewUserFileRight.wage,
                zipCode: this.NewUserFileRight.zip_code,
                homeAddress: this.NewUserFileRight.Address,
                phone: this.NewUserFileRight.PhoneNumber,
                roleId: this.NewUser.AddNewUserPosition,
                // userresumeDOS:[],
                userresumeDOS: this.NewUserAntecedentsTableData
              }}).then(function (response){
            IsInitUser=response.status1
            console.log("插入数据是否成功"+JSON.stringify(response))
          });
          this.$message='数据添加成功'
          // console.log("插入数据是否成功"+IsInitUser)
          this.showinfor1=true;
          this.showinfor2=false;
          this.showinfor3=false;
          this.active=0;
          //alert('3');
        }
      },
      /*******************************添加履历***************************************/
      AddAntecedentsToTable(){
        if(this.NewUserAntecedent.edate.length===0) {
          this.AddFilesMsg="日期不能为空"
        }
        else if(this.NewUserAntecedent.event.length==0){
          this.AddFilesMsg="履历内容不能为空"
        }
        else {
          this.AddFilesMsg=""
          this.NewUserAntecedent.id=this.AddNewUserId
          var temp={'id':this.NewUser.AddNewUserId,'edate':this.NewUserAntecedent.edate,'event':this.NewUserAntecedent.event}
          this.NewUserAntecedentsTableData.push(temp)
          // this.NewUserAntecedent=''
        }
      },
      /*******************************返回上一步***************************************/
      getback(){
        if(this.active===2){
          this.active=1;
          this.showinfor1=false;
          this.showinfor2=true;
          this.showinfor3=false;
        }
        else if(this.active===1){
          this.active=0;
          this.showinfor1=true;
          this.showinfor2=false;
          this.showinfor3=false;
          this.IsFirst=false;
        }
      },
      /*******************************重置当前页面***************************************/
      reset(){
        if(this.active===0){
          this.NewUser={
            'AddNewUserPosition':'',
            'AddNewUserId':'',
            'AddUserPassword':'',
          }
        }
        else if(this.active===1){
          this.NewUserFileLeft={
            'unit_id': '',
            'UserName': '',
            'gender': '',
            'Nation': '',
            'Education': '',
            'political_status': '',
          }
          this.NewUserFileRight={
            'Birthday': '',
            'Address': '',
            'Worktime': '',
            'end_time': '',
            'WorkID': '',
            'wage': '',
            'zip_code': '',
            'PhoneNumber': ''
          }
        }
        else {
          this.NewUserAntecedentsTableData=[]
        }
      },
      /*******************************移除当前档案***************************************/
      DeleteAntecedent(index, rows) {
        rows.splice(index, 1);
      }
    }
  }


</script>

<style>
  body {
  }
  .information1,.information2,.information3{
    height: 520px;
    width: 90%;
    margin: auto;
    border: 1px solid black;
    /*background-color: #0086b3;*/
  }
  .input_information1{
    width: 50%;
    margin: auto;
    margin-top: 80px;
  }
  .input_information2_left,.input_information2_right{
    width: 45%;
    float: left;
  }
  .el-input__inner{
    width: 100%;
  }
  .el-select{
    width: 100%;
  }
</style>


