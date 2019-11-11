<template>
  
    <van-tabs
      id="Tab"
      v-model="activeName"
      line-width="23px"
      title-active-color="rgb(35, 149, 255)"
      color="rgb(35, 149, 255)">
      <van-tab title="点餐" name="a">
        <p
          style="padding-left: 4.266667vw;
         color: #333;
         font-size: .426667rem;
         font-weight: 700;
          margin-bottom: 2.666667vw"
        >商家推荐</p>
        <ul class="liebiao">
          <li class="list">
            <img
              style="width:32vw"
              src="https://cube.elemecdn.com/2/03/b43c48471beeb51c5e72606d62049png.png?x-oss-process=image/resize,m_lfit,w_240/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
              alt
            />
            <p
              style="
   white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #333;
    font-size: .373333rem;"
            >麻辣双拼+肌肉丸</p>
            <span style=" color: #999;
    font-size: .266667rem">月售10 好评0%</span>
            <p>
              <span style="color:red">￥25</span>
              <el-button id="btn" type="primary" icon="el-icon-plus" size="mini" circle></el-button>
            </p>
          </li>

          <li class="list">
            <img
              style="width:32vw"
              src="https://cube.elemecdn.com/8/24/ce2671e9e3f62c99169992f906a7epng.png?x-oss-process=image/resize,m_lfit,w_240/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
              alt
            />
            <p
              style="
   white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #333;
    font-size: .373333rem;"
            >麻辣双拼+鸡肉丸降幅可达房间肯德基</p>
            <span style=" color: #999;
    font-size: .266667rem">月售4 好评0%</span>
            <p>
              <span style="color:red">￥29.9</span>
              <el-button id="btn" type="primary" icon="el-icon-plus" size="mini" circle></el-button>
            </p>
          </li>

          <li class="list">
            <img
              style="width:32vw"
              src="https://cube.elemecdn.com/d/d1/737711b2c1a7fd8ee4a8b0f97ee9dpng.png?x-oss-process=image/resize,m_lfit,w_240/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
              alt
            />
            <p
              style="
   white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #333;
    font-size: .373333rem;"
            >十三双辣味麻辣双拼+鸡肉丸降幅可达房间肯德基</p>
            <span style=" color: #999;
    font-size: .266667rem">月售17 好评0%</span>
            <p>
              <span style="color:red">￥29.9</span>
              <el-button id="btn" type="primary" icon="el-icon-plus" size="mini" circle></el-button>
            </p>
          </li>
          <li class="list">
            <img
              style="width:32vw"
              src="https://cube.elemecdn.com/d/d1/737711b2c1a7fd8ee4a8b0f97ee9dpng.png?x-oss-process=image/resize,m_lfit,w_240/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
              alt
            />
            <p
              style="
   white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #333;
    font-size: .373333rem;"
            >【超满足双人套】三双辣味麻辣双拼+鸡肉丸降幅可达房间肯德基</p>
            <span style=" color: #999;
    font-size: .266667rem">月售127 好评0%</span>
            <p>
              <span style="color:red">￥29.9</span>
              <el-button id="btn" type="primary" icon="el-icon-plus" size="mini" circle></el-button>
            </p>
          </li>
          <li class="list">
            <img
              style="width:32vw"
              src="https://cube.elemecdn.com/3/d5/05dcbd9775bcace7914ac866a254fjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_240/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
              alt
            />
            <p
              style="
   white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #333;
    font-size: .373333rem;"
            >【招牌麻辣双拼】三双辣味麻辣双拼+鸡肉丸降幅可达房间肯德基</p>
            <span style=" color: #999;
    font-size: .266667rem">月售4 好评0%</span>
            <p>
              <span style="color:red">￥29.9</span>
              <el-button id="btn" type="primary" icon="el-icon-plus" size="mini" circle></el-button>
            </p>
          </li>
          <li class="list">
            <img
              style="width:32vw"
              src="https://cube.elemecdn.com/d/d1/737711b2c1a7fd8ee4a8b0f97ee9dpng.png?x-oss-process=image/resize,m_lfit,w_240/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
              alt
            />
            <p
              style="
   white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #333;
    font-size: .373333rem;"
            >【超满足双人套】三双辣味麻辣双拼+鸡肉丸降幅可达房间肯德基</p>
            <span style=" color: #999;
    font-size: .266667rem">月售127 好评0%</span>
            <p>
              <span style="color:red">￥29.9</span>
              <el-button id="btn" type="primary" icon="el-icon-plus" size="mini" circle></el-button>
            </p>
          </li>
        </ul>
        <left />
        <tabfooter />
      </van-tab>

      <!-- 内容2 -->
      <van-tab title="评价" name="b">
        <div>
          <img style="width:100%" src="../assets/评论1.png" alt="">
        </div>


      </van-tab>

      <!-- 内容3 -->
      <van-tab title="商家" name="c">
        <div class="shangjia" style="padding:4vw">
          <h2>商家服务</h2>
          <span class="piao">票</span>
          <span
            style=" color:#cccccc;   font-size: .346667rem;
    line-height: 1.38;"
          >该商家支持开发票，请在下单时填写好发票抬头</span>
          <p>
            <span class="piao">保</span>
            <span
              style="    font-size: .346667rem;
    line-height: 1.38; color:#cccccc"
            >该商户食品安全已由国泰产险承担，食品安全有保障</span>
          </p>
        </div>
        <div class="shangping" style="padding:4vw">
          <h2>商品实景</h2>
          <a href="###" style="margin-right:2vw">
            <img
              style="width:20%"
              src="https://cube.elemecdn.com/7/c5/947dac1bcb567f3cb05734e8ff8fdjpeg.jpeg?x-oss-process=image/format,webp/resize,w_200,h_200,m_fixed"
              alt
            />
          </a>
          <a href="###">
            <img
              style="width:20%"
              src="https://cube.elemecdn.com/e/26/e155fac736e243c56518686378307jpeg.jpeg?x-oss-process=image/format,webp/resize,w_200,h_200,m_fixed"
              alt
            />
          </a>
        </div>
        <div class="xinxi">
          <h2>商家信息</h2>
          <span
            style="    font-size: .346667rem;
    line-height: 1.38; color:#cccccc"
          >该商户食品安全已由国泰产险承担，食品安全有保障</span>

          <ul class="detail-3mz9N">
            <li>外婆卤肉饭，传承匠心，用心做美食。</li>
            <li>
              <span>品类</span>
              <span>盖浇饭, 川湘菜</span>
            </li>
            <li>
              <span>商家电话</span>
              <span class="detail-2mw1q">
                <van-icon name="phone-circle"  color='#00a6ff'/>
                <span style="color:#00a6ff">联系商家</span>
              </span>
            </li>
            <li>
              <span>地址</span>
              <span>昌兴街3l号首层中山五路广州越秀</span>
            </li>
            <li>
              <span>营业时间</span>
              <span>09:30-22:00</span>
            </li>
          </ul>
        </div>
      </van-tab>
    </van-tabs>

</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
import left from "../components/left.vue";
import Tabfooter from "../components/Tabfoot.vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  components: {
    left,
    Tabfooter
  },
  data() {
    return {
      activeName: "a"
    };
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.liebiao {
  overflow-x: scroll;
  display: flex;
}
.list {
  width: 32vw;
  margin-left: 4.266667vw;
  position: relative;
}
#btn {
  position: absolute;
  right: 0;
  bottom: 5px;
}

// #Tab {
//   position: sticky;
//   top: 0;
// }
.piao {
  display: inline-block;
  border: 1px solid rgb(153, 153, 153);
  color: rgb(153, 153, 153);
  height: 4.2vw;
  margin-right: 1.6vw;
  padding: 0.053333rem 0.16rem;
}
.detail-3mz9N li {
  display: flex;
  padding: 4vw 4vw 4vw 4vw;
  justify-content: space-between;
  -webkit-align-items: center;
  align-items: center;
}
.van-tabs_wrap{
  position: sticky !important;
  top: 0;
  z-index: 888;
}
</style>