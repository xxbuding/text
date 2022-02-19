<template>
   <div class="container">
         <div id="tuijian">
             <div class="category_title">
                 <div class="title-name">手工具</div>
                 <div class="title-all">全部></div>
             </div>

             <div class="cate-warp">
                <div class="cate_group">
                    <router-link to="/flower"  tag="div" class="con-box" v-for="(item,index) in list" :key="index">
                        <div class="box-img">
                            <img :src="item.pic" alt="">
                        </div>
                        <div class="box-name">{{item.name }}</div>
                    </router-link>
                </div>
             </div>
         </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        // console.log(this.$route)
        this.$axios.get("http://localhost:3000/imgData6")
        .then(res=>{
            this.list = res.data
        })

    }
}
</script>

<style lang="scss" scoped>
.container{
    width: 5.5rem;
    overflow-y: scroll;
    padding-left: .1rem;
    /* height: 100rem; */
    // padding-right: 0.32rem;
    // margin-top: 1.2rem;
    // padding-bottom: 1rem;

}


.category_title{
    width: 5.5rem;
    height: .7rem;
    line-height: .7rem;
    font-size: .26rem;
    color: #666;
    display: flex;
    justify-content: space-between;
    align-self: center;
    // padding-top:.2rem ;

    .title-all{
        width: 1rem;
        font-size: .20rem;
        color: #999;
    }

}


.content-box{
    width: 100%;
    height: 1.7rem;
    display: flex;
    align-items: center;
    background-color: #f8f8f8;
    border-radius: .1rem;
    margin-bottom: .2rem;
}
.content-box img{
    width: 1.4rem;
    height: 1.5rem;
}
.name-price{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.name-price span{
    font-size: .2rem;
}
.name-price .label{
    color: #c69768;
    border: 1px solid #c69768;
    font-size: .2rem;
    align-items: center;
    padding: 0 0.09rem;
    margin-left: 0.15rem;
    border-radius: 0.04rem;
}
.content-box .name{
    font-size: .28rem;
    color: #333;


    
}
.content-box .price{
    font-size: .3rem;
    color: #333;
    padding: .2rem 0;
}
.cate-warp{
    width: 5.2rem;
    height: 8.8rem;
    padding-bottom: 0.5rem;
}

.cate_group{
    width: 5.2rem;
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    align-items: center;

}
.con-box{
    width: 1.55rem;
    height:  1.9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.box-img{
    width: 1rem;
    height: 1rem;
}
.box-img img{
    width: 1rem;
    height: 1rem;
}
.box-name{
    height: 1.5rem;
    text-align: center;
    overflow: hidden;
    margin-top: 0.28rem;
    white-space: wrap;
    font-size: .23rem;
    color: #000;
}
</style>