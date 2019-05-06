<template>
  <div style="padding: 15px 0;">
    <divider>{{ $t('Radio: object value') }}</divider>
    <div class="box">
      <checker v-model="demo11" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item v-for= "(item, index) in items1" :value="item" :key="index">{{ item.value }}</checker-item>
      </checker>
      <br>
      <span>{{ $t('Current value is') }}: {{ demo11 }}</span>
      <br>
      <br>
      <checker v-model="demo12" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item v-for="(item, index) in items1" :value="item" :key="index">{{ item.value }}</checker-item>
      </checker>
      <br>
      <span>{{ $t('Current value is') }}: {{ demo12 }}</span>
      <br>
    </div>

    <divider>{{ $t('Checkbox: object value') }}</divider>
    <div class="box">
      <checker v-model="demo21" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item v-for="(item, index) in items1" :value="item" :key="index">{{ item.value }}</checker-item>
      </checker>
      <br>
      <span>{{ $t('Current value is') }}: {{ demo21 }}</span>
      <br>
      <br>
      <checker v-model="demo22" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item v-for="(item, index) in items1" :value="item" :key="index">{{ item.value }}</checker-item>
      </checker>
      <br>
      <span>{{ $t('Current value is') }}: {{ demo22 }}</span>
      <br>
      <br>
      <checker v-model="demo23" :max="2" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item v-for="(item, index) in items1" :value="item" :key="index">{{ item.value }}</checker-item>
      </checker>
      <br>
      <span>{{ $t('Current value is') }}: {{ demo23 }}</span>
      <br>
    </div>

    <divider>{{ $t('Checkbox') }}</divider>
    <div class="box">
      <checker v-model="demo1Checkbox" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item :value="1">{{ $t('白') }}</checker-item>
        <checker-item :value="2">{{ $t('富') }}</checker-item>
        <checker-item :value="3">{{ $t('美') }}</checker-item>
      </checker>
      <br>
      <span>{{ $t('Current value is') }}: {{ demo1Checkbox }}</span>
      <br>
    </div>

    <divider>{{ $t('Checkbox with max limit 2') }}</divider>
    <div class="box">
      <checker v-model="demo1CheckboxMax" :max="2" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item value="1">1</checker-item>
        <checker-item value="2">2</checker-item>
        <checker-item value="3">3</checker-item>
      </checker>
      <br>
      <span>{{ $t('Current value is') }}: {{ demo1CheckboxMax }}</span>
      <br>
    </div>

    <divider>{{ $t('Default value 2') }}</divider>
    <div class="box">
      <checker v-model="demo2" default-item-class="demo2-item" selected-item-class="demo2-item-selected">
        <checker-item value="1">1</checker-item>
        <checker-item value="2">2</checker-item>
        <checker-item value="3">3</checker-item>
      </checker>
      <br>
      <span>{{ $t('Current value is') }}: {{ demo2 }}</span>
      <br>
    </div>

    <divider>{{ $t('Custom styles') }}</divider>
    <div class="box">
      <checker v-model="demo3" default-item-class="demo3-item" selected-item-class="demo3-item-selected">
        <checker-item value="one">
          <img src="http://placeholder.qiniudn.com/80x50/FF3B3B/ffffff" alt="">
        </checker-item>
        <checker-item value="two">
          <img src="http://placeholder.qiniudn.com/80x50/FFEF7D/ffffff" alt="">
        </checker-item>
        <checker-item value="three">
          <img src="http://placeholder.qiniudn.com/80x50/8AEEB1/ffffff" alt="">
        </checker-item>
      </checker>
      <br>
      <span>{{ $t('Current value is') }}: {{ demo3 }}</span>
      <br>
    </div>

    <divider>{{ $t('Used in a popup') }}</divider>
    <group>
      <cell :title="$t('Select color')" :value="demo4" is-link @click.native="showPopup=true"/>
    </group>
    <div v-transfer-dom>
      <popup v-model="showPopup" class="checker-popup">
        <div style="padding:10px 10px 40px 10px;">
          <p style="padding: 5px 5px 5px 2px;color:#888;">Colors</p>
          <checker
            v-model="demo4"
            default-item-class="demo4-item"
            selected-item-class="demo4-item-selected"
            disabled-item-class="demo4-item-disabled">
            <checker-item :value="$t('花跟叶')" @on-item-click="onItemClick"> {{ $t('花跟叶') }} </checker-item>
            <checker-item :value="$t('鸟与树')" @on-item-click="onItemClick"> {{ $t('鸟与树') }} </checker-item>
            <checker-item :value="$t('我和你')" @on-item-click="onItemClick"> {{ $t('我和你') }} </checker-item>
            <checker-item :value="$t('全套礼品装')" disabled @on-item-click="onItemClick"> {{ $t('全套礼品装') }} </checker-item>
          </checker>
        </div>
      </popup>
    </div>

    <divider>{{ $t('A real world radio example') }} {{ demo5 }}</divider>
    <checker
      v-model="demo5"
      default-item-class="demo5-item"
      selected-item-class="demo5-item-selected"
    >
      <checker-item v-for="i in [1, 2, 3]" :key="i" :value="i">￥{{ i*300 }}</checker-item>
    </checker>
    <br>
    <divider>{{ $t('A real world checkbox example') }} {{ demo6 }}</divider>
    <checker
      v-model="demo6"
      type="checkbox"
      default-item-class="demo5-item"
      selected-item-class="demo5-item-selected"
    >
      <checker-item v-for="i in [1, 2, 3]" :key="i" :value="i">{{ ['good', 'nice','awesome'][i - 1] }}</checker-item>
    </checker>
  </div>
</template>

<script>
import { Checker, CheckerItem } from 'vux'
export default {
  name: 'ChildSelect',
  components: {
    Checker,
    CheckerItem
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'

</style>
