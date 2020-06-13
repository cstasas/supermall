<template>
  <div class="profile">
    <nav-bar class="nav_bar">
      <div slot="nav_bar_center">我的档案</div>
    </nav-bar>
    <div class="profile_login">
      <div class="profile_login_top">
        <div class="profile_login_top_avatar">
          <img src="~assets/image/avatar.png" alt="">
        </div>
        <div class="profile_login_top_text">
          <div class="profile_login_t">登陆/注册</div>
          <div class="profile_login_b iconfont icon-shouji">暂无绑定手机号</div>
        </div>
        <span>＞</span>
      </div>
      <div class="profile_login_bottom">
        <div class="profile_login_bottom_over">
          <div class="profile_login_num">0.00元</div>
          <div class="profile_login_text">我的余额</div>
        </div>
        <div class="profile_login_bottom_preferential">
          <div class="profile_login_num">0个</div>
          <div class="profile_login_text">我的优惠</div>
        </div>
        <div class="profile_login_bottom_integral">
          <div class="profile_login_num">0分</div>
          <div class="profile_login_text">我的积分</div>
        </div>
      </div>
    </div>
    <div class="profile_me">
      <div class="profile_me_news">
        <i class="iconfont icon-youxiang"></i>
        <span>我的消息</span>
      </div>
      <div class="profile_me_mall">
        <i class="iconfont icon-jifen"></i>
        <span>积分商城</span>
      </div>
      <div class="profile_me_member">
        <i class="iconfont icon-huangguan"></i>
        <span>会员卡</span>
      </div>
    </div>
    <div class="profile_shopping">
      <div class="profile_me_mall">
        <i class="iconfont icon-gouwuche"></i>
        <span>我的购物车</span>
      </div>
      <div class="profile_me_member">
        <i class="iconfont icon-gouwu"></i>
        <span>下载购物APP</span>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "ProFile",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .profile {
    background-color: #fff;
  }
  .nav_bar {
    background-color: var(--color-tint);
    color: white;
    font-weight: 700;
  }
  .profile_login {}
  .profile_login_top {
    height: 100px;
    background-color: var(--color-tint);
    display: flex;
  }
  .profile_login_top_avatar {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .profile_login_top_avatar img {
    width: 60px;
    height: 60px;
    border: 5px solid #f2f2f2;
    border-radius: 50%;
    background-color: #f2f2f2;
  }
  .profile_login_top_text {
    flex: 5;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
  }
  .profile_login_t {
    margin-left: 5px;
  }
  .profile_login_b {
    font-size: 14px;
    margin-top: 5px;
  }
  .profile_login_top span {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 30px;
  }
  .profile_login_bottom {
    height: 100px;
    border-bottom: 10px solid #f2f2f2;
    display: flex;
  }
  .profile_login_bottom_over, .profile_login_bottom_preferential, .profile_login_bottom_integral {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .profile_login_bottom_over, .profile_login_bottom_preferential {
    border-right: 1px solid #f2f2f2;
  }
  .profile_login_num {
    font-size: 20px;
    font-weight: 600;
    color: #ff5777;
  }
  .profile_login_text {
    font-size: 14px;
    margin-top: 5px;
  }
  .profile_me {
    border-bottom: 10px solid #f2f2f2;
  }
  .profile_me_news, .profile_me_mall, .profile_me_member {
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    padding-left: 20px;
  }
  .profile_me_news, .profile_me_mall {
    border-bottom: 1px solid #f2f2f2;
  }
  .icon-youxiang, .icon-jifen, .icon-huangguan, .icon-gouwuche, .icon-gouwu {
    color: var(--color-tint);
  }
  .profile_me span {
    margin-left: 5px;
  }
</style>
