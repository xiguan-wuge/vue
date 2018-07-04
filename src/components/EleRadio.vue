<template>
  <label class="el-radio" :class="[
  {'isDisabled':isDisabled},
  {'is-focus':focus},
  {'is-border':border}
  ]">
  <span class="el-radio__input">
    <span class="el-radio__inner">
      <input type="radio" class="el-radio__original"
        :value="label" @focus="focus=true" @blur="focus=false" @change="handleChange" v-model="model"/>
    </span>
  </span> 
    <span class="el-radio__label">
       <slot />
       <template v-if="!$slots.default">
         {{label}}
       </template>
    </span>
    
  </label>
 
</template>
<script>
export default {
  data(){
    return {
      focus:false,
    }
  },
  props:{
    value:{},
    label:{},
    disabled:Boolean,
    name:String,
    border:Boolean,
    size:String 
  },
  //计算属性
  computed:{
    isDisabled(){
      return this.disabled
    },
    model:{
      get(){
        return this.value
      },
      set(val){
        this.$emit('input',val)
      }
    }
  },
  methods:{
    handleChange(){

    }
  }
  
}
</script>
