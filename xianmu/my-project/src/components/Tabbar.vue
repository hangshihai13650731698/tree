<template>
  <van-tabbar v-model="active" >
    <van-tabbar-item to='/main/home' icon="wap-home">首页</van-tabbar-item>
    <van-tabbar-item to='/main/cover' icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMiI+PHBhdGggZmlsbD0iIzgxODE4MSIgZD0iTTE2LjYyIDIuNzI3YS43NS43NSAwIDAgMS0uODQ0IDEuMjQgOC40NTUgOC40NTUgMCAwIDAtNC4wOTUtMS40NCA4LjUgOC41IDAgMCAwLTkuMTUzIDcuNzkyIDguNDk5IDguNDk5IDAgMCAwIDcuNzkgOS4xNTMgOC41IDguNSAwIDAgMCA5LjE1NC03Ljc5MSA4LjQ2IDguNDYgMCAwIDAtMS40MzUtNS40NDkuNzUuNzUgMCAxIDEgMS4yNC0uODQyIDkuOTYgOS45NiAwIDAgMSAxLjY5IDYuNDExYy0uNDQyIDUuNTA1LTUuMjY0IDkuNjA5LTEwLjc2OCA5LjE2Ni01LjUwNS0uNDQyLTkuNjEtNS4yNjMtOS4xNjYtMTAuNzY4QzEuNDc1IDQuNjk0IDYuMjk2LjU5IDExLjggMS4wMzNjMS43NS4xNCAzLjM5OC43MjcgNC44MTkgMS42OTR6TTE0LjYzOCA3Yy4yNDQgMCAuNDQuMjU0LjMzMS41MDZsLTEuOSA0LjM5Yy0uMTEuMjU1LS4yNjQuNDk0LS40NzEuNzAyYTIuMjMgMi4yMyAwIDAgMS0uNzEyLjQ3NmwtNC4zOCAxLjg5NWEuMzYzLjM2MyAwIDAgMS0uNDc2LS40NzZsMS44OTUtNC4zOGEyLjIyIDIuMjIgMCAwIDEgMS4xNzctMS4xODJsNC4zOTEtMS45QS4zNjcuMzY3IDAgMCAxIDE0LjYzOCA3ek0xMi40NSA5LjU1bC0xLjc1MS43NTdhLjczNy43MzcgMCAwIDAtLjIzNy4xNTYuNzUzLjc1MyAwIDAgMC0uMTU2LjIzNmwtLjc1OCAxLjc1MiAxLjc0Mi0uNzUzYS43NjYuNzY2IDAgMCAwIC4yNDctLjE2MS43MzMuNzMzIDAgMCAwIC4xNTQtLjIzNGwuNzYtMS43NTR6Ii8+PC9zdmc+">发现</van-tabbar-item>
    <van-tabbar-item to='/main/my' icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMiI+PHBhdGggZmlsbD0iIzgxODE4MSIgZD0iTTcuMjUgOGEuNzUuNzUgMCAwIDEgMC0xLjVoNy41YS43NS43NSAwIDEgMSAwIDEuNWgtNy41em0wIDUuMDA0YS43NS43NSAwIDEgMSAwLTEuNWg0LjQ5OGEuNzUuNzUgMCAxIDEgMCAxLjVINy4yNXpNMy41IDN2MTZoOS43NWMyLjkgMCA1LjI1LTIuMzUgNS4yNS01LjI1VjUuNzQ4YS43NS43NSAwIDEgMSAxLjUgMHY4LjAwMmE2Ljc1IDYuNzUgMCAwIDEtNi43NSA2Ljc1SDIuNzVhLjc1Ljc1IDAgMCAxLS43NS0uNzVWMi4yNWEuNzUuNzUgMCAwIDEgLjc1LS43NWgxNi41YS43NS43NSAwIDEgMSAwIDEuNUgzLjV6Ii8+PC9zdmc+">订单</van-tabbar-item>
    <van-tabbar-item to='/main/shezhi' icon="manager-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: 0
    };
  },

  methods: {
    //传路由的方法
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>