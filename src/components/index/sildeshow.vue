<template>
  <div class="silde">
      <!-- 轮播图 -->
    <div class="wrapper">
        <swiper ref="mySwiper" v-bind:options="swiperOptions" v-if="list.length > 0">
            <swiper-slide v-for="(item, index) in list" v-bind:key="index">
                 <img :src="item" alt="">
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>

    <!-- 小功能 -->
    <div class="funcc" >
        <div class="top-funcc" > 
            <router-link :to="el.component" tag="div" class="funcc-dis" v-for="(el,index) in list2" :key="index">
                <img class="funcc-img" :src="el.pic">
                <div class="funcc-name">{{el.name}}</div>
            </router-link>
        </div>
    </div>
  </div>

</template>

<script>

import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
    data() {
        return {
            list:[],
            list2:[],
        swiperOptions: {
                loop: true,
                speed: 2000,
                autoplay: {
                delay: 3000,

                stopOnLastSlide: false,
                disableOnInteraction: false,
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
  },
  created(){
      this.getData(),
      this.getDatafun()
  },
  methods:{
      getData(){
          this.$axios.get("http://localhost:3000/imgData")
          .then(res=>{
              this.list=res.data
          })
          .catch(err=>{
              console.log(err);
          })
      },
      getDatafun(){
          this.$axios.get("http://localhost:3000/imgData2")
          .then(res=>{
              this.list2=res.data
          })
          .catch(err=>{
              console.log(err);
          })
      },
  }
}
</script>

<style lang="scss" scoped>
.silde{
    width: 7.5rem;
    // height: 4rem;
    padding-top: .5rem;
    background: url(https://m.mymro.cn/static/img/index_top_bg.64ae5af0.png) no-repeat top/100% auto;
}
.swiper-container {
    
    width: 6.5rem;
    background: #fff;
    border-radius: .3rem;

   }
.swiper-slide {
    height: 3.5rem;
        img{
            width: 6.5rem;
            height: 3.5rem;
            border-radius: .3rem;
        }
   }

   .funcc{
       width: 7.5rem;
       height: 3rem;
        padding: .4rem 0;
        background-color: #F5F5F5;
    
       .top-funcc{
           display: flex;
            // justify-content: space-between;
            flex-wrap: wrap;
            width:7.5rem;
            padding: .2rem 0;


          .funcc-dis{
              width: 1.5rem;
              height: 1.5rem;
              text-align: center;
                
          
              
          }
          .funcc-img{
              width: .7rem;
              height: .7rem;   
          }
          .funcc-name{
                margin-top: .2rem;
                font-size: .25rem;
                color: #181a1f;
          }
       }
   }


</style>