<template>
  <div class="category">
    <nav-bar class="nav_bar">
      <div slot="nav_bar_center">商品分类</div>
    </nav-bar>
    <scroll class="content">
      <div class="category_container">
        <category-goods-title class="category_category_container_left"
                              :category-title="categoryListTitle"/>
        <category-goods-item class="category_category_container_right"/>
      </div>
    </scroll>
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
        categoryListTitle:[]
      }
    },
    created() {
      goodsCategoryList().then(res => {
        this.categoryListTitle = res.data.category.list
      })
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
  .content {
    height: calc(100% - 45px - 49px);
  }
  .category_container {
    display: flex;
  }
  .category_category_container_left {
    flex: 2;
  }
  .category_category_container_right {
    flex: 6;
  }
</style>
