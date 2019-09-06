import Mock from 'mockjs'

//使用mockjs模拟数据

Mock.mock('http://localhost:8080/api/query_antecedent','post',{
  data:[
    {'name':'王小虎','data':'2013','antecedent':'毕业于北京交通大学'},
    {'name':'王小虎','data':'2014','antecedent':'实习于新浪公司'},
    {'name':'王小虎','data':'2015','antecedent':'就职于新浪公司'},
  ]
})
