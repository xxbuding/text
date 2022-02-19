<template>
  <div class="group">
        <router-link to="/classify" tag="div" class="filter">分类筛选</router-link>
        <div tag="div" class="make">制造商品牌</div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.group{
    width: 7.5rem;
    height: .8rem;
    display: flex;
    justify-content: space-around;
    align-self: center;
    // background-color: #866543;
    color: #000;


     .router-link-active{
         background-color: #866543 !important;
        color: #000;
        font-weight: 700;

    }
    

}
.filter{
    display: flex;
    justify-content: center;
    width: 3.5rem;
    height: .8rem;
    line-height: .8rem;
    font-size: .28rem;
    background-color: #fff ;

    border-radius: .2rem;
}
.make{
    display: flex;
    justify-content: center;
    flex: 1;
    height: .8rem;
    line-height: .8rem;
    background-color: #fff;
    border-radius: .2rem;

}
</style>