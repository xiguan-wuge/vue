<template>
  <div>
    <HeaderTop title="江西南昌">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!-- 首页导航轮播图 -->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(pages,index) in categorysArr" :key="index">
            <a href="" class="link_to_food" v-for="(data, index) in pages" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl+data.image_url">
              </div>
              <span>{{data.title}}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop'
export default {
  data(){
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },
  components: {
    HeaderTop
  }
}
</script>
<style lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 20px
          color #fff
          display block
      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
</style>
