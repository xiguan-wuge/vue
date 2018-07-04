<template>
  <div class="comment">
    <comment-form @addComment="addComment">
    </comment-form>
    <comment-list :list="list">
      <!-- <comment-item>
      </comment-item> -->
    </comment-list>    
    <pageNation :totalCount="totalCount" :currentPage="currentPage" :pagesize="pagesize" @turnPage="turnPage"></pageNation>
  </div>
    
</template>
<script>
import commentForm from "./commentForm.vue";
import commentList from "./commentList.vue";
import pageNation from "./pageNation.vue";
import commentItem from './commentList'
export default {
  data(){
    return{
      list:[],
      pagesize:3,  //pageNation组件 无法独立
      totalData:[],  //所有的数据=》当前页面的评论 list   (父子 计算关系)
      totalCount:0,
      currentPage:1
    }
  },
  components: {
    commentForm,
    commentList,
    pageNation,
    commentItem
  },
  methods:{
    addComment(msg){
      // console.log(msg)
      this.totalData.push({text:msg});
      this.totalCount=this.totalData.length;
      if(this.totalCount<=this.pagesize){
        this.list=this.totalData.reverse();
        // this.list.reverse()
      }else{
        this.list=this.totalData.slice(this.totalCount-this.pagesize,this.totalCount).reverse();
        
      }
      // this.currentPage=1;
    },
    turnPage(cur){
      console.log(cur)
    }
  }
};
</script>
<style>
</style>
