<template>
  <div class="category">
    <nav-bar class="nav_bar">
      <div slot="nav_bar_center">商品分类</div>
    </nav-bar>
      <div class="category_container">
        <category-goods-title class="category_category_container_left"
                              :category-title="categoryListTitle"
                              @tabClick="tabClick"/>
        <scroll class="content" ref="scroll">
          <category-goods-item class="category_category_container_right"
                               :category-data="categoryData"
                               @imageLoad="imageLoad"/>
        </scroll>
      </div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";

  import CategoryGoodsTitle from "./childComps/CategoryGoodsTitle";
  import CategoryGoodsItem from "./childComps/CategoryGoodsItem";

  import { goodsCategoryList, getSubcategory } from "network/category";

  export default {
    name: "CateGory",
    components: {
      NavBar,
      Scroll,
      CategoryGoodsTitle,
      CategoryGoodsItem
    },
    data() {
      return {
        categoryListTitle:[],
        categoryData: [],
        currentIndex: 0
      }
    },
    created() {
      this._goodsCategoryList()
    },
    methods: {
      // 获取商品分类文字数据
      _goodsCategoryList() {
        goodsCategoryList().then(res => {
          this.categoryListTitle = res.data.category.list
          // 请求第一个分类的数据
          this._getSubcategories(this.currentIndex)
        })
      },
      // 获取商品分类数据
      _getSubcategories(index) {
        this.currentIndex = index
        const mailKey = this.categoryListTitle[index].maitKey
        getSubcategory(mailKey).then(res => {
          this.categoryData = res.data.list
        })
      },
      tabClick(index) {
        this.$refs.scroll.scroll.scrollTo(0, 0, 0)
        this._getSubcategories(index)
      },
      imageLoad() {
        this.$refs.scroll.imageReload()
      }
    }
  }
</script>

<style scoped>
  .category {
    height: 100vh;
  }
  .nav_bar {
    background-color: var(--color-tint);
    color: white;
    font-weight: 700;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .category_container {
    display: flex;
    height: 100vh;
  }
  .content {
    flex: 6;
    height: calc(100% - 45px - 49px);
  }
  .category_category_container_left {
    flex: 2;
  }
  .category_category_container_right {
  }
</style>
