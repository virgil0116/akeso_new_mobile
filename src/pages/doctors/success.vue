<template>
  <div class="container">
    <div class="success">
      <h2>注册成功</h2>
      <div class="content">
        <p>请联系审核员审核通过</p>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .container >>> .weui-msg__title
    font-size .48rem
  .container >>>.weui-msg__desc
    font-size .38rem
  .header
    padding .8rem .4rem
    background-color rgb(21, 30, 65)
    text-align left
    p
      color #fff
      font-size .3rem
    a
      padding .26rem .3rem
      font-size .3rem
      border-radius .1rem
      color #fff
      background-color #409eff
      border-color #409eff
      text-align center
      margin-top .4rem
      display block
  .border
    &:before
      border-color #dcdfe6
    &:after
      border-color #dcdfe6
  .success
    margin-top 200px
    font-weight 300
    font-size 24px
  .content
    margin-top 30px
</style>
