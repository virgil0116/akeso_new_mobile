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
          title: '视力检查',
          id: '0'
        },
        {
          title: '旧镜度数',
          id: '1'
        },
        {
          title: '电脑验光',
          id: '2'
        },
        {
          title: '小瞳综合',
          id: '3'
        },
        {
          title: '散瞳验光',
          id: '4'
        },
        {
          title: '小瞳复光',
          id: '5'
        },
        {
          title: '配镜处方',
          id: '6'
        }
      ]
    }
  },
  methods: {
    handleClick(id) {
      console.log(id)
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

