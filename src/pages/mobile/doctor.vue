<template>
  <div class="container">
    <div class="header">
      <div class="header-img">
        <img src="" alt="">
      </div>
    </div>
    <div class="info">
      <div class="name">{{ doctor.name }}</div>
      <div class="title">
        <span class="c-blue">{{ doctor.workingYears }}</span>年
        <span>视光经验</span>
      </div>
      <div class="details">{{ doctor.description }}</div>
    </div>
    <router-link to="/sign_in">
      <button class="button">绑定此视光师</button>
    </router-link>
  </div>
</template>

<script>
import { fetchItem } from '@/api/mobile/doctors'
export default {
  name: 'Doctor',
  data() {
    return {
      id: this.$route.query.id,
      doctor: {
        id: undefined,
        workingYears: undefined,
        name: undefined,
        description: undefined
      }
    }
  },
  created() {
    this.getData()
  },
  methods: {
    handleClickBind() {
      this.$router.push({ path: '/mobile/sign_in', query: { doctor_id: this.id }})
    },
    getData() {
      fetchItem({ id: this.id }).then(response => {
        this.doctor = response.data
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    height 40vh
    background $cblue
    display flex
    flex-direction center
    justify-content center
    align-items center
  .header-img
    width 2rem
    height 2rem
    background #000
    border-radius 50%
    overflow hidden
  .info
    padding .4rem;
    color #000
  .name
    font-size .46rem
  .title
    font-size .38rem
    margin .36rem 0
  .c-blue
    color $cblue
  .details
    font-size .3rem
    line-height .46rem
    text-align left
  .button
    width 60%
    height .8rem
    line-height  .8rem
    background $cblue
    color #fff
    text-align center
    border-radius .2rem
</style>
