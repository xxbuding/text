<template>
  <div class="in">
    <classsearch></classsearch>
    <!-- 购物车 -->
    <div class="index">
      <ul>
        <li v-for="item in list" :key="item.productId">
          <p>{{ item.productId }}</p>
          <p>{{ item.proName }}</p>
          <!-- <p><img :src="item.pic" alt=""></p> -->
          <p><button @click="addCart(item.productId)">加入购物车</button></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Classsearch from "../components/classify/classsearch.vue";

import { getProduct, addCart as addCartApi } from "@/api/http.js";

export default {
  components: { Classsearch },
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.initData();
  },
  methods: {
    //页面初始化时加载数据
    initData() {
      //   this.$axios.get("/product")
      //   .then(res=>{
      //    let {code} = res.data
      //    if(code === 0 ){
      //      this.list = res.data.list
      //    }else{
      //      console.log('没有数据');
      //    }
      //   })
      //   .catch(err=>{
      //     console.log(err);
      //   })

      getProduct()
        .then((res) => {
          let { code } = res.data;
          if (code === 0) {
            this.list = res.data.list;
          } else {
            console.log("没有数据");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    //添加到购物车
    addCart(productId) {
    //   this.$axios
    //     .post("/cart", {
    //       productId: productId,
    //       user: localStorage.getItem("user"),
    //     })
    //     .then((res) => {
    //       alert("添加成功");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },

        addCartApi({
             productId: productId,
            user: localStorage.getItem("user"),
        })
          .then((res) => {
          alert("添加成功");
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
};
</script>

<style lang="scss" scoped>
.index {
  padding-bottom: 1rem;
}
li {
  height: 80px;
  border: 1px solid #000;
  margin: 20px;
}
</style>