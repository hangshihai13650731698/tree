<template>
  <div>
    <div class="nav">
      <a class="lett" href="###"></a>
      <img
        style="       width: 20%;
    height: 9%;
    position: absolute;
    top: 51px;
    left: 40%
}"
        :src="goodslist.src"
        alt
      />
    </div>

    <!-- tow -->

    <!-- <div class="tow"><h2><span>一虾一刻小龙虾饭@行侠记(乐嘉路店)</span></h2></div> -->
    <div class="index-2uv7r" style="margin-top:5vw">
      <h2 class="index-3jRsK">
        <span class="index-UYhnL">一虾一刻小龙虾饭@行侠记(乐嘉路店)...</span>
        <i class="index-1_VRD"></i>
      </h2>
      <div
        class="index-24KTi"
        style="    white-space: nowrap;
    height: 3.2vw;
    margin-top: 1.733333vw;
    font-size: .293333rem;
    color: #666;
    text-align: center;"
      >
        <span class="index-2u0xV">评价4.7</span>
        <span class="index-2u0xV">月售446单</span>
        <span class="index-2u0xV">
          蜂鸟快送
          <span>约33分钟</span>
        </span>
      </div>
    </div>
    <!-- tree -->
    <div class="tree" style="display:flex; justify-content:center">
      <div
        class="tree1"
        style="display: flex;
     
            margin-top: 10px;
            height: 35px;
            justify-content: center;
            color: #594519;
            background: #ffe578"
      >
        <p style="padding:0px 8px 0px 8px;">
          <span>￥7</span>
          <span>无门槛</span>
        </p>
        <p>领取</p>
      </div>
      <div
        class="tree2"
        style="display: flex;
      
            margin-top: 10px;
            margin-left:10px;
            height: 35px;
            justify-content: center;
            color: #594519;
            background:#fff4f4"
      >
        <p style="padding:0px 6px 0px 6px">
          <span>共 ￥10</span>
          <span>店铺</span>
        </p>
        <p>领取</p>
      </div>
    </div>
    <!-- four -->
    <div class="four" style="display:flex;
     justify-content:center;align-items: center;">
      <div
        style="color: rgb(255, 75, 51);
    border: 1px solid rgb(255, 201, 193);height: 16px;margin-left: 8px;"
      >15减7</div>
      <div
        style="color: rgb(255, 75, 51);
    border: 1px solid rgb(255, 201, 193);height: 16px;margin-left: 8px;"
      >45减8</div>
      <div
        style="color: rgb(255, 75, 51);
    border: 1px solid rgb(255, 201, 193);height: 16px;margin-left: 8px;"
      >66减23</div>
      <div
        style="color: rgb(255, 75, 51);
    border: 1px solid rgb(255, 201, 193);height: 16px;margin-left: 8px;"
      >88减66</div>
      <p class="youhui" style="margin-left: 8vw;">三个优惠</p>
    </div>

    <!-- file-->
    <p class="index-TmrYy">
      公告：
      订餐须知：为了确保能及时用餐，希望您提前45分钟以上预定下单，避开高峰时期(11-13点为高峰)。
    </p>

    <Tab />
  </div>
</template>

