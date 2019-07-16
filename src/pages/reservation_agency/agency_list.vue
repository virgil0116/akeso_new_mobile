<template>
  <div>
    <div class="item-hospitals">
      <img :src="headerIcon" class="hospitals-icon">
      <div class="hospitals-info">
        <div class="hospitals-name">北京美尔目医院眼健康管理中心</div>
        <div class="hospitals-title">
          <span class="orange">视光中心</span>
          <span>预约量  {{ 1 }}</span>
        </div>
        <div class="address">
          <img :src="locationIcon" class="address-icon">
          <span class="address-tit">北京市通州区通朝大街13号院1号楼</span>
        </div>
      </div>
    </div>
    <!--<div class="amap-wrapper">
      <el-amap :vid="'amap-vue'" class="amap-box" />
    </div>-->
  </div>
</template>

<script>
// import AMap from 'AMap'
// import { location } from '../../utils/location'
import headerIcon from '@/assets/image/hospitals.png'
import locationIcon from '@/assets/image/location_hospitals.png'
import avatar from '@/assets/image/header-avatar.png'
export default {
  name: 'AngencyList',
  data() {
    return {
      headerIcon: headerIcon,
      locationIcon: locationIcon,
      avatar: avatar
    }
  }
}
</script>

<style scoped>
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
  .hospitals-title text.orange{
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
</style>
