<!--
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-29 17:37:49
-->
<script setup>
// 元素
import { LAYOUTS, FORMS, OTHORS } from "../../object/Metas";
// 拖拽
const dragStart = (e) => {
  e.dataTransfer.setData("drap-name", e.target.getAttribute("data-type"));
};
</script>
<template>
  <div class="drap-list">
    <Divider size="small" orientation="left">布局</Divider>
    <div class="drap-box">
      <div
        class="drap-list-item"
        :draggable="true"
        @dragstart="dragStart"
        v-for="item in LAYOUTS"
        :data-type="item.type"
        :key="item"
      >
        <Tag type="dot" color="primary">{{ item.title }}</Tag>
      </div>
    </div>

    <Divider size="small" orientation="left">表单</Divider>
    <div class="drap-box">
      <div
        class="drap-list-item"
        :draggable="true"
        @dragstart="dragStart"
        v-for="item in FORMS"
        :data-type="item.type"
        :key="item"
      >
        <Tag type="dot" color="warning">{{ item.title }}</Tag>
      </div>
    </div>

    <Divider size="small" orientation="left">其他</Divider>
    <div class="drap-box">
      <div
        class="drap-list-item"
        :draggable="true"
        @dragstart="dragStart"
        v-for="item in OTHORS"
        :data-type="item.type"
        :key="item"
      >
        <Tag type="dot" color="success">{{ item.title }}</Tag>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import "./index.less";
</style>
