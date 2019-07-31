<template>
  <div class="container">
    <ul class="list-ul">
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
      eye_examination_id: undefined,
      list: [
        {
          title: '验光数据',
          id: 0
        },
        {
          title: '视功能检查',
          id: 1
        },
        {
          title: '复查验光',
          id: 2
        },
        {
          title: '眼部检查',
          id: 3
        }
      ]
    }
  },
  created() {
    this.eye_examination_id = this.$route.query.eye_examination_id
  },
  methods: {
    handleClick(id) {
      var url = null
      switch (id) {
        case 0:
          url = 'optometry' // 视功能检查
          break
        case 1:
          url = 'visual' // 视功能检查
          break
        case 2:
          url = 'review' // 复查验光
          break
        case 3:
          url = 'eye_examination' // 眼部检查
          break
      }
      this.$router.push({ name: url, query: { eye_examination_id: this.eye_examination_id }})
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
</style>

