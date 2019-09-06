<template>
    <div>
      <div class="head iclear">
        <div class="head_left">
          <span>SICNUSE电子竞技俱乐部</span>
        </div>
        <div class="head_right">
          <ul>
            <li><a href="">公司主页</a></li>
            <li><a href="">手机版</a></li>
            <li><a href="">企业邮箱</a></li>
            <li><a href="">English</a></li>
          </ul>
        </div>
      </div>
      <div class="main" id="app">
        <!-- <div class="left">
            <img src="../img/loade_background3.gif">
        </div> -->
        <div class="right">
          <span>人事管理系统登录</span>
          <form>
            <label>账户：</label><input type="text" placeholder="请输入用户名" v-model="userid"><br>
            <label>密码：</label><input type="password" placeholder="请输入密码" v-model="password"><br>
            <br>
              <input type="button" value="登录" class="bt"  @click="loade">
            <p>{{msg}}</p>
          </form>
        </div>
      </div>
      <div class="footer">
        <p>版权所有：SICNUSE电子竞技俱乐部</p>
        <p>专利号：AS4F6165168418A1D51D5A1D5A1D51</p>
      </div>
<!--*********************验证码*******************-->
      <div class="background" v-show="IsRight">
        <div class="Verification">
          <div id="v_container" style="width: 200px;height: 80px;margin: auto"></div>
          <input type="text" id="code_input" value="" placeholder="请输入验证码" style="width: 150px; height: 30px;border-radius: 4px;"/>
          <input type="button" value="确定" style="width: 80px;height: 35px;background-color: blue;color:ghostwhite;margin-top: 10px;border-radius: 10px;"  @click="go">
        </div>
      </div>
    </div>
</template>
<script>
  import {mapMutations} from 'vuex'
  import axios from './Axios/Axios'
  import './Verification/style'
  import './Verification/verification'

  export default {
    data(){
      return {
        'userid':'',
        'password':'',
        'msg':'',
        //获取登录用户信息
        token:'',
        xdata:{},
        LoginStatus:'fail',
        IsRight:false,
        Positon:'',
        //验证码对象
        verifyCode:''
      }
    },
    methods:{
      async loade() {
        //使用异步请求来进行数据交互
        var self=this
        if(this.userid==''){
          this.msg='用户名不能为空'
        }
        else if(this.password==''){
          this.msg='密码不能为空'
        }
        else{
          await axios.post('/api/login',
            {
                id: this.userid,
                pw: this.password
          }).then(
            function (response){
              self.LoginStatus=response.status1
              self.xdata=response.data
              self.token=response.status1
          //     self.Positon=response.Position
              // console.log("返回数据"+self.LoginStatus)
            });
        }
       this.verifyCode = new GVerify("v_container");
        if(self.LoginStatus!=='fail'){
          this.IsRight=true
          self.IsCorrect=false
          self.$store.commit('InitUser',self.xdata)
          self.$store.commit('InitToken',self.token)
          // self.$store.commit('InitLoginPositon',self.Positon)
          self.$store.commit('InitLogin')
          //初始化所有参数之后进入主页
        //         self.$router.push('/Nav')
        }
        else{
          this.msg='密码不正确'
          // console.log("密码"+this.xdata.UserPassword);
        }
      },
      go(){
        var res = this.verifyCode.validate(document.getElementById("code_input").value);
        if(res){
          this.IsRight=false
          sessionStorage.setItem('token', 'addsfffff');
          this.$router.push('/Nav')
        }else{
          this.IsRight=false
        }
      }
    }

  }
</script>

<style>
  *{
    padding: 0px;
  }
  .head{
    height: 100px;
    width: 1400px;
    margin: auto;
  }
  .head_left{
    height: 100px;
    width: 60%;
    margin: auto;
    background-color: azure;
  }
  .head_right{
    height: 100px;
    width: 40%;
    margin: auto;
    background-color: azure;
  }
  .head_left,.head_right{
    float: left;
  }
  .head_left>span{
    font-size: 38px;
    line-height: 100px;
    margin-left: 100px;
    letter-spacing: 12px;
    font-style: italic;
  }
  .head_right>ul{
    margin-left: 60px;
  }
  .head_right>ul>li{
    list-style: none;
    display: inline-block;
    line-height: 100px;
    margin-left: 10px;
  }
  .head_right>ul>li>a{
    text-decoration: none;
  }
  .iclear:after{
    content: "";
    clear: both;
    display: block;
  }
  /********************************************左部样式*/
  .main{
    width: 1400px;
    height: 480px;
    margin:auto;
    /*background-image: url("./images/1.jpg");*/
  }
  /*.left{*/
    /*width: 700px;*/
    /*height: 500px;*/
  /*}*/
  /*.left>img{*/
    /*width: 100%;*/
    /*height: 100%;*/
  /*}*/
  /*****************************************登录框样式*/
  .right{
    width: 800px;
    height: 480px;
    margin: auto;
    margin-top:50px;
    text-align: center;
     /*border: solid black 1px;*/
  }
  .right>span{
    margin-top: 20px;
    color: grey;
    font-size: 44px;
    line-height: 120px;
  }
  .right>form>input{
    margin-top: 20px;
    width:250px;
    height: 40px;
  }
  .bt{
    width: 100px;
    height: 35px;
    background-color: blue;
    color:ghostwhite;
    margin-top: 40px;
    border-radius: 10px;
  }
  .right>form>p{
    color: red;
    font-size: 18px;
    text-align: center;
  }
  /* *******************************底部样式 */
  .footer{
    height: 60px;
    width: 1400px;
    margin: auto;
    background-color: black;
  }
  .footer>p{
    font-size: 12px;
    line-height: 20px;
    color: white;
    margin-left: 30px;
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
  .Verification{
    width: 440px;
    height: 350px;
    margin: auto;
    margin-top: 200px;
    opacity: 1;
    /*border: 1px solid black;*/
  }
</style>

