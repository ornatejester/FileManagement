<template>
  <div class="xmain">
    <div class="nav">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1"><router-link to="/Nav/Menu">功能目录</router-link></el-menu-item>
        <el-submenu index="4">
          <template slot="title">系统设置</template>
          <el-menu-item index="4-1" @click="ChangePs"><i class="iconfont icon-caidan" style="margin-right: 15px; float: left"></i>修改密码</el-menu-item>
          <el-menu-item index="4-2" @click="Exit"><i class="iconfont icon-tuichu" style="margin-right: 15px; float: left"></i>退出登录</el-menu-item>
          <!--<el-menu-item index="4-3" @click="MyFile"><i class="iconfont icon-chaxun" style="margin-right: 15px; float: left"></i>我的信息</el-menu-item>-->
        </el-submenu>
        <span>登录名:{{Username}}</span>
      </el-menu>
    </div>
    <div class="allcontent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //登录名
        Username:this.$store.state.loginuser.userName,
        //样式的参数
        activeIndex: '1',
        activeIndex2: '1',
      }
    },
    methods: {
      ChangePs(){
        this.$router.push('/Nav/changepassword');
      },
      Exit(){
        this.$store.commit('OutLogin')
        this.$router.push('/');
      },
      MyFile(){

      }
    },
  }

</script>

<style>
  *{
    padding: 0px;
    text-decoration: none;
  }
  .allcontent{
    width: 1500px;
    margin: auto;
    height: 650px;
  }
  .xmain{
    width: 1500px;
    height: 650px;
    margin: auto;
  }
  /********************t信息样式******************/
  .el-menu-demo>span{
    line-height: 80px;
    font-size: 20px;
    color: white;
  }
  /********************t导航栏样式******************/
  .nav{
    width: 1500px;
    margin: auto;
    background-color: #4B6A77;
  }
  .el-menu--horizontal .el-menu-item {
    height: 80px;
    line-height: 80px;
    padding-right: 75px;
    padding-left: 70px;
    font-weight: 400;
    font-size: 18px;
  }
  .el-menu--horizontal > .el-submenu .el-submenu__title{
    height: 80px;
    line-height: 80px;
    padding-right: 80px;
    padding-left: 70px;
    font-weight: 400;
    font-size: 18px;
  }
  /*.icon-caidan{*/
    /*font-size: 25px;*/
  /*}*/
</style>


