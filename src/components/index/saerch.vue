<template>
    <div class="search">
        <router-link to="/search" tag="div" class="search-i">
            <i class="iconfont icon-sousuo_o"></i>
            请输入关键字
        </router-link>
        <router-link to="/login" tag="div" class="inlogin">登陆</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            login:''
        }
    }
    

}
</script>

<style lang="scss" scoped>
.search{
    width: 7.5rem;
    height: 1rem;
    background-color: #be956a;
    font-size: .28rem;
    color: #888;
    display: flex;
    justify-content: space-around;
    align-items: center;
    // position: fixed;
    // top: 0;
    // left: 0;

    .search-i{
        width: 6rem;
        height: .6rem;
        line-height: .6rem;
        border-radius: .3rem;
        // margin: 0 auto;
        background-color: #fff;
        text-align: left;
    }
    i{
        font-size: .36rem;
        padding: 0 .1rem;
        vertical-align: middle;
        
    }

    .inlogin{
        // width: 1rem;

        color: #333;
        border: solid .01rem #000;
        font-size: .30rem;
        padding: .05rem;
        border-radius: .5rem;
    }
}

</style>