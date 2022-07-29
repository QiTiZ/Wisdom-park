<template>
  <div>
    <div class="bgc">
      <img src="@/assets/images/image.png" alt="">
    </div>

    <!-- 营区基本情况 -->
    <div class="Information">
      <div class="main">
        <div class="title">
          <span class="info">营区基本情况</span>
          <i>|</i>
          <span class="infoEn">Information</span>
        </div>
        <el-divider></el-divider>

        <!-- 人车底数 -->
        <div>
          <personAndCar></personAndCar>
        </div>

        <!-- 车辆进出统计 -->
        <div>
          <inAndOut></inAndOut>
        </div>

        <!-- 访客记录 -->
        <div>
          <Visitor></Visitor>
        </div>
      </div>
    </div>

    <div class="Safety">

    </div>
  </div>
</template>

<script>
import personAndCar from './personAndCar.vue'
import inAndOut from './inAndOut.vue'
import Visitor from './Visitor.vue'
export default {
  name: '',
  data() {
    return {
      chartInstance: null
    }
  },
  components: {
    personAndCar,
    inAndOut,
    Visitor
  },
  created() {},
  methods: {}
}
</script>

<style lang='less' scoped>
.bgc {
  position: relative;
  img {
    width: 100%;
    height: 781px;
  }
}

.Information {
  position: absolute;
  margin: 15px;
  top: 9%;
  width: 400px;
  height: 760px;
  background-color: #181818;
  opacity: 0.9;
  .main {
    margin: 20px;
    .title {
      .info {
        color: #fff;
      }
      i {
        margin: 0 10px;
        color: #eeee;
      }
      .infoEn {
        color: #9f9f9f;
      }
    }
  }
}

.Safety {
  position: absolute;
  margin: 15px;
  top: 9%;
  right: 0;
  width: 400px;
  height: 760px;
  background-color: #181818;
  opacity: 0.9;
}
</style>
