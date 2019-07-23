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
        @on-change="getResult"
        @on-cancel="onCancel"
        @on-submit="onSubmit" />
      <div class="list-top">
        <group v-for="(item, index) in children_list" :key="index">
          <p class="list" @click="handleList(1)">{{ item.name }}</p>
        </group>
      </div>
    </div>
  </div>
</template>

<script>
import { Search, Group } from 'vux'
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
      children_list: [
        {
          name: '孩子1'
        },
        {
          name: '孩子2'
        },
        {
          name: '孩子3'
        }
      ]
    }
  },
  methods: {
    getResult(val) {
      console.log('on-change', val)
    },
    onSubmit() {
      console.log('ti')
      this.$refs.search.setBlur()
    },
    onFocus() {
      console.log('on focus')
    },
    onCancel() {
      console.log('on cancel')
    },
    handleList(id) {
      console.log(id)
      this.$router.push({ name: 'children', query: { data: JSON.stringify() }})
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
