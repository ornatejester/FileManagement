import Vue from 'vue'
import Router from 'vue-router'
//登录界面
import loade from '../loade'
import test from '../test/test'
//主界面的路由
import Nav from '../html/Nav'

//导航部分的路由
import Menu from '../html/nav/Menu'
import my_file from '../html/function/my_file'
import changepassword from '../html/nav/changepassword'

//功能部分的路由
import query_antecedents from '../html/function/query_antecedents'
import query_company from '../html/function/query_company'
import query_files from '../html/function/query_files'
import edit_files from '../html/function/edit_files'
import add_files from '../html/function/add_files'
import add_antecedents from '../html/function/add_antecedents'
import privilege_management from '../html/function/privilege_management '
import query_file_detailed from '../html/function/query_file_detailed '
import edit_files_detailed from '../html/function/edit_files_detailed'

Vue.use(Router)
 const router=new Router({
  routes: [
    {
      path: '/',
      name: 'loade',
      component: loade,
    },
    {path: '/Nav',
      name: 'Nav',
      component: Nav,
      children:[
        { path:'changepassword',
          name:'changepassword',
          component:changepassword},
        { path:'Menu',
          name:'Menu',
          component:Menu,
          children: [
            { path:'my_file',
              name:'my_file',
              component:my_file},
            {path: 'query_antecedents',
              name: 'query_antecedents',
              component: query_antecedents,},
            {path: 'add_antecedents',
              name: 'add_antecedents',
              component: add_antecedents,},
            {path: 'query_company',
              name: 'query_company',
              component: query_company,},
            {path: 'query_files',
              name: 'query_files',
              component: query_files,},
            {path: 'edit_files',
              name: 'edit_files',
              component: edit_files,},
            {path: 'add_files',
              name: 'add_files',
              component: add_files,},
            {path: 'privilege_management',
              name: 'privilege_management',
              component: privilege_management,},
            {path: 'query_file_detailed',
              name: 'query_file_detailed',
              component:query_file_detailed,},
            {path: 'edit_files_detailed',
              name: 'edit_files_detailed',
              component:edit_files_detailed,},
          ],
          redirect:'/Nav/Menu/my_file',
        },
      ],
      redirect:'/Nav/Menu',
    },
  ],
})

router.beforeEach((to, from, next) => {
  // 根据字段判断是否路由过滤
  // 若是登录状态，不允许直接回到登录页面
  if (sessionStorage.getItem('token')!= null) {
    if (to.path === '/'){
      console.log("若是登录状态，不允许直接回到登录页面")
      next({
        path:'/Nav',
        // query:{redirect:to.fullPath}
      })
    }
    else {
      next()
    }
  }
  if (!sessionStorage.getItem('token') && to.path!=='/')
  {
    next({
      path:'',
      query:{redirect:from.fullPath}
    })
  }
    next()
});


export default router
