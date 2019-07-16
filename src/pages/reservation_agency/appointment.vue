<template>
  <div class="appointment-content">
    <div class="header">
      <div>
        <img :src="avatar" class="avatar">
      </div>
      <p class="hospital-name">{{ appointmentData.name }}</p>
      <div class="subtitle">
        <span>{{ appointmentData.cate_name }}</span>
        <span>预约量</span>
        <span>{{ appointmentData.appoints_count }}</span>
      </div>
      <div class="hospital-address">
        <img :src="locationIcon" class="icon">
        <span>{{ appointmentData.address ? appointmentData.address : '暂无' }}</span>
      </div>
    </div>
    <div class="user">
      <div class="user-list">
        <span class="left-tit">手机号码:</span>
        <input ref="input" v-model="phoneNum" class="input-span c-bule" type="number" maxlength="11" @blur="blur('input')">
        <span class="code">
          <input
            v-bind="{'disabled':disabled}"
            v-model="btnContent"
            class="verify"
            type= "button"
            @click= "sendSmsCode">
        </span>
      </div>
      <div class="user-list">
        <span class="left-tit">验 证 码:</span>
        <input ref="input1" v-model="verifyNum" class="input-span c-bule" maxlength="6" onkeyup = "this.value=this.value.replace(/[^\d]/g,'')" type="text" placeholder="请输入验证码" @blur="blur('input1')">
      </div>
      <div class="user-list">
        <span class="left-tit">孩子姓名:</span>
        <input ref="input2" v-model="childName" class="input-span c-bule" value="" @blur="blur('input2')">
      </div>
      <div class="user-list">
        <span class="left-tit">您孩子的性别：</span>
        <div class="child-list">
          <checklist
            :options="commonList"
            :max="1"
            @on-change="changeCheckList"/>
        </div>
      </div>
      <div class="user-list">
        <span class="left-tit">您孩子的年龄：</span>
        <select v-model="ageNum" class="age">
          <option v-for="(item, index) in age" :key="index" :value="item">{{ item }}</option>
        </select>
        <span class="left-tit">岁</span>
      </div>
      <div class="user-list">
        <span class="left-tit">您要预约的日期：</span>
        <datetime
          :hour-list="['09', '10', '11', '12', '13', '14', '15', '16', '17', '18']"
          title=""
          class="datetime"
          format="YYYY-MM-DD HH:mm"
          @on-change="change" />
      </div>
      <div class="btn-box">
        <button class="btn" @click="handleClicksubmit">确认预约</button>
      </div>
    </div>
    <div v-show="toastShow" class="toast">
      {{ toastText }}
    </div>
  </div>
</template>

