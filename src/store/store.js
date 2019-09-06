import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  'UserToken':'',
  'loginuserPosition':'',
  'loginuser':{
    //单位号
    'unitId':'',
    //用户ID
    'userId':'',
    //用户密码
    'UserPassword':'',
    //用户名
    'userName' :'',
    //性别
    'gender':'',
    //生日
    'birthday':'',
    //民族
    'nation':'',
    //文化程度
    'education':'',
    //政治面貌
    'politicalStatus':'',
    //住址
    'homeAddress':'',
    //工作时间
    'wordTime':'',
    //合同期限
    'endTime':'',
    //工种号
    'workId':'',
    //工资
    'wage':0,
    //邮政编码
    'zipCode':'',
    //电话
    'phone':'',
    //登录用户的权限数组
    'permit':[],
  },
}
export default new Vuex.Store({
  state,
  actions:{},
  mutations:{
    InitUser(state,user){
      //初始化用户的登录信息
      state.loginuser.unitId=user.unitId;
      state.loginuser.politicalStatus=user.politicalStatus;
      state.loginuser.endTime=user.endTime;
      state.loginuser.userId=user.userId;
      state.loginuser.UserPassword=user.UserPassword;
      state.loginuser.userName=user.userName;
      state.loginuser.birthday=user.birthday
      state.loginuser.gender=user.gender
      state.loginuser.nation=user.nation;
      state.loginuser.education=user.education
      state.loginuser.homeAddress=user.homeAddress
      state.loginuser.wordTime=user.wordTime
      state.loginuser.workId=user.workId
      state.loginuser.wage=user.wage
      state.loginuser.zipCode=user.zipCode
      state.loginuser.phone=user.phone
      state.loginuser.permit=user.permit
      // console.log("User"+state.loginuser.management)
    },
    InitToken(state,token){
      state.UserToken=token
      console.log("Token"+state.UserToken)
    },
    InitLoginPositon(state,positon){
      state.loginuserPosition=positon
    },
    //将信息同步到Session
    InitLogin(state){
      sessionStorage.setItem('token', state.UserToken);
      sessionStorage.setItem('user', JSON.stringify(state.loginuser));
    },
    //移除登录信息
    OutLogin(state) {
      state.token = '';
      state.loginuser = {};
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
    }
  },
  getters:{

  }

})
