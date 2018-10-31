<template>
  <div class="container">
    <header class="header">
      <h4>差评信息匹配</h4>
      <ul class="content">
        <li>
          <el-select class="select" v-model="select" placeholder="店铺" size="mini">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </li>
        <li>
          店铺名称：<el-input class="input" placeholder="请输入内容" v-model="input1" clearable size="mini"></el-input>
        </li>
        <li>
          <el-button class="btn-search" type="primary" icon="el-icon-search" size="mini" @click="runSearch" plain>查询</el-button>
        </li>
      </ul>
    </header>
    <el-table :data="tableData" height="calc(100% - 80px)" border style="width: 100%">
      <el-table-column prop="date" label="店铺编号" fit align="center"></el-table-column>
      <el-table-column prop="name" label="店铺名称" fit align="center"></el-table-column>
      <el-table-column prop="address" label="清单" fit align="center"></el-table-column>
      <el-table-column prop="date" label="点赞" fit align="center"></el-table-column>
      <el-table-column prop="name" label="点踩" fit align="center"></el-table-column>
      <el-table-column prop="address" label="相似度" fit align="center"></el-table-column>
      <el-table-column prop="date" label="用户姓名" fit align="center"></el-table-column>
      <el-table-column prop="date" label="用户手机号" fit align="center"></el-table-column>
      <el-table-column prop="name" label="订单推送时间" fit align="center"></el-table-column>
      <el-table-column prop="address" label="评价获取时间" fit align="center"></el-table-column>
      <el-table-column prop="date" label="计算订单时长" fit align="center"></el-table-column>
      <el-table-column prop="date" label="评价订单时长" fit align="center"></el-table-column>
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
        value: '陕味食族·凉皮肉夹馍(常营店)',
        label: '陕味食族·凉皮肉夹馍(常营店)'
      }, {
        value: 't_4spEfCLWIE',
        label: 't_4spEfCLWIE'
      }],
      select: '',
      input1: ''
    }
  },
  methods: {
    runSearch () {
      if (this.select || this.input1) {
        console.log(this.select, this.input1)
        this.select = ''
        this.input1 = ''
      } else {
        this.$notify.error({
          title: '错误',
          message: '请选择或输入查询条件'
        })
      }
    }
  }
}
</script>

<style scoped>
  .container{
    width: 100%;
    height: 100%;
    min-width: 1000px;
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
