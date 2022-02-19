<template>
  <div class="login">
      <div class="heading-text">
        <div class="heading">
                <div class="head-i" @click="goPage"><i class="iconfont icon-zuojiantou"></i></div> 
        </div>
        <div class="text">
            <p class="text-p1">Hi~</p>
            <p class="text-p2">MYMRO欢迎您</p>
        </div>
      </div>
    <div class="content">
        <p class="cont-p">账号：<input type="text" placeholder="请输入账号" v-model="tel"></p>
        <p class="cont-p">密码：<input type="password" placeholder="请输入密码" v-model="pw"></p>
        <button class="btn" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import {userLogin} from '@/api/http.js'
export default {
    data(){
        return{
            tel:'',
            pw:''
        }   
    },
    methods:{
        goPage(){
            //返回上一级
            this.$router.go(-1)
        },
        login(){
            //api封装
            //用户登录
            userLogin({
                tel:this.tel,
                pw:this.pw
            })
            .then(res=>{
               if(res.data.code === 0){
                   alert('登陆成功')
                   localStorage.setItem('token',res.data.token)
                   localStorage.setItem('user',res.data.user)
                    this.$router.push({
                    path:'/my',
                    query:{
                        redirectUrl:'/my'
                    }
                })
               }
            })
            .catch(err=>{
                console.log(err);
            })



            //验证前端有效性
            // this.$axios.post("http://localhost:3001/api/login",{
            //     account:this.account,
            //     pw:this.pw
            // })
            // .then(res=>{
            //     localStorage.setItem("token",res.data.token)
            //     // let url = this.$route.query.redirectUrl
            //     this.$router.push({
            //         path:'/my',
            //         query:{
            //             redirectUrl:'/my'
            //         }
            //     })
            // })
            // .catch(err=>{
            //     console.log(err);
            // })
        }
    }

}
</script>

<style lang="scss" scoped>
.login{
    position: relative;
    width: 7.5rem;
}
.heading-text{
    height: 4rem;
    background-color: #be956a;

}
.heading{
    width: 6rem;
    padding-top: .5rem;
    margin-left: .5rem;
    // background-color: #fff;
    .head-i{
        width: 5rem;
        height: .5rem;
        
        i{
            font-size: .50rem;
        }
    }

}
.text{
    width: 6rem;
    height: 1rem;
    font-weight: 700;
    padding-top: 1rem;
    margin-left: .7rem;

    .text-p1{
        font-size: .36rem;
        margin-bottom: .35rem;
    }
    .text-p2{
        font-size: .45rem;
        color: #fff;
        padding-left: .2rem;
    }
}
.content{
    width: 6.4rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: .5rem;
    padding: .5rem .5rem;
    border: solid .01rem #000;
    border-radius: .5rem;
    // background-color: rgba(204, 84, 36,.8);
}
.cont-p{
    padding: .1rem 0;
    border-bottom:.01rem solid #000
}
.btn{
    width: 2rem;
    height: 1rem;
    margin-top: .5rem;
    font-size: .36rem;
    background-color: #ccc;
}

</style>