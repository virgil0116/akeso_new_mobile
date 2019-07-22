<template>
  <div class="container">
    <ul class="list">
      <li>
        <span class="left-bar">头像</span>
        <div class="right-bar">
          <img :src="avatar" alt="" class="avatar-icon">
        </div>
      </li>
      <li>
        <span class="left-bar">姓名</span>
        <div class="right-bar">
          <span>名字</span>
        </div>
      </li>
      <li>
        <span class="left-bar">性别</span>
        <div class="right-bar">
          <span>女</span>
        </div>
      </li>
      <li>
        <span class="left-bar">生日</span>
        <div class="right-bar">
          <span>2010-01-01</span>
        </div>
      </li>
      <li>
        <span class="left-bar">身高</span>
        <div class="right-bar">
          <span>85cm</span>
        </div>
      </li>
      <li>
        <span class="left-bar">体重</span>
        <div class="right-bar">
          <span>30kg</span>
        </div>
      </li>
      <li>
        <span class="left-bar">父亲度数</span>
        <div class="right-bar">
          <span>左眼无近视 右眼无近视</span>
        </div>
      </li>
      <li>
        <span class="left-bar">母亲度数</span>
        <div class="right-bar">
          <span>左眼无近视 右眼无近视</span>
        </div>
      </li>
    </ul>
    <div class="border" />
    <ul class="list">
      <li>
        <p class="title">儿童学校班级信息</p>
      </li>
      <li>
        <span class="left-bar">学校地区</span>
        <div class="right-bar">
          <span>北京东城区</span>
        </div>
      </li>
      <li>
        <span class="left-bar">学校名称</span>
        <div class="right-bar">
          <span>北京市第四中学</span>
        </div>
      </li>
      <li>
        <span class="left-bar">年级</span>
        <div class="right-bar">
          <span>二年级（3班）</span>
        </div>
      </li>
    </ul>
    <div class="btn-box">新增屈光档案</div>
  </div>
</template>

<script>
import avatar from '@/assets/image/header-avatar.png'
export default {
  data() {
    return {
      avatar
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
.list li{
  border-bottom: 1px solid #f0f0f0;
  padding: .26rem .4rem;
  display: flex;
  flex-direction: row;
}
.left-bar{
  width: 5em;
  flex-shrink: 0;
  text-align: left;
  display: flex;
  // justify-content:center;
  align-items:center;

}
.right-bar{
  width: 100%;
  text-align: right;
}
.avatar-icon{
  width: 1.2rem;
  height: 1.2rem;
}
.border{
  height: .3rem;
  background: #f0f0f0;
}
.title{
  font-size: .3rem;
  text-align: left;
  font-weight: 500;
}
.btn-box{
  background: $bgBlueColor;
  height: 1rem;
  line-height: 1rem;
  color: #fff;
  font-size: .34rem;
  margin-top: .8rem;
}
</style>
