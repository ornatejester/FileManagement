
import Mock from 'mockjs'

//使用mockjs模拟数据

Mock.mock("http://localhost:8080/api/login",'post',{
  'status1':'success',
  'UserToken':'asfasfewf@3fe',
  'data':{
  //单位号
  'unit_id':'123456',
  //登录ID
  'userId':'123456',
  //用户密码
  'userPassword':'admin',
  //用户名
  'userName' :'123456',
  //性别
  'gender':'f',
  //生日
  'birthday':'123456',
  //民族
  'nation':'123456',
  //教育
  'education':'123456',
  //政治面貌
  'politicalStatus':'123456',
  //住址
  'homeAddress':'123456',
  //工作时间
  'worktime':'123456',
  //合同期限
  'endTime':'123456',
  //工种号
  'workId':'123456',
  //工资
  'wage':5000,
  //邮政编码
  'zipCode':'123456',
  //电话
  'phone':'123456',
  //登录用户的权限数组
  'permit':
    [
    {'permitInfo':'我的档案','permitName':'my_file'},
    {'permitInfo':'查询履历','permitName':'query_antecedents'},
    {'permitInfo':'查询档案','permitName':'query_files'},
    {'permitInfo':'添加档案','permitName':'add_files'},
    {'permitInfo':'权限管理','permitName':'privilege_management'},
    {'permitInfo':'档案变更情况','permitName':'query_company'},
    {'permitInfo':'添加履历','permitName':'add_antecedents'},
      {'permitInfo':'编辑档案','permitName':'edit_files'},
    ],
  }
})
