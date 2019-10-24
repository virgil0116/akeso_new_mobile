<template>
  <div class="container">
    <div class="header" @click="handleChild">
      <img :src="avatar" alt="" class="avatar">
      <div class="info">
        <p class="name">{{ child.name }}</p>
        <span>{{ child.gender | genderFilter }}</span>
        <span>{{ child.age }}岁</span>
        <span>{{ child.height }}CM</span>
      </div>
      <!--<span class="icongengduo iconfont btn-click" />-->
    </div>
    <div class="list">
      <h3 class="title">共有<span class="c-blue">{{ eye_examinations.length }}</span>份屈光档案的报告</h3>
      <div v-for="item in eye_examinations" :key="item.id" class="item-list" @click="handleList(item.id)">
        <span>{{ item.createFileTime }}   {{ item.name }}</span>
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
import { fetchList, createItem } from '@/api/refractive_archives/eye_examinations'
export default {
  name: 'Child',
  directives: {
    TransferDom
  },
  components: {
    Confirm
  },
  filters: {
    genderFilter(gender) {
      const genderMap = {
        male: '男',
        female: '女'
      }
      return genderMap[gender]
    }
  },
  data() {
    return {
      avatar,
      show: false,
      child: {},
      eye_examinations: []
    }
  },
  created() {
    this.child = JSON.parse(this.$route.query.data)
    this.getList()
  },
  methods: {
    // api/v4/users/get_children
    getList() {
      fetchList({ child_id: this.child.id }).then(res => {
        this.eye_examinations = res.data.items
      })
    },
    onCancel() {
      console.log('on cancel')
    },
    onConfirm() {
      createItem({ child_id: this.child.id }).then(res => {
        this.getList()
      })
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
      this.$router.push({ name: 'child_details', query: { data: JSON.stringify() }})
    },
    handleList(val) {
      this.$router.push({ name: 'classification', query: { eye_examination_id: val }})
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
