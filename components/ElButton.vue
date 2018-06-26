<template>
  <button
  @click="handleClick"
  :type="nativeType"
  class="el-button"
  :class = "[
    type? 'el-button--' + type : '',
    size? 'el-button--' + size:'',
    {'is-disabled': buttonDisabled,
    'is-loading': loading,
    'shape':shapeText
    }
    
  ]"
  :disabled="buttonDisabled">
    <i class="el-icon-loading" v-if="loading"></i>
    <i v-if="icon&&!loading" :class="icon"></i>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'ElButton',
  props: {
    disabled: Boolean,
    type: {
      type: String,
      default: 'default'
    },
    loading: Boolean,
    icon: {
      type: String,
      default: ''
    },
    nativeType:{
      type:String,
      default:'button'
    },
    size:{
      type:String,
      default:''
    },
    shapeText:{
      type:String,
      default:''
    }

  },
  computed: {
    buttonDisabled () {
      return this.disabled;
    }
  },
  methods:{
    handleClick(evt){
      // console.log(evt)
      this.$emit('click',evt);//将这个事件传到外面
    }
  }
}  
</script>
<style>

</style>
