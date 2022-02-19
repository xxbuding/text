<template>
   <div class="container">
         <div id="tuijian">
             <div class="category_title">
                 <div class="title-name">工业门窗</div>
                 <div class="title-all">全部></div>
             </div>

            <div class="cate-warp">
                <div class="cate_group">
                    <div class="con-box">
                        <div class="box-img">
                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3890a888b96989426d86dd5a4bee317d.png?thumb=1&w=120&h=120" alt="">
                        </div>
                        <div class="box-name">小米Air 2 SE</div>
                    </div>
                    <div class="con-box">
                        <div class="box-img">
                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/960d47c60c0a0f83cbca500333f84aa3.png?thumb=1&w=120&h=120" alt="">
                        </div>
                        <div class="box-name">Redmi 手表 2</div>
                    </div>
                    <div class="con-box">
                        <div class="box-img">
                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a2f219336082bfff348a76f218090c56.png?thumb=1&w=120&h=120" alt="">
                        </div>
                        <div class="box-name">运动鞋</div>
                    </div>
                    </div>
                <div class="cate_group">
                    <div class="con-box">
                        <div class="box-img">
                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dd0a0140e6156ddc464545c77d8c0564.png?thumb=1&w=120&h=120" alt="">
                        </div>
                        <div class="box-name">充电宝</div>
                    </div>
                    <div class="con-box">
                        <div class="box-img">
                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f7265e99df10d08714439e182fc3de2.png?thumb=1&w=120&h=120" alt="">
                        </div>
                        <div class="box-name">水壶/养生壶</div>
                    </div>
                    <div class="con-box">
                        <div class="box-img">
                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7827f0294b27dddf5c696cb7c9c36b76.png?thumb=1&w=120&h=120" alt="">
                        </div>
                        <div class="box-name">键鼠</div>
                    </div>
                </div>
                <div class="cate_group">
                    <div class="con-box">
                        <div class="box-img">
                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7e19e10d0e1fb4eec5e64f0fff02ad8.png?thumb=1&w=120&h=120" alt="">
                        </div>
                        <div class="box-name">Note 11 4G</div>
                    </div>
                    <div class="con-box">
                        <div class="box-img">
                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/945ef5dc804de3c7af0437aa64dfeec4.png?thumb=1&w=120&h=120" alt="">
                        </div>
                        <div class="box-name">数据线</div>
                 </div>
                 <div class="con-box">
                    <div class="box-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dd9d058fe0f132b0f09885c0ddc20ad1.png?thumb=1&w=120&h=120" alt="">
                    </div>
                    <div class="box-name">剃须刀</div>
                 </div>
           
                
                   
                    
                </div>
            </div>
         </div>
    </div>
</template>

<script>
export default {
    created(){
        // console.log(this.$route)
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
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.con-box{
    width: 1.55rem;
    height:  1.55rem;
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
    margin-top: 0.28rem;
    white-space: nowrap;
    font-size: .23rem;
    color: rgba(0,0,0,.54);
}
</style>