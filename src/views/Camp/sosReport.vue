<template>
  <div class="inAndout">
    <div class="title">当日警情播报</div>
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
</style>
