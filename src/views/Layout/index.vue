<template>
  <div>
    <van-nav-bar
  :title="$route.meta.title"
/>
    <div style="padding-bottom:48px">
      <router-view></router-view>
    </div>

      <van-tabbar route>
        <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/layout/search">搜索</van-tabbar-item>

      </van-tabbar>

  </div>
</template>

<script>
export default {
  name: "music-index",
};
</script>

<style>
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>
