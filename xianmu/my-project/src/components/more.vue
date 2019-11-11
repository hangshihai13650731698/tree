<template>
  <div>
    <div id="denglu">
      <span class="deng">兑换请先登录</span>
      <van-button
        round
        type="info"
        color="#fd5746"
        @click="goto('/login')"
        size="small"
        id="liji"
      >立即登录</van-button>
    </div>
    <moreh/>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "vant";
import moreh from "../components/moreh.vue";
Vue.use(Button);
export default {
  components: {
    moreh
  },
  methods: {
    goto(pash) {
      this.$router.push(pash);
    }
  }
};
</script>

<style  scoped>
#denglu {
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 8;
  height: 3.533333rem;
  background-color: white;
}
.deng {
  color: black;
  line-height: 3.533333rem;
  position: absolute;
  left: 2.133333rem;
}
#liji {
  position: absolute;
  right: 18px;
  margin-top: 6px;
}
</style>