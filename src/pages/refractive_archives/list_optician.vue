<template>
  <div>
    <p>配镜处方</p>
    <group>
      <datetime
        v-model="date"
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
          <span class="left-bar">球镜 DS</span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">柱镜 DC</span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">轴向 AX</span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">棱镜 △</span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">底向Base</span>
          <selector :options="degreesList" dir="rtl" title="" class="input-group-lg" />
        </li>
        <li>
          <span class="left-bar">矫正视力</span>
          <selector :options="selectDataList" dir="rtl" title="" class="input-group-lg" />
        </li>
        <li>
          <span class="left-bar">瞳距PD （ OU ）</span>
          <input type="number" class="input-group-lg" >
        </li>
      </ul>
      <h3 class="title">左眼OS</h3>
      <ul class="list">
        <li>
          <span class="left-bar">球镜 DS</span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">柱镜 DC</span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">轴向 AX</span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">棱镜 △</span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">底向Base</span>
          <selector :options="degreesList" dir="rtl" title="" class="input-group-lg" />
        </li>
        <li>
          <span class="left-bar">矫正视力</span>
          <selector :options="selectDataList" dir="rtl" title="" class="input-group-lg" />
        </li>
        <li>
          <span class="left-bar">佩戴方式</span>
          <div class="text-left">
            <check-icon :value.sync="demo1" type="plain">远用</check-icon>
            <check-icon :value.sync="demo2" type="plain">近用</check-icon>
            <div class="text">
              <span>附加ADD</span>
              <input type="number" class="input-group" >
            </div>
          </div>
        </li>
        <li>
          <span class="left-bar">录入屈光档案医生的名字</span>
          <input type="number" class="input-group-lg" >
        </li>
      </ul>
      <button class="btn btn-margin">确 认 添 加</button>
    </div>
  </div>
</template>

<script>
import { Datetime, Group, Selector, CheckIcon } from 'vux'
export default {
  components: {
    Datetime,
    Group,
    Selector,
    CheckIcon
  },
  data() {
    return {
      degreesList: ['', '0.1', '0.12', '0.15', '0.2', '0.25', '0.3', '0.4', '0.5', '0.6', '0.8', '1.0', '1.2', '1.5', '2.0', '0.08', '0.06', '0.05', '0.04', '0.02', '树指', '手动', '光感', '无光感'],
      selectDataList: ['', '底向in', '底向out', '底向up', '底向down'],
      medicineList: ['', '托吡卡胺', '环戊通', '阿托品', '其他'],
      value1: '',
      value2: '',
      demo1: false,
      demo2: false,
      date: '2019-06-06'
    }
  },
  methods: {
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
    flex-shrink: 0;
  }
  .input-group-lg{
    width: 50%;
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
    number-align: right !important;
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
    text-align: left;
  }
  .text{
    padding-top: .2rem;
    margin-bottom: .2rem;
  }
  .text span{
    padding-left: .26rem;
  }
  .input-group{
    border-bottom:1px solid $bColor
  }
</style>
