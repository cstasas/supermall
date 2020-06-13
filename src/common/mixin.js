import { debounce } from './utils.js'
import BackTop from "components/content/backTop/BackTop";

export const imgListenerMixin = {
  data() {
    return {
      itemImgListen: null,
      refresh: null
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.imageReload, 50)
    this.itemImgListen = () => {
      this.refresh()
    }
    this.$bus.$on('imageLoad', this.itemImgListen)
  },
  deactivated() {
    this.$bus.$off('imageLoad', this.itemImgListen)
  }
}

export const backTop = {
  components: {
    BackTop
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.backToTheHomepage()
    }
  }
}
