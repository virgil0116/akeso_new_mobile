<template>
  <div class="container">
    <p class="title">请填写您的注册信息</p>
    <group>
      <div class="group-title">若申请人为医生/視光师个人请填写某某医生/视光师工作室</div>
      <x-input v-model="temp.name" :show-clear="false" title="机构名称" placeholder="请输入机构名称(必填)" @blur="blur('input')" />
    </group>
    <group>
      <x-input v-model="temp.principal" :show-clear="false" title="联系人" is-type="china-name" placeholder="请输入您的姓名" @blur="blur('input')"/>
      <x-input v-model="temp.job_title" :show-clear="false" title="职称" placeholder="职称" @blur="blur('input')"/>
      <x-input v-model="temp.phone" :show-clear="false" title="联系方式" is-type="china-mobile" placeholder="请输入您的手机号(必填)" @blur="blur('input')"/>
      <x-input v-model="temp.email" :show-clear="false" is-type="email" title="登录账号" placeholder="请输入您常用的邮箱地址(必填)" @blur="blur('input')"/>
      <x-input v-model="temp.password" :show-clear="false" :min="6" type="password" title="密码" placeholder="请输入密码(必填)" @blur="blur('input')"/>
      <x-input v-model="temp.password_confirmation" :show-clear="false" :min="6" type="password" title="确认密码" placeholder="请输入密码(必填)" @blur="blur('input')"/>
    </group>
    <group>
      <selector v-model="temp.province_code" :options="province_data" :value-map="['code', 'name']" placeholder="请选择省份" title="省份" name="district" @on-change="onChange"/>
      <selector v-model="temp.city_code" :options="city_data" :value-map="['code', 'name']" placeholder="请选择城市" title="城市" name="district" @on-change="onChange"/>
      <selector v-model="temp.district_code" :options="district_data" :value-map="['code', 'name']" placeholder="请选择地区" title="地区" name="district" @on-change="onChange"/>
    </group>
    <group>
      <x-input v-model="temp.address" :show-clear="false" title="详细地址" placeholder="请输入地址" @blur="blur('input')"/>
      <x-input v-model="temp.description" :show-clear="false" title="简介" placeholder="请输入简介" @blur="blur('input')"/>
    </group>
    <button class="button" @click="handleClickSave">确认注册</button>
  </div>
</template>

<script>
import { createItem } from '@/api/doctors/doctors'
import { fetchChinaData } from '@/api/common/city'
import { Group, XInput, PopupPicker, PopupRadio, Datetime, Selector } from 'vux'
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
    Datetime,
    Selector
  },
  data() {
    return {
      genderOptions,
      labelWidth: '15',
      temp: {
        name: undefined,
        principal: undefined,
        phone: undefined,
        email: undefined,
        password: undefined,
        password_confirmation: undefined,
        address: undefined,
        job_title: undefined,
        description: undefined,
        province_code: undefined,
        city_code: undefined,
        district_code: undefined
      },
      province_data: [],
      city_data: [],
      district_data: []
    }
  },
  watch: {
    'temp.province_code': function(newVal, oldVal) {
      if (newVal === undefined) {
        return
      }
      this.getCityData(newVal)
      this.temp.city_code = undefined
      this.temp.district_code = undefined
    },
    'temp.city_code': function(newVal, oldVal) {
      if (newVal === undefined) {
        return
      }
      this.getDistrictData(newVal)
      this.temp.district_code = undefined
    }
  },
  created() {
    this.getProvinceData()
  },
  methods: {
    getProvinceData() {
      fetchChinaData().then(response => {
        this.province_data = response.data
      })
    },
    getCityData(val) {
      fetchChinaData({ province_code: val }).then(response => {
        this.city_data = response.data
      })
    },
    getDistrictData(val) {
      fetchChinaData({ city_code: val }).then(response => {
        this.district_data = response.data
      })
    },
    onChange() {
    },
    handleClickSave() {
      if (this.temp.name === undefined || this.temp.name === '') {
        this.$vux.toast.text('请输入名称', 'center')
        return
      }
      if (this.temp.email === undefined || this.temp.email === '') {
        this.$vux.toast.text('请输入邮箱', 'center')
        return
      }
      if (this.temp.password === undefined || this.temp.password === '') {
        this.$vux.toast.text('请输入密码', 'center')
        return
      }
      if (this.temp.password !== this.temp.password_confirmation) {
        this.$vux.toast.text('两次输入密码不一致，请重新填写', 'center')
        return
      }
      if (this.temp.password.length < 6) {
        this.$vux.toast.text('密码长度不足6位', 'center')
        return
      }
      createItem(this.temp).then(res => {
        console.log('注册成功')
        this.$router.push({ path: '/regist_success', query: {}})
      }).catch(error => {
        console.log('error => ', error)
        this.$vux.toast.text(error, 'center')
      })
    },
    handleClear(val) {
      console.log('val => ', val)
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
    width 5em !important
    text-align left !important
  .button
    button()
    background $cblue
    margin-top 1.5rem
  .group-title
    padding-top 5px
    padding-bottom 5px
    font-size 14px
    color gray
    text-align left
    padding-left 15px
</style>
