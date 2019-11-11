<template>
  <div class="nav">
    <van-icon id="dingwei" name="location"  />
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
      </el-option>
    </el-select>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from 'vant';
Vue.use(Icon);
export default {
  data() {
    return {
      cities: [
        {
          value: "Beijing",
          label: "北京"
        },
        {
          value: "Shanghai",
          label: "上海"
        },
        {
          value: "Nanjing",
          label: "南京"
        },
        {
          value: "Chengdu",
          label: "成都"
        },
        {
          value: "Shenzhen",
          label: "深圳"
        },
        {
          value: "Guangzhou",
          label: "广州"
        }
      ],
      value: "请选择地址"
    };
  }
};
</script>

<style>
.nav{
  background: #0085ff;
}
.el-input__inner{
  background: #0085ff !important;
  border: none !important;
  color: white !important;
}
.el-input__prefix, .el-input__suffix{
  left: 0 !important;
}
#dingwei{
  margin-left: 10px;
  color: white;
}
</style>