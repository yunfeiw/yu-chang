<!--
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-21 20:05:15
-->
<script setup>
import { onMounted } from "vue";
import { Head } from "../../components/layout";
import UiEditor from "../../components/UiEditor";
onMounted(() => {
  console.log("entry Home page");
});
</script>

<template>
  <div class="home_container">
    <!-- head -->
    <Head title="ui-editor" />
    <!-- ui -->
    <UiEditor />
  </div>
</template>
<style lang="less">
@import "./index.less";
</style>
