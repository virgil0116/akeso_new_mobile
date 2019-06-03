<template>
  <div class="container">
    <div class="bg-banner"/>
    <div class="from-box">
      <p class="title">请您输入手机号获取验证码登录后才能查看绑定机构/医生</p>
      <div class="phone-content">
        <input ref="input" v-model="phoneNum" class="phone-num border" type="number" placeholder="请输入手机号码" @blur="blur('input')">
        <div class="verify-box clearfix">
          <input ref="input" v-model="verifyNum" class="verify-num" maxlength="6" type="number" placeholder="请输入验证码" @blur="blur('input')">
          <div class="verify-btn">
            <input
              v-bind="{'disabled':disabled}"
              v-model="btnContent"
              class="verify"
              type= "button"
              @click= "sendSmsCode">
          </div>
        </div>
      </div>
    </div>
    <button class="button" @click="handleClickLogin">登录</button>
    <div v-show="toastShow" class="toast">
      {{ toastText }}
    </div>
  </div>
</template>

<script>
import { sendSignUpIn } from '@/api/mobile/codes'
import { createItem } from '@/api/mobile/users'
export default {
  name: 'SignIn',
  data() {
    return {
      doctor_id: this.$route.query.doctor_id,
      phoneNum: '', // 手机号
      verifyNum: '', // 验证码
      btnContent: '获取验证码', // 获取验证码按钮内文字
      time: 0, // 发送验证码间隔时间
      disabled: false, // 按钮状态
      toastShow: false,
      toastText: '',
      user_id: undefined
    }
  },
  methods: {
    blur(name) {
      this.$refs[name].scrollIntoView(false)
    },
    handleClickLogin() {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/ // 手机号正则验证
      if (!reg.test(this.phoneNum)) { // 手机号不合法
        this.toast('手机号不合法')
        return
      }
      if (this.verifyNum === '') {
        this.toast('请输入验证码')
        return
      }
      createItem({ phone: this.phoneNum, code: this.verifyNum }).then(response => {
        this.user_id = response.data.userId
        this.$router.push({ path: '/child_select', query: { doctor_id: this.doctor_id, user_id: this.user_id }})
      })
    },
    //  获取验证码
    sendSmsCode() {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/ // 手机号正则验证
      if (!this.phoneNum) { // 未输入手机号
        this.toast('请输入手机号码')
        return
      }
      if (!reg.test(this.phoneNum)) { // 手机号不合法
        this.toast('手机号不合法')
        return
      }
      sendSignUpIn({ phone: this.phoneNum }).then(response => {
        this.time = 60
        this.timer()
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
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .bg-banner
    height 3.8rem
    background url(../../assets/image/sign_up.png) center top no-repeat;
    background-size 100%
  .title
    text-align left
    padding-left .2rem
  .phone-content
    padding .3rem .2rem .4rem
    text-align left
  .border
    &:before
      border-color #dcdfe6
    &:after
      border-color #dcdfe6
  .phone-num,.verify-num
    width 100%
    height 0.8rem
    line-height 0.8rem
    position relative
    z-index 1
    // margin-top .01rem
    border-radius 0.1rem
    padding .2rem .1rem
    box-sizing border-box
    border: 1px solid #dcdfe6
    -webkit-appearance: none;
    margin-bottom .4rem
  .verify-btn
    height .8rem
    line-height .8rem
    padding 0 .16rem
    margin-left .1rem
    border-radius .1rem
    background-color #dcdfe6
  .verify
    background: transparent;
  .verify-box
    display flex
    flex-direction row
    justify-content base-convert
  .button
    button()
    background $cblue
    margin-top .6rem
  .border-box
    width 100%
    height 0.8rem
    margin-bottom .4rem
    border-radius .1rem
    padding 0 .1rem
    box-sizing: border-box
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
