<template>
  <div class="container">
    <header class="header">
      <h4>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/StoreMsg' }">店铺信息</el-breadcrumb-item>
          <el-breadcrumb-item>配送信息查询</el-breadcrumb-item>
        </el-breadcrumb>
      </h4>
      <ul class="content">
        <li>
          <el-select class="select" v-model="select" placeholder="店铺" size="mini">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </li>
        <li>
          <el-button class="btn-search" type="primary" icon="el-icon-search" size="mini" @click="runSearch" plain>查询</el-button>
        </li>
      </ul>
    </header>
    <el-table :data="tableData" height="calc(100% - 130px)" border style="width: 100%">
      <el-table-column prop="appId" label="门店编号" fit align="center"></el-table-column>
      <el-table-column prop="appName" label="店铺名称" fit align="center"></el-table-column>
      <el-table-column prop="appPhone" label="店铺电话" fit align="center"></el-table-column>
      <el-table-column prop="appAdd" label="店铺地址" fit align="center"></el-table-column>
      <el-table-column prop="rTime" label="订餐时间" fit align="center"></el-table-column>
      <el-table-column prop="cTime" label="送达时间" fit align="center"></el-table-column>
      <el-table-column prop="dTime" label="配送时长" fit align="center"></el-table-column>
      <el-table-column prop="shipFee" label="配送费" fit align="center"></el-table-column>
      <el-table-column prop="orderId" label="订单编号" fit align="center"></el-table-column>
      <el-table-column prop="sd" label="订单时段" fit align="center"></el-table-column>
    </el-table>
    <el-pagination class="page-break" background layout="prev, pager, next" :total="1000" @current-change="changPage"></el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      options: [{
        value: '陕味食族·凉皮肉夹馍(常营店)',
        label: '陕味食族·凉皮肉夹馍(常营店)'
      }, {
        value: 't_4spEfCLWIE',
        label: 't_4spEfCLWIE'
      }],
      select: ''
    }
  },
  mounted () {
    this.getData(this.$route.query.appId)
  },
  methods: {
    getData (appId) {
      this.axios.get(`/api/show.htm?method=showDcs&&appId=${appId}`).then(res => {
        if (parseInt(res.data[0].code) === 200) {
          console.log('配送信息查询', res.data[0])
          this.tableData = res.data[0].data
        } else {
          console.log(res.data[0].msg)
        }
      })
    },
    runSearch () {
      if (this.select) {
        console.log(this.select)
        this.select = ''
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
