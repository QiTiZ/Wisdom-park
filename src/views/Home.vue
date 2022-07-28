<template>
  <div>
    <header>
      <div class="title">智慧园区可视化管理系统</div>
      <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router>
        <el-menu-item index="/home">营区态势</el-menu-item>
        <el-menu-item index="/inout">出入管理</el-menu-item>
        <el-menu-item index="/control">监控点位</el-menu-item>
        <el-menu-item index="/energy">能耗管理</el-menu-item>
        <el-menu-item index="/setting">配置中心</el-menu-item>
      </el-menu>

      <!-- 日期 -->
      <div class="beijingTime">
        {{nowData | BeijingTime}}
      </div>

      <!-- 头像 -->
      <div class="avator">
        <el-avatar :src="circleUrl"></el-avatar>
        <p>admin</p>
      </div>

      <!-- 退出 -->
      <div class="logout"> <i class="el-icon-setting" @click="logout"></i></div>
    </header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      nowData: Date.now(),
      timeId: null,
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  created() {},
  mounted() {
    this.timeId = setInterval(() => {
      this.nowData = Date.now()
    }, 1000)
  },
  methods: {
    logout() {
      this.$router.push('/')
    },
    inoutt() {
      this.$router.push('/inout')
    }
  }
}
</script>

<style lang='less' scoped>
header {
  width: 100%;
  height: 80px;
  background-color: #000;
  display: flex;
  align-items: center;
  color: #fff;
  .title {
    line-height: 80px;
    font-size: 20px;
    font-weight: 700;
    margin-left: 20px;
  }
}

.el-menu {
  background-color: #000;
  margin-left: 150px;
}

.el-menu--horizontal > .el-menu-item {
  color: #fff;
}

.el-menu-item {
  &:hover {
    background-color: transparent !important;
    color: #fff !important;
  }
}
.el-menu-item.is-active {
  color: #409eff !important;
  background-color: transparent !important;
}

.el-menu.el-menu--horizontal {
  border-bottom: 0 !important;
}

.beijingTime {
  margin-left: 250px;
}

.avator {
  margin-left: 50px;
  display: flex;
  align-items: center;
  p {
    margin-left: 15px;
  }
}

.logout {
  margin-left: 55px;
  i {
    font-size: 25px;
    cursor: pointer;
  }
}
</style>
