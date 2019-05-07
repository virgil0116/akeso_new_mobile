<template>
  <div class="container">
    <p class="title">我们已用短信方式告诉您登录信息，您还需填写孩子信息，方便医生沟通。</p>
    <group>
      <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"/>
    </group>
    <group label-width="5em">
      <popup-picker :title="title1" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange"/>
    </group>
    <group>
      <datetime
        v-model="valueDate"
        :title="('生日')"
        @on-show="onShowDate"
        @on-hide="onHideDate"
        @on-change="change"/>
    </group>
    <button class="button">保存</button>
  </div>
</template>

<script>
import { Group, XInput, PopupPicker, Datetime } from 'vux'
export default {
  name: 'CreateChild',
  components: {
    Group,
    XInput,
    PopupPicker,
    Datetime
  },
  data() {
    return {
      title1: '性别',
      list1: [['男', '女']],
      value1: ['男'],
      valueDate: '2015-05-05'
    }
  },
  methods: {
    onChange(val) {
      console.log('val change', val)
    },
    onShow() {
      console.log('on show')
    },
    onHide(type) {
      console.log('on hide', type)
    },
    onShowDate() {
      console.log('on show')
    },
    onHideDate(type) {
      console.log('on hide', type)
    },
    change(value) {
      console.log('change', value)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .title
    padding .6rem .3rem
    font-size .4rem
    text-align left
    line-height .6rem
  .container >>> .weui-cells
    margin-top -1px
  .container >>> .weui-label,.container >>> .weui-cell p
    width 3em !important
  .button
    button()
    background $cblue
    margin-top 1.5rem
</style>
