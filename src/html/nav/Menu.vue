<template>
  <div class="main_left">

    <div class="menu">
      <ul>
        <!--动态加载功能目录,这里的第一个功能都是相同的，不然重定向将会出错-->
        <li v-for="item in MenuList"><a @click="dofunction(item.permitName)">{{item.permitInfo}}</a></li>
        <!--<li v-for="item in MenuList"><a @click="dofunction(item.xfunction)">{{item.name}}</a></li>-->
      </ul>
    </div>
    <div class="main_right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        MenuList:this.$store.state.loginuser.permit
      }
    },
    methods:{
      //根据传递的参数来决定跳转的界面
      dofunction(ss){
        switch (ss){
          case 'add_files':this.$router.push('add_files');this.add_files=true;break;
          case 'query_company':this.$router.push('query_company');break;
          case 'query_files':this.$router.push('query_files');break;
          case 'edit_files':this.$router.push('edit_files');break;
          case 'privilege_management':this.$router.push('privilege_management');break;
          case 'my_file':this.$router.push('my_file');break;
          case 'query_antecedents':this.$router.push('query_antecedents');break;
          case 'add_antecedents':this.$router.push('add_antecedents');break;
        }
      },
    },
  };
</script>


<style>
  *{
    padding: 0px;
  }
  .main_left{
    width: 1500px;
    margin: auto;
  }
  /**************************菜单栏***********************/
  .menu{
    width: 14.5%;
    height: 650px;
    background-color: #545c64;
  }
  .menu>ul{
    margin: 0px;
  }
  .menu>ul>li{
    height: 80px;
    line-height: 80px;
    list-style: none;
    font-size: 17px;
    font-weight: 500;
    border-bottom: 1px darkslategray solid;
  }
  .menu>ul>li>a{
    text-decoration: none;
    color: white;
    cursor:pointer;

  }
  .menu>ul>li:hover{
    background-color: #999999;
    color: black;
    /*font-family:"Microsoft YaHei";*/
  }
  .bgcolor{
    background: deepskyblue;
  }
  /**************************功能区****************************/
  .main_right{
    width: 85%;
    height: 650px;
    /*background-color: aqua;*/
  }
  .menu,.main_right{
    float: left;
  }
</style>

