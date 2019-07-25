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
      list: [
        {
          title: '小瞳复光',
          id: 0
        },
        {
          title: '配镜处方',
          id: 1
        }
      ]
    }
  },
  methods: {
    handleClick(id) {
      var url = null
      switch (id) {
        case 0:
          url = 'list_reverberation' // 小瞳复光
          break
        case 1:
          url = 'list_optician' // 配镜处方
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
</style>

