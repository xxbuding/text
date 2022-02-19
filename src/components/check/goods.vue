<template>
<div class="goods-wrap" >
  <div class="goods">
      <div class="price">价格 <span>￥4.90~339.00</span></div>
      <div class="goods-check">
          <div class="check-left">封箱胶带50um</div>
          <div class="check-right">
              <i class="iconfont icon-fenxiang"></i>
              <span>分享</span>
            </div>
      </div>
      <div class="goods-check">
          <div class="check-left">固安捷优选 GRAINGER CHOICE</div>
          <div class="check-right">
              <i class="iconfont icon-icon_lingquan "></i>
              <span>分享</span>
            </div>
      </div>

      <div class="check-text">
          本产品组含有 8 种产品组合
      </div>
  </div>



    <div class="shopping" @click="tabnav" v-if="isshow">
        <div class="shop-left">
            购买类型   请选择规格
        </div>
        <div class="shop-right">
            <i class="iconfont icon-youjiantou"></i>
        </div>
    </div>

    <transition name="move">
        <div class="shop-wrap" @click="tabnav"  v-if="!isshow" >
                <div class="shopdesc" >
                    aaa
                </div>
        </div>
    </transition>


    <div class="desc">
        <div class="desc-head">
            <div class="head-text">产品描述</div>
            <div class="des"></div>
        </div>
        <div class="desc-text">
            <div class="cont-char">
                ●产品特征：
            </div>
            <div class="cont-desc">
                Honeywell H910Plus 防尘口罩
            </div>
        </div>
        <div class="desc-img">
            <img src="https://static.mymro.cn/pis/PMS/微信图片_20201208145902_1607410755354.jpg" alt="">
        </div>
    </div>

    <div class="footer-wrap">
        <div class="footer">
            <i class="iconfont icon-shouye"></i>
            首页
        </div>
        <div class="footer">
            <i class="iconfont icon-gouwuche"></i>
            购物车
        </div>
        <div class="footer">
            <i class="iconfont icon-kefufenxiermaikefu"></i>
            客服
        </div>
        <div class="footer-text">
            加入购物车
        </div>
    </div>
</div>


</template>

<script>
export default {
    data(){
        return{
            isshow:true
        }
    },
    methods:{
        tabnav(){
            this.isshow = !this.isshow
        }
    }
}
</script>

<style lang="scss" scoped>
.goods-wrap{
    width: 7.5rem;
   
}
.goods{
    width: 7.2rem;
    height: 3.2rem;
    padding-top: .5rem;
    padding-left: .3rem;
     background-color: #fff;
     border-radius: 0 0 .4rem .4rem;
}
.price{
    width: 100%;
    height: .8rem;
    font-size: .28rem;
    span{
        font-size: .4rem;
        color: #be956a;
    }
}
.goods-check{
    width: 100%;
    height: .8rem;
    font-size: .28rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    


    .check-left{
        flex: 1;
    }

    .check-right{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 1.2rem;
        height: .5rem;
        color: #be956a;
        background-color: #ededed;
        border-radius: .5rem 0 0 .5rem;

       
    }
}

.check-text{
    width: 7.2rem;
    height: .6rem;
    line-height: .6rem;
}

.shopping{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 7.5rem;
    height: .8rem;
    margin-top: .3rem;
     background-color: #fff;
     color: #606266;


        .shop-left{
            flex: 1;
            padding-left: .3rem;
        }
        .shop-right{
            width: .7rem;

            i{
                font-size: .36rem;
            }
        }
}
.shop-wrap{
     position: fixed;
     bottom: 0;
     left: 0;
     z-index: 10;
    width: 7.5rem;
    height: 100%;
     background-color: rgba(0,0,0,.5);
}

.shopdesc{
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 22222;
    width: 7.5rem;
    height: 7rem;
    background-color: #fff;
}

.move-enter{
        opacity: .8;;
        transform: translate(0,100%);
}
.move-enter-active
{
    transition: all .3s;
}



.desc{
    width: 7.5rem;
    margin-top: .3rem;
    background-color: #fff;
    padding-bottom: 1rem;

    
}
.desc-head{
    width: 100%;
    height: 1rem;
    position: relative;


    

}
.head-text{
    width: 100%;
    height: .6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 5;
}
.des{
    position: absolute;
    top: .5rem;
    right: 50%;
    z-index: 0;
    transform: translateX(50%);
    width: 3rem;
    border-bottom: 1px solid #ccc;
    
}
.desc-text{
    width: 7rem;
    height: 1rem;
    line-height: .5rem;
    padding-left: .3rem;
    margin-bottom: .3rem;
    

    .desc-head{
        width: 100%;
        padding-bottom: .1rem;
    }
}

.desc-img{
    width: 7.5rem;

    img{
        width: 7.5rem;
    }
}

.footer-wrap{
    display: flex;
    width: 7.5rem;
    height: 1rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1111;

    .footer{
        width: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #606266;

        i{
            font-size: .48rem;
            padding-bottom: .1rem;
        }
    }

    .footer-text{
        width: 2rem;
        height: .8rem;
        line-height: .8rem;
        margin-left: 2.5rem;
        margin-top: .1rem;
        margin-bottom: .1rem;
        text-align: center;
        background-color: #be956a;
        border-radius: .5rem;
        color: #fff;
    }
}
</style>