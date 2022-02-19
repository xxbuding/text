<template>
  <div class="index11">
    <!-- 搜索 -->
    <div class="header">
      <saerch></saerch>
    </div>
      <!-- 轮播 -->
      <div class="main">
        <sildeshow></sildeshow>
        <container></container>
        


      <vuefooter></vuefooter>
  </div>
  </div>
</template>

<script>
import vuefooter from '../components/compon/vuefooter.vue'
import Container from '../components/index/container.vue'
import Saerch from '../components/index/saerch.vue'
import Sildeshow from '../components/index/sildeshow.vue'
export default {
  components: { vuefooter, Saerch, Sildeshow, Container},
  data(){
    return{
      list:[]
    }
  },
   created(){
    // console.log('my' ,this.$route);
    let { title } = this.$route.meta
    let {icon} = this.$route.meta
    document.title = title 
    document.icon = icon

    
  },
  methods:{

  }
  
}
</script>

<style lang="scss" scoped>
  .header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .main{
    position: absolute;
    top: 1rem;
    left: 0;
    bottom: 1rem;
    right: 0;
  }
 
</style>