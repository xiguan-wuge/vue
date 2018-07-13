<template> 
  <div>
    <click-component v-for="i in s" :key="i" :index="i">
    </click-component>    
    <show-component></show-component>
  </div>
</template>
<script>
import clickComponent from './click.vue'
import showComponent from './show.vue'
export default {
  data(){
    return{
      s:5
    }
  },
  components: {
    clickComponent,
    showComponent
  }
}
</script>
<style>
</style>
eventBus 解决的是兄弟组件之间的事件传递问题，本质是订阅发布者模式，摆托了兄弟组件需要父组件转达的问题，当然还有另一种解决办法--vuex,数据流，但是一般大项目引用vuex