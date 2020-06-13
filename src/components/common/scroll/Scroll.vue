<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      // 创建BScroll实例对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      // 监听页面滚动坐标
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', position => {
          this.$emit('scrollY', position)
        })
      }
      // 监听页面上拉加载
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
      backToTheHomepage(x, y, time=300) {
        this.scroll && this.scroll.scrollTo(0, 0, time)
      },
      pullDownToRefresh() {
        this.scroll && this.scroll.finishPullUp()
      },
      imageReload() {
        this.scroll && this.scroll.refresh()
      },
      getScrollY() {
        return this.scroll.y ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>

</style>
