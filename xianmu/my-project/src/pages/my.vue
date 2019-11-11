<template>
  <div>
    <div v-if="show">
    <Order/>
    </div>
    <div v-else>
    <jiesuan />
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
// import { AddressList } from "vant";
// Vue.use(AddressList);
// import dingdan from "../components/dingdan.vue";
import jiesuan from './jiesuan.vue'
import Order from '../components/Order.vue'
export default {
  data(){
    return{
      // 用仓库取出来状态
        show:true
    }
  },
  components: {
    jiesuan,
    Order
  }

};
</script>

<style lang="scss" scoped>
</style>