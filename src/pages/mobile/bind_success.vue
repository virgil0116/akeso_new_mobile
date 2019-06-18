<template>
  <div class="container">
    <div class="header">
      <p>儿童眼视光专家</p>
      <a href="http://a.app.qq.com/o/simple.jsp?pkgname=cn.akeso.akesokid">
        下载APP
      </a>
    </div>
    <!--<div>
      <msg :title="11" :description="description" :icon="icon"/>
    </div>-->
    <div class="child">
      <p class="child-name">{{ user.name }}</p>
      <p class="info"><span style="margin-right: 10px;">{{ user.genderCn }}</span>{{ user.age }}岁</p>
    </div>
    <div class="doctor border">
      <h3 class="title">{{ dcotor }}</h3>
      <div class="img">
        <img :src="avatar" alt="">
      </div>
      <p class="name">{{ user.doctorName }}</p>
      <a href="http://a.app.qq.com/o/simple.jsp?pkgname=cn.akeso.akesokid" class="btn">
        联系医生
      </a>
    </div>
  </div>
</template>

<script>
import { Msg } from 'vux'
import { fetchItem } from '@/api/mobile/children'
import avatar from '@/assets/image/header.png'
export default {
  name: 'BindSuccess',
  components: {
    Msg
  },
  data() {
    return {
      description: 'msg description',
      icon: '',
      child_id: this.$route.query.child_id,
      user: {},
      dcotor: '',
      avatar
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      fetchItem({ child_id: this.child_id }).then(response => {
        this.user = response.data
        this.dcotor = this.$store.state.doctor === 'doctor' ? '医生' : '专属管理机构'
      })
    },
    changeIcon() {
      if (!this.icon || this.icon === 'success') {
        this.icon = 'warn'
        return
      }
      if (this.icon === 'warn') {
        this.icon = 'info'
        return
      }
      if (this.icon === 'info') {
        this.icon = 'waiting'
        return
      }
      if (this.icon === 'waiting') {
        this.icon = 'success'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container >>> .weui-msg__title
    font-size .48rem
  .container >>>.weui-msg__desc
    font-size .38rem
  .header
    padding .8rem .4rem
    background-color rgb(21, 30, 65)
    text-align left
    p
      color #fff
      font-size .3rem
    a
      padding .26rem .3rem
      font-size .3rem
      border-radius .1rem
      color #fff
      background-color #409eff
      border-color #409eff
      text-align center
      margin-top .4rem
      display block
  .doctor
    border-radius .1rem
    padding .3rem .2rem
    margin .2rem .3rem
    overflow hidden
    .title
      font-weight bold
    .img
      width 1.6rem
      height 1.6rem
      border-radius 50%
      overflow hidden
      display inline-block
      margin .4rem 0
      img
        width 100%
    .name
      font-size .3rem
    .btn
      padding .26rem .3rem
      font-size .3rem
      border-radius .1rem
      color #fff
      background-color #409eff
      border-color #409eff
      text-align center
      margin-top .4rem
      display block
      position relative
      z-index 222
  .border
    &:before
      border-color #dcdfe6
    &:after
      border-color #dcdfe6
  .child
    padding .4rem .3rem
    font-size .4rem
    .child-name
      padding .2rem 0
</style>
