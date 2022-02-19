<template>
  <div class="search-warp">
      <router-link to="/index" tag="span">
         <i class="iconfont icon-shouye"></i>
      </router-link>
      <router-link to="/search" tag="div" class="search">
          <div class="search-text">
             输入产品名称
            <i class="iconfont icon-sousuo_o"></i>
          </div>
      </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.search-warp{
    width: 7.5rem;
    height: 1rem;
    background-color: #bd956a;
    display: flex;
    justify-content: center;
    align-self: center;

    span{
        //  height: 100%;
        width: .5rem;
         padding-top: .22rem;
         padding-right: .1rem;
    }
    i{
        font-size: .48rem;
        color: #fff;

    }

    .search{
        width: 6.5rem;
        height: .6rem;
        background-color: #f5f5f5;
        border-radius: .3rem;
        display: flex;
        align-self: center;

        
    }

    .search-text{
        width: 100%;
        height: .6rem;
        line-height: .6rem;
        padding: 0 .2rem;
        color: #aaa;
        position: relative;

        i{
            position: absolute;
            top: 0;
            right: .1rem;   
             color: #aaa;
        }
    }
    
}
</style>