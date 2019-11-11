<template>
  <van-search v-model="value" placeholder="搜索饿了么商品" show-action shape="round" @search="onSearch">
    <div slot="action" @click="onSearch">搜索</div>
  </van-search>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";
Vue.use(Search);
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {
      // 传到仓库里面去
      this.$store.dispatch("setText", {
        value: this.value //传个形参过去
      });
      window.console.log(this.value);
    }
  }
};
</script>

<style >
.van-search {
  background: #0085ff !important;
  position: sticky !important;
  top: 0;
  z-index: 999;
}
</style>