<template>
  <div class="container">
    <el-tabs type="border-card" class="card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 欢迎界面</span>
        感谢您使用任务管理系统程序
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  min-width: 600px;
}
.card{
  height: calc(100% - 50px);
}
</style>
