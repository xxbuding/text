<template>
  <div class="search">
      <div @click="goPage">返回</div>
      <div>搜索页</div>
  </div>
</template>

<script>
export default {
    methods:{
          goPage(){

            //返回上一级
            this.$router.go(-1)
        },
    }
}
</script>

<style>

</style>