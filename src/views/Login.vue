<template>
  <div>
    <!-- 背景图片 -->
    <div class="loginBackImg">
      <img src="../assets/images/orion-nebula-11107_1920 - 副本 1 - 副本 1.png" alt="">
    </div>

    <div class="title">
      <p class="text">
        SMART PARK
      </p>
    </div>

    <!-- 物业图片 -->
    <div class="property">
      <img src="../assets/images/物业数据处理后 - 副本 2.png" alt="">
    </div>

    <!-- 登录主体 -->
    <div class="loginForm">
      <div class="themeText">
        智慧园区可视化管理系统
      </div>
      <div class="login">
        <div class="loginMain">
          <div class="loginTitle">
            登录
          </div>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="账号">
              <el-input v-model="formLabelAlign.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="formLabelAlign.password" show-password></el-input>
            </el-form-item>
          </el-form>

          <el-button type="primary" @click="goHome">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      labelPosition: 'top',
      formLabelAlign: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  created() {},
  methods: {
    goHome() {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang='less' scoped>
.loginBackImg {
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
}

.title {
  position: absolute;
  top: 45%;
  width: 100%;
  height: 300px;
  background-color: #66c0ff;
  opacity: 0.5;
  .text {
    color: #fff;
    font-size: 40px;
    z-index: 999;
    opacity: 1;
  }
}

.property {
  position: absolute;
  top: 25%;
  left: 10%;
  img {
    width: 542px;
    height: 602px;
  }
}

.loginForm {
  position: absolute;
  top: 20%;
  right: 15%;
  .themeText {
    color: #66c0ff;
    font-size: 40px;
    font-weight: 700;
  }
  .login {
    width: 500px;
    height: 500px;
    background-color: #fff;
    margin-top: 40px;
    border-radius: 10px;
    .loginMain {
      padding: 60px;
      .loginTitle {
        font-size: 30px;
        position: relative;
        margin-left: 15px;
        &::before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: -15px;
          width: 5px;
          height: 30px;
          border-radius: 5px;
          background-color: #4d79f3;
        }
      }
    }
  }
}

.el-form {
  margin: 30px 0 0 0;
}

.el-button {
  width: 100%;
  margin-top: 20px;
}
</style>
