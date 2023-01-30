<!--
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-29 15:20:09
-->
<script setup>
import { ref } from "vue";
// item
const arr = ref(["input", "checkbox", "div", "img"]);
// 组件
import ItemList from "../ItemList";
import Panel from "../Panel/panel.tsx";
</script>
<template>
  <div class="ui_editor">
    <!-- item -->
    <ItemList :list="arr" />
    <!-- view -->
    <Panel />
  </div>
</template>

<style lang="less">
@import "./index.less";
</style>
