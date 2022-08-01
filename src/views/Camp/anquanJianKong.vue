<template>
  <div class="inAndout">
    <div class="title">安全设施监控情况</div>
    <div class="iconMain">
      <div class="jk">
        <i class="iconfont icon-shexiangtou"></i>
        <div class="details">
          <div class="detail_01">监控摄像头</div>
          <span>2985</span>
        </div>
      </div>
      <div class="bj">
        <i class="iconfont icon-baojing"></i>
        <div class="details">
          <div class="detail_01">报警器/监控器</div>
          <span>2985</span>
        </div>
      </div>
      <div class="xf">
        <i class="iconfont icon-huore"></i>
        <div class="details">
          <div class="detail_01">消防设施</div>
          <span>2985</span>
        </div>
      </div>
    </div>

    <div class="main">
      <div class="main01">
        <div class="main_item">
          红绿灯
        </div>
        <div class="bar">
          <div class="barActive01"></div>
        </div>
        <span>26</span>
      </div>
      <div class="main01">
        <div class="main_item">
          摄像头
        </div>
        <div class="bar">
          <div class="barActive02"></div>
        </div>
        <span>50</span>
      </div>
      <div class="main01">
        <div class="main_item">
          电子锁
        </div>
        <div class="bar">
          <div class="barActive03"></div>
        </div>
        <span>40</span>
      </div>
      <div class="main01">
        <div class="main_item">
          安全门
        </div>
        <div class="bar">
          <div class="barActive04"></div>
        </div>
        <span>30</span>
      </div>
      <div class="main01">
        <div class="main_item">
          消防栓
        </div>
        <div class="bar">
          <div class="barActive05"></div>
        </div>
        <span>22</span>
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
  methods: {}
}
</script>

<style lang='less' scoped>
.inAndout {
  width: 100%;
  height: 200px;
  margin-top: 25px;
  color: #fff;
  .title {
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
  .iconMain {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    .jk {
      display: flex;
      align-items: center;
      i {
        font-size: 15px;
        color: #0096ff;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border: 1px solid #0096ff;
        border-radius: 50%;
      }
      .details {
        margin-left: 10px;
        font-size: 12px;
        .detail_01 {
          margin-bottom: 5px;
        }
        span {
          color: #0096ff;
        }
      }
    }
    .bj {
      display: flex;
      align-items: center;
      i {
        font-size: 15px;
        color: #3bffff;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border: 1px solid #3bffff;
        border-radius: 50%;
      }
      .details {
        margin-left: 10px;
        font-size: 12px;
        .detail_01 {
          margin-bottom: 5px;
        }
        span {
          color: #3bffff;
        }
      }
    }
    .xf {
      display: flex;
      align-items: center;
      i {
        font-size: 15px;
        color: #04e38a;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border: 1px solid #04e38a;
        border-radius: 50%;
      }
      .details {
        margin-left: 10px;
        font-size: 12px;
        .detail_01 {
          margin-bottom: 5px;
        }
        span {
          color: #04e38a;
        }
      }
    }
  }
}

.main {
  margin-top: 20px;
  .main01 {
    display: flex;
    margin: 10px 0;
    .main_item {
      margin-right: 20px;
      font-size: 12px;
    }
    .bar {
      width: 65%;
      border-radius: 15px;
      border: 1px solid #353535;
      .barActive01 {
        width: 40%;
        height: 100%;
        border-radius: 15px;
        background-color: #5decff;
      }
      .barActive02 {
        width: 80%;
        height: 100%;
        border-radius: 15px;
        background-color: #5decff;
      }
      .barActive03 {
        width: 75%;
        height: 100%;
        border-radius: 15px;
        background-color: #5decff;
      }
      .barActive04 {
        width: 30%;
        height: 100%;
        border-radius: 15px;
        background-color: #5decff;
      }
      .barActive05 {
        width: 20%;
        height: 100%;
        border-radius: 15px;
        background-color: #5decff;
      }
    }
    span {
      margin-left: 15px;
    }
  }
}
</style>
