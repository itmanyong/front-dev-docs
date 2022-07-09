<!--
 * @FilePath: \vitepress-starter\docs\.vitepress\components\Global.vue
 * @Author: itmanyong itmanyong@gmail.com
 * @CreateDate: Do not edit
 * @LastEditors: itmanyong itmanyong@gmail.com
 * @LastEditTime: 2022-07-10 00:50:31
 * @Description: 
-->
<template></template>

<script setup></script>

<style lang="scss">
:root {
  // custom
  --custom-sider-width: 256px;
  --dark-shadow-color: #0000001a;
  // PC
  --vp-nav-height-desktop: 45px; //nav高度
  // MOBILE
}
// 0 4px 8px #0000001a
// nav导航栏
.VPNav {
  box-shadow: 0 4px 8px var(--dark-shadow-color);
  & > .VPNavBar {
    padding-left: 0;
    padding-right: 50px;
    & > .container {
      margin: 0;
      max-width: 100%;
      & > .VPNavBarTitle {
        width: var(--custom-sider-width);
        margin-right: 0;
        border: none;
        & > .title {
          width: 100%;
          justify-content: center;
        }
      }
    }
  }
}
// sider侧边栏
.VPSidebar {
  width: var(--custom-sider-width) !important;
  padding-bottom: 0 !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  box-shadow: 4px 0 8px var(--dark-shadow-color) !important;
}
// content内容
#VPContent {
  height: calc(100% - var(--vp-nav-height-desktop)) !important;
  padding-left: var(--custom-sider-width);
  padding-right: 0;
  overflow: hidden;
  position: relative;
  & > .VPDoc {
    position: absolute;
    padding: 0;
    width: 100%;
    height: 100% !important;
    & > .container {
      width: 100%;
      height: 100%;
      & > .aside {
        display: none;
      }
      & > .content {
        padding: 0;
        & > .content-container {
          width: 100%;
          height: 100%;
          margin: 0;
          max-width: 100%;
          display: flex;
          flex-direction: column;
          & > .main {
            flex-grow: 1;
          }
        }
      }
    }
  }
}
.dark {
}
</style>
