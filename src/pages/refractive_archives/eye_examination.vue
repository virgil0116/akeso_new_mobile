<template>
  <div class="container">
    <ul class="list-ul">
      <h3 class="title">眼部检查客观</h3>
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
        // {
        //   title: '眼部检查主观',
        //   id: 0
        // },
        // {
        //   title: '眼部检查客观',
        //   id: 1
        // },
        {
          title: '眼压',
          id: 0
        },
        {
          title: '眼部生物学参数检查',
          id: 1
        },
        {
          title: '泪液检查',
          id: 2
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
          url = 'eye_objective_Int_pressure' // 眼压
          break
        case 1:
          url = 'eye_objective_Bio_parameters' // 眼部生物学参数
          break
        case 2:
          url = 'eye_objective_tear' // 泪液检查
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

