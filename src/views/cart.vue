<template>
  <div class="cart">
    <!-- empty 开始 -->
    <div class="empty" v-if="isEmpty">
      <p>
        <img
          src="https://img02.hua.com/m/Shopping/m_shopping_empty_cart.png?v2"
          alt=""
        />
      </p>
      <p>购物车内暂时没有商品</p>
      <p>去逛逛</p>
    </div>

    <!-- cart-list 开始 -->
    <div class="cart-list" v-else>
      <ul>
        <li v-for="item in list" :key="item.cartId">
          <!-- 单选框 -->
          <div class="checkbox">
            <input type="checkbox"  @change="toggleChecked(item.cartId,item.isChecked)" v-model="item.isChecked" />
          </div>
          <!-- 图片 -->
          <div class="pic">
            <a href="#"><img :src="item.pic" alt="" /></a>
          </div>
          <div class="info">
            <p class="proName">{{item.proName}}</p>
            <p class="count">
              <span>数量</span>
              <!-- 删除图标 -->
              <span
                class="del" v-if="item.count <=1" @click="del(item.cartId)"
                ><i class="iconfont icon-shanchu"></i
              ></span>
              <span class="reduce" v-else @click="handleCount('reduce',item.cartId,item.count)">-</span>
              <span class="num">{{item.count}}</span>
              <span class="add" @click="handleCount('add',item.cartId,item.count)">+</span>
            </p>
            <p class="price">
              ¥<span>{{item.price}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div class="footer">
      <div class="total">
        合计：<span class="rmb">¥</span><span class="num">{{total}}</span>
      </div>
      <div class="jiesuan">
        去结算(<span>{{Countl}}</span
        >)
      </div>
    </div>

      <vuefooter></vuefooter>
  </div>
</template>

<script>
import vuefooter from "../components/compon/vuefooter.vue"

import {getCartList, updateCart,deleteCart} from '../api/http.js'
export default {
  components: { vuefooter },
  data(){
    return {
      isEmpty:true,
      list:[]
    }
  },
   created(){
    // console.log('my' ,this.$route);
    let { title } = this.$route.meta
    let {icon} = this.$route.meta
    document.title = title 
    document.icon = icon

    this.initData()
  },
  methods:{
    //初始化时加载数据
    initData(){
      // this.$axios.get("/cart",{
      //   params:{
      //      user:localStorage.getItem('user')
      //   }
      // })
      getCartList({
         user:localStorage.getItem('user')
      })
      .then(res=>{
        // console.log(res.data);
        if(res.data.code === 0){
          //有数据
          this.isEmpty = false
          this.list = res.data.data
        }else{
          //没数据
          this.isEmpty = true
        }
      })
      .catch(err=>{
        console.log(err);
      })
    },
    //切换勾选状态
    toggleChecked(cartId,isChecked){
      //   this.$axios.put("http://localhost:3001/cart",{
      //     type:'check',
      //     isChecked,
      //     cartId
      // })

      updateCart({
         type:'check',
          isChecked,
          cartId
      })
      .then(res=>{
        console.log(res);
      })
      .catch(err=>{
        console.log(err);
      })
    },
    // 删除
    del(cartId){
      //  this.$axios.delete("http://localhost:3001/cart",{
      //    params:{
      //      cartId
      //    }
      //  })
      deleteCart({
           cartId
      })
      .then(res=>{
        this.initData()
      })
      .catch(err=>{
        console.log(err);
      })  
    },

    // 增加减少封装
    handleCount(action,cartId,count){
     action === 'add'? count++ : count--
      //  this.$axios.put("http://localhost:3001/cart",{
      //     type:'count',
      //     count,
      //     cartId
      // })
      updateCart({
         type:'count',
          count,
          cartId
      })
      .then(res=>{
        this.initData()
      })
      .catch(err=>{
        console.log(err);
      })
    },

    // add(cartId,count){
    //   count++
    //    this.$axios.put("http://localhost:3001/cart",{
    //       type:'count',
    //       count,
    //       cartId
    //   })
    //   .then(res=>{
    //     this.initData()
    //   })
    //   .catch(err=>{
    //     console.log(err);
    //   })
    // },
    // reduce(cartId,count){
    //   count--
    //    this.$axios.put("http://localhost:3001/cart",{
    //       type:'count',
    //       count,
    //       cartId
    //   })
    //   .then(res=>{
    //     this.initData()
    //   })
    //   .catch(err=>{
    //     console.log(err);
    //   })
    // }
  },
  computed:{
      total(){
        let totalPrice = 0
         this.list.forEach(item =>{
          if(item.isChecked){
            totalPrice += item.count * item.price
          }
        })
        return totalPrice
      },
      Countl(){
        let totalCount= 0
        this.list.forEach(item=>{
          if(item.isChecked){
           totalCount += item.count
          }
        })
        return totalCount
      }

  }

}
</script>

<style lang="scss" scoped>
.cart {
  // header 样式
  .bk {
    border: 1px solid #000;
  }
  .hide {
    display: none;
  }
  // empty 样式
  .empty {
    p {
      margin: 0.5rem auto;
      text-align: center;
      img {
        width: 2.54rem;
        height: 1.96rem;
      }
      &:nth-child(3) {
        width: 2.36rem;
        height: 0.56rem;
        border: 0.02rem solid rgb(233, 137, 73);
        color: #fff;
        border-radius: 0.56rem;
        line-height: 0.56rem;
        background-color: rgb(230, 120, 47);
      }
    }
  }
  // cart-list 的样式
  .cart-list {
    ul {
      li {
        display: flex;
        position: relative;
        box-sizing: border-box;
        height: 2.8rem;
        padding: 0.18rem 0.25rem 0.28rem;
        &::after {
          position: absolute;
          content: "";
          right: 0;
          bottom: 0;
          width: 6.6rem;
          height: 0.01rem;
          background-color: #eee;
        }
        .checkbox {
          display: flex;
          margin-right: 0.24rem;
          align-items: center;
        }
        .info {
          margin-left: 0.28rem;
          .proName {
            margin-top: 0.1rem;
            margin-bottom: 0.26rem;
          }
          .count {
            display: flex;
            span {
              display: inline-block;
              text-align: center;
              height: 0.48rem;
              line-height: 0.48rem;
            }
            .del,
            .reduce,
            .add {
              width: 0.52rem;
              background-color: #eee;
              border: 0.01rem solid #aaa;
              margin-left: 0.3rem;
            }
            .num {
              width: 1.12rem;
              background-color: #eee;
              border: 0.01rem solid #aaa;
            }
            .add {
              margin-left: 0;
            }
          }
          .price {
            margin-top: 0.9rem;
            color: rgb(226, 92, 14);
          }
        }
        img {
          width: 2.1rem;
          height: 2.3rem;
          border: 0.01rem solid #eee;
        }
      }
    }
  }
  //footer样式
  .footer {
    position: fixed;
    display: flex;
    justify-content: space-between;
    left: 0;
    bottom: 1rem;
    width: 100%;
    height: 0.97rem;
    border-top: 0.02rem solid #eee;
    text-align: center;
    line-height: 0.97rem;
    background-color: #fff;
    .total {
      width: 2.3rem;
      span {
        color: rgb(226, 92, 14);
      }
      .rmb {
        padding-left: 0.2rem;
      }
    }
    .jiesuan {
      width: 2.5rem;
      background-color: rgb(240, 134, 36);
      border: 0.02rem solid rgb(236, 186, 139);
      color: #fff;
    }
  }
}
</style>