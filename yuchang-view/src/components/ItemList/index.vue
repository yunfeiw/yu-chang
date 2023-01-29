<!--
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-29 17:37:49
-->
<script setup>
import { defineProps } from "vue";

// 元素
const { list } = defineProps({
  list: Array,
});
// 拖拽
const dragStart = (e) => {
  console.log(e);
};
</script>
<template>
  <div class="item_list">
    <div
      :draggable="true"
      v-for="item in list"
      :key="item"
      @dragstart="dragStart"
    >
      {{ item }}
    </div>
  </div>
</template>
