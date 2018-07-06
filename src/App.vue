<template>
  <div id="app">
    <router-link to="/home">home</router-link>
    <router-link to="/login">login</router-link>
    <!-- vue内置组件 -->
    <transition name="router-fade">
      <!-- <keep-alive>是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。 -->
      <keep-alive>
        <router-view v-if="$route.meta.keepalive"></router-view>
      </keep-alive>      
    </transition>
    <transition name="router-fade">
      <router-view v-if="!$route.meta.keepalive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script >

<style lang="stylus">
@import './style/common'
// name+ 进入的那一瞬间 
// router-fade-enter-active 会在进入整个过程里,
//完全进入后会移除这个类名
.router-fade-enter-active,
.router-fade-leave-active{
  transition:opacity .3s
}
.router-fade-enter,
.router-fade-leave-active{
  opacity:0;
}
</style>
