<template>
  <div id="home">
      <nav-bar class="home_bgc">
        <div slot="nav_bar_center">购物街</div>
      </nav-bar>
      <tab-control class="control"
                   :tabs="['流行', '新款', '精选']"
                   @tabClick="tabClick"
                   v-show="isTabControl"
                   ref="control1"/>
      <scroll class="content" ref="scroll"
              :probe-type="3"
              @scrollY="scrollY"
              :pull-up-load="true"
              @pullingUp="pullingUp">
        <home-swipe :banners="banners" @swipeImgLoad="swipeImgLoad"/>
        <home-recommend :recommends="recommends"/>
        <feature-view/>
        <tab-control :tabs="['流行', '新款', '精选']" @tabClick="tabClick" ref="control2"/>
        <goods-list :goods="goods"/>
      </scroll>
      <back-top v-show="isShow" @click.native="backClick"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goodsList/GoodsList";
  import Scroll from "components/common/scroll/Scroll";

  import HomeSwipe from "./childComs/HomeSwipe";
  import HomeRecommend from "./childComs/HomeRecommend";
  import FeatureView from "./childComs/FeatureView";

  import { getHomeMultidata, getHomeGoodsList } from 'network/home.js'
  import { imgListenerMixin, backTop } from "common/mixin";

  export default {
    name: "Home",
    components: {
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      HomeSwipe,
      HomeRecommend,
      FeatureView
    },
    mixins: [imgListenerMixin, backTop],
    data() {
      return {
        // 轮播图数据
        banners:[],
        // 导航栏数据
        recommends: [],
        // 商品列表数据
        goodsList: {
          'pop': { page: 0, list: [] },
          'new': { page: 0, list: [] },
          'sell': { page: 0, list: [] }
        },
        goodsType: 'pop',
        isTabControl: false,
        tabOffsetTop: 0,
        scrollYy: 0
      }
    },
    activated() {
      this.$refs.scroll.scroll.scrollTo(0, this.scrollYy, 10)
      this.$refs.scroll.imageReload()
    },
    deactivated() {
      this.scrollYy = this.$refs.scroll.getScrollY()
    },
    created() {
      // 获取首页数据
      this.getHomeMultidata()
      // 获取商品列表数据
      this.getHomeGoodsList('pop')
      this.getHomeGoodsList('new')
      this.getHomeGoodsList('sell')
    },
    methods: {
      // 监听触发事件
      tabClick(index) {
        switch (index) {
          case 0:
            this.goodsType = 'pop'
            break
          case 1:
            this.goodsType = 'new'
            break
          case 2:
            this.goodsType = 'sell'
            break
        }
        this.$refs.control1.toggleTab = index
        this.$refs.control2.toggleTab = index
      },
      scrollY(position) {
        (-position.y) > 1000 ? this.isShow = true : this.isShow = false
        this.isTabControl = (-position.y) > this.tabOffsetTop
      },
      pullingUp() {
        this.getHomeGoodsList(this.goodsType)
        // 重新计算页面可滚动的高度
        // this.$refs.scroll.scroll.refresh()
      },
      swipeImgLoad() {
        this.tabOffsetTop = this.$refs.control2.$el.offsetTop
      },

      // 发送商品数据请求
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoodsList(type) {
        const page = this.goodsList[type].page + 1
        getHomeGoodsList(type, page).then(res => {
          this.goodsList[type].list.push(...res.data.list)
          this.goodsList[type].page += 1

          this.$refs.scroll.pullDownToRefresh()
        })
      }
    },
    computed: {
      goods() {
        return this.goodsList[this.goodsType].list
      }
    }
  }
</script>

<style scoped>
  #home {
    margin-top: 45px;
    margin-bottom: 50px;
    height: 100vh;
  }

  .home_bgc {
    background-color: var(--color-tint);
    color: var(--color-background);
    font-weight: 700;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .content {
    height: calc(100% - 49px);
    overflow: hidden;
  }

  .control {
    position: relative;
    z-index: 9;
  }
</style>
