<template>
  <div>
    <!-- 人车底数 -->
    <div class="prosonAndCar">
      <div class="title">人车底数</div>
      <div class="CarHeader">
        <div class="person">营区人员数量</div>
        <div class="personNum">
          <span>381</span>人
        </div>
        <div class="car">营区车辆数量</div>
        <div class="carNum">
          <span>65</span>辆
        </div>
      </div>
      <!-- 柱状图 -->
      <div class="bar" ref="barChart">
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
      this.chartInstance = this.$echarts.init(this.$refs.barChart)
    },
    getData() {
      const options = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '-5%',
          top: '20%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['部门一', '部门二', '部门三', '部门四', '部门五'],
            axisTick: {
              alignWithLabel: true,
              show: false
            },
            axisLabel: {
              color: 'rgba(255, 255, 255, 1)'
            }
          }
        ],
        yAxis: [
          {
            show: false,
            type: 'value'
          }
        ],
        series: [
          {
            type: 'bar',
            barWidth: '35%',
            data: [22, 20, 35, 40, 30],
            label: {
              show: true,
              position: 'top',
              color: '#fff'
            },
            color: {
              x: 0,
              y: 1,
              x2: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: '#5cebff' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#0ba0ff' // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            }
          }
        ]
      }

      this.chartInstance.setOption(options)
    }
  }
}
</script>

<style lang='less' scoped>
.prosonAndCar {
  width: 100%;
  height: 200px;
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

.CarHeader {
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

.bar {
  width: 100%;
  height: 150px;
}
</style>
