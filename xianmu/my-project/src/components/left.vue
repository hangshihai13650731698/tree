<template>
  <div>
    <div id="box" style="display:flex">
      <van-sticky :offset-top="0" :z-index="0">
        <!-- 导航栏 -->
        <ul id="mennu">
          <li class="active">
            <img
              style="width:15%"
              src="https://cube.elemecdn.com/a/ba/732b4ca103b2521c872442d7e5d4epng.png?x-oss-process=image/format,webp/resize,w_26"
              alt
            />
            热销
          </li>
          <li>优惠</li>
          <li>套餐</li>
          <li>真香，拌面系列</li>
          <li>满满龙虾饭</li>
          <li>双拼系列</li>
          <li>加分教头</li>
          <li>小食</li>
          <li>其它</li>
        </ul>
      </van-sticky>
      <ul id="lef">
        <li style="display:flex;" v-for="(r,index) in list" :key="index" @click="goto(index)">
          <div style="=width:50%">
            <img style="width: 24vw;" :src="r.src" alt />
          </div>
          <div style="width:70vw;">
            <p
              style="
               width:50vw;
   white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #333;
    font-size: .373333rem;"
              v-text="r.title"
            ></p>
            <p
              style="
              width:50vw;
   white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #333;
    font-size: .373333rem;"
              v-text="r.weidao"
            ></p>
            <span style=" color: #999;
    font-size: .266667rem" v-text="r.xiaoliang"></span>
            <p>
              <span style="color:red" class="yuan" v-text="r.price"></span>
              <el-button
                :dataid="index"
                id="btn"
                v-model="jishu"
                @click="shu(index)"
                type="primary"
                icon="el-icon-plus"
                size="mini"
                circle
              ></el-button>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import "../assets/loucheng.js";
import Vue from "vue";
import { Sticky, Search } from "vant";

