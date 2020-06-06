<template>
  <div class="tab_control">
    <div class="tab_control_item" :class="{'active': index === toggleTab}" v-for="(item,index) in tabs" @click="handleTabs(index)">
      <span :class="{'tab_control_item_text': index === toggleTab}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      tabs: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        toggleTab: 0
      }
    },
    methods: {
      handleTabs(index) {
        this.toggleTab = index
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab_control {
    display: flex;
    background-color: #fff;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
  }

  .tab_control_item {
    flex: 1;
  }

  .tab_control_item_text {
    padding-bottom: 5px;
    border-bottom: 2px solid var(--color-high-text);
  }

  .active {
    color: var(--color-high-text);
  }
</style>
