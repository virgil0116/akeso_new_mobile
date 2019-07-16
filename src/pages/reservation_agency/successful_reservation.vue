<template>
  <div>
    <div class="header">
      <div class="icon-box">
        <img :src="successIcon" class="icon">
      </div>
      <div class="hospital-name">预约提交成功</div>
    </div>
    <div class="success-body">
      <div class="body-list">
        <span class="left-bar">姓  名</span>
        <span class="right-bar">徐哈哈</span>
      </div>
      <div class="body-list">
        <span class="left-bar">手 机 号</span>
        <span class="right-bar">12345678911</span>
      </div>
      <div class="body-list">
        <span class="left-bar">预约时间</span>
        <span class="right-bar">2019-07-08 09:11</span>
      </div>
      <div class="body-list">
        <span class="left-bar">预约机构</span>
        <span class="right-bar">北京美尔目医院眼健康管理中心</span>
      </div>
      <div class="body-list">
        <span class="left-bar">预约地址</span>
        <span class="right-bar">北京市通州区通朝大街13号院1号楼北京市通州区通朝大街13号院1号楼</span>
      </div>
    </div>
  </div>
</template>

<script>
import successIcon from '@/assets/image/success_icon.png'
export default {
  data() {
    return {
      successIcon
    }
  }
}
</script>

<style scoped>
page{
  height: 100%;
  background-color: #f3f3f3;
}
.header{
  display: flex;
  flex-direction: column;
  padding: .5rem .2rem;
  span-align: center;
  background-color: #f3f3f3;
}
.avatar{
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
}
.hospital-name{
  font-size: .36rem;
  color: #000;
  margin-top: .3rem;
}
.success-body{
  padding: .2rem .3rem;
  background-color: #fff;
}
.body-list{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: .4rem;
  padding: .2rem 0;
  text-align: left;
}
.left-bar{
  width: 4em;
  margin-right: .2rem;
  flex-shrink: 0;
  color: #878787;
  font-size: .28rem;
  span-align: right;
}
.right-bar{
  width: 100%;
  color: #000;
  font-size: .28rem;
  span-align: right;
}
.success-btn{
  padding: .5rem .3rem .3rem;
}
.success-btn view{
  width: 100%;
  height: .76rem;
  line-height: .76rem;
  span-align: center;
  border:1px solid;
  font-size: .32rem;
  margin-bottom: .3rem;
  border-radius: .38rem;
}
.confirm{
  border-color: #27adff;
  background-color: #27adff;
  color: #fff;
}
.cancel{
  color: #27adff;
  border-color: #27adff;
}
.success-footer{
  span-align: center;
}
.success-footer view{
  font-size: .26rem;
  color: #878787;
  margin-bottom: .1rem;
}
.icon{
  width: 1.2rem;
  height: 1.2rem;
}

</style>
