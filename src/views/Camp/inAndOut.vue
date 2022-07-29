<template>
  <div>
    <!-- 车辆进出统计 -->
    <div class="inAndout">
      <div class="title">车辆进出统计</div>
      <div class="inHeader">
        <div class="in">当日入营车辆数</div>
        <div class="inNum">
          <span>37</span>人
        </div>
        <div class="out">当日出营车辆数</div>
        <div class="outNum">
          <span>2</span>辆
        </div>
      </div>
      <!-- 柱状图 -->
      <div class="pie" ref="pieChart">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  created() {},
  mounted() {
    this.initChart()
    this.getData()
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.pieChart)
    },
    getData() {
      const options = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: '10%',
          top: '20%',
          textStyle: {
            color: '#fff'
          }
        },
        color: ['#00acff', '#0065ff', '#3fffff', '#04e38a'],
        series: [
          {
            type: 'pie',
            left: 100,
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              color: '#fff',
              position: 'outside'
            },
            labelLine: {
              show: true
            },
            emphasis: {
              label: {
                show: false
              }
            },
            data: [
              { value: 10, name: '南门' },
              { value: 15, name: '北门' },
              { value: 20, name: '西门' },
              { value: 25, name: '小门' }
            ]
          }
        ]
      }

      this.chartInstance.setOption(options)
    }
  }
}
</script>

<style lang='less' scoped>
.inAndout {
  width: 100%;
  height: 200px;
  margin-top: 25px;
  .title {
    color: #fff;
    font-size: 14px;
    position: relative;
    margin-left: 10px;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -4px;
      left: -10px;
      width: 3px;
      height: 20px;
      border-radius: 5px;
      background-color: #4d79f3;
    }
  }
}

.inHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #0096ff;
  font-size: 12px;
  margin-top: 15px;
  span {
    font-size: 20px;
    margin-right: 5px;
  }
}

.pie {
  width: 100%;
  height: 180px;
}
</style>
