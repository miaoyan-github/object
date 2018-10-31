<template>
  <div class="container">
    <header class="header">
      <h4>店铺信息查询</h4>
      <ul class="content">
        <li>
          <el-select class="select" v-model="select" placeholder="关键字类型" size="mini">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </li>
        <li>
          <el-input class="input" placeholder="请输入内容" v-model="input1" clearable size="mini"></el-input>
        </li>
        <li>
          <el-button class="btn-search" type="primary" icon="el-icon-search" size="mini" @click="runSearch" plain>查询</el-button>
        </li>
      </ul>
    </header>
    <el-table :data="tableData" height="calc(100% - 130px)" border style="width: 100%">
      <el-table-column prop="date" label="店铺编号" fit align="center"></el-table-column>
      <el-table-column prop="name" label="店铺名称" fit align="center"></el-table-column>
      <el-table-column prop="address" label="店铺地址" fit align="center"></el-table-column>
      <el-table-column prop="date" label="店铺电话" fit align="center"></el-table-column>
      <el-table-column prop="name" label="营业时间" fit align="center"></el-table-column>
      <el-table-column prop="address" label="店铺状态" fit align="center"></el-table-column>
      <el-table-column prop="date" label="操作" fit align="center">
        <template slot-scope="scope">
          <el-button class="btn" type="primary" icon="el-icon-edit" size="mini" @click="goEvaluationSearch(scope.row)">评价查询</el-button>
          <el-button class="btn" type="success" icon="el-icon-tickets" size="mini" @click="goListSearch(scope.row)">订单查询</el-button>
          <el-button class="btn" type="danger" icon="el-icon-phone-outline" size="mini" @click="goDeliveryDelay(scope.row)">配送超时</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="page-break" background layout="prev, pager, next" :total="1000" @current-change="changPage"></el-pagination>
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
        value: '店铺名称',
        label: '店铺名称'
      }, {
        value: '店铺编号',
        label: '店铺编号'
      }, {
        value: '开业状态',
        label: '开业状态'
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
    },
    goEvaluationSearch (data) {
      this.$router.push('/EvaluationSearch')
      console.log(data.name)
    },
    goListSearch (data) {
      this.$router.push('/ListSearch')
      console.log(data.date)
    },
    goDeliveryDelay (data) {
      this.$router.push('/DeliveryDelay')
      console.log(data.address)
    },
    changPage (page) {
      console.log(page)
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
  .btn{
    margin: 5px;
  }
  .page-break{
    text-align: center;
    padding: 11px 0;
    height: 50px;
    line-height: 50px;
  }
</style>
