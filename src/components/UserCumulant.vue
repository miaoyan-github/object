<template>
  <div class="container">
    <header class="header">
      <h4>累计用户查询</h4>
      <ul class="content">
        <li>
          <el-button class="btn-search" type="success" icon="el-icon-refresh" size="mini" @click="runUpdate" plain>刷新</el-button>
        </li>
      </ul>
    </header>
    <el-table :data="tableData" height="calc(100% - 130px)" border style="width: 100%">
      <el-table-column prop="recipientname" label="客户姓名" fit align="center"></el-table-column>
      <el-table-column prop="recipientaddress" label="收件地址" fit align="center"></el-table-column>
      <el-table-column prop="num" label="累计数量" fit align="center"></el-table-column>
    </el-table>
    <el-pagination :page-size="20" class="page-break" background layout="prev, pager, next" :total="total" @current-change="changPage"></el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      total: 0,
      currentPage: 1,
      isUpdate: false
    }
  },
  mounted () {
    this.getData(this.currentPage)
  },
  methods: {
    getData (page) {
      this.axios.get(`/api/show.htm?method=showNum&&pageNo=${page}`).then(res => {
        if (parseInt(res.data[0].code) === 200) {
          console.log('累计用户查询', res.data[0])
          this.tableData = res.data[0].data
          this.total = parseInt(res.data[0].pageSize)
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
      this.getData(this.currentPage)
    },
    changPage (page) {
      this.currentPage = page
      this.getData(page)
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
