<template>
  <div class="container">
    <div class="header">
      <p class="title">您已注册成为AKESO的用户，</p>
      <p class="title">请您选择您需要绑定医生的孩子。</p>
    </div>
    <div class="list">
      <group>
        <Checklist :options="test" v-model="checked_list" :max="1"/>
      </group>

      <div>
        <div class="weui-cells weui-cells_checkbox">
          <label
            v-for="item in children"
            :key="item.id"
            class="weui-cell weui-check_label">
            <div class="weui-cell__hd">
              <input
                :name="item.name"
                :value="item.id"
                :disabled="item.bindState"
                v-model="currentValue"
                type="checkbox"
                class="weui-check"
                @change="change">
              <i class="weui-icon-checked vux-checklist-icon-checked"/>
            </div>
            <div class="weui-cell__bd">
              <p>{{ item.name }} {{ item.doctorName }}</p>
            </div>
          </label>
        </div>
      </div>
    </div>
    <button class="button" @click="handleClickAdd">创建孩子</button>
    <button class="button" @click="handleClickNext">下一步</button>
    <div v-show="toastShow" class="toast">
      {{ toastText }}
    </div>
  </div>
</template>
<script>
import { fetchList, bindDoctor } from '@/api/mobile/children'
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
      test: [],
      currentValue: [],
      children: [],
      child_id: undefined,
      user_id: this.$route.query.user_id,
      doctor_id: this.$route.query.doctor_id,
      checked_list: [],
      toastShow: false,
      toastText: ''
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      fetchList({ user_id: this.user_id }).then(response => {
        this.children = response.data.items
        console.log('chidlren => ', typeof this.children)
        console.log('chidlren => ', this.children)
      })
    },
    handleClickAdd() {
      this.$router.push({ path: '/create_child', query: { user_id: this.user_id, doctor_id: this.doctor_id }})
    },
    handleClickNext() {
      if (this.child_id === undefined) {
        console.log('请选择儿童')
        this.toast('请选择儿童')
        return
      }
      bindDoctor({ child_id: this.child_id, doctor_id: this.doctor_id }).then(response => {
        this.$router.push({ path: '/bind_success', query: { child_id: this.child_id }})
      })
    },
    change(val, label) {
      const length = this.currentValue.length
      if (length > 1) {
        this.currentValue = [this.currentValue[length - 1]]
      }
      this.child_id = this.currentValue[0]
      console.log('currentValue => ', this.currentValue)
      console.log('change', val, label)
    },
    toast(str) {
      const V = this
      V.toastText = str
      V.toastShow = true
      setTimeout(function() {
        V.toastShow = false
      }, 1500)
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
  .toast {
    position: fixed;
    z-index: 2000;
    left: 50%;
    top:5%;
    transition:all .5s;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    border-radius: 5px;
    color:#FFF;
    background: rgba(17, 17, 17, 0.7);
    height: 45px;
    line-height: 45px;
    padding: 0 15px;
    max-width: 150px;
  }
</style>
