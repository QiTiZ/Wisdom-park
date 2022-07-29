<template>
  <div>
    <!-- 车辆进出统计 -->
    <div class="inAndout">
      <div class="title">访客记录</div>
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
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          show: true,
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: '1%',
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
              show: false
            },
            axisLabel: {
              color: 'rgba(255, 255, 255, 1)'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              show: true,
              color: '#fff'
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed'
              }
            }
          }
        ],
        series: [
          {
            name: '总数',
            type: 'bar',
            barWidth: '35%',
            data: [44, 22, 23, 40, 31],
            color: '#009dff'
          },
          {
            name: '在营区',
            type: 'bar',
            barWidth: '35%',
            data: [20, 5, 14, 10, 20],
            color: '#48f8fc'
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
  height: 200px;
}
</style>
