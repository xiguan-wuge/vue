<template>
  <div id="app">

    <header class="header ">
      <el-row >
        <el-col :span="24" > 
          <el-menu class="el-menu-demo" mode="horizontal" default-active="1">
            <el-menu-item index="1">高级插件</el-menu-item>
            <el-menu-item index="2">在线商城</el-menu-item>
            <el-menu-item index="3">客户管理</el-menu-item>
            <el-menu-item index="4">系统设置</el-menu-item>
            <el-menu-item index="5">活动发布</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>
    <main>
      <div class="main-left">
        <el-menu class="el-menu-vertical-demo" default-active="1">
          <el-menu-item idnex="1">活动发布</el-menu-item>
          <el-menu-item index="2">活动管理</el-menu-item>
          
        </el-menu>
      </div>
      <div class="main-right">
        <div class="activePublic">
          <el-steps :span="200" :active="step">
            <el-step title="活动管理"></el-step>
            <el-step title="报名签到"></el-step>
            <el-step title="分享设置"></el-step>
            <el-step title="个性设置"></el-step>            
          </el-steps>
           <div class="step1">
            <el-form class="demo-ruleForm" ref="ruleForm" label-position="top" :model="ruleForm">
              <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.name" size="larget"></el-input>
              </el-form-item>
              <el-form-item label="" prop="fenLei">
                <el-row style="height:35px;" type="flex" align="middle">
                  <el-col :span="3" style="width:90px;">
                    <div class="el-form-item__label">活动分类</div>
                  </el-col>
                  <el-col :span="2">
                    <el-button type="text" @click.prevent="dialogFormFenLeiVisible=true">设置</el-button>
                  </el-col>
                </el-row>
                <el-radio-group v-model="ruleForm.fenLei">
                  <el-radio v-for="item of ruleForm.fenLeis" :key="item.name" :label="item.name"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动标签">
                  <el-tag v-for="atLable of activityLable" :key="atLable" type="primary" :closable="true" 
                   :disable-transitions="false" @close="handleCloseAtLable(atLable)" style="margin-right:10px;"
                  :visible.sync="dialogAtLableVisible">{{atLable}}</el-tag>
                   <el-button icon="el-icon-plus" @click="addAtLable" @click.prevent="dialogAddAtLableiVisible=true"></el-button>
              </el-form-item>
            </el-form>
            <el-dialog title="设置活动分类" :visible.sync="dialogFormFenLeiVisible" class="dialog-box">
              <el-form>
                <el-form-item>
                  <el-tag v-for="fenLei of ruleForm.fenLeis" :key="fenLei.name" type="primary" :closable="true" 
                   :disable-transitions="false" @close="handleCloseTag(fenLei)" style="margin-right:10px;"
                  :visible.sync="dialogTagVisible">{{fenLei.name}}</el-tag>
                </el-form-item>
              </el-form>
              <el-input v-model="diaInput"></el-input>
              <el-button-group class="dialog-button-group">
                <el-button class="dialog-button" clearable  @click="clearInput">取消</el-button>
                <el-button type="primary" @click="addDialog">添加</el-button>
              </el-button-group>
            </el-dialog>
            <el-dialog title="添加活动标签"
            :visible.sync="dialogAddAtLableiVisible">
              <el-input v-model="actiLable"></el-input>
              <el-button @click="cancleAddAc">取消</el-button>
              <el-button @click="AddAc" type="primary">添加</el-button>

            </el-dialog>
          </div>
           
          <!-- 按钮组 上一步，下一步，发布活动 -->
          <el-button-group>
            <el-button  @click.native.prevent="handlePreStep" v-show="preStep">上一步</el-button>
            <el-button type="primary" @click.native.prevent="handleNextStep" v-show="nextStep">下一步</el-button>
            <el-button type="primary">发布活动</el-button>
          </el-button-group>
        </div>
      </div>
    </main>
    <!-- <form action="https://www.baidu.com" method="get">
       <el-button nativeType="reset"
      type="primary">
        提交
      </el-button> 
      <el-button type="primary" @click="doSubmit" size="small" circle >
        提
      </el-button>
    </form> -->
    <!-- <el-button 
    loading
    icon="el-icon-edit"
    type="primary">
    </el-button>
    <el-button :disabled="disabled"
    type="info">
      提交
    </el-button>
    <el-button :disabled="disabled"
    type="warning">
      提交
    </el-button>-->
    <!-- <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left"
      >
       上一页
      </el-button>
      <el-button type="primary"
      >
       下一页 <i class="el-icon-arrow-right el-icon--right"></i>
      </el-button>
    </el-button-group> -->
    <!-- <el-button type="primary" icon="el-icon-share"></el-button>
    <el-button type="primary" icon="el-icon-delete"></el-button> -->
  </div>
