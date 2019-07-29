<template>
  <div class="container">
    <ul class="list-ul">
      <!--<h3 class="title">视力检查</h3>-->
      <li v-for="(item, index) in list" :key="index" @click="handleClick(item.id)">
        <span>{{ item.title }}</span>
        <span class="icongengduo iconfont"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: '主导、眼位(前五项)',
          id: 0
        },
        {
          title: '远距离、集合储备力、调节反应',
          id: 1
        },
        {
          title: '近距离',
          id: 2
        }
      ]
    }
  },
  methods: {
    handleClick(id) {
      var url = null
      switch (id) {
        case 0:
          url = 'visual_five_list' // 眼压
          break
        case 1:
          url = 'visual_remote' // 远距离
          break
        case 2:
          url = 'visual_little_remote' // 泪液检查
          break
      }
      this.$router.push({ name: url, query: { data: JSON.stringify() }})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.list-ul{
  border-top: .4rem solid $bColor;
}
.list-ul li{
  padding: 0 .4rem;
  height: 1rem;
  line-height: 1rem;
  font-size: .36rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  border-bottom: 1px solid $bColor;
}
.title{
  font-size: .36rem;
  color: $bgBlueColor;
  padding-left: .1rem;
  border-left: 4px solid $bgBlueColor;
  text-align: left;
  margin-top: .14rem;
  margin-bottom: .2rem;
  margin-left: .2rem;
}
</style>

