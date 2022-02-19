<template>
    <div class="footer-warp">
        <router-link to="/index" tag="div" class="footer">
            <i class="iconfont icon-shouye icon1" ></i>
            <i class="iconfont icon-shouyetianchong icon2"></i>
           首页
        </router-link>
        <router-link to="/classify" tag="div" class="footer">
            <i class="iconfont icon-fenlei1 icon1"></i>
            <i class="iconfont icon-fenlei icon2"></i>
            分类
        </router-link>
        <router-link to="/cart" tag="div" class="footer">
            <i class="iconfont icon-gouwuche icon1"></i>
            <i class="iconfont icon-gouwucheman  icon2"></i>
           购物车
        </router-link>
        <router-link to="/my" tag="div" class="footer">
             <i class="iconfont icon-wode icon1"></i>
             <i class="iconfont icon-wode1 icon2"></i>
           我的
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer-warp{
    width: 7.5rem;
    height: 1.05rem;
    background-color: #fff;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;

    .icon1{
        display: inline-block;
    }
    .icon2{
        display: none;
    }

    .router-link-active{
        color: #ff6700 ;
        .icon1{
            display: none;
        }
        .icon2{
            display: inline-block;
        }
    }
}
.footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 1.05rem;
    font-size: .22rem;

}
    
.footer i{
    width: .43rem;
    height: .43rem;
    font-size: .36rem;
}

</style>