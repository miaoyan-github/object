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
    <el-table :data="tableData" height="calc(100% - 80px)" border style="width: 100%">
      <el-table-column prop="appId" label="店铺编号" fit align="center"></el-table-column>
      <el-table-column prop="name" label="店铺名称" fit align="center"></el-table-column>
      <el-table-column prop="address" label="店铺地址" fit align="center"></el-table-column>
      <el-table-column prop="phone" label="店铺电话" fit align="center"></el-table-column>
      <el-table-column prop="shippingTime" label="营业时间" fit align="center"></el-table-column>
      <el-table-column prop="openLevel" label="店铺状态" fit align="center"></el-table-column>
      <el-table-column prop="Operate" label="操作" fit align="center">
        <template slot-scope="scope">
          <el-button class="btn" type="primary" icon="el-icon-edit" size="mini" @click="goEvaluationSearch(scope.row)">评价查询</el-button>
          <el-button class="btn" type="success" icon="el-icon-tickets" size="mini" @click="goListSearch(scope.row)">订单查询</el-button>
          <el-button class="btn" type="danger" icon="el-icon-phone-outline" size="mini" @click="goDeliveryDelay(scope.row)">配送超时</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
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
  mounted () {
    this.getData()
  },
  methods: {
    getData (select, input1) {
      this.axios.get(`/api/show.htm?method=showShow&&KeyType=${select}&&keyValue=${input1}`).then(res => {
        if (parseInt(res.data[0].code) === 200) {
          console.log('店铺信息查询', res.data[0])
          this.tableData = res.data[0].data
        } else {
          console.log(res.data[0].msg)
        }
      })
    },
    runSearch () {
      if (this.select || this.input1) {
        console.log(this.select, this.input1)
        this.getData(this.select, this.input1)
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
      this.$router.push(`/EvaluationSearch?appId=${data.appId}`)
    },
    goListSearch (data) {
      this.$router.push(`/ListSearch?appId=${data.appId}`)
    },
    goDeliveryDelay (data) {
      this.$router.push(`/DeliveryDelay?appId=${data.appId}`)
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
