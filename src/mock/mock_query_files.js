
import Mock from 'mockjs'

//使用mockjs模拟数据

Mock.mock('http://localhost:8080/api/query_files','post',{
  data:{
  //单位号
  'unit_id':'123456',
  //登录ID
  'UserID':'123456',
  //用户密码
  'UserPassword':'admin',
  //用户名
  'UserName' :'123456',
  //性别
  'gender':'f',
  //生日
  'Birthday':'123456',
  //民族
  'Nation':'123456',
  //教育
  'Education':'123456',
  //政治面貌
  'political_status':'123456',
  //住址
  'Address':'123456',
  //工作时间
  'Worktime':'123456',
  //合同期限
  'end_time':'123456',
  //工种号
  'WorkID':'123456',
  //工资
  'wage':5000,
  //邮政编码
  'zip_code':'123456',
  //电话
  'PhoneNumber':'123456',
  }
})
