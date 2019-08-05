<template>
  <div>
    <p>前五项</p>
    <group>
      <datetime
        v-model="visual_function_test.examination_time"
        title= "检查日期"
        @on-change="change"
        @on-cancel="log('cancel')"
        @on-confirm="onConfirm"
        @on-hide="log('hide', $event)"/>
    </group>
    <div class="container">
      <ul class="list">
        <li>
          <span class="left-bar">主导眼</span>
          <selector :options="list" v-model="visual_function_test.dominant_eye" dir="rtl" title="" class="input-group-lg" @on-change="onChange" />
        </li>
        <li>
          <span class="left-bar">眼位</span>
          <input v-model="visual_function_test.phoria" type="text" class="input-group-lg">
        </li>
        <li>
          <span class="left-bar">眼球运动</span>
          <input v-model="visual_function_test.eye_movement" type="text" class="input-group-lg">
        </li>
        <li class="reference">
          <div class="reference-tit">参考值： 40~2000</div>
          <div class="reference-con">
            <span class="left-bar">立体视检查</span>
            <div class="text-left">
              <check-icon :value.sync="visual_function_test.is_stereo_tests" type="plain">立体检查</check-icon>
              <div v-if="visual_function_test.is_stereo_tests" class="text">
                <input type="number" class="input-group" >
              </div>
            </div>
          </div>
        </li>
      </ul>
      <h3 class="title">worth四点</h3>
      <ul class="list">
        <li>
          <span class="left-bar">距离33cm</span>
          <selector v-model="visual_function_test.worth_4_dots_33cm" :options="distanceThirty" dir="rtl" title="" class="input-group-select" />
        </li>
        <li>
          <span class="left-bar">距离6m</span>
          <selector v-model="visual_function_test.worth_4_dots_6m" :options="distanceThirtyT" dir="rtl" title="" class="input-group-select" />
        </li>
      </ul>
      <!--<ul class="list">
        <li>
          <span class="left-bar" @click="handleClick">录入屈光档案医生的名字</span>
          <input type="text" class="input-group-lg" >
        </li>
      </ul>-->
      <button class="btn btn-margin" @click="handleClickSave">保    存</button>
    </div>
  </div>
</template>

<script>
import { PopupPicker, Selector, Datetime, Group, CheckIcon } from 'vux'
import { createItem, fetItem } from '@/api/refractive_archives/visual_function_tests'
export default {
  components: {
    PopupPicker,
    Selector,
    Datetime,
    Group,
    CheckIcon
  },
  data() {
    return {
      eye_examination_id: undefined,
      list: [
        { key: '', value: '' },
        { key: 'right', value: '右眼' },
        { key: 'left', value: '左眼' },
        { key: 'left_right', value: '双眼交替' }
      ],
      distanceThirty: [
        { key: '', value: '' },
        { key: 'four_two_two_33cm', value: '可见4个灯，2红2绿' },
        { key: 'four_one_three_33cm', value: '可见4个灯，1红3绿' },
        { key: 'two_two_33cm', value: '可见2个灯，2红' },
        { key: 'three_three_33cm', value: '可见3个灯，3绿' },
        { key: 'five_33cm', value: '可见5个灯' }
      ], // worth四点
      distanceThirtyT: [
        { key: '', value: '' },
        { key: 'four_two_two_6m', value: '可见4个灯，2红2绿' },
        { key: 'four_one_three_6m', value: '可见4个灯，1红3绿' },
        { key: 'two_two_6m', value: '可见2个灯，2红' },
        { key: 'three_three_6m', value: '可见3个灯，3绿' },
        { key: 'five_6m', value: '可见5个灯' }
      ],
      Stereoscopy: ['', '有', '无'],
      visual_function_test: {
        examination_time: this.currentDate(),
        dominant_eye: undefined,
        phoria: undefined,
        eye_movement: undefined,
        is_stereo_tests: false,
        worth_4_dots_33cm: undefined,
        worth_4_dots_6m: undefined
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
        Object.assign(this.visual_function_test, res.data)
      })
    },
    handleClickSave() {
      var ppp = this.visual_function_test
      ppp.eye_examination_id = this.eye_examination_id
      createItem(ppp).then(res => {
        this.getData()
      })
    },
    currentDate() {
      var curDate = new Date()
      return curDate.getFullYear() + '-' + (curDate.getMonth() + 1) + '-' + curDate.getDate()
    },
    handleClick() {
    },
    log(str1, str2 = '') {
      console.log(str1, str2)
    },
    onConfirm(val) {
      console.log('on-confirm arg', val)
    },
    change(value) {
      console.log('change', value)
    },
    onChange(vle) {
      console.log(vle)
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
  .list li.reference{
    flex-direction: column;
  }
  .reference-tit{
    font-size: .24rem;
    color: #acacac;
    text-align: left;
    padding-bottom: .2rem;
  }
  .reference-con{
    display: flex;
    justify-content: space-between;
  }
  .left-bar{
    line-height: .5rem;
  }
  .input-group-lg{
    width: 40%;
    text-align: right;
    font-size: .4rem;
  }
  .input-group-select{
    width: 70%;
    text-align: right;
    font-size: .3rem;
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
  .text-left{
    display: flex;
    flex-direction: row;
  }
  .input-group{
    box-sizing: border-box;
    margin: 0 .4rem;
    text-align: center;
    width: 5em;
    border-bottom:1px solid $bColor
  }
</style>

