<template>
  <div class="comment-list">
    <!-- <slot/> -->
    <comment-item v-for="(item,index) in list" :content="item" :key="index"></comment-item>

    <div v-if="list.length==0" class="emptyMsg">当前没有评论</div>
  </div>
</template>
<script>
import commentItem from './commentItem'
export default {
  props:{
    'list':Array
  },
  components:{
    commentItem
  }
  
}

</script>
<style>

</style>
