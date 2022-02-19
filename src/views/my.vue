<template>
  <div class="my">
     <button @click="goPage" v-if="isshow">登录</button>
     <button @click="quit" v-else>退出登录</button>

      <vuefooter></vuefooter>
  </div>
</template>

<script>
import vuefooter from '../components/compon/vuefooter.vue'
export default {
  data(){
    return{
      isshow:'true',
    }
  },
  components: { vuefooter },
  created(){
    let token = localStorage.getItem('token')
    if(token){
      this.isshow = false
    }else{
      this.isshow = true
    }
    // console.log('my' ,this.$route);
    let { title } = this.$route.meta
    let {icon} = this.$route.meta

    document.title = title 
    document.icon = icon

  },

  methods:{
    goPage(){
      this.$router.push('/login') 
    },
    quit(){
      localStorage.removeItem('token') 
      this.$router.push('/login')
    }
  }

}
</script>

<style>

</style>