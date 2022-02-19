import axios from 'axios'

//创建axios实例
const axios1 = axios.create({
  //
    baseURL: 'http://localhost:3001/',
    //超时时间
    timeout: 1000,
    // headers: {'Authorization': '55555'}
  });

//添加请求拦截器，会在发起请求之前执行相应的需求
axios1.interceptors.request.use(function (config) {
    config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("token");
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// //添加响应拦截器，会在返回数据后先执行相应的需求
axios1.interceptors.response.use(function (response) {
    if (response.data.code == 401){
       localStorage.clear()
       window.history.reload()
    }
    return response;
  }, function (error) {
    // Do something with response error
    console.log('error',error.status);

    return Promise.reject(error);
  });
export default axios1