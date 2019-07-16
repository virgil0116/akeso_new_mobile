<template>
  <div>
    <div>{{ LocationProvince }}</div>
    <div>{{ LocationCity }}</div>
  </div>
</template>

<script>
import BMap from 'BMap'
export default{
  data() {
    return {
      LocationProvince: '正在定位所在省', // 给渲染层定义一个初始值
      LocationCity: '正在定位所在市' // 给渲染层定义一个初始值
    }
  },
  mounted() {
    this.city() // 触发获取城市方法
  },
  methods: {
    city() { // 定义获取城市方法
      const geolocation = new BMap.Geolocation()
      var _this = this
      geolocation.getCurrentPosition(function getinfo(position) {
        const city = position.address.city // 获取城市信息
        const province = position.address.province // 获取省份信息
        _this.LocationProvince = province
        _this.LocationCity = city
      }, function(e) {
        _this.LocationCity = '定位失败'
      }, { provider: 'baidu' })
    }
  }
}
</script>
