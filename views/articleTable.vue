<template>
    <div class="app-container">
        <div class="filter-container">
            <el-select v-model="listQuery.importance" placeholder="重要性" class="filter-item">
                <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item"></el-option>
            </el-select>
            <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
        </div>
        <el-table :data="list" v-loading="listloading">
            <el-table-column label="序号" align="center" width="65">
                <!-- template 可用于复杂表格设计，当表格里的东西需要加标签的时候 -->
                <template slot-scope="scope">
                    <span>{{scope.row.id}}</span>
                </template>
            </el-table-column>
             <el-table-column label="重要性" align="center" width="150">
                <template slot-scope="scope">
                    <span>{{scope.row.importance}}</span>
                </template>
            </el-table-column>
            <el-table-column label="日期" align="center" width="150">
                <template slot-scope="scope">
                    <span>{{scope.row.timestamp}}</span>
                </template>
            </el-table-column>
            <el-table-column label="标题" min-width="150">
                <template slot-scope="scope">
                    <span>{{scope.row.title}}</span>
                </template>
            </el-table-column>
            <el-table-column label="作者" align="center" width="110">
                <template slot-scope="scope">
                    <span>{{scope.row.author}}</span>
                </template>
            </el-table-column>
            <el-table-column label="阅读数" align="center" width="95" pageviews  prop="pageviews">
            </el-table-column>
            <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
                <template slot-scope="scope">
                    <el-button type="primary" @click="handleUpdate(scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="修改" :visible.sync="dialogFormVisible">
            <el-form :model="temp" label-position="left" label-width="70"
            style='width:400px;margin-left:50px;'>
            <el-form-item prop="title" label="标题">
                <el-input v-model="temp.title"></el-input>
            </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible=false;">取消</el-button>
            <el-button @click="updateData">保存</el-button>
            </div>
        </el-dialog>

        <div class="pagination-container">
            <el-pagination :current-page="listQuery.page" :page-size="listQuery.limit" :total="total" layout="total,sizes,prev,pager,next,jumper" @current-change='handleCurrentChange'></el-pagination>
        </div>
    </div>
</template>


<script>
import {fetchList} from '@/api/article';

export default {
    data(){
        return {
            total:0,
            list:[],
            temp:{ //弹窗里的表单model
                id:null,
                importance:1,
                remark:'',
                timestamp:new Date(),
                title:'',
                type:'',
                status:'published',
            },
            listQuery:{ //查询条件
                title:undefined,
                importance:undefined,
                type:undefined,
                sort:'+id', //以id作为升序
                page:1,
                limit:20
            },
            dialogFormVisible:false,
            listloading:false,
            importanceOptions:[1,2,3]
        }
    },
    methods:{
        getList(){
            this.listloading = false;
            fetchList(this.listQuery)
            .then(response => {
                this.list = response.data.items
                this.total = response.data.total
            })
        },
        handleUpdate(row){
           this.temp= Object.assign({},row);
           this.dialogFormVisible = true;
            console.log(row);
        },
        updateData(){
            this.listloading = true;
        },
        handleCurrentChange(page){
            this.listQuery.page = page;
            this.getList();
        },
        handleFilter(){
            this.listQuery.page = 1;
            this.getList();
        }
    },
    created(){ //内存中已经生成了
        this.getList();
    }
    
}
</script>

<style>

</style>
