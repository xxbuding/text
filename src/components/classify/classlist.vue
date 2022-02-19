<template>
    <div class="main1">
        <!-- 左侧 -->
        <div class="list-navbar">
                <ul>
                    <router-link  :to="'/classify/' + item.component"  tag="li" v-for="(item) in list" :key="item.id">
                        <a href="#">
                            <span >{{item.shopName}}</span>
                        </a>
                    </router-link>
                </ul>
            </div>
        <!-- 右侧 -->
        <router-view></router-view>
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
        this.getData()
        // console.log(this.$route)
    },
    methods:{
        getData(){
            this.$axios.get("http://localhost:3000/imgData5")
            .then(res=>{
                this.list=res.data
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
}
</script>

<style lang="scss" scoped>


.main1{
    display: flex;
    position: absolute;
    top: 1.8rem;
    bottom: 1rem;
    left: 0;
    right: 0;
}
.list-navbar{
    width: 1.8rem;
    font-size: .24rem;
    color: #666;
    overflow-y: scroll;
    background-color: #f5f5f5;
}
.list-navbar ul{
    width: 100%;

    .router-link-active{
        background-color: #fff;
        color: #000;
        font-weight: 700;
        font-size: .26rem;
    }
}
.list-navbar ul li{
  width: 100%;
    height: 1rem;
    text-align: center;

}
.list-navbar ul li a{
    display: inline-block;
    width: 1.8rem;
    height: .9rem;
    line-height: .9rem;
    color: #666;
    text-decoration: none;
}
.list-navbar ul li a span{
    display: inline-block;
    width: 100%;
    height: 100%;
}


</style>