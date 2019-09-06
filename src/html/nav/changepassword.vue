<template>
    <div>
      <h1>修改密码</h1>
      <div class="form_changeps">
        <div style="width: 70%;margin: auto">
        <el-form :label-position="labelPosition" :model="ChangPassword" :rules="rule" ref="ChangPassword" label-width="80px">
          <el-form-item label="旧密码" prop="OldPassword">
            <el-input v-model="ChangPassword.OldPassword" style="width: 500px;"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="NewPassword">
            <el-input type="password" v-model="ChangPassword.NewPassword" style="width: 500px;"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="SureNewPassword">
            <el-input type="password" v-model="ChangPassword.SureNewPassword" style="width: 500px;"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="SuerChangePassword">确认</el-button>
        <el-button type="primary" @click="ResetChangePassword">重置</el-button>
        </div>
      </div>
      <span style="text-align: center;color: red;margin-top: 15px;">{{Msg}}</span>
    </div>
</template>

<script>

  import '../../Verification/style'
  import axios from '../../Axios/Axios'
  export default {
    data() {
      return {
        //提示信息
        Msg:'',
        //判断
        IsCorrect:false,
        StoreOldPassword:this.$store.state.loginuser.UserPassword,
        ChangPassword:{
          OldPassword:'',
          NewPassword:'',
          SureNewPassword:'',
        },
        rule:{
          OldPassword: [
            { required: true, message: '请输入旧密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
          NewPassword: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
          SureNewPassword: [
            { required: true, message: '请确认新密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
        },
        labelPosition: 'right',

      };
    },
    methods:{
      SuerChangePassword(){
        if(this.OldPassword!==this.StoreOldPassword){
          this.Msg="旧密码错误"
        }
        else if(this.ChangPassword.NewPassword!==this.ChangPassword.SureNewPassword)
        {
          this.Msg="密码和确认密码不同"
        }
        else {
          this.Msg="",
          this.$refs['ChangPassword'].validate((valid) => {
            if (valid) {
              var self=this
              var issuccess
              axios.post('/user/updatepassword',
                {
                  userId: self.$store.state.loginuser.userId,
                  userPassword: self.ChangPassword.NewPassword,
                }).then(
                function (response){
                  // console.log(response.status1)
                  issuccess=response.status1
                })
              if(issuccess='success'){
                this.$notify({
                  title: '通知',
                  message: '修改密码成功',
                  type: 'success'
                });
                ChangPassword={
                  OldPassword:'',
                    NewPassword:'',
                    SureNewPassword:'',
                }
              }
              else {
                this.$notify({
                  title: '通知',
                  message: '修改密码失败',
                  type: 'success'
                });
                ChangPassword={
                  OldPassword:'',
                  NewPassword:'',
                  SureNewPassword:'',
                }
              }

            }
          })
        }
      },
      ResetChangePassword(){
        this.ChangPassword.OldPassword=''
        this.ChangPassword.NewPassword=''
        this.ChangPassword.SureNewPassword=''
      }

    }
  }

</script>

<style>
    body {

    }
    .form_changeps{
      width: 800px;
      margin: auto;
    }
    /*********************验证码的背景***********************/
  .background{
    position: fixed;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: #F7F7F7;
   /* opacity: 0.4;*/
    background:rgba(122,191,238,0.5);
  }
  .ChangePsVerification{
    width: 440px;
    height: 350px;
    margin: auto;
    margin-top: 200px;
    opacity: 1;
  }
</style>


