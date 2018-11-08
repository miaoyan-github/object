<template>
  <div class="container">
    <header class="header">
      <h4>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/StoreMsg' }">店铺信息</el-breadcrumb-item>
          <el-breadcrumb-item>订单信息查询</el-breadcrumb-item>
        </el-breadcrumb>
      </h4>
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
          <el-button class="btn-search" type="primary" icon="el-icon-search" size="mini" @click="runSearch" plain>查询</el-button>
        </li>
      </ul>
    </header>
    <el-table :data="tableData" height="calc(100% - 130px)" border style="width: 100%">
      <el-table-column prop="date" label="店铺编号" fit align="center"></el-table-column>
      <el-table-column prop="name" label="店铺名称" fit align="center"></el-table-column>
      <el-table-column prop="address" label="收件人姓名" fit align="center"></el-table-column>
      <el-table-column prop="date" label="收件人电话" fit align="center"></el-table-column>
      <el-table-column prop="name" label="总价" fit align="center"></el-table-column>
      <el-table-column prop="address" label="原价" fit align="center"></el-table-column>
      <el-table-column prop="date" label="订单状态" fit align="center"></el-table-column>
      <el-table-column prop="name" label="门店配送费" fit align="center"></el-table-column>
      <el-table-column prop="address" label="用户下单时间" fit align="center"></el-table-column>
      <el-table-column prop="date" label="订单完成时间" fit align="center"></el-table-column>
      <el-table-column prop="name" label="配送方名称" fit align="center"></el-table-column>
      <el-table-column prop="address" label="骑手电话" fit align="center"></el-table-column>
      <el-table-column prop="date" label="操作" fit align="center"></el-table-column>
    </el-table>
    <el-pagination class="page-break" background layout="prev, pager, next" :total="1000" @current-change="changPage"></el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      select: '',
      input1: '',
      input2: ''
    }
  },
  methods: {
    mounted () {
      // this.getData(this.$route.query.appId)
    },
    getData (appId) {
      this.axios.get(`/api/show.htm?method=showOrderDetails&&appId=${appId}`).then(res => {
        if (parseInt(res.data[0].code) === 200) {
          console.log('订单信息查询', res.data[0])
          this.tableData = res.data[0].data
        } else {
          console.log(res.data[0].msg)
        }
      })
    },
    runSearch () {
      if (this.select || this.input1 || this.input2) {
        console.log(this.select, this.input1, this.input2)
        // , this.select, this.input1, this.input2
        this.getData(this.$route.query.appId)
        this.select = ''
        this.input1 = ''
        this.input2 = ''
      } else {
        this.$notify.error({
          title: '错误',
          message: '请选择或输入查询条件'
        })
      }
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
  .page-break{
    text-align: center;
    padding: 11px 0;
    height: 50px;
    line-height: 50px;
  }
</style>
