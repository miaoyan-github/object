<template>
  <div class="container">
    <header class="header">
      <h4>活动信息查询</h4>
      <ul class="content">
        <li>
          <el-select class="select" v-model="select" placeholder="开业状态" size="mini">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </li>
        <li>
          商品名称：<el-input class="input" placeholder="请输入内容" v-model="input1" clearable size="mini"></el-input>
        </li>
        <li>
          店铺编号：<el-input class="input" placeholder="请输入内容" v-model="input2" clearable size="mini"></el-input>
        </li>
        <li>
          <el-button class="btn-search" type="primary" icon="el-icon-search" size="mini" @click="runSearch">查询</el-button>
        </li>
      </ul>
    </header>
    <el-table :data="tableData" height="calc(100% - 80px)" border style="width: 100%">
      <el-table-column prop="date" label="店铺编号" width="100" align="center"></el-table-column>
      <el-table-column prop="name" label="店铺名称" width="100" align="center"></el-table-column>
      <el-table-column prop="address" label="商品名称" width="100" align="center"></el-table-column>
      <el-table-column prop="date" label="当日库存" width="100" align="center"></el-table-column>
      <el-table-column prop="name" label="生效周期" width="100" align="center"></el-table-column>
      <el-table-column prop="address" label="商品原价" width="100" align="center"></el-table-column>
      <el-table-column prop="date" label="折扣价格" width="100" align="center"></el-table-column>
      <el-table-column prop="name" label="活动状态" width="100" align="center"></el-table-column>
      <el-table-column prop="address" label="用户类型" width="100" align="center"></el-table-column>
      <el-table-column prop="date" label="活动开始时间" width="100" align="center"></el-table-column>
      <el-table-column prop="name" label="活动结束时间" width="100" align="center"></el-table-column>
      <el-table-column prop="address" label="每单限购数量" width="100" align="center"></el-table-column>
      <el-table-column prop="date" label="当日剩余可购买数" width="100" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      options: [{
        value: '待生效',
        label: '待生效'
      }, {
        value: '生效',
        label: '生效'
      }, {
        value: '过期',
        label: '过期'
      }],
      select: '',
      input1: '',
      input2: ''
    }
  },
  methods: {
    runSearch () {
      if (this.select || this.input1 || this.input2) {
        console.log(this.select, this.input1, this.input2)
        this.select = ''
        this.input1 = ''
        this.input2 = ''
      } else {
        alert('请选择或输入查询条件')
      }
    }
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  min-width: 600px;
}
.header{
  width: 100%;
  height: 80px;
}
.header>h4{
  padding: 10px 20px 0;
  height: 30px;
  line-height: 20px;
}
.header>.content{
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: flex-start;
}
.content>li{
  display: flex;
  justify-content: flex-start;
  margin-right: 20px;
  font-size: 14px;
}
.select{
  width: 120px;
}
.input{
  width: 150px;
}
.btn-search{
  margin: auto 0;
  height: 30px;
}
</style>
