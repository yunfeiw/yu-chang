<!--
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-29 17:37:49
-->
<script setup>
// 元素
import { LAYOUTS, FORMS, OTHORS } from "../../object/Metas";
// 拖拽
const dragStart = (e, item) => {
  console.log(e);
  console.log(item);
};
</script>
<template>
  <div class="drap-list">

    <Divider size='small' orientation="left">布局</Divider>
    <div
      class="drap-list-item"
      :draggable="true"
      @dragstart="dragStart"
      v-for="item in LAYOUTS"
      :key="item"
    >
      <Tag type="dot" color="primary">{{ item.title }}</Tag>
    </div>
    
    <Divider size='small' orientation="left">表单</Divider>
    <div
      class="drap-list-item"
      :draggable="true"
      @dragstart="dragStart"
      v-for="item in FORMS"
      :key="item"
    >
      <Tag type="dot" color="warning">{{ item.title }}</Tag>
    </div>

    <Divider size='small' orientation="left">其他</Divider>
    <div
      class="drap-list-item"
      :draggable="true"
      @dragstart="dragStart"
      v-for="item in OTHORS"
      :key="item"
    >
      <Tag type="dot" color="success">{{ item.title }}</Tag>
    </div>
  </div>
</template>

<style lang="less">
@import "./index.less";
</style>
