<template>
  <div class="container">
    <div class="search-box">
      <search
        ref="search"
        v-model="value"
        :results="results"
        position="static"
        top="0px"
        cancel-text=""
        placeholder="请输入手机号"
        @on-change="getResult"
        @on-cancel="onCancel"
        @on-submit="onSubmit" />
      <div class="list-top">
        <group v-for="(item, index) in items" :key="index">
          <p class="list" @click="handleList(item)">{{ item.name }}</p>
        </group>
      </div>
    </div>
  </div>
</template>

<script>
import { Search, Group } from 'vux'
import { searchChild } from '@/api/mobile/children'
export default {
  name: 'SearchChild',
  components: {
    Search,
    Group
  },
  data() {
    return {
      results: [],
      value: '',
      items: []
    }
  },
  methods: {
    getResult(val) {
      console.log('on-change', val)
    },
    onSubmit() {
      console.log('ti')
      this.$refs.search.setBlur()
      searchChild({ phone: this.value }).then(res => {
        this.items = res.data.items
      })
    },
    onFocus() {
      console.log('on focus')
    },
    onCancel() {
      console.log('on cancel')
    },
    handleList(val) {
      console.log(val)
      this.$router.push({ name: 'children', query: { data: JSON.stringify(val) }})
    }
  }
}
</script>

<style scoped>
.container{
  height: 100%;
}
.search-box >>> .weui-search-bar__label{
  top: 6px;
}
.search-box >>> .weui-cells:before,.search-box >>> .weui-cells:before{
  border-top: none;
}
.search-box .vux-no-group-title,.search-box >>> .weui-cells, .search-box >>> .weui-cells{
  margin-top: 0;
}
.list{
  height: 1rem;
  line-height: 1rem;
}
.list-top{
  margin-top: 44px;
}
</style>
