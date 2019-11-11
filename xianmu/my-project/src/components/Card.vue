<template>
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
      @click="xiangqing(r.distance)"
    >
      <div slot="tags">
        <van-tag plain id="play1">
          
          <van-rate v-model="value" :count="5" size="1px" />
          <span>4.8</span>
          <em>月售:888</em>
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
    </van-card>
    <van-loading v-if="jiazai" size="24px" color="#0af" vertical>正在加载中...</van-loading>
    <div class="dibu" v-else>
    <i>没有更多了哦</i>
    <p>登录后可查看更多</p>
     <a href="###" class="go" @click="goto('/login')">点此登录 》</a>
    </div>
  </van-list>
  
</template>

<script>
// 引入使用
import Vue from "vue";
import { Card, Tag, Button, List } from "vant";
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(List);
import { Loading } from 'vant';
Vue.use(Loading);
import { Rate } from 'vant';
Vue.use(Rate);
export default {
  data() {
    return {
      value:3,
      ji: [{ num: 4.5 }, { num: 4.6 }, { num: 4.7 }],
      list: [],
      loading: false,
      finished: false,
      restaurants: [],
      jiazai:true
    };
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
        if (this.restaurants.length >=18) {
          this.finished = true;
          this.jiazai=false;
        }
      });
    },
    // 跳转到详情页
    xiangqing(index) {
      window.console.log(index);
      this.$router.push({
        name: "page",
        params: { id: index }
      });
    },
    // 跳转到详情页
    goto(path) {
      this.$router.push(path);
    }
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
  border: none;
}
#play2 {
  right: 0;
  position: absolute;
  background-color: #0af;
  color: white;
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
.dibu{
  text-align: center
}
.go{
  text-align: center;
  color: #0af;
  text-decoration: none;
}

element.style {
}
<style>
*, :after, :before {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
    -webkit-tap-highlight-color: transparent;
}
user agent stylesheet
div {
    display: block;
}
<style>
.van-card__content {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    min-height: 90px;
}

.van-card {
    position: relative;
    box-sizing: border-box;
    padding: 8px 5px;
    color: #323233;
    font-size: 12px;
    background-color: #fafafa;
}

.van-tag::after {
    border-color: currentColor;
    border-radius: .4em;
    border: navajowhite;
}
</style>