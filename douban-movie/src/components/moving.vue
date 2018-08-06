<template>
  <div class="moving">
    <div class="tit">
      <h1>电影票 - {{city}}</h1>
      <div class="locat">
        <el-dropdown trigger="click" @command="changeCity">
          <span class="el-dropdown-link">[切换城市]</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(city, index) in  citys" :key="index" :command="city.name">{{city.name}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <moviesTag :data = "movingList" class="movieTag"/>
  </div>
</template>
<script>
import moviesTag from './common/moviesTag'
export default {
  data() {
    return {
      citys: [
        { name: '北京' },
        { name: '上海' },
        { name: '广州' },
        { name: '深圳' },
        { name: '杭州' },
        { name: '厦门' }
      ],
      // city: '杭州'
    }
  },
  mounted() {
    //获取正在上映列表
    this.$store.dispatch('getMoving')
  },
  methods: {
    // commit , dispatch 调用mutaitions
    changeCity(command) {
      // console.log('changeCity')
      this.$store.commit('MOVING_LOADING', {loading: true});
      this.$store.commit('MOVIE_CITY', {city:command});
      this.$store.dispatch('getMoving')
    }
  },
  components: {
    moviesTag
  },
  computed: {
    //电影列表函数
    movingList() {
      return this.$store.getters.movingList
    },
    //获取当前城市
    city() {
      return this.$store.getters.city
    }
  }
}
</script>
<style lang="less">
  .moving {
    margin-bottom: 20px;
    p {
      color: red;
    }
    .tit {
      width: 950px;
      margin: 0 auto;
      margin-top: 20px;
      h1 {
        display: inline-block;
        width: 126px;
        font-size: 20px;
        color: #000;
      }
      .locat {
        position: relative;
        display: inline-block;
      }
    }
  }
</style>
