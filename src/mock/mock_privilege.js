
import Mock from 'mockjs'

//使用mockjs模拟数据

Mock.mock('http://localhost:8080/api/query_privilege','post',{
  data:
    [
      {'username':'王小虎','name':'我的档案','xfunction':'my_file'},
      {'username':'王小虎','name':'查询履历','xfunction':'query_antecedents'},
      {'username':'王小虎','name':'查询档案','xfunction':'query_files'},
      {'username':'王小虎','name':'添加档案','xfunction':'add_files'},
      {'username':'王小虎','name':'权限管理','xfunction':'privilege_management'},
      {'username':'王小虎','name':'档案变更情况','xfunction':'query_company'},
      {'username':'王小虎','name':'添加履历','xfunction':'add_antecedents'},
      {'username':'王小虎','name':'编辑档案','xfunction':'edit_files'},
    ],
})
