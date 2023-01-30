<!--
 * @Descripttion: 头部导航
 * @Author: yunfei
 * @Date: 2023-01-29 10:03:47
-->
<script setup>
const { title } = defineProps({
  title: String,
});
</script>

<template>
  <div class="yc_head">
    <!-- logo -->
    <div class="logo" align="center">
      <i class="iconfont icon-tanx" />{{ title }}
    </div>
    <!-- nav -->
    <div class="yc_nav">
      <router-link to="/" title="UI平台">
        <i class="iconfont icon-shuiguo" />
      </router-link>
      <router-link to="/codeless" title="轻代码">
        <i class="iconfont icon-didaimaguanli" />
      </router-link>
      <router-link to="/preview" title="预览">
        <i class="iconfont icon-yulan" />
      </router-link>
      <router-link to="/about" title="关于">
        <i class="iconfont icon-guanyu" />
      </router-link>
    </div>
  </div>
</template>

<style lang="less">
.yc_head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 35px;
  line-height: 35px;
  background: #c1e3fe;
  box-shadow: 2px 2px 1px #f0f0f0;
  // logo
  .logo {
    width: 150px;
    height: 100%;
    font-size: 18px;
    font-weight: 900;
    .icon-tanx {
      float: left;
      padding-left: 10px;
      color: #4caf50;
      font-size: 22px;
    }
  }
  // nav
  .yc_nav {
    display: flex;
    flex-direction: row;
    height: 100%;
    > a {
      color: #290505;
      display: block;
      padding: 0 12px;
      transition: all 0.5s;
      i {
        transition: all 0.5s;
      }
    }
    > a:hover {
      background-color: #359cee;
      i {
        color: #fff;
        font-size: 20px;
      }
    }
  }
}
</style>
