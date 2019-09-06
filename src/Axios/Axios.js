import axios from 'axios'
import baseURL from './baseUrl'
import store from '../store/store'
import { Message } from 'element-ui'
const http = {}

var instance = axios.create({
  async: false,
  timeout: 5000,
  baseURL
})

// 添加请求拦截器
instance.interceptors.request.use(
  function(config) {
    // 请求头添加token
    if (store.state.UserToken) {
      config.headers.Authorization = store.state.UserToken
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

// 响应拦截器即异常处理
instance.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    //console.log("err",err)
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求出错'
          console.log("111")
          break
        case 401:
          console.log("222")
          Message.warning({
            message: '授权失败，请重新登录'
          })
          store.commit('LOGIN_OUT')
          setTimeout(() => {
            window.location.reload()
          }, 1000)
          return
        case 403:
          console.log("333")
          err.message = '拒绝访问'
          break
        case 404:
          console.log("444")
          err.message = '请求错误,未找到该资源'
          break
        case 500:
          console.log("555")
          err.message = '服务器端出错'
          break
      }
    } else {
      console.log("666")
      err.message = '连接服务器失败'
    }
    Message.error({
      message: err.message
    })
    return Promise.reject(err.response)
  }
)

http.get = function(url, options) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, options)
      .then(response => {
        // if (response.code === 0) {
          resolve(response)
        //   console.log("888")
        // } else {
        //   Message.error({
        //     // message: response.message
        //     message:"不知道这是什么错误"
        //   })
        //   reject(response.message)
        // }
        // console.log("xresponse:"+response.data)
      })
      .catch(e => {
        console.log("xxx")
        console.log(e)
      })
  })
}

http.post = function(url, data, options) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, options)
      .then(response => {
        // if (response.code === 0) {
          resolve(response)
        // } else {
        //   Message.error({
        //     // message: response.message
        //     message:"不知道这是什么错误"
        //   })
          reject(response.message)
        // }
      })
      .catch(e => {
        console.log(e)
      })
  })
}

export default http
