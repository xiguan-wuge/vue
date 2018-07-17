<template>
  <div class="el-form-item">
    <label class="el-form-item__label" v-if="label || $slots.label">
      <slot name="label">{{label}}</slot>
    </label>
    <div class="el-form-item__content">
      <slot/>
    </div>
  </div>  
</template>
<script>
import emitter from '@/mixins/emitter'
export default {
  props: {
    label: String,
    prop:String
  },
  mixins:[emitter],
  mounted(){
    // fields 生成一下
    // 指定那个组件 那个方法 那个参数
    // emitter 中concat连接数组，所以这里[this]
    this.dispatch('elForm','el.form.addField',[this])
  },
  computed:{
    form(){
      let parent = this.$parent;
      let parentName = parent.$options.componentName;
      while(parentName != 'elForm'){
        parent = parent.$parent;
        parentName = parent.$options.componentName;
      }
      return parent;
    }
  },
  methods:{
    validate(trigger,callback){
      // 当前item 对应的rule是什么 =》 先得到所有的rules =>app.vue,elForm.props上
      // el-input 对应的值是什么
      const rules = this.form.rules;
      console.log(rules)
      const item_rule = rules[this.prop]
    }
  }
}
</script>