Vue.use(Sticky);
Vue.use(Search);
export default {
  props: ["dataid"],
  data() {
    return {
      jishu: 1,
      tabPosition: "left",
      user: "",
      list: [
        {
          id: 1,
          src:
            "https://cube.elemecdn.com/7/9e/132d8e5ac34bf518cb29ec8a1c810jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "麻辣双拼+肌肉丸南非警方京东方科技",
          weidao: "口味，香香，满满龙虾，特别满足",
          xiaoliang: "月售127 好评0%",
          price: "￥25"
        },
        {
          id: 2,
          src:
            "https://cube.elemecdn.com/f/72/a582b4c8c2a6717f9e1b51811edafjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【麻辣】满满龙虾饭",
          weidao: "口味，香香，满满龙虾，特别满足",
          xiaoliang: "月售41 好评100%",
          price: "￥40.9起"
        },
        {
          id: 3,
          src:
            "https://cube.elemecdn.com/0/1c/35b6069fce33cfa254f84df6679ffjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【碳烤腹膜肉】",
          weidao: "口味，香香，满满龙虾，特别满足",
          xiaoliang: "月售77 好评100%",
          price: "￥12.9起"
        },
        {
          id: 4,
          src:
            "https://cube.elemecdn.com/2/03/b43c48471beeb51c5e72606d62049png.png?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【碳烤腹膜肉】",
          weidao: "麻辣双拼+鸡肉丸",
          xiaoliang: "月售97 好评100%",
          price: "￥82.9起"
        },
        {
          id: 5,
          src:
            "https://cube.elemecdn.com/e/34/81d28476edcb122d37f382ca78ce0jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【碳烤地方腹膜肉】",
          weidao: "麻辣双方法拼+鸡肉丸",
          xiaoliang: "月售99 好评100%",
          price: "￥88.9起"
        },
        {
          id: 6,
          src:
            "https://cube.elemecdn.com/5/74/fd08e51192616095636621d30655bjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "麻辣双拼+肌肉丸南非警方京东方科技",
          weidao: "口味，香香，满满龙虾，特别满足",
          xiaoliang: "月售127 好评0%",
          price: "￥25"
        },
        {
          id: 7,
          src:
            "https://cube.elemecdn.com/8/24/ce2671e9e3f62c99169992f906a7epng.png?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【麻辣】满满龙虾饭",
          weidao: "口味，香香，满满龙虾，特别满足",
          xiaoliang: "月售41 好评100%",
          price: "￥40.9起"
        },
        {
          id: 8,
          src:
            "https://cube.elemecdn.com/4/9c/2e8340da7362da4b4e9946d1e1a80jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【碳烤腹膜肉】",
          weidao: "口味，香香，满满龙虾，特别满足",
          xiaoliang: "月售77 好评100%",
          price: "￥12.9起"
        },
        {
          id: 9,
          src:
            "https://cube.elemecdn.com/2/03/b43c48471beeb51c5e72606d62049png.png?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【碳烤腹膜肉】",
          weidao: "麻辣双拼+鸡肉丸",
          xiaoliang: "月售97 好评100%",
          price: "￥82.9起"
        },
        {
          id: 10,
          src:
            "https://cube.elemecdn.com/e/34/81d28476edcb122d37f382ca78ce0jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【碳烤地方腹膜肉】",
          weidao: "麻辣双方法拼+鸡肉丸",
          xiaoliang: "月售99 好评100%",
          price: "￥88.9起"
        },
        {
          id: 11,
          src:
            "https://cube.elemecdn.com/7/9e/132d8e5ac34bf518cb29ec8a1c810jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "麻辣双拼+肌肉丸南非警方京东方科技",
          weidao: "口味，香香，满满龙虾，特别满足",
          xiaoliang: "月售127 好评0%",
          price: "￥25"
        },
        {
          id: 12,
          src:
            "https://cube.elemecdn.com/f/72/a582b4c8c2a6717f9e1b51811edafjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【麻辣】满满龙虾饭",
          weidao: "口味，香香，满满龙虾，特别满足",
          xiaoliang: "月售41 好评100%",
          price: "￥40.9起"
        },
        {
          id: 13,
          src:
            "https://cube.elemecdn.com/0/1c/35b6069fce33cfa254f84df6679ffjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【碳烤腹膜肉】",
          weidao: "口味，香香，满满龙虾，特别满足",
          xiaoliang: "月售77 好评100%",
          price: "￥12.9起"
        },
        {
          id: 14,
          src:
            "https://cube.elemecdn.com/2/03/b43c48471beeb51c5e72606d62049png.png?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【碳烤腹膜肉】",
          weidao: "麻辣双拼+鸡肉丸",
          xiaoliang: "月售97 好评100%",
          price: "￥82.9起"
        },
        {
          id: 15,
          src:
            "https://cube.elemecdn.com/e/34/81d28476edcb122d37f382ca78ce0jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【碳烤地方腹膜肉】",
          weidao: "麻辣双方法拼+鸡肉丸",
          xiaoliang: "月售99 好评100%",
          price: "￥88.9起"
        },
        {
          id: 16,
          src:
            "https://cube.elemecdn.com/5/74/fd08e51192616095636621d30655bjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "麻辣双拼+肌肉丸南非警方京东方科技",
          weidao: "口味，香香，满满龙虾，特别满足",
          xiaoliang: "月售127 好评0%",
          price: "￥25"
        },
        {
          id: 17,
          src:
            "https://cube.elemecdn.com/8/24/ce2671e9e3f62c99169992f906a7epng.png?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【麻辣】满满龙虾饭",
          weidao: "口味，香香，满满龙虾，特别满足",
          xiaoliang: "月售41 好评100%",
          price: "￥40.9起"
        },
        {
          id: 18,
          src:
            "https://cube.elemecdn.com/4/9c/2e8340da7362da4b4e9946d1e1a80jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【碳烤腹膜肉】",
          weidao: "口味，香香，满满龙虾，特别满足",
          xiaoliang: "月售77 好评100%",
          price: "￥12.9起"
        },
        {
          id: 20,
          src:
            "https://cube.elemecdn.com/2/03/b43c48471beeb51c5e72606d62049png.png?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【碳烤腹膜肉】",
          weidao: "麻辣双拼+鸡肉丸",
          xiaoliang: "月售97 好评100%",
          price: "￥82.9起"
        },
        {
          id: 21,
          src:
            "https://cube.elemecdn.com/e/34/81d28476edcb122d37f382ca78ce0jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【碳烤地方腹膜肉】",
          weidao: "麻辣双方法拼+鸡肉丸",
          xiaoliang: "月售99 好评100%",
          price: "￥88.9起"
        },
        {
          id: 22,
          src:
            "https://cube.elemecdn.com/7/9e/132d8e5ac34bf518cb29ec8a1c810jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "麻辣双拼+肌肉丸南非警方京东方科技",
          weidao: "口味，香香，满满龙虾，特别满足",
          xiaoliang: "月售127 好评0%",
          price: "￥25"
        },
        {
          id: 23,
          src:
            "https://cube.elemecdn.com/f/72/a582b4c8c2a6717f9e1b51811edafjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【麻辣】满满龙虾饭",
          weidao: "口味，香香，满满龙虾，特别满足",
          xiaoliang: "月售41 好评100%",
          price: "￥40.9起"
        },
        {
          id: 24,
          src:
            "https://cube.elemecdn.com/0/1c/35b6069fce33cfa254f84df6679ffjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【碳烤腹膜肉】",
          weidao: "口味，香香，满满龙虾，特别满足",
          xiaoliang: "月售77 好评100%",
          price: "￥12.9起"
        },
        {
          id: 25,
          src:
            "https://cube.elemecdn.com/2/03/b43c48471beeb51c5e72606d62049png.png?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【碳烤腹膜肉】",
          weidao: "麻辣双拼+鸡肉丸",
          xiaoliang: "月售97 好评100%",
          price: "￥82.9起"
        },
        {
          id: 26,
          src:
            "https://cube.elemecdn.com/e/34/81d28476edcb122d37f382ca78ce0jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【碳烤地方腹膜肉】",
          weidao: "麻辣双方法拼+鸡肉丸",
          xiaoliang: "月售99 好评100%",
          price: "￥88.9起"
        },
        {
          id: 27,
          src:
            "https://cube.elemecdn.com/5/74/fd08e51192616095636621d30655bjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "麻辣双拼+肌肉丸南非警方京东方科技",
          weidao: "口味，香香，满满龙虾，特别满足",
          xiaoliang: "月售127 好评0%",
          price: "￥25"
        },
        {
          id: 28,
          src:
            "https://cube.elemecdn.com/8/24/ce2671e9e3f62c99169992f906a7epng.png?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【麻辣】满满龙虾饭",
          weidao: "口味，香香，满满龙虾，特别满足",
          xiaoliang: "月售41 好评100%",
          price: "￥40.9起"
        },
        {
          id: 29,
          src:
            "https://cube.elemecdn.com/4/9c/2e8340da7362da4b4e9946d1e1a80jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【碳烤腹膜肉】",
          weidao: "口味，香香，满满龙虾，特别满足",
          xiaoliang: "月售77 好评100%",
          price: "￥12.9起"
        },
        {
          id: 30,
          src:
            "https://cube.elemecdn.com/2/03/b43c48471beeb51c5e72606d62049png.png?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【碳烤腹膜肉】",
          weidao: "麻辣双拼+鸡肉丸",
          xiaoliang: "月售97 好评100%",
          price: "￥82.9起"
        },
        {
          id: 31,
          src:
            "https://cube.elemecdn.com/e/34/81d28476edcb122d37f382ca78ce0jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
          title: "【碳烤地方腹膜肉】",
          weidao: "麻辣双方法拼+鸡肉丸",
          xiaoliang: "月售99 好评100%",
          price: "￥88.9起"
        }
      ]
    };
  },
  created() {
    let user = localStorage.phone;
    this.user = user;
    // if (user) {
    //   this.goto()
    // }else{
    //   window.alert(999)
    // }
    // if (user) {
    //    goto(id) {
    //   // 添加到购物车
    //    window.console.log(id)
    //   this.$axios.get("http://localhost:3000/addcar", {
    //     params: {
    //       id: id+1,
    //       num: 1
    //     }
    //   });
    // }
    // }else{
    //   window.console.log(88)
    // }
  },
  methods: {
    shu(dataid) {
      window.console.log(dataid);
      // 传到仓库里面去，先判断是否已经登录再传数据
      if (this.user) {
        this.$store.dispatch("setzhuangTai", {
          num: this.jishu++ //传个形参过去
        });
      } else {
        window.confirm("请先登录");
      }
      // window.console.log(this.jishu);
    },

    goto(id) {
      // 添加到购物车
      window.console.log(id);
      if (this.user) {
        this.$axios.get("http://localhost:3000/addcar", {
          params: {
            id: id + 1,
            num: 1
          }
        });
      } else {
        window.confirm("请先登录");
      }
    },
    car(pash) {
      this.$counter.push(pash);
    }
  }
};
</script>

<style scoped>
#box {
  width: 100%;
  height: 100%;
}

.fix {
  position: fixed;
  top: 0;
}
.yuan {
  color: red;
  /* font-size: 4vw;
  display: inline-block;
  margin-right: 35vw;
  margin-top: 1vw; */
  display: inline-block;
  margin-right: 30vw;
  margin-top: 1vw;
}
#mennu .active {
  background-color: #fff;
}
/* 左边 */
#mennu li {
  width: 80px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #f8f8f8;
  /* border: 1px solid #cccccc; */
  cursor: pointer;
}
/* 右边 */
#lef {
  position: absolute;
  right: 0;
  width: 76%;
  overflow: hidden;
  list-style: none;
}

#lef li {
  width: 100%;
  height: 128px !important;
  text-align: center;
  box-sizing: border-box;
}

#btn {
  position: absolute;
  right: 10px;
  /* bottom: 5px; */
}
</style>