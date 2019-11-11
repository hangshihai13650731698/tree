<template>
  <div class="dd">
    <div class="dd1">
      <van-icon name="location-o" color="rgb(74, 165, 240)" />
      <span>我的地址</span>
      <span class="dd2">></span>
    </div>

    <div class="dd1">
      <van-icon name="send-gift-o" color="rgb(148, 217, 74)" />
      <span>金币商城</span>
      <span class="dd2">></span>
    </div>
    <div class="dd3">
      <van-icon name="point-gift-o" color="rgb(252, 123, 83)" />
      <span>分享拿20元现金</span>
      <span class="dd2">></span>
    </div>

    <div class="dd1">
      <van-icon name="service-o" color="rgb(74, 165, 240)" />
      <span>我的客服</span>
      <span class="dd2">></span>
    </div>
    <div class="dd4">
      <van-icon name="comment-circle-o" color="rgb(74, 165, 240)" />
      <span>下载饿了么app</span>
      <span class="dd2">></span>
    </div>
    <div class="dd5">
      <van-icon name="description" color="rgb(74, 165, 240)" />
      <span>规则中心</span>
      <span class="dd2">></span>
    </div>
    <p class="zheng" @click="goto('/yinxi')">隐私政策</p>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
export default {
  methods:{
    goto(pash){
      this.$router.push(pash);
    }
  }
};
</script>

<style>
.dd {
  overflow: hidden;
  height: 422px;
  background-color: #f5f5f5;
}
.dd1 {
  margin-top: 15px;
  height: 28px;
  display: flex;
  padding: 5px;
  align-items: center;
  background-color: white;
}
.dd2 {
  position: absolute;
  right: 8px;
  color: #ccc;
}
.dd3 {
  height: 28px;
  display: flex;
  padding: 5px;
  align-items: center;
  background-color: white;
}
.dd4 {
  height: 28px;
  display: flex;
  padding: 5px;
  align-items: center;
  background-color: white;
}
.dd5 {
  height: 28px;
  display: flex;
  padding: 5px;
  align-items: center;
  background-color: white;
}
.zheng {
  text-align: center;
  color: #4da6f0;
}
</style>