<template>
  <div class="container">
    <div class="header">
      <div class="header-img">
        <img :src="doctor.avatarUrl?doctor.avatarUrl:avatar" class="img" alt="">
      </div>
    </div>
    <div class="info">
      <div class="name">{{ doctor.name }}</div>
      <div class="title">
        <!--<span class="c-blue">{{ doctor.workingYears }}</span>年-->
        <!--<span>视光经验</span>-->
      </div>
      <div v-if="doctor.serviceNames !== undefined && doctor.serviceNames.length > 0 ? 1 : 0" class="details details-span">
        <span>业务擅长：</span><span v-for="(item, i) in doctor.serviceNames" :key="i">{{ item }}；</span>
      </div>
      <div class="details">{{ doctor.description }}</div>
    </div>
    <button class="button" @click="handleClickBind">{{ btnText }}</button>
  </div>
</template>

<script>
import { fetchItem } from '@/api/mobile/doctors'
import avatar from '@/assets/image/header-avatar.png'
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
      },
      avatar: avatar,
      btnText: ''
    }
  },
  created() {
    this.getData()
  },
  methods: {
    handleClickBind() {
      this.$router.push({ path: '/sign_in', query: { doctor_id: this.id }})
    },
    getData() {
      fetchItem({ id: this.id }).then(response => {
        this.doctor = response.data
        this.$store.state.doctor = response.data.baseType
        this.btnText = response.data.baseType === 'doctor' ? '绑定此视光师' : '绑定此机构'
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
    background #fff
    border-radius 50%
    overflow hidden
  .header-img .img
    width 100%
    height 100%
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
  .details-span
    padding-bottom .3rem
  .button
    width 60%
    height .8rem
    line-height  .8rem
    background $cblue
    color #fff
    text-align center
    border-radius .2rem
</style>
