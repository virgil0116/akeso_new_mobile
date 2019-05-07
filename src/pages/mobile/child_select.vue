<template>
  <div class="container">
    <div class="header">
      <p class="title">您已注册成为AKESO的用户，</p>
      <p class="title">请您选择您需要绑定医生的孩子。</p>
    </div>
    <div class="list">
      <group>
        <Checklist :options="commonList" v-model="checklist002" disabled/>
        <Checklist :max="1" :options="commonList" > {{ ('孩子的类别') }} ({{ demo1 }})</Checklist>
      </group>
    </div>
    <router-link to="/bind_success">
      <button class="button">创建孩子</button>
    </router-link>
    <router-link to="/create_child">
      <button class="button">下一步</button>
    </router-link>
  </div>
</template>
<script>
import { Group, CheckIcon, Checklist } from 'vux'
export default {
  name: 'ChildSelect',
  components: {
    Group,
    CheckIcon,
    Checklist
  },
  data() {
    return {
      name: '123',
      value: '456',
      demo1: false,
      demo2: false,
      commonList: ['China', 'Japan'],
      checklist002: ['China', 'Japan']
    }
  },
  methods: {
    onClick() {
      console.log('aaaaaaa')
    },
    change(val, label) {
      console.log('change', val, label)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .list >>> .weui-cell__bd,.list >>> .vux-check-icon
    text-align left
  .list >>> .vux-check-icon
    display block
    padding: .2rem .3rem;
  .header
    padding .6rem .3rem;
    display block
    text-align left
    .title
      font-size .4rem
      line-height .6rem
  .button
    button()
    width 40%
    background $cblue
    margin-top 1rem
</style>
