<template>
  <div class="container">
    <div class="bg-banner"></div>
    <div class="from-box">
      <p class="title">请您先注册为AKESO用户，方便您随时查看绑定医生。</p>
      <div class="phone-content">
        <input v-model="phoneNum" class="phone-num border" type="text" placeholder="请输入手机号码">
        <div class="verify-box clearfix">
          <input class="verify-num border" v-model="verifyNum" type="text" placeholder="请输入验证码">
          <input v-on:click="sendSmsCode" class="verify-btn" type="button" v-model="btnContent" v-bind="{'disabled':disabled}">
        </div>
      </div>
    </div>
    <router-link to="/child_select">
      <button class="button">登录</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'child_select',
  data () {
    return {
      phoneNum: '', // 手机号
      verifyNum: '', // 验证码
      btnContent: '获取验证码', // 获取验证码按钮内文字
      time: 0, // 发送验证码间隔时间
      disabled: false // 按钮状态
    }
  },
  methods: {
    //  获取验证码
    sendSmsCode () {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/ // 手机号正则验证
      var phoneNum = this.phoneNum
      if (!phoneNum) { // 未输入手机号
        console.log('请输入手机号码')
        return
      }
      if (!reg.test(phoneNum)) { // 手机号不合法
        console.log('您输入的手机号码不合法，请重新输入')
      }
      this.time = 60
      this.timer()
      // 获取验证码请求
      // var url = ''
      // this.$http.post(url, {username: phoneNum}, {emulateJSON: true}).then((response) => {
      //   console.log(response.body)
      // })
    },
    timer () {
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
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .bg-banner
    height 28vh
    background url(../../assets/image/sign_up.png) center top no-repeat;
    background-size 100%
  .title
    text-align left
    padding-left .2rem
  .phone-content
    padding .3rem .2rem .4rem
    text-align left
  .phone-num,.verify-num
    width 100%
    height .8rem
    line-height .8rem
    border:1px solid #dcdfe6
    border-radius .1rem
    box-sizing: border-box
    padding 0 .1rem
    margin-bottom: .4rem
  .verify-btn
    height .8rem
    line-height .8rem
    padding 0 .16rem
    margin-left .1rem
    border-radius .1rem
  .verify-box
    display flex
    flex-direction row
    justify-content base-convert
  .button
    button()
    background $cblue
    margin-top .6rem
</style>