<script>
import { Datetime, Checklist } from 'vux'
import locationIcon from '@/assets/image/location_hospitals.png'
import avatar from '@/assets/image/header-avatar.png'
import { appoints, sendCode } from '@/api/mobile/reservation_agency'
export default {
  name: 'MakeAppointment',
  components: {
    Datetime,
    Checklist
  },
  data() {
    return {
      locationIcon,
      avatar,
      phoneNum: '', // 手机号
      verifyNum: '', // 验证码
      btnContent: '获取验证码', // 获取验证码按钮内文字
      time: 0, // 发送验证码间隔时间
      disabled: false, // 按钮状态
      toastShow: false,
      ageNum: '',
      childName: '',
      gender: '',
      datetime: '',
      toastText: '',
      dayTime: '2019-07-01',
      formatValueFunction(val) {
        return val.replace(/-/g, '$')
      },
      commonList: [{ key: 'male', value: '男' }, { key: 'female', value: '女' }],
      radioValue: '',
      age: Array.apply(null, Array(40)).map(function(item, i) {
        return i
      }), // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      radioData: [
        {
          value: '男',
          name: 'male'
        },
        {
          value: '女',
          name: 'female'
        }
      ],
      appointmentData: {}
    }
  },
  watch: {
    // $route() {
    //   this.appointmentData = this.$route.params.data
    // }
  },
  created() {

  },
  mounted() {
    this.appointmentData = JSON.parse(this.$route.query.data)
  },
  methods: {
    blur(name) {
      // this.$refs[name].scrollIntoView(false)
    },
    getRadioVal(value) {
      console.log(value)
    },
    change(date) {
      console.log('change', date)
      this.datetime = date
    },
    changeCheckList(value) {
      console.log('nannv-', value[0])
      this.gender = value[0]
      console.log('男女', this.gender)
    },
    handleClicksubmit() {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/ // 手机号正则验证
      if (!reg.test(this.phoneNum)) { // 手机号不合法
        this.toast('手机号不合法')
        return
      }
      if (this.verifyNum === '') {
        this.toast('请输入验证码')
        return
      }
      if (this.childName === '') {
        this.toast('请输入姓名')
        return
      }
      if (this.gender === '') {
        this.toast('请选择性别')
        return
      }
      if (this.ageNum === '') {
        this.toast('请选择年龄')
        return
      }
      if (this.datetime === '') {
        this.toast('请选择预约时间')
        return
      }
      appoints({ phone: this.phoneNum, code: this.verifyNum }).then(response => {
        const data = response.data.appoint
        this.$router.push({ name: '/successful_reservation', query: { data: JSON.stringify(data) }})
      }, error => {
        this.toast(error)
      })
    },
    //  获取验证码
    sendSmsCode() {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/ // 手机号正则验证
      if (!this.phoneNum) { // 未输入手机号
        this.toast('请输入手机号码')
        return
      }
      console.log(this.phoneNum)
      if (!reg.test(this.phoneNum)) { // 手机号不合法
        this.toast('手机号不合法')
        return
      }
      sendCode({ phone: this.phoneNum }).then(response => {
        this.time = 60
        this.timer()
      }, error => {
        this.toast(error)
      })
    },
    timer() {
      if (this.time > 0) {
        this.time--
        this.btnContent = this.time + 's后重新获取'
        this.disabled = true
        var timer = setTimeout(this.timer, 1000)
      } else if (this.time === 0) {
        this.btnContent = '获取验证码'
        clearTimeout(timer)
        this.disabled = false
      }
    },
    toast(str) {
      const V = this
      V.toastText = str
      V.toastShow = true
      setTimeout(function() {
        V.toastShow = false
      }, 1500)
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
  width: 1.4rem;
  height: 1.4rem;
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
  font-size:.36rem;
  box-sizing:border-box;
  padding-left: .5rem;
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
select{
  height:40px;
  appearance: none;
  border:none;
  font-size:18px;
  padding:0px 10px;display:block;width:100%;
  -webkit-box-sizing:border-box;
  box-sizing:border-box;
  background-color: #FFFFFF;
  color:#333333;
  border-radius:4px;
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
.child-list >>> .weui-cells{
  display: flex;
}
.child-list >>> .weui-cell{
  padding:2px 15px;
}
.child-list >>> .weui-cells:after,.child-list >>> .weui-cells:before,.user-list >>> .weui-cell:before{
  border:none;
  border-top:none;
}
.child-list >>> .weui-cell__bd{
  margin-top: .06rem
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
  padding: 0.5rem 0;
  /*position: fixed;
  bottom: .5rem;
  left: 0;*/
  /*z-index: 9999999;*/
}
.btn{
  background-color:#27adff;
  color:#fff;
  padding: .1rem 1rem;
  border-radius: 4px;
  font-size: .4rem;
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
.verify{
  background: transparent;
  border:none;
}
.radio{
  width: 20px;
  margin-left: .4rem
}
.datetime{
  width:100%;
  border-bottom: 1px solid #F6F6F6;
}
.user-list >>> .vux-datetime-value{
    text-align: left;
    color: #000;
}
.toast {
    position: fixed;
    z-index: 2000;
    left: 50%;
    top:5%;
    transition:all .5s;
    -webkit-transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
          -o-transform: translateX(-50%) translateY(-50%);
            transform: translateX(-50%) translateY(-50%);
    text-align: center;
    border-radius: 5px;
    color:#FFF;
    background: rgba(17, 17, 17, 0.7);
    height: 45px;
    line-height: 45px;
    padding: 0 15px;
    max-width: 150px;
  }
</style>
