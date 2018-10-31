<template>
  <div class="container">
    <el-tabs type="border-card" class="card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 欢迎界面</span>
        <h3>感谢您使用任务管理系统程序</h3>
        <ul>
          <li style="padding: 0 0 10px 40px"><i style="color: rgb(230,162,60);" class="el-icon-info"></i> 尊敬的用户，您好！</li>
          <li style="padding-left: 100px">您正在使用由立火科技授权，拉布拉多工作室研发的外卖监控系统平台。</li>
          <li style="padding-left: 100px">系统正在运行中！</li>
        </ul>
        <div class="img-logo">
          <img style="height: 160px;" src="../../src/assets/logo1.png" alt="">
          <img style="height: 110px; margin-top: 20px;" src="../../src/assets/logo2.png" alt="">
        </div>
        <div class="empty" style="width: 100%; height: 50px;"></div>
        <footer class="footer">
          <i style="color: rgb(102,177,255);" class="el-icon-message"></i> 客户服务邮箱：mredwow@163.com
        </footer>
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
  min-width: 1000px;
}
.card{
  height: 100%;
}
.card h3{
  line-height: 60px;
}
.card ul{
  margin: 20px 0;
  color: rgb(96,98,102);
}
.card ul li{
  line-height: 40px;
}
.img-logo{
  display: flex;
  justify-content: flex-start;
  padding-left: 80px;
}
.img-logo img{
  margin-right: 50px;
}
.footer{
  color: rgb(96,98,102);
  position: fixed;
  left: 200px;
  right: 0;
  bottom: 0;
  border-top: 2px solid rgb(235,238,245);
  padding-left: 40px;
  margin: 0 15px;
  height: 50px;
  line-height: 50px;
  z-index: 100;
  background: #FFF;
}
</style>
