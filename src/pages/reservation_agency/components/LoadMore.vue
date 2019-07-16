<template>
  <div class="load-more-wrapper" @touchstart="touchStart($event)" @touchend="touchEnd($event)">
    <div class="inner">
      <slot/>
      <div v-show="enableLoadMore" class="load-more">{{ loadMoreText }}</div>
      <div v-show="!enableLoadMore" class="load-end">已经到底了!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadMore',
  props: {
    enableLoadMore: {
      type: Boolean,
      default: true
    },
    onLoadMore: {
      type: Function,
      default: undefined,
      require: false
    }
  },
  data() {
    return {
      loadMoreText: '上拉加载更多',
      startX: 0,
      startY: 0,
      isLoading: false
    }
  },
  methods: {
    touchStart(e) {
      this.startY = e.targetTouches[0].pageY
      this.startX = e.targetTouches[0].pageX
    },
    scrollToEnd(e) {
      const scrollHeight = this.$el.scrollHeight
      const clientHeight = this.$el.clientHeight
      const scrollTop = this.$el.scrollTop

      if (scrollTop + clientHeight >= scrollHeight || this.enableLoadMore) {
        this.doLoadMore()
      }
    },
    touchEnd(e) {
      if (this.isLoading) {
        return
      }

      const endX = e.changedTouches[0].pageX
      const endY = e.changedTouches[0].pageY
      const dy = this.startY - endY
      const dx = endX - this.startX
      if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
        return
      }
      if (endY < this.startY) {
        this.scrollToEnd(e)
      }
    },
    doLoadMore() {
      this.isLoading = true
      this.loadMoreText = '加载中...'
      this.onLoadMore(this.loadDone)
    },
    loadDone() {
      this.isLoading = false
      this.loadMoreText = '上拉加载更多'
    }
  }
}
</script>

<style scoped>
.load-more-wrapper {
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  transition-duration: 300ms;
}
.load-more-wrapper .load-more, .load-end {
  color: #aea699;
  font-size: .26rem;
  margin: .3rem 0;
  text-align: center;
}
</style>
