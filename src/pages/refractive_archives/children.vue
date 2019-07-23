<template>
  <div class="container">
    <div class="header" @click="handleChild">
      <img :src="avatar" alt="" class="avatar">
      <div class="info">
        <p class="name">名字</p>
        <span>男</span>
        <span>0岁</span>
        <span>100CM</span>
      </div>
      <span class="icongengduo iconfont btn-click" />
    </div>
    <div class="list">
      <h3 class="title">共有<span class="c-blue">1</span>份屈光档案的报告</h3>
      <div class="item-list" @click="handleList">
        <span>屈光档案</span>
        <span class="icongengduo iconfont" />
      </div>
    </div>
    <div class="btn-box">
      <button class="btn" @click="handleClick">新建屈光档案</button>
    </div>
    <div v-transfer-dom>
      <confirm
        v-model="show"
        title="提示"
        @on-cancel="onCancel"
        @on-confirm="onConfirm"
        @on-show="onShow"
        @on-hide="onHide">
        <p style="text-align:center;">您确定要创建屈光档案嘛？</p>
      </confirm>
    </div>
  </div>
</template>

<script>
import avatar from '@/assets/image/header-avatar.png'
import { Confirm, TransferDom } from 'vux'
export default {
  name: 'Child',
  directives: {
    TransferDom
  },
  components: {
    Confirm
  },
  data() {
    return {
      avatar,
      show: false
    }
  },
  methods: {
    onCancel() {
      console.log('on cancel')
    },
    onConfirm(msg) {
      console.log('on confirm')
      if (msg) {
        alert(msg)
      }
    },
    onHide() {
      console.log('on hide')
    },
    onShow() {
      console.log('on show')
    },
    handleClick() {
      this.show = true
    },
    handleChild() {
      console.log(111)
      // child_details
      this.$router.push({ name: 'child_details', query: { data: JSON.stringify() }})
    },
    handleList() {
      this.$router.push({ name: 'classification', query: { data: JSON.stringify() }})
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .container{
    height: 100%;
    text-align: left;
  }
  .header{
    background: $bgBlueColor;
    padding: 0 .4rem;
    height: 2.6rem;
    display: flex;
    flex-direction: row;
    align-items:center;
    color: #fff;
    // justify-content:center;
  }
  .avatar{
    height: 1.4rem;
    width: 1.4rem;
    margin-right: .2rem;
    flex-shrink: 0;
  }
  .info{
    width: 100%;
  }
  .btn-click{
    flex-shrink: 0;
    color: #fff;
  }
  .name{
    font-size: .32rem;
    line-height: .46rem;
  }
  .list{
    box-sizing: border-box;
    padding: .4rem 0;
  }
  .btn-box{
    position: fixed;
    bottom: 1.4rem;
    left: .4rem;
    right: .4rem;
  }
  .btn {
    btn()
  }
  .title{
    font-size: .3rem;
    border-bottom: 1px solid $bColor;
    padding: 0 0.4rem .2rem;
  }
  .c-blue{
    color: $bgBlueColor;
  }
  .item-list{
    border-bottom: 1px solid $bColor;
    padding: .3rem .4rem;
    font-size: .32rem;
    display: flex;
    justify-content:space-between;
  }
</style>
