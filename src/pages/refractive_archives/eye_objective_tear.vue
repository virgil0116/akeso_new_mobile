<template>
  <div>
    <p class="tit-name">泪液检查</p>
    <group class="times">
      <datetime
        v-model="objective_ocular_examination.examination_time"
        title= "检查日期"
        @on-change="change"
        @on-cancel="log('cancel')"
        @on-confirm="onConfirm"
        @on-hide="log('hide', $event)"/>
    </group>
    <div class="container">
      <h3 class="title">右眼</h3>
      <ul class="list">
        <li>
          <span class="left-bar">Schirmer试验（mm）</span>
          <input v-model="objective_ocular_examination.schirmer_test_od" type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">泪膜破裂时间BUT（S）</span>
          <input v-model="objective_ocular_examination.schirmer_break_up_time_od" type="number" class="input-group-lg" >
        </li>
      </ul>
      <h3 class="title">左眼</h3>
      <ul class="list">
        <li>
          <span class="left-bar">Schirmer试验（mm）</span>
          <input v-model="objective_ocular_examination.schirmer_test_os" type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">泪膜破裂时间BUT（S）</span>
          <input v-model="objective_ocular_examination.schirmer_break_up_time_os" type="number" class="input-group-lg" >
        </li>
        <!--<li>
          <span class="left-bar">录入屈光档案医生的名字</span>
          <input type="text" class="input-group-lg" >
        </li>-->
      </ul>
      <button class="btn btn-margin" @click="handleClickSave">保    存</button>
    </div>
    <toast v-model="showPositionValue" :time="1000" :position="position" :text="toastText" :type="text" is-show-mask />
  </div>
</template>

<script>
import { Datetime, Group, Toast } from 'vux'
import { createItem, fetItem } from '@/api/refractive_archives/objective_ocular_examinations'
export default {
  components: {
    Datetime,
    Group,
    Toast
  },
  data() {
    return {
      showPositionValue: false,
      position: 'default',
      toastText: '',
      text: '',
      eye_examination_id: undefined,
      objective_ocular_examination: {
        examination_time: this.currentDate(),
        schirmer_test_od: undefined,
        schirmer_break_up_time_od: undefined,
        schirmer_test_os: undefined,
        schirmer_break_up_time_os: undefined
      }
    }
  },
  created() {
    this.eye_examination_id = this.$route.query.eye_examination_id
    this.getData()
  },
  methods: {
    getData() {
      fetItem({ eye_examination_id: this.eye_examination_id }).then(res => {
        Object.assign(this.objective_ocular_examination, res.data)
      })
    },
    handleClickSave() {
      var ppp = this.objective_ocular_examination
      ppp.eye_examination_id = this.eye_examination_id
      createItem(ppp).then(res => {
        // this.getData()
        if (res.message === '请求成功' && res.status === 200) {
          this.showPositionValue = true
          this.toastText = '提交成功'
          this.text = 'success'
          this.timer = setTimeout(() => {
            this.$router.go(-1)
          }, 1000)
        } else {
          this.showPositionValue = true
          this.toastText = '提交失败'
          this.text = 'warn'
        }
      })
    },
    currentDate() {
      var curDate = new Date()
      return curDate.getFullYear() + '-' + (curDate.getMonth() + 1) + '-' + curDate.getDate()
    },
    log(str1, str2 = '') {
      console.log(str1, str2)
    },
    onConfirm(val) {
      console.log('on-confirm arg', val)
      console.log('current value', this.value1)
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
  .container{
    padding: 0rem .4rem 1rem;
  }
  .title{
    font-size: .36rem;
    padding-left: .1rem;
    border-left: 4px solid $bgBlueColor;
    text-align: left;
    margin-top: .44rem;
  }
  .list li{
    display: flex;
    justify-content: space-between;
    padding: .4rem 0 .12rem;
    border-bottom:1px solid $bColor
    font-size: .3rem;
  }
  .left-bar{
    line-height: .5rem;
  }
  .input-group-lg{
    width: 40%;
    text-align: right;
    font-size: .4rem;
  }
  .input-group-lg{
    width: 32%;
    text-align: right;
    font-size: .4rem;
  }
  .list >>> .weui-cell{
    // height: 100%;
  }
  .list >>> .vux-cell-box:not(:first-child):before{
    border-top: none;
  }
  .list >>> .vux-popup-picker-select{
    text-align: right !important;
  }
  .list >>> .weui-cell{
    padding: 0;
  }
  .list >>> .weui-cell_access .weui-cell__ft{
    height: .4rem;
  }
  .list >>> .weui-select{
    height: .4rem;
    line-height: .4rem;
    // padding-right: 0;
    font-size: .4rem;
  }
  .list >>> .weui-cell:before{
    border-top: none;
  }
  .list >>> .vux-selector.weui-cell_select{
    margin-right: -0.2rem;
  }
  select{
    direction: rtl;
  }
  .btn-margin{
    margin: 1rem 0;
  }
  .btn{
    btn()
    box-sizing: border-box;
  }
  .times >>> .weui-cells ,.times >>> .vux-no-group-title{
    margin-top: 0;
  }
  .tit-name{
    height: .72rem;
    line-height: .72rem;
    font-size: .32rem;
    color: #fff;
    background: $bgBlueColor;
  }
</style>
