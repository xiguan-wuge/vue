<template>
  <div>
    <head-top signin-up="home">
      <span slot="logo" class="head_logo">ele.me</span>
    </head-top>
    <nav class="city_nav">
      <div class="city_tip">
        <span>当前定位的城市：</span>
        <span>定位不准时，请在城市列表中查找</span>
      </div>
      <router-link :to="'/city/'+guessCityId" class="'guess_city'">
        <span>{{guessCity}}</span>
      </router-link>
    </nav>
    <section class="hot_city_container">
      <h4 class="city_title">热门城市</h4>
      <ul class="cityListul clear">
        <router-link :to="'/city'+item.id" v-for="item in hotcity" :key="item.id" tag="li">
        {{item.name}}
        </router-link>
      </ul>
    </section>
  </div>
</template>
<script>
import headTop from '@/components/headTop'
import { cityGuess,hotcity } from '@/api/getData'
export default {
  data(){
    return{
      guessCityId:'123',
      guessCity:'···斯坦',
      // 获取城市地点不是前端可以搞定的，应该提供一个api 让后端处理，至少要有这个思想
      hotcity:[]
    }
  },
  components:{
    'head-top':headTop
  },
  // 挂载完后再去请求地点
  mounted(){
    cityGuess()
      .then( res=>res.json())
      .then(data=>{
        this.guessCityId=data.id;
        this.guessCity=data.name
    })
    hotcity()
      .then(res=>res.json())
      .then(data=>{
        this.hotcity=data
    })
  }
}
</script>
<style lang="stylus">
@import '../style/mixin'
  .city_nav
    padding-top 2.35rem
    border-top 1px solid $bc
    background-color #fff
    margin-bottom 0.4rem

    .city_tip
      fj()
      line-height 1.45rem
      padding 0 0.45rem
      span:nth-of-type(1)
        sc(0.65rem,#666)
      span:nth-of-type(2)
        font-weight 900
        sc(0.575rem,#9f9f9f)
  
  .city_title
    sc(1rem,#000)
  .cityListul
    sc(0.7rem,#000)
  


</style>
