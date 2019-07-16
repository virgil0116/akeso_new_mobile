<template>
  <div class="appointment-content">
    <div class="header">
      <div>
        <img :src="avatar" class="avatar">
      </div>
      <p class="hospital-name">北京美尔目医院眼健康管理中心</p>
      <div class="subtitle">
        <span>视光中心</span>
        <span>预约量</span>
        <span>111</span>
      </div>
      <div class="hospital-address">
        <img :src="locationIcon" class="icon">
        <span>北京市通州区通朝大街13号院1号楼</span>
      </div>
    </div>
    <div class="user">
      <form bindsubmit="formSubmit" bindreset="formReset">
        <div class="user-list">
          <span class="left-tit">手机号码:</span>
          <input class="input-span c-bule" type="number" maxlength="11">
          <span class="code">哈哈</span>
        </div>
        <div class="user-list">
          <span class="left-tit">验证码:</span>
          <input class="input-span c-bule" type="number">
        </div>
        <div class="user-list">
          <span class="left-tit">孩子姓名:</span>
          <input class="input-span c-bule" value="">
        </div>
        <div class="user-list">
          <span class="left-tit">您孩子的性别：</span>
          <div class="child-list">
            <div class="">
              <div class="checked-box"/>
            </div>
            <span>男</span>
          </div>
        </div>
        <div class="user-list">
          <span class="left-tit">您孩子的年龄：</span>
          <select class="age">
            <option value="1">1</option>
          </select>
          <span class="left-tit">岁</span>
        </div>
        <div class="user-list">
          <span class="left-tit">您要预约的日期：</span>
          <select class="age">
            <option value="1">1</option>
          </select>
          <span class="left-tit">时间：</span>
          <select class="age">
            <option value="1">1</option>
          </select>
        </div>
        <div class="btn-box">
          <button class="btn" formType="submit">确认预约</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import locationIcon from '@/assets/image/location_hospitals.png'
import avatar from '@/assets/image/header-avatar.png'
export default {
  name: 'MakeAppointment',
  data() {
    return {
      locationIcon,
      avatar
    }
  }
}
</script>

<style scoped>
.header{
  display: flex;
  flex-direction: column;
  padding: .3rem .3rem;
  text-align: center;
  background-color: #f3f3f3;
}
.avatar{
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
}
.hospital-name{
  font-size: .32rem;
  color: #4a4a4a;
  font-weight: 500;
  padding-top: 0.16rem;
}
.subtitle{
  padding:.2rem .1rem;
}
.icon{
  width: .2rem;
  height: .3rem;
  vertical-align:middle;
}
.hospital-address span{
  vertical-align: middle;
}
.subtitle,.hospital-address{
  color: #878787;
  font-size: .3rem;
}
.user-list{
  display: flex;
  flex-direction: row;
  padding: .2rem .3rem 0rem;
}
.user-list span.code{
  height: .42rem;
  line-height: .42rem;
  font-size: .26rem;
  flex-shrink: 0;
  padding: .1rem .2rem;
  border-radius: .6rem;
}
.get-code{
  color: #fff;
  background-color: #27aeff;
}
.no-code{
  color: #4a4a4a;
  background-color: #ccc;
}

.left-tit{
  flex-shrink:0;
  padding: .2rem 0;
}
.input-text{
  width: 100%;
  display:flex;
  align-items:center;
  padding:.12rem .3rem 0;
  height:.7rem;
  border-bottom:1px solid #f5f5f5;
  font-size:.28rem;
  box-sizing:border-box;
}
.age{
  width: 20%;
  display:flex;
  align-items:center;
  height:.7rem;
  border-bottom:1px solid #f5f5f5;
  font-size:.28rem;
  box-sizing:border-box;
}
.picker{
  width:7.8rem;
  height:.7rem;
  text-align:center;
  padding:0 .3rem;
  line-height: .8rem;
  box-sizing:border-box;
}
.date,.time{
  display:flex;
  align-items:center;
  height:.7rem;
  border-bottom:1px solid #f5f5f5;
  font-size:.28rem;
  box-sizing:border-box;
}
.date{
  width: 100%;
}
.time{
  width: 100%;
}
input{
  border-bottom: 1px solid #f5f5f5;
  padding: 0 .3rem;
  width:100%;
}
.date-picker{
  width: 2rem;
  height: .7rem;
  line-height:.8rem;
  text-align:center;
}
.time-picker{
  width: 1.2rem;
  height: .7rem;
  line-height:.8rem;
  text-align:center;
}
.child-list{
  display: flex;
  flex-direction: row;
  padding-top: .2rem;
  margin-left: .1rem;
  margin-right: .4rem;
}
.check,.checked{
  box-sizing:border-box;
  width:.32rem;
  height:.32rem;
  border-radius:50%;
  display:flex;
  flex-direction:row;
  margin-top:.4rem;
  margin-right: .16rem;
  padding:.16rem;
}
.check{
  border:2px solid #ccc;
}
.checked{
  border:2px solid #27aeff;
}
.checked .checked-box{
  width:100%;
  height:100%;
  border-radius:50%;
  background-color:#27aeff;
}
.user-list span{
  font-size: .3rem;
}
.btn-box{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999999;
}
page{
  height: 100%;
}
.modal-body-content{
  display: flex;
  flex-direction: column;
}
.modal-body-content text{
  font-size: .26rem;
  color: #4a4a4a;
  line-height: .40em;
  margin-bottom: .16rem;
}
.modal-footer-content{
  text-align: center;
  margin-bottom: -0.6rem;
  height: .75rem;
  line-height: .75rem;
  border-top: 1px solid #e9ecef;
}
.modal-footer-content span{
  font-size: .32rem;
}

</style>
