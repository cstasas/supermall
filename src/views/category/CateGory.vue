<template>
  <div class="wrapper">
    <ul class="content">
      <li>1分类界面</li>
      <li>2分类界面</li>
      <li>3分类界面</li>
      <li>4分类界面</li>
      <li>5分类界面</li>
      <li>6分类界面</li>
      <li>7分类界面</li>
      <li>8分类界面</li>
      <li>9分类界面</li>
      <li>10分类界面</li>
      <li>11分类界面</li>
      <li>12分类界面</li>
      <li>13分类界面</li>
      <li>14分类界面</li>
      <li>15分类界面</li>
      <li>16分类界面</li>
      <li>17分类界面</li>
      <li>18分类界面</li>
      <li>19分类界面</li>
      <li>20分类界面</li>
      <li>21分类界面</li>
      <li>22分类界面</li>
      <li>23分类界面</li>
      <li>24分类界面</li>
      <li>25分类界面</li>
      <li>26分类界面</li>
      <li>27分类界面</li>
      <li>28分类界面</li>
      <li>29分类界面</li>
      <li>30分类界面</li>
      <li>31分类界面</li>
      <li>32分类界面</li>
      <li>33分类界面</li>
      <li>34分类界面</li>
      <li>35分类界面</li>
      <li>36分类界面</li>
      <li>37分类界面</li>
      <li>38分类界面</li>
      <li>39分类界面</li>
      <li>40分类界面</li>
      <li>41分类界面</li>
      <li>42分类界面</li>
      <li>43分类界面</li>
      <li>44分类界面</li>
      <li>45分类界面</li>
      <li>46分类界面</li>
      <li>47分类界面</li>
      <li>48分类界面</li>
      <li>49分类界面</li>
      <li>50分类界面</li>
      <li>51分类界面</li>
      <li>52分类界面</li>
      <li>53分类界面</li>
      <li>54分类界面</li>
      <li>55分类界面</li>
      <li>56分类界面</li>
      <li>57分类界面</li>
      <li>58分类界面</li>
      <li>59分类界面</li>
      <li>60分类界面</li>
      <li>61分类界面</li>
      <li>62分类界面</li>
      <li>63分类界面</li>
      <li>64分类界面</li>
      <li>65分类界面</li>
      <li>66分类界面</li>
      <li>67分类界面</li>
      <li>68分类界面</li>
      <li>69分类界面</li>
      <li>70分类界面</li>
      <li>71分类界面</li>
      <li>72分类界面</li>
      <li>73分类界面</li>
      <li>74分类界面</li>
      <li>75分类界面</li>
      <li>76分类界面</li>
      <li>77分类界面</li>
      <li>78分类界面</li>
      <li>79分类界面</li>
      <li>80分类界面</li>
      <li>81分类界面</li>
      <li>82分类界面</li>
      <li>83分类界面</li>
      <li>84分类界面</li>
      <li>85分类界面</li>
      <li>86分类界面</li>
      <li>87分类界面</li>
      <li>88分类界面</li>
      <li>89分类界面</li>
      <li>90分类界面</li>
      <li>91分类界面</li>
      <li>92分类界面</li>
      <li>93分类界面</li>
      <li>94分类界面</li>
      <li>95分类界面</li>
      <li>96分类界面</li>
      <li>97分类界面</li>
      <li>98分类界面</li>
      <li>99分类界面</li>
      <li>100分类界面</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "CateGory",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(document.querySelector('.wrapper'), {
        probeType: 3,
        pullUpLoad: true
      })
      this.scroll.on('scroll', position => {
        // console.log(position);
      })
      this.scroll.on('pullingUp', () => {
        // console.log('已经到底啦');
        this.scroll.finishPullUp()
      })
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 300px;
    background-color: #f2f2f2;
    overflow: hidden;
  }
</style>
