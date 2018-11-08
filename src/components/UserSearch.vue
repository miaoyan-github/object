<template>
  <div class="container">
    <header class="header">
      <h4>用户信息查询</h4>
      <ul class="content">
        <li>
          用户手机号：<el-input class="input" type="tel" placeholder="请输入内容" v-model="input1" clearable size="mini"></el-input>
        </li>
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
      <el-table-column prop="id" label="客户编号" fit align="center"></el-table-column>
      <el-table-column prop="username" label="客户姓名" fit align="center"></el-table-column>
      <el-table-column prop="useraddress" label="客户地址" fit align="center"></el-table-column>
      <el-table-column prop="userphone" label="客户手机号" fit align="center"></el-table-column>
      <el-table-column prop="storeid" label="店铺编号" fit align="center"></el-table-column>
      <el-table-column prop="storename" label="店铺名称" fit align="center"></el-table-column>
      <el-table-column prop="userorderid" label="最近订单号" fit align="center"></el-table-column>
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
      input1: ''
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.axios.get(`/api/show.htm?method=showUsers`).then(res => {
        if (parseInt(res.data[0].code) === 200) {
          console.log('用户信息查询', res.data[0])
          this.tableData = res.data[0].data
        } else {
          console.log(res.data[0].msg)
        }
      })
    },
    runSearch () {
      if (this.input1 || this.select) {
        console.log(this.input1, this.select)
        this.input1 = ''
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