</template>

<script>
// import ElButton from '@/components/ElButton'
// import ElButtonGroup from '@/components/ElBUttonGroup'
export default {
  name: "App",
  // props:{
  //   preStep:Boolean,
  //   nextStep:Boolean
  // },
  data() {
    return {
      disabled: false,
      step:0,
      dialogFormFenLeiVisible:false,
      dialogTagVisible:true,
      dialogAtLableVisible:true,
      dialogAddAtLableiVisible:false,
      clearable:false,
      preStep:true,
      nextStep:true,
      ruleForm:{
        name:'测试活动',
        fenLeis:[
          {name:'未发布'},
          {name:'测试活动'},
          {name:'精彩活动'}
        ],
        fenLei:'测试活动',
        tags:[],
        
      },
      diaInput:'',
      activityLable:["渣渣","要炸了"],
      actiLable:'哈哈'
    };
  },
  components: {
    // 'el-button': ElButton,
    // 'el-button-group':ElButtonGroup
  },
  mounted() {
    setTimeout(() => {
      this.disabled = true;
    }, 2000);
    function checkStep(){
      if(this.step===0){
        this.preStep = false;
      }
    }
  },
  methods: {
    handleClose(tag){
      this.dialogFormFenLeiVisible=false;
    },
    handleCloseTag(fenLei){
     this.ruleForm.fenLeis.splice(this.ruleForm.fenLeis.indexOf(fenLei), 1);
    },
    doSubmit(evt) {
      console.log(evt);
    },
    handlePreStep () {
      this.step--;
      this.goStep(this.step);
    },
    handleNextStep () {
      this.step++;
      this.goStep(this.step);
    },
    goStep (n) {
      switch(n) {
        case 0:
          this.preStep = false
          this.nextStep = true
          break;
        case 1:
          this.preStep = true
          this.nextStep = true
          break;
        case 2:
          this.preStep = true
          this.nextStep = true
          break;
        case 3:
          this.preStep = true
          this.nextStep = false
          break;

      }

    },
    clearInput(){
      this.diaInput='';
    },
    addDialog(){
        const diaInputText=this.diaInput.trim();
        // console.log(diaInputText);
        if(diaInputText!=''){
          this.ruleForm.fenLeis.push({name:diaInputText})
        }
    },
    handleCloseAtLable(atLable){
      this.activityLable.splice(this.activityLable.indexOf(atLable), 1);
    },
    addAtLable(){
      this.activityLable.push(this.actiLable)
    },
    cancleAddAc(){
      this.actiLable=''
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: sans-serif;
}
header {
  z-index: 1000;
  min-width: 1200px;
  transition: all 0.5s ease;
  border-top: 4px solid #3091f2;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rbga(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}

header.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
header.el-menu-demo {
  padding-left: 300px !important;
}
main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-height: 800px;
  border: solid 40px #e9ecf1;
  background-color: #fcfcfc;
}
main .main-left {
  text-align: center;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 200px;
  flex: 0 0 200px;
}
main .main-right {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: #fff;
  padding: 50px 70px;
}
main .el-menu {
  background-color: transparent !important;
}
.dialog-box{
  height:550px;
}
.dialog-button-group{
  /* position: absolute;
  bottom: 10px;
  right: 20px; */
  margin-left: 250px;
  margin-top: 10px;
}
.dialog-button-group .dialog-button{
  margin-right: 20px;
  display: inline-block;
}
</style>
