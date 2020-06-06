<template>
  <div class="tab_bar_item" @click="itemClick">
    <div v-if="!isActive"><slot name="item_icon"></slot></div>
    <div v-else><slot name="item_icon_active"></slot></div>
    <div :style="activeStyle"><slot name="item_text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: false
      }
    },
    methods: {
      itemClick() {
        // console.log('click');
        this.$router.replace(this.path).catch(err => err)
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    }
  }
</script>

<style scoped>
  .tab_bar_item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 14px;
  }
  .tab_bar_item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>
