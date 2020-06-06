<template>
  <div class="tab_bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
      name: "TabBar"
  }
</script>

<style scoped>
  .tab_bar {
    display: flex;
    height: 49px;
    background-color: #f2f2f2;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -2px 1px rgba(0, 0, 0, 0.1);
  }
</style>
