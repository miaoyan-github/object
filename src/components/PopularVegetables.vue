<template>
  <div class="container">
    <header class="header">
      <h4>畅销菜品查询</h4>
      <ul class="content">
        <li>
          <el-button class="btn-search" type="success" icon="el-icon-refresh" size="mini" @click="runUpdate" plain>刷新</el-button>
        </li>
      </ul>
    </header>
    <el-table :data="tableData" height="calc(100% - 80px)" border style="width: 100%">
      <el-table-column prop="date" label="菜品编号" fit align="center"></el-table-column>
      <el-table-column prop="name" label="菜品名称" fit align="center"></el-table-column>
      <el-table-column prop="address" label="菜品数量" fit align="center"></el-table-column>
      <el-table-column prop="address" label="菜品价格" fit align="center"></el-table-column>
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
      }]
    }
  },
  methods: {
    runUpdate () {
      this.$notify({
        title: '成功',
        message: '刷新成功',
        type: 'success'
      })
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
    border-left: 1px solid rgb(235,238,245);
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
