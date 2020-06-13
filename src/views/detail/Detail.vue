<template>
   <div id="detail">
     <detail-nav-bar ref="nav" class="detail_navbar" @navBarClick="navBarClick"/>
     <Scroll class="content" ref="scroll"
             :probe-type="3"
             @scrollY="detailScrollY">
       <detail-swipe :top-images="topImages"/>
       <detail-description :goods="goodsData"/>
       <detail-shop :goods-shop="goodsShop"/>
       <detail-goods-info :goods-info="detailInfo" @goodsImgClick="goodsImgClick"/>
       <detail-goods-params ref="params" :goods-params="goodsParams"/>
       <detail-goods-rate ref="comment" :goods-rate="goodsRate"/>
       <goods-list ref="recommend" :goods="goodsRecommend"/>
     </Scroll>
     <detail-bottom-bar @cartClick="cartClick"/>
     <back-top v-show="isShow" @click.native="backClick"/>
   </div>
</template>

<script>
  import DetailNavBar from "./childComs/DetailNavBar";
  import DetailSwipe from "./childComs/DetailSwipe";
  import DetailDescription from "./childComs/DetailDescription";
  import DetailShop from "./childComs/DetailShop";
  import DetailGoodsInfo from "./childComs/DetailGoodsInfo";
  import DetailGoodsParams from "./childComs/DetailGoodsParams";
  import DetailGoodsRate from "./childComs/DetailGoodsRate";
  import DetailBottomBar from "./childComs/DetailBottomBar";

  import Scroll from "components/common/scroll/Scroll";
  import GoodsList from "components/content/goodsList/GoodsList";

  import { detailData, Goods, Shops, Params, goodsRecommend } from 'network/detail'
  import { imgListenerMixin, backTop } from "common/mixin";
  import { Toast } from 'mint-ui';

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwipe,
      DetailDescription,
      DetailShop,
      DetailGoodsInfo,
      DetailGoodsParams,
      DetailGoodsRate,
      DetailBottomBar,
      Scroll,
      GoodsList
    },
    mixins: [imgListenerMixin, backTop],
    data() {
      return {
        iid: null,
        topImages: [],
        goodsData: {},
        goodsShop: {},
        detailInfo: {},
        goodsParams: {},
        goodsRate: [],
        goodsRecommend: [],
        detailOffsetY: [],
        currentIndex: 0
      }
    },
    created() {
      this.iid = this.$route.params.id
      detailData(this.iid).then(res => {
        // 轮播图数据
        this.topImages = res.result.itemInfo.topImages
        // 商品描述
        this.goodsData = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo)
        // 店铺描述
        this.goodsShop = new Shops(res.result.shopInfo)
        // 商品详细描述信息
        this.detailInfo = res.result.detailInfo
        // 商品参数列表
        this.goodsParams = new Params(res.result.itemParams.info, res.result.itemParams.rule)
        // 商品评价
        this.goodsRate = res.result.rate.list
      })
      // 商品推荐数据
      goodsRecommend().then(res => {
        this.goodsRecommend = res.data.list
      })
    },
    methods: {
      goodsImgClick() {
        this.refresh()
        this.getOffsetY()
      },
      detailScrollY(position) {
        const positionY = -position.y
        positionY > 1000 ? this.isShow = true : this.isShow = false
        // [0, 24076, 25069, 25415]
        // 当 positionY >= 0 && positionY < 24076 那么index = 0
        // 当 positionY >= 24076 && positionY < 25069 那么index = 1
        // 当 positionY >= 25069 && positionY < 25415 那么index = 2
        // 当 positionY >= 25415 那么index = 3
        let length = this.detailOffsetY.length
        // 优化判断
        for (let i = 0; i < length - 1; i++) {
          if (this.currentIndex !== i && (positionY >= this.detailOffsetY[i] && positionY < this.detailOffsetY[i + 1])) {
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
        // for (let i = 0; i < length; i++) {
        //   if (this.currentIndex !== i && (i < length - 1 && positionY >= this.detailOffsetY[i] && positionY < this.detailOffsetY[i + 1]) || (i === length - 1 && positionY >= this.detailOffsetY[i])) {
        //     this.currentIndex = i
        //     this.$refs.nav.currentIndex = this.currentIndex
        //   }
        // }
      },
      navBarClick(index) {
        this.$refs.scroll.scroll.scrollTo(0, -this.detailOffsetY[index], 500)
      },
      getOffsetY() {
        this.detailOffsetY = []
        this.detailOffsetY.push(0)
        this.detailOffsetY.push(this.$refs.params.$el.offsetTop)
        this.detailOffsetY.push(this.$refs.comment.$el.offsetTop)
        this.detailOffsetY.push(this.$refs.recommend.$el.offsetTop)
        this.detailOffsetY.push(Number.MAX_VALUE)
      },
      cartClick() {
        // 获取将要添加的商品数据
        const commodity = {}
        commodity.image = this.topImages[0]
        commodity.iid = this.iid
        commodity.title = this.goodsData.title
        commodity.lowNowPrice = this.goodsData.lowNowPrice
        commodity.desc = this.detailInfo.desc
        // 讲商品数据添加到购物车中
        this.$store.dispatch('addCommodity', commodity).then(res => {
          Toast({
            message: res,
            iconClass: 'icon icon-success'
          });
        })
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
    padding-bottom: 49px;
  }
  .content {
    height: calc(100% - 45px);
  }
  .detail_navbar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>
