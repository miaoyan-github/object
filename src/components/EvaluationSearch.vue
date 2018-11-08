<template>
  <div class="container">
    <header class="header">
      <h4>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/StoreMsg' }">店铺信息</el-breadcrumb-item>
          <el-breadcrumb-item>评价信息查询</el-breadcrumb-item>
        </el-breadcrumb></h4>
      <ul class="content">
        <li>
          <el-button class="btn-search" type="success" icon="el-icon-refresh" size="mini" @click="runUpdate" plain>刷新</el-button>
        </li>
      </ul>
    </header>
    <el-table :data="tableData" height="calc(100% - 80px)" border style="width: 100%">
      <el-table-column prop="appId" label="店铺编号" fit align="center"></el-table-column>
      <el-table-column prop="appName" label="店铺名称" fit align="center"></el-table-column>
      <el-table-column prop="code" label="简评内容" fit align="center"></el-table-column>
      <el-table-column prop="msg" label="评价内容" fit align="center"></el-table-column>
      <el-table-column prop="appAddress" label="店铺地址" fit align="center"></el-table-column>
      <el-table-column prop="makedate" label="获取时间" fit align="center"></el-table-column>
      <el-table-column prop="pssc" label="配送分数" fit align="center"></el-table-column>
      <el-table-column prop="cpsc" label="餐品分数" fit align="center"></el-table-column>
      <el-table-column prop="ddsc" label="订单分数" fit align="center"></el-table-column>
      <el-table-column prop="pksc" label="包装分数" fit align="center"></el-table-column>
      <el-table-column prop="zjsc" label="分析评价" fit align="center"></el-table-column>
      <el-table-column prop="desc" label="原因" fit align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      isUpdate: false
    }
  },
  mounted () {
    this.getData(this.$route.query.appId)
  },
  methods: {
    getData (appId) {
      this.axios.get(`/api/show.htm?method=showFetchs&&appId=${appId}`).then(res => {
        if (parseInt(res.data[0].code) === 200) {
          console.log('评价信息查询', res.data[0])
          this.tableData = res.data[0].data
          if (this.isUpdate) {
            this.$notify({
              title: '成功',
              message: '刷新成功',
              type: 'success'
            })
            this.isUpdate = false
          }
        } else {
          console.log(res.data[0].msg)
          if (this.isUpdate) {
            this.$notify.error({
              title: '失败',
              message: '请重新刷新'
            })
            this.isUpdate = false
          }
        }
      })
    },
    runUpdate () {
      this.isUpdate = true
      this.getData(this.$route.query.appId)
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
