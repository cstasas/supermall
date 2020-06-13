<template>
  <div class="cart">
    <nav-bar class="nav_bar">
      <div slot="nav_bar_center">购物车({{cartLength}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list :cart-list="cartList"/>
    </scroll>
    <cart-bottom-bar class="cart_bottom_bar"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";
  import CartBottomBar from "./childComsps/CartBottomBar";

  import CartList from "./childComsps/CartList";

  import { mapGetters } from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar,
      Scroll,
      CartBottomBar,
      CartList
    },
    computed: {
      ...mapGetters(['cartLength', 'cartList'])
    },
    activated() {
      this.$refs.scroll.imageReload()
    }
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }
  .nav_bar {
    background-color: var(--color-tint);
    color: white;
    font-size: 18px;
    font-weight: 600;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .content {
    height: calc(100vh - 45px - 40px - 49px);
  }
  .cart_bottom_bar {
    position: fixed;
    margin-bottom: 49px;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
