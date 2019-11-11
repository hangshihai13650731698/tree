
<template>
   <div class="order">
    <div class="order_1">
      <img src="../assets/elm.png" alt />
    </div>
    <div class="order_2">
      <p>近三个月无外卖订单记录</p>
    </div>
    <div class="order_3">
      <span @click="goto('/dingdan')">查看三个月前的外卖订单</span>
      <div></div>
    </div>
  </div>
</template>

<script>
// import Dingdan from "../components/dingdan.vue"
  export default {
    // components:{
    //   Dingdan
    // }
    methods:{
      goto(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="scss" scoped>
@function vw($px) {
  @return ($px/1080) * 100vw;
}
.order {
  width: 100%;
  height: vw(1815);
  background-color: #f5f5f5;
  text-align: center;
  padding-top: vw(200);
  .order_1 {
    img {
      width: vw(590);
      height: vw(518);
    }
  }
  .order_2 {
    font-size: vw(40);
    color: #6a6a6a;
    p {
      margin: 0;
    }
  }
  .order_3 {
    margin-top: vw(60);
    font-size: vw(30);
    color: #999999;
  }
}
</style>