<!--
 * @FilePath: \vitepress-starter\docs\.vitepress\components\Iframe.vue
 * @Author: itmanyong itmanyong@gmail.com
 * @CreateDate: Do not edit
 * @LastEditors: itmanyong itmanyong@gmail.com
 * @LastEditTime: 2022-07-10 01:47:08
 * @Description: 
-->
<template>
  <div class="iframeWrapper">
    <iframe ref="iframeRef" :src="$attrs.src" frameborder="0" @load="handlerIframLoaded"></iframe>
    <div class="loading1" v-if="state.loading"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
const iframeRef = ref();
const loadingTimer = null;
const state = reactive({
  loading: false,
});
onMounted(() => {
  NProgress.start();
  loadingTimer = setTimeout(() => (state.loading = true), 1024 * 0.5);
});
function handlerIframLoaded() {
  clearTimeout(loadingTimer)
  state.loading = false;
  NProgress.done();
}
</script>

<style lang="scss" scoped>
.iframeWrapper {
  height: calc(100vh - var(--vp-nav-height-desktop));
  width: 100%;
  position: relative;
}
iframe {
  width: 100%;
  height: 100%;
}
// 动画
.loading1 {
  z-index: 99999;
  position: absolute;
  left: calc(50% - 200px);
  top: calc(50% - 100px);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  transform: rotate(360deg);
  margin: 0;
  // animation: rotate 45s infinite linear;
  &::before {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    box-sizing: border-box;
    border-radius: 50%;
    border-top: 7px solid rgba(64, 177, 126, 0.1);
    border-left: 7px solid rgba(64, 177, 126, 0.1);
    border-bottom: 7px solid transparent;
    border-right: 7px solid transparent;
    transform: rotate(720deg);
    animation: rotate 3s infinite ease-out;
  }
  &::after {
    position: absolute;
    content: "";
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    box-sizing: border-box;
    border-radius: 50%;
    border-bottom: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid rgba(64, 177, 126, 1);
    border-left: 7px solid rgba(64, 177, 126, 1);
    transform: rotate(720deg);
    animation: rotate 3s infinite ease-in-out;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(0deg);
  }
}
</style>
