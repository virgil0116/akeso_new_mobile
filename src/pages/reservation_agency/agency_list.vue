<template>
  <div class="container-list">
    <LoadMore v-if="result" :enable-load-more="enableLoadMore" :on-load-more="onLoadMore">
      <div v-for="item in listData" :key="item.id" class="item-hospitals" @click="handleClick(item.id)">
        <img :src="headerIcon" class="hospitals-icon">
        <div class="hospitals-info">
          <div class="hospitals-name">{{ item.name }}</div>
          <div class="hospitals-title">
            <span class="orange">{{ item.cate_name }}</span>
            <span>预约量  {{ item.appoints_count }}</span>
          </div>
          <div class="address">
            <img :src="locationIcon" class="address-icon">
            <span class="address-tit">{{ item.address? item.address : '暂无' }}</span>
          </div>
        </div>
      </div>
    </LoadMore>
    <!--<div class="amap-wrapper">
      <el-amap :vid=""amap-vue" class="amap-box" />
    </div>-->
    <div v-if="!result" class="no-data">
      <div class="no-conent">
        <img :src="modalfail" class="data-icon">
        <div class="data-text">您所在的区域暂未开放</div>
      </div>
    </div>
  </div>
</template>

<script>
import BMap from 'BMap'
// import { location } from "../../utils/location"
import headerIcon from '@/assets/image/hospitals.png'
import locationIcon from '@/assets/image/location_hospitals.png'
import modalfail from '@/assets/image/modalfail.png'
import avatar from '@/assets/image/header-avatar.png'
import LoadMore from './components/LoadMore'
import { merchants } from '@/api/mobile/reservation_agency'
export default {
  name: 'AngencyList',
  components: {
    LoadMore
  },
  data() {
    return {
      headerIcon: headerIcon,
      locationIcon: locationIcon,
      avatar: avatar,
      modalfail: modalfail,
      listData: [],
      page: 0,
      enableLoadMore: true,
      result: true,
      LocationProvince: '正在定位所在省', // 给渲染层定义一个初始值
      LocationCity: '正在定位所在市' // 给渲染层定义一个初始值
    }
  },
  created() {
    // this.getMerchants()
  },
  mounted() {
    this.city() // 触发获取城市方法
    // this.getMerchants()
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
        _this.getMerchants()
      }, function(e) {
        _this.LocationCity = '定位失败'
      }, { provider: 'baidu' })
    },
    onLoadMore(done) {
      setTimeout(() => {
        if (!this.enableLoadMore) {
          return
        }
        this.page = this.page + 1
        console.log('加载更多')
        // this.getMerchants()
        // done()
      }, 200)
    },
    getMerchants() {
      const reqData = {
        location_name: this.LocationCity
      }
      merchants(reqData).then((res) => {
        if (res.data.length === 0) {
          this.result = false
        }
        if (res.data.length < 10) {
          console.log(111111111)
          this.enableLoadMore = false
        }
        this.listData = this.listData.concat(res.data)
      })
    },
    handleClick(id) {
      console.log(id)
      var data = { }
      for (var item in this.listData) {
        if (this.listData[item].id === id) {
          data = {
            name: this.listData[item].name,
            cate_name: this.listData[item].cate_name,
            appoints_count: this.listData[item].appoints_count,
            address: this.listData[item].address,
            merchant_id: this.listData[item].id
          }
        }
      }
      this.$router.push({ name: 'appointment', query: { data: JSON.stringify(data) }})
    }
  }
}
</script>

<style scoped>
  .container-list {
    position: relative;
    display: flex;
    height: 100%;
    -webkit-box-orient: vertical;
    flex-direction: column;
  }
  .item-hospitals{
    display: flex;
    flex-direction: row;
    padding: .2rem .3rem;
    justify-content: center;
    border-bottom:1px solid #e0e0e0;
    text-align: left;
  }
  .hospitals-icon{
    width: 1.2rem;
    height: 1.2rem;
    flex-shrink: 0;
    margin-right: .2rem;
    /* display: flex; */
    /* align-items: center; */
  }
  .hospitals-info{
    /* width: 100%; */
    flex: 1;
    width: 0;
  }
  .hospitals-name{
    font-size: .28rem;
    /*margin-top: .4rem;*/
  }
  .hospitals-title{
    display: flex;
    flex-direction: row;
    margin-top: 0.05rem;
  }
  .hospitals-title span.orange{
    color: #f5a623;
    margin-right: .3rem;
  }
  .hospitals-name,.address{
    padding-top: 0.1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .hospitals-title text,.address-tit{
    font-size: .26rem;
    color: #878787;
    vertical-align: middle;
  }
  .address{
    width: 100%;
  }
  .address-icon{
    flex-shrink: 0;
    width: .2rem;
    height: .26rem;
    vertical-align: middle;
    margin-top:0rem;
    margin-right: .1rem;
  }
  .amap-wrapper {
    width: 500px;
    height: 500px;
  }
  .amap-demo {
    height: 300px;
  }
  .no-data{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .no-conent{
    text-align: center;
    margin-top: -170rpx;
  }
  .data-icon{
    width: 460rpx;
    height: 400rpx;
  }
  .data-text{
    font-size: 30rpx;
  }
</style>
