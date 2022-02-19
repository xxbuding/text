<template>
  <div class="container">
      <div class="con-head">
            固安捷11推荐
      </div>

      <div class="cont-warp">
            <div class="con-cent">
              <div class="cent" v-for="(item,index) in list" :key="index">
                    <div class="cent-i">
                      <img class="cent-img" :src="item.pic">
                    </div>
                    <div class="cent-name">{{item.name}}</div>
                    <div class="cent-price">￥<span>{{item.price1}}</span>.{{item.price2}} <span>起</span> </div>
                </div>
            </div>
      </div>

      <div class="con-head">
            猜你喜欢
      </div>

      <div class="cent-list">
          <div class="list-left">
            <router-link to="/check" tag="div" class="list" v-for="(item,index) in list2" :key="index">
              <div class="list-img">
                <img :src="item.pic">
              </div>
               <div class="list-text">
                  <div class="list-time">当日出货</div>
                  <div class="list-name">
                    <span>{{item.logo}}</span>{{item.name}}
                  </div>
                  <div class="list-price">￥<span>{{item.price1}}</span>.{{item.price2}} <span>起</span> </div>
              </div>
            </router-link>
          </div>
          
      </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[],
      list2:[]
    }
  },
  created(){
    this.getData(),
    this.getData2()
  },
  methods:{
    getData(){
      this.$axios.get("http://localhost:3000/imgData3")
      .then(res=>{
        this.list=res.data
      })
    },
    getData2(){
       this.$axios.get("http://localhost:3000/imgData4")
      .then(res=>{
        this.list2=res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
    width: 7.5rem;
    // height: 10rem;
    background-color: #F5F5F5;
    padding-bottom: 1rem;

    .con-head{
        width: 7rem;
        height: .6rem;
        font-size: .34rem;
        font-weight: 700;
        padding-left: .2rem;

    }
}

.cont-warp{
    position: relative;
    width: 100%;
    height: 3.5rem;
    margin-bottom: .4rem;
    overflow-x: scroll;

}

.con-cent{
    // width: 7.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
     margin: 0 0 .1rem ;
    position: absolute;
    top: 0;
    left: 0;    



    .cent{
        width: 2.3rem;
        height: 3rem;
        margin: 0 .1rem;
        background-color: #fff;
        
       
        .cent-i{
            width: 100%;
            height: 1.5rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        .cent-img{
             width: 1.5rem;
             height: 1.5rem;
   
        }
        .cent-name{
            text-overflow: ellipsis;
            overflow: hidden;
            line-height: .3rem;
            max-height: .6rem;
            font-size: .22rem;
            color: #3c3c3c;
            margin: .2rem .4rem .2rem;
        }
        .cent-price{

            font-size: .20rem;
            color: red;
            margin: .1rem .2rem;

            :nth-child(1){
                font-size: .36rem;
            }
            :nth-child(2){
                font-size: .30rem;
            }
        }
    }
}

.cent-list{
  width: 7.5rem;


  .list-left{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 .2rem;
    
   
   .list{
    background-color: #fff;
    margin: .1rem 0;
   }

      .list-img{
        width: 100%;
        height: 3rem;
         
        img{
          width: 3rem;
          height: 2.5rem;
          padding: .2rem;
        }
      }
      .list-text{
        height: 2rem;
         padding: .1rem;

      }
      .list-time{
        font-size: .28rem;
        color: #bd956a;
        padding: .1rem;
       
      }
      .list-name{
        width: 3rem;
        line-height: .35rem;
        font-size: .28rem;
        margin-bottom: .02rem;
        padding: .1rem;


          span{
            color: #fff;
            background-color: #bd956a;
            border-radius: .1rem;
            padding: .01rem;
            margin-right: .05rem;
          }
      }
      .list-price{
          font-size: .25rem;
          font-weight: 500;
          color: #cc1800;
          padding: .1rem;
        
             :nth-child(1){
                font-size: .34rem;
            }
            :nth-child(2){
                font-size: .30rem;
            }
      }
  }
}
</style>