<script>
import Vue from "vue";
import { Tag } from "vant";
Vue.use(Tag);
import Tab from "../components/Tab.vue";
export default {
  components: {
    Tab
    // left
  },
  data() {
    return {
      name: this.search,
      goodslist: []
    };
  },
  // 生命周期的创建时期（如果用了keep-alive这个就不会起作用了）
  // created() {
  //   // window.console.log(this.$route.params.id);
  //   // 注意取出来不及时用会报错
  //   let { id } = this.$route.params;
  //   window.console.log(id);
  //   this.getData(id);
  //   // return this.$route.params.id
  // },
  // 活跃
  activated() {
    let { id } = this.$route.params;
    window.console.log(id);
    this.getData(id);
  },

  methods: {
    //传路由跳转的方法
    goto(path) {
      this.$router.push(path);
    },
    // getData(id) {
    //   this.$axios.get("http://localhost:3000/restaurants", {
    //       params: {
    //         distance: id
    //       }
    //       // ({ data }) =>
    //     })
    //     .then(({ data }) => {
    //       window.console.log(data);
    //       // window.console.log(data.distance)
    //     });
    //     // window.console.log(data.distance)
    // }

    // reqGoods() {
    //   this.$axios
    //     .get("http://localhost:3000/goods", {
    //       params: {
    //         id: "2"
    //       }
    //     })
    //     .then(({ data }) => {
    //       this.goods = data;
    //       window.console.log(this.goods);
    //     });
    // },

    async getData(id) {
      // 解构数据{{}}注意后台要改接受到的数据类型
      let datad = await this.$axios.get("http://localhost:3000/restaurantsgg", {
        params: {
          distance: id
        }
      });
      // .then(({ data }) => {
      //   this.goodslist = data;
      //   window.console.log(this.goodslist);
      // });
      window.console.log(datad.data);
      this.goodslist = datad.data[0];

      // this.goodslist = { ?为什么设置不了
      //   src: datad.data.src,
      //   distance: datad.data.distance
      // };
      // 打印第1个对象再对应取出相应的数据
      window.console.log(this.goodslist);
    }

    //  async getData(){
    //         // axios返回的数据格式：{headers,status,data:接口返回的数据}
    //         let {data:{datas}} = await this.$axios.get('https://www.nanshig.com/mobile/index.php',{
    //         //带参数过去验证后拿取数据
    //            params:{
    //                 act:'goods',
    //                 goods_id:2,
    //                 key:''
    //             }
    //         });

    //        window.console.log(datas)

    //       //   this.goodsInfo = {
    //       //       ...datas.goods_info,
    //       //       goods_commend_list:datas.goods_commend_list,
    //       //       goods_image:datas.goods_image
    //       //   }

    //       //  window.console.log(this.goodsInfo)
    //     }
  }

  // computed: {
  //   search() {
  //     //  window.console.log(this.$router.params)
  //     return this.$route.params.id;
  //   }
  //   //   window.console.log(search)
  //   // window.console,log(search)
  //   //   nazhi() {
  //   //     if (this.search) {
  //   //       window.console.log(this.search);
  //   //       return this.search
  //   //     }
  //   //
  //   //   }
  //   // if (this.search.params) {

  //   // }
  // }
};
</script>

<style scoped>
.nav {
  background-image: url(
    https://cube.elemecdn.com/b/a9/9280606fdc3752701ac7a8f2f2ba1png.png?x-oss-process=image/format,webp/resize,w_750
  );
  background-position: 50%;
  height: 26.666667vw;
  /* position: absolute;
    left: 0;
    right: 0; */
  background-size: cover;
  background-repeat: no-repeat;
}
.index-3jRsK {
  font-size: 1.26667rem;
  font-weight: 700;
  white-space: nowrap;
  position: relative;
  padding-right: 0.266667rem;
  padding-right: 2.666667vw;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}
.index-2u0xV {
  display: inline-block;
  margin-left: 2vw;
}
.lett {
  margin-top: 0.133333rem;
  margin-top: 1.333333vw;
  margin-left: 0.133333rem;
  margin-left: 1.333333vw;
  width: 0.32rem;
  width: 3.2vw;
  height: 0.32rem;
  height: 3.2vw;
  display: inline-block;
  border-bottom: 0.053333rem solid #fff;
  border-bottom: 0.533333vw solid #fff;
  border-left: 0.053333rem solid #fff;
  border-left: 0.533333vw solid #fff;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.index-3jRsK .index-1_VRD {
  width: 4vw;
  position: relative;
  height: 6.533333vw;
}
.index-TmrYy {
  width: 80vw;
  font-size: 0.29333rem;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0.226667rem auto 0.266667rem;
  padding: 0;
  white-space: nowrap;
}

.index-3jRsK .index-1_VRD:after {
  content: "";
  border-style: solid;
  border-width: 1.466667vw 0 1.466667vw 1.733333vw;
  border-color: transparent transparent transparent rgba(0, 0, 0, 0.67);
  position: absolute;
  left: 1.6vw;
  top: 2.133333vw;
}
.youhui::after {
  content: "";
  display: block;
  border-style: solid;
  border-width: 0.106667rem 0.093333rem 0;
  border-width: 1.066667vw 0.933333vw 0;
  border-color: #999 transparent transparent;
  position: absolute;
  top: 35%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 10%;
}
</style>