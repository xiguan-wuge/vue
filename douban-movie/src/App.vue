<template>
  <div id="app">
    <Dheader></Dheader>
    <transition name="fade">
      <keep-alive exclude="movieDetail">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
// import Dheader from './header.vue'
export default {
  data() {
    return {
      msg: 'welcome to douban'     
    }
  },
  components: {
    'Dheader': (resolve) => {
      require(['./header'],resolve)
    }
  }
}
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
    font-family: '微软雅黑';
  }
</style>
