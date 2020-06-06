<template>
    <div>
      <tab-bar>
        <tab-bar-item path="/home">
          <div slot="item_icon"><img src="~assets/image/tabbar/shouye.svg" alt=""></div>
          <div slot="item_icon_active"><img src="~assets/image/tabbar/shouye_01.svg" alt=""></div>
          <div slot="item_text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category">
          <div slot="item_icon"><img src="~assets/image/tabbar/leimupinleifenleileibie.svg" alt=""></div>
          <div slot="item_icon_active"><img src="~assets/image/tabbar/leimupinleifenleileibie_01.svg" alt=""></div>
          <div slot="item_text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart">
          <div slot="item_icon"><img src="~assets/image/tabbar/gouwuche.svg" alt=""></div>
          <div slot="item_icon_active"><img src="~assets/image/tabbar/gouwuche_01.svg" alt=""></div>
          <div slot="item_text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="profile">
          <div slot="item_icon"><img src="~assets/image/tabbar/wode.svg" alt=""></div>
          <div slot="item_icon_active"><img src="~assets/image/tabbar/wode_01.svg" alt=""></div>
          <div slot="item_text">我的</div>
        </tab-bar-item>
      </tab-bar>
    </div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
