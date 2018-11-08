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
    <el-table :data="tableData" height="calc(100% - 130px)" border style="width: 100%">
      <el-table-column prop="id" label="菜品编号" fit align="center"></el-table-column>
      <el-table-column prop="foodName" label="菜品名称" fit align="center"></el-table-column>
      <el-table-column prop="num" label="菜品数量" fit align="center"></el-table-column>
      <el-table-column prop="price" label="菜品价格" fit align="center"></el-table-column>
    </el-table>
    <el-pagination class="page-break" background layout="prev, pager, next" :total="1000" @current-change="changPage"></el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.axios.get('/api/show.htm?method=showUpPage').then(res => {
        this.tableData = res.data[0].data
        console.log(res.data[0].data)
      })
    },
    runUpdate () {
      this.$notify({
        title: '成功',
        message: '刷新成功',
        type: 'success'
      })
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
