<template>
  <div>
    <van-list
      :offset="50"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-card
        v-for="(r,index) in  restaurantsComputed"
        :key="index"
        num="99"
        price="88"
        :desc="r.description"
        :title="r.name"
        :thumb="r.src"
        origin-price="10.00"
        @click="goto(r.distance)"
      >
        <div slot="tags" >
          <van-tag plain id="play1">
            <i id="jiao">★★★★</i>
            <span>4.8</span>
            <em>月售:999单</em>
          </van-tag>
          <van-tag plain id="play2">蜂鸟配送</van-tag>
        </div>
        <div slot="tags">
          <van-tag plain>￥20起送</van-tag>
          <van-tag plain>免配送费</van-tag>
          <i id="song">
            <span>1.98km</span> |
            <span>30分钟</span>
          </i>
        </div>
        <div slot="footer">
          <!-- 按钮里面放图标 -->
          <van-button color="red" size="mini" icon="shopping-cart-o">加入订单</van-button>
          <van-button color="pink" type="danger" size="mini" icon="gold-coin">立即结算</van-button>
        </div>
      </van-card>

      <!-- <van-loading v-if="jiazai" size="24px" color="#0af" vertical>正在加载中...</van-loading> -->
      <!-- <div class="dibu" v-else>
    <i>没有更多了哦</i>
    <p>登录后可查看更多</p>
     <a href="###" class="go" @click="goto('/login')">点此登录 》</a>
      </div>-->
    </van-list>
    <Tabbar />
  </div>
</template>

<script>
// 引入使用
import Vue from "vue";
import { Card, Tag, Button, List } from "vant";
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(List);
import { Loading } from "vant";
Vue.use(Loading);
import { Icon } from "vant";
Vue.use(Icon);
import Tabbar from "../components/Tabbar.vue";
export default {
  data() {
    return {
      ji: [{ num: 4.5 }, { num: 4.6 }, { num: 4.7 }],
      list: [],
      loading: false,
      finished: false,
      restaurants: [],
      jiazai: true
    };
  },
  components: {
    Tabbar
  },
  //   计算属性并且赛选
  computed: {
    search() {
      return this.$store.getters.getText;
    },

    // 上面取值出来this.search.value取出来有的话就执行下面查询
    restaurantsComputed() {
      if (this.search.value) {
        //   过滤赛选
        window.console.log(this.search.value);
        return this.restaurants.filter(item => {
          // 根据这些取到的值查找原对象有则返回无则原来
          if (item.name.indexOf(this.search.value) >= 0) {
            return item;
          }
        });
      } else {
        return this.restaurants;
      }
    }
  },
  created() {},
  methods: {
    onLoad() {
      this.$axios.get("http://localhost:3000/restaurants").then(({ data }) => {
        this.restaurants = this.restaurants.concat(data);
        //    加载时的状态结束
        this.loading = false;
        if (this.restaurants.length >= 18) {
          this.finished = true;
          this.jiazai = false;
        }
      });
    },
    // 跳转到详情页
    goto(index) {
      window.console.log(index);
      this.$router.push({
        path: "/jiesuan",
        params: { id: index }
      });
    }
    // 跳转到详情页
    // goto(path) {
    //   this.$router.push(path);
    // }
  }
};
</script>
<style scoped>
.btn1 {
  background: red;
  color: white;
}
.btn2 {
  background: #58bc58;
  color: white;
}
#play1 {
  color: #cccccc;
  border: none !important;
}
#play2 {
  right: 0;
  position: absolute;
  background-color: #0af;
  color: white;
  border: none
}
#jiao {
  color: yellow;
  display: inline-block;
  margin-right: 1.1rem;
}
#song {
  position: absolute;
  right: 0;
  color: #cccccc;
  text-decoration: none;
}
.dibu {
  text-align: center;
}
.go {
  text-align: center;
  color: #0af;
  text-decoration: none;
}
</style>