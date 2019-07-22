<template>
  <div class="container-login">
    <div class="login-header">
      <h2 class="title">登录</h2>
    </div>
    <div class="login-con">
      <div class="login-item">
        <img :src="name" alt="" class="icon-name">
        <input v-model="ruleForm.userName" type="text" placeholder="后台账号">
      </div>
      <div class="login-item">
        <img :src="passwordIcon" alt="" class="icon-password">
        <input v-model="ruleForm.password" type="password" placeholder="后台密码">
      </div>
      <div class="text-right">
        <check-icon :value.sync="demo1" @click="clearCookie">是否记住密码</check-icon>
      </div>
      <button class="btn btn-top" @click="submitForm('ruleForm')">登 录</button>
    </div>
    <div v-show="toastShow" class="toast">
      {{ toastText }}
    </div>
  </div>
</template>

<script>
import name from '@/assets/image/refractive_archives/name.png'
import passwordIcon from '@/assets/image/refractive_archives/password.png'
import { CheckIcon } from 'vux'
export default {
  components: {
    CheckIcon
  },
  data() {
    return {
      name,
      passwordIcon,
      demo1: false,
      toastText: '',
      toastShow: false,
      ruleForm: {
        userName: '', // 用户名
        password: '' // 密码
      }
    }
  },
  // 页面加载调用获取cookie值
  mounted() {
    this.getCookie()
  },
  methods: {
    // 点击登录调用的方法
    submitForm(formName) {
      // 保存的账号
      var name = this.ruleForm.userName
      // 保存的密码
      var pass = this.ruleForm.password
      console.log('name===///', name, pass)
      if (name === '' || name == null) {
        console.log('name', name)
        this.toast('请输入正确的用户名')
        return
      } else if (pass === '' || pass == null) {
        console.log('pass', pass)
        this.toast('请输入正确的密码')
        return
      }
      // 判断复选框是否被勾选 勾选则调用配置cookie方法
      if (this.checked === true) {
        // 传入账号名，密码，和保存天数3个参数
        this.setCookie(name, pass, 7)
      }
      this.toast('登录成功')
      this.$router.push({ name: 'search_child', query: { data: JSON.stringify() }})
      // // 接口
      // var url = 'myserver/user/login'
      // this.$http.post(url, this.ruleForm, { emulateJSON: true })
      //   .then(res => {
      //     if (res.body === 'fail') {
      //       alert('用户名或密码错误,请重新输入')
      //       this.ruleForm.userName = ''
      //       this.ruleForm.password = ''
      //       return
      //     } else {
      //       alert('登陆成功！')
      //       this.$router.push('/index')
      //     }
      //   })
    },
    // 设置cookie
    setCookie(c_name, c_pwd, exdays) {
      var exdate = new Date() // 获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays) // 保存的天数
      // 字符串拼接cookie
      window.document.cookie = 'userName' + '=' + c_name + ';path=/;expires=' + exdate.toGMTString()
      window.document.cookie = 'userPwd' + '=' + c_pwd + ';path=/;expires=' + exdate.toGMTString()
    },
    // 读取cookie
    getCookie: function() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split('; ')// 这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split('=')// 再次切割
          // 判断查找相对应的值
          if (arr2[0] === 'userName') {
            this.ruleForm.userName = arr2[1]// 保存到保存数据的地方
          } else if (arr2[0] === 'userPwd') {
            this.ruleForm.password = arr2[1]
          }
        }
      }
    },
    // 清除cookie
    clearCookie: function() {
      this.setCookie('', '', -1)// 修改2值都为空，天数为负1天就好了
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
.container-login{
  height: 100%;
}
.login-header{
  background: #27adff;
  height: 30%;
}
.title{
  font-size: .6rem;
  color: #fff;
  text-align: left;
  padding-top: 1rem;
  padding-left: .4rem;
}
.login-con{
  height: 6rem;
  margin: 0 .6rem;
  position:absolute;
  top: 2.5rem;
  width: calc(100% - 1.2rem);
  box-sizing: border-box;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0px 2px #888888;
  padding: .6rem .4rem;
}
.login-item{
  height: .8rem;
  line-height: .8rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  margin-bottom: .4rem;
}
.icon-name{
  width: .3rem;
  height: .36rem;
  margin-top: .25rem;
  margin-right: .2rem;
}
.icon-password{
  width: .32rem;
  height: .32rem;
  margin-top: .25rem;
  margin-right: .2rem;
}
.login-item input{
  width: 100%;
}
.btn{
  width: 100%;
  height: .8rem;
  line-height: .8rem;
  background: #27adff;
  color: #fff;
  font-size: .32rem;
  text-align: center;
  border-radius: .4rem;
}
.btn-top{
  margin-top: 1rem;
}
.text-right{
  text-align: right;
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

