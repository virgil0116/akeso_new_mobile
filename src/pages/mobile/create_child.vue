<template>
  <div class="container">
    <p class="title">您还需填写孩子信息，方便医生与您及时沟通哟！</p>
    <group>
      <x-input v-model="temp.child_name" title="姓名" placeholder="请输入姓名" is-type="china-name" @blur="blur('input')"/>
    </group>
    <group label-width="5em">
      <popup-radio :title="title1" :options="genderOptions" v-model="temp.gender"/>
    </group>
    <group>
      <datetime
        v-model="temp.birthday"
        :title="('生日')"
        @on-show="onShowDate"
        @on-hide="onHideDate"
        @on-change="change"/>
    </group>
    <button class="button" @click="handleClickSave">保存</button>
  </div>
</template>

<script>
import { createItem } from '@/api/mobile/children'
import { Group, XInput, PopupPicker, PopupRadio, Datetime } from 'vux'
const genderOptions = [
  { key: 'male', value: '男' },
  { key: 'female', value: '女' }
]
export default {
  name: 'CreateChild',
  components: {
    Group,
    XInput,
    PopupPicker,
    PopupRadio,
    Datetime
  },
  data() {
    return {
      genderOptions,
      temp: {
        child_name: undefined,
        gender: undefined,
        birthday: undefined,
        user_id: this.$route.query.user_id,
        doctor_id: this.$route.query.doctor_id
      },
      child_id: undefined,
      title1: '性别'
    }
  },
  methods: {
    blur(name) {
      this.$refs[name].scrollIntoView(false)
    },
    handleClickSave() {
      console.log('temp => ', this.temp)
      if (this.temp.child_name === undefined || this.temp.child_name === '') {
        return
      }
      createItem(this.temp).then(response => {
        this.child_id = response.data.childId
        this.$router.push({ path: '/bind_success', query: { child_id: this.child_id }})
      })
      // this.$router.push({ path: '/mobile/bind_success' })
    },
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
  .container >>> .weui-label,.container >>> .weui-cell p,.container >>> .vux-label
    width 3em !important
  .button
    button()
    background $cblue
    margin-top 1.5rem
</style>
