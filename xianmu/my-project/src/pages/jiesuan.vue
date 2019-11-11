<template>
  <div>
    <!-- 选择框       v-model绑定的和复选框中的name相同对应的值-->
    <van-checkbox-group class="card-goods" v-model="checkedGoods"  ref="checkboxGroup">
      <!-- 复选框 -->
      <van-checkbox ref="Checkbox" class="card-goods__item" v-for="(item,idx) in goods" :data-id='idx' :key="item.id" :name="item.id" >
        <!-- 卡片循环 -->
        <van-card
          :title="item.title"
          :desc="item.desc"
          :num="item.num"
          :price="formatPrice(item.price)"
          :thumb="item.thumb"
        />
        <!-- <div style="width:30vw">
        <button @click="handleDelClick">-</button>
        <span style="display: inline-block;
    width: 8vw;
}">
          <input style="width:100%" type="number" v-model="data" />
        </span>
        <button @click="data++">+</button>
        </div>-->
        <!-- <van-stepper v-model="value" integer /> -->
      </van-checkbox>
    </van-checkbox-group>
      <van-button type="primary" @click="checkAll" style="position: absolute;
    bottom: 6px;
    z-index: 666;
    left: 0;">全选</van-button>
<van-button type="info" @click="toggleAll" style="position: absolute;
    bottom: 6px;
    z-index: 666;
    left: 12vw;">反选</van-button>
    <!-- 结算框 -->
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
// import Vue from 'vue';
// import { Stepper } from 'vant';
// Vue.use(Stepper);
// disabled 可以点的数据
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      // checked:true,
      props: ["dataid"],
      // 假数据检查
      data: 1,
      checked: false,
      checkedGoods: [], //打勾的框数
      goods: [
        //   {
        //     id: "1",
        //     title: "麻辣双拼",
        //     desc: "口味，香香，满满龙虾，特别满足",
        //     price: 15,
        //     num: 99,
        //     thumb:
        //       "https://cube.elemecdn.com/7/9e/132d8e5ac34bf518cb29ec8a1c810jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
        //   },
      ]
    };
  },
  // 创建时期只在创建一次促发created
  activated() {
    //  window.location.reload();
    // activated用活跃的话每进一次页面都会发送一次请求
    //  let data=this.$axios
    this.$axios.get("http://localhost:3000/car").then(({ data }) => {
      // this.goods=data
      this.goods = this.goods.concat(data);
      let arr = [];
      data.forEach((i, idx) => {
        arr.push(JSON.stringify(idx + 1));
      });
      window.console.log("arr", arr);
      this.checkedGoods = arr;

      arr.forEach((i, idex) => {
        this.goods[idex].id = i;
      });
      window.console.log(this.goods);
    });
    // window.console.log(datad)
  },
  // activated(){
  //   //  window.location.reload();
  // },
  // 计算属性
  computed: {
    // 提交计算
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : ""); //返回计算数量
    },
    // 总价
    totalPrice() {
      return this.goods.reduce(
        (total, item) =>
          total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price*100 : 0),
        0
      );
    }
  },
  // 方法
  methods: {
    // 200/100再取整的出来的
    formatPrice(price) {
      return (price / 1).toFixed(2);
    },
    // 点击计算
    onSubmit() {
      Toast("结算");
    },
    // 全选
      checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    // 反选
      toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    }
    // 切换选中的状态
  // tog(){
  //   if (this.Checkbox.checked==true) {
  //     this.checked=true
  //   }
  // }
    // // 减法
    // handleDelClick(){
    //   window.console.log(8888)
    //   // let data=this.data
    //  this.data--
    //   if (this.data===0) {
    //     this.data=1;
    //   }
    //   // return data
    // }
  }
};
</script>

<style lang="less">
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
.van-button {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    height: 30px;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    border-radius: 2px;
    -webkit-transition: opacity .2s;
    transition: opacity .2s;
    -webkit-appearance: none;
    -webkit-text-size-adjust: 100%;
}
</style>