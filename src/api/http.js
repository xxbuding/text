
import request from "./config";

//加载产品数据
export function getProduct(){
  return  request({
        url:'/product',
        method:'get'
    })
}

//添加到购物车
export function addCart(data){
    return  request({
        url:'/cart',
        method:'post',
        data:data
    })
}

//获取购物车数据
export function getCartList(params){
    return  request({
        url:'/cart',
        method:'get',
        params
    })
}

//更新购物车数据
export function updateCart(data){
    return  request({
        url:'/cart',
        method:'put',
        data
    })
}
//删除购物车数据
export function deleteCart(params){
    return  request({
        url:'/cart',
        method:'delete',
        params
    })
}
//用户登录
export function userLogin(data){
    return  request({
        url:'/login',
        method:'post',
        data
    })
}
