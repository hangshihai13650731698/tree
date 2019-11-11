<template>
  <footer style="height:13vw" class="cartview-cartview_m8q55">
    <div class="cartview-cartmask_39Pun" style="z-index: 10; display: none;"></div>
    <div class="cartview-cartbody_3QIXw cartview-cartbodyNoTip_1MF9b" style="z-index: 11;">
      <section class="discount-tip-discountTip_3QgtV_0" style="display: none;"></section>
      <div style="opacity: 0;">
        <div class="cartview-cartheader_1Wk12">
          <div class="cartview-headerText_1pEZG">
            <span>已选商品</span>
            <!---->
            <!---->
          </div>
          <a href="javascript:" ubt-click="101179" class="cartview-cartheaderRemove_1Xg8n">
            <svg>
              <use xlink:href="#cart-remove" />
            </svg>
            <span>清空</span>
          </a>
        </div>
        <div class="entityList-cartbodyScroller_nZp54_0">
          <!---->
          <ul class="entityList-cartlist_1hnWi_0"></ul>
          <!---->
        </div>
      </div>
    </div>
    <div class="bottomNav-cartfooter_1Xb8t_0" style="z-index: 11;">
      <span
        role="button"
        aria-label="购物车"
        attr-quantity="0"
        class="bottomNav-carticon_E1nII_0 bottomNav-empty_3zwfj_0"
      >
        <!-- 插入购物车图标 -->
        <!---->
        <van-icon :info="search" size="40px" @click="goto('/jiesuan')" name="shopping-cart" />
      </span>
      <div
        style="margin-right: 28vw;
    margin-left: 5vw;"
        role="button"
        aria-label="购物车有商品0件，共0元，另需配送费4元。"
        class="bottomNav-cartInfo_3l5zP_0"
      >
        <p class="bottomNav-carttotal_1DJt5_0">
          <span class="bottomNav-carttotalOriginal_2tu8R_0">未选购商品</span>
          <!---->
        </p>
        <p class="bottomNav-cartdelivery_1TjrT_0" style="height:6vw">另需配送费4元</p>
      </div>
      <a
        role="button"
        href="javascript:;"
        class="submit-btn-submitbutton_3t114_0 submit-btn-disabled_1DLSl_0"
      >
        <span>¥20起送</span>
      </a>
    </div>
  </footer>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  data() {
    return {
      num: ""
    };
  },
  watch: {
    search: {
      handler: function() {
      //  window.console.log();
      }
    }
  },
  methods: {
    goto(pash) {
      this.$router.push(pash);
    }
  },
  computed: {
    search() {
      if (this.$store.getters.getzhuangTai) {
         return this.$store.getters.getzhuangTai;
      }
      else return 0
      // return this.$store.getters.getzhuangTai;
    }
    // num:this.search.num
  }
};
</script>

<style scoped>
.cartview-cartview_m8q55 {
  position: fixed;
  bottom: 0;
}
.cartview-cartmask_39Pun {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  opacity: 0.4;
  transition: opacity 0.3s ease;
}
.bottomNav-cartfooter_1Xb8t_0 {
  position: fixed;
  right: 0;
  bottom: 0;
  left: -60px;
  display: flex;
  align-items: center;
  padding-left: 21.066667vw;
  background-color: rgba(61, 61, 63, 0.9);
  height: 12.8vw;
}
.bottomNav-carttotal_1DJt5_0 {
  font-size: 0.48rem;
  line-height: normal;
  color: #fff;
}
.bottomNav-carttotalOriginal_2tu8R_0 {
  font-size: 0.7em;
  color: #999;
}
.bottomNav-cartdelivery_1TjrT_0 {
  color: #999;
  font-size: 0.266667rem;
}
.submit-btn-submitbutton_3t114_0 {
  height: 100%;
  width: 28vw;
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 700;
  user-select: none;
  line-height: 12.8vw;
  word-break: keep-all;
}
</style>