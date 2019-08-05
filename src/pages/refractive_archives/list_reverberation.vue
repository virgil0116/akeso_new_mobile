<template>
  <div>
    <p>小瞳复光</p>
    <group>
      <datetime
        v-model="archive.examination_time"
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
          <input v-model="archive.sphere_od" type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">柱镜 DC</span>
          <input v-model="archive.cylinder_od" type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">轴向 AX</span>
          <input v-model="archive.axis_od" type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">棱镜 △</span>
          <input v-model="archive.prism_od" type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">底向Base</span>
          <selector v-model="archive.base_od" :options="degreesList" dir="rtl" title="" class="input-group-lg" />
        </li>
        <li>
          <span class="left-bar">矫正视力</span>
          <selector v-model="archive.corrected_visual_acuity_od" :options="selectDataList" dir="rtl" title="" class="input-group-lg" />
        </li>
        <li>
          <span class="left-bar">瞳距PD （ OU ）</span>
          <input v-model="archive.pupillary_distance_od" type="number" class="input-group-lg" >
        </li>
      </ul>
      <h3 class="title">左眼OS</h3>
      <ul class="list">
        <li>
          <span class="left-bar">球镜 DS</span>
          <input v-model="archive.sphere_os" type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">柱镜 DC</span>
          <input v-model="archive.cylinder_os" type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">轴向 AX</span>
          <input v-model="archive.axis_os" type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">棱镜 △</span>
          <input v-model="archive.prism_os" type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">底向Base</span>
          <selector v-model="archive.base_os" :options="degreesList" dir="rtl" title="" class="input-group-lg" />
        </li>
        <li>
          <span class="left-bar">矫正视力</span>
          <selector v-model="archive.corrected_visual_acuity_os" :options="selectDataList" dir="rtl" title="" class="input-group-lg" />
        </li>
        <li>
          <span class="left-bar">瞳距PD （ L ）</span>
          <input v-model="archive.pupillary_distance_os" type="number" class="input-group-lg" >
        </li>
        <!--<li>
          <span class="left-bar">录入屈光档案医生的名字</span>
          <input type="text" class="input-group-lg" >
        </li>-->
      </ul>
      <button class="btn btn-margin" @click="handleClickSave">保    存</button>
    </div>
  </div>
</template>

<script>
import { Datetime, Group, Selector } from 'vux'
import { createItem, fetItem } from '@/api/refractive_archives/archives'
export default {
  components: {
    Datetime,
    Group,
    Selector
  },
  data() {
    return {
      degreesList: ['', '0.1', '0.12', '0.15', '0.2', '0.25', '0.3', '0.4', '0.5', '0.6', '0.8', '1.0', '1.2', '1.5', '2.0', '0.08', '0.06', '0.05', '0.04', '0.02', '树指', '手动', '光感', '无光感'],
      selectDataList: ['', '底向in', '底向out', '底向up', '底向down'],
      medicineList: ['', '托吡卡胺', '环戊通', '阿托品', '其他'],
      value1: '',
      value2: '',
      archive: {
        type: 'callback_examination',
        examination_time: this.currentDate(),
        sphere_od: undefined,
        sphere_os: undefined,
        cylinder_od: undefined,
        cylinder_os: undefined,
        axis_od: undefined,
        axis_os: undefined,
        prism_od: undefined,
        prism_os: undefined,
        base_od: undefined,
        base_os: undefined,
        corrected_visual_acuity_od: undefined,
        corrected_visual_acuity_os: undefined,
        mydriatic_drugs: undefined,
        pupillary_distance_od: undefined,
        pupillary_distance_os: undefined,
        pupillary_distance_ou: undefined,
        wear_distance: undefined,
        wear_near: undefined,
        nearly_attached_add: undefined
      }
    }
  },
  created() {
    this.eye_examination_id = this.$route.query.eye_examination_id
    this.getData()
  },
  methods: {
    getData() {
      fetItem({ type: this.archive.type, eye_examination_id: this.eye_examination_id }).then(res => {
        // this.archive = res.data
        Object.assign(this.archive, res.data)
      })
    },
    handleClickSave() {
      var ppp = this.archive
      ppp.eye_examination_id = this.eye_examination_id
      createItem(ppp).then(res => {
        this.getData()
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
</style>
