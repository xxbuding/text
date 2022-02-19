<template>
  <div class="check">
      <div class="heading">
          <div @click="goPage" class="head-left">
              <i class="iconfont icon-zuojiantou"></i>
          </div>
          <div class="head-right">
              <i class="iconfont icon-shenglvehao"></i>
          </div>
      </div>

      <!-- 轮播图 -->

      <template>
            <div class="wrapper">
                <swiper ref="mySwiper" v-bind:options="swiperOptions" v-if="list.length > 0">
                <swiper-slide v-for="(item, index) in list" v-bind:key="index">
                     <img :src="item" alt="">
                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            </div>
       </template>

       <!-- 商品信息 -->
        <goods></goods>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import Goods from '../components/check/goods.vue';

export default {
data() {
    return {
        list:[],
      swiperOptions: {
        loop: true,
        speed: 2000,
        autoplay: {
          delay: 3000,

         
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
      },
    };
},
components: {
    swiper,
    swiperSlide,
    Goods
        
  },
created(){
   this.getData()
},
methods:{
    getData(){
        this.$axios.get("http://localhost:3000/imgData")
        .then(res=>{
            this.list = res.data
        })
    },
    goPage(){
        this.$router.go(-1)
    }
}
}
</script>

<style lang="scss" scoped>
.check{
    position: relative;
    background-color: #f5f5f5;
}

.swiper-container {
         width: 7.5rem;
        background: #fff;
   }
.swiper-slide {
        width: 7.5rem;
        height: 7rem;

        img{
            width: 100%;
             height: 7rem;
        }
   }

.heading{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 111;
    width: 7.5rem;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .head-left{
        width: .6rem;
        height: .6rem;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: .5rem;
        margin-left: .1rem;
        
    }
    .head-right{
            width: .6rem;
        height: .6rem;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: .5rem;
        margin-right: .1rem;



    }

    i{
        font-size: .6rem;
        color: #fff;
    }
}
</style>