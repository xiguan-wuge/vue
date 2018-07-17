<template>
  <form class="el-form" :class="[labelPosition?'el-form-label-'+labelPosition:'',{'el-form--inline':inline}]">
    <slot></slot>
  </form> 
</template>
<script>
export default {
  name: 'elForm',
  componentName: 'elForm',
  data() {
    return {
      fields: []
    }
  },
  props: {
    labelPosition: String,
    inline: Boolean,
    model: Object,
    rules: Object
  },
  methods: {
    validate() {
      this.fields.forEach(field => {
        field.validate('', (message, field) => {
          
        })
      })
    }
  },
  created() {
    // 监听事件，在mounted之前
    this.$on('el.form.addField', field => {
      this.fields.push(field)
    })
  }
}
</script>
<style>
</style>
