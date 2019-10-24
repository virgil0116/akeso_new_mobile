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
          title: '视力检查',
          id: 0
        },
        {
          title: '旧镜度数',
          id: 1
        },
        {
          title: '电脑验光',
          id: 2
        },
        {
          title: '小瞳验光',
          id: 3
        },
        {
          title: '散瞳验光',
          id: 4
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
          url = 'list_vision' // 视功能检查
          break
        case 1:
          url = 'list_old_mirror' // 旧镜度数
          break
        case 2:
          url = 'list_computer' // 电脑验光
          break
        case 3:
          url = 'list_hitomi' // 小瞳综合
          break
        case 4:
          url = 'list_mydriasis' // 散瞳验光
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

