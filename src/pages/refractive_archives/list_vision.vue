<template>
  <div>
    <p>视力检查</p>
    <group>
      <datetime
        v-model="visual_acuity_test.examination_time"
        title= "检查日期"
        @on-change="change"
        @on-cancel="log('cancel')"
        @on-confirm="onConfirm"
        @on-hide="log('hide', $event)"/>
    </group>
    <div class="container">
      <h3 class="title">右眼OD</h3>
      <ul class="list">
        <li>
          <span class="left-bar">裸眼远视力</span>
          <selector :options="degreesList" v-model="visual_acuity_test.naked_eye_distant_visual_acuity_od" dir="rtl" title="" class="input-group-lg" />
        </li>
        <li>
          <span class="left-bar">戴镜远视力</span>
          <selector :options="degreesList" v-model="visual_acuity_test.wear_glass_distant_visual_acuity_od" dir="rtl" title="" class="input-group-lg" />
        </li>
        <li>
          <span class="left-bar" @click="handleClick">裸眼近视力</span>
          <selector :options="selectDataList" v-model="visual_acuity_test.naked_eye_near_visual_acuity_od" dir="rtl" title="" class="input-group-lg" />
        </li>
      </ul>
      <h3 class="title">左眼OS</h3>
      <ul class="list">
        <li>
          <span class="left-bar">裸眼远视力</span>
          <selector :options="degreesList" v-model="visual_acuity_test.naked_eye_distant_visual_acuity_os" dir="rtl" title="" class="input-group-lg" />
        </li>
        <li>
          <span class="left-bar">戴镜远视力</span>
          <selector :options="degreesList" v-model="visual_acuity_test.wear_glass_distant_visual_acuity_os" dir="rtl" title="" class="input-group-lg" />
        </li>
        <li>
          <span class="left-bar" @click="handleClick">裸眼近视力</span>
          <selector :options="selectDataList" v-model="visual_acuity_test.naked_eye_near_visual_acuity_os" dir="rtl" title="" class="input-group-lg" />
        </li>
      </ul>
      <h3 class="title">双眼OU</h3>
      <ul class="list">
        <li>
          <span class="left-bar">裸眼远视力</span>
          <selector :options="degreesList" v-model="visual_acuity_test.naked_eye_distant_visual_acuity_ou" dir="rtl" title="" class="input-group-lg" />
        </li>
        <li>
          <span class="left-bar">戴镜远视力</span>
          <selector :options="degreesList" v-model="visual_acuity_test.wear_glass_distant_visual_acuity_ou" dir="rtl" title="" class="input-group-lg" />
        </li>
        <li>
          <span class="left-bar" @click="handleClick">裸眼近视力</span>
          <selector :options="selectDataList" v-model="visual_acuity_test.naked_eye_near_visual_acuity_ou" dir="rtl" title="" class="input-group-lg" />
        </li>
        <li>
          <!--<span class="left-bar" @click="handleClick">录入屈光档案医生的名字</span>-->
          <!--<input type="text" class="input-group-lg" >-->
        </li>
      </ul>
      <button class="btn btn-margin" @click="handleClickSave">保    存</button>
    </div>
  </div>
</template>

<script>
import { PopupPicker, Selector, Datetime, Group } from 'vux'
import { createItem, fetItem } from '@/api/refractive_archives/visual_acuity_tests'
export default {
  components: {
    PopupPicker,
    Selector,
    Datetime,
    Group
  },
  data() {
    return {
      degreesList: ['', '0.1', '0.12', '0.15', '0.2', '0.25', '0.3', '0.4', '0.5', '0.6', '0.8', '1.0', '1.2', '1.5', '2.0', '0.08', '0.06', '0.05', '0.04', '0.02', '树指', '手动', '光感', '无光感'],
      selectDataList: ['', '0.03', '0.04', '0.05', '0.06', '0.08', '0.1', '0.12', '0.15', '0.2', '0.25', '0.3', '0.4', '0.5', '0.6', '0.8', '1.0', '1.2'],
      value1: '',
      value2: '',
      eye_examination_id: undefined,
      visual_acuity_test: {
        examination_time: this.currentDate(),
        naked_eye_distant_visual_acuity_od: undefined,
        naked_eye_distant_visual_acuity_os: undefined,
        naked_eye_distant_visual_acuity_ou: undefined,
        naked_eye_near_visual_acuity_od: undefined,
        naked_eye_near_visual_acuity_os: undefined,
        naked_eye_near_visual_acuity_ou: undefined,
        wear_glass_distant_visual_acuity_od: undefined,
        wear_glass_distant_visual_acuity_os: undefined,
        wear_glass_distant_visual_acuity_ou: undefined
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
        this.visual_acuity_test = res.data
      })
    },
    handleClickSave() {
      var ppp = this.visual_acuity_test
      ppp.eye_examination_id = this.eye_examination_id
      createItem(ppp).then(res => {
        console.log('res data => ', res.data)
      })
    },
    currentDate() {
      var curDate = new Date()
      return curDate.getFullYear() + '-' + (curDate.getMonth() + 1) + '-' + curDate.getDate()
    },
    handleClick() {
      console.log(this.value1[0], this.value2)
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
</style>

