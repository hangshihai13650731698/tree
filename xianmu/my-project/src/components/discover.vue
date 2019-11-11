<template>
  <div>
    <section class="parts unmerge" style="height:888px;background-color:#f5f5f5;">
      <div class="entry list3">
        <a ubt-click="1757" ubt-data-url="https://h5.ele.me/exchange/" class>
          <div class="content-wrapper">
            <p class="title" style="color: rgb(255, 153, 0);">金币商城</p>
            <p class="tips">0元好物在这里</p>
          </div>
          <img
            loading
            class="icon"
            src="https://cube.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?x-oss-process=image/format,webp"
          />
          <img style="display: none;" />
        </a>
        <a ubt-click="1757" ubt-data-url="https://h5.ele.me/commend/#/" class>
          <div class="content-wrapper">
            <p class="title" style="color: rgb(27, 169, 225);">推荐有奖</p>
            <p class="tips">20元现金拿不停</p>
          </div>
          <img
            loading
            class="icon"
            src="https://cube.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?x-oss-process=image/format,webp"
          />
          <img style="display: none;" />
        </a>
        <a ubt-click="1757" ubt-data-url="/discover/koubei/" class>
          <div class="content-wrapper">
            <p class="title" style="color: rgb(237, 102, 96);">周边优惠</p>
            <p class="tips">领取口碑好券</p>
          </div>
          <img
            loading
            class="icon"
            src="https://cube.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?x-oss-process=image/format,webp"
          />
          <img style="display: none;" />
        </a>
      </div>
      <!-- 头顶 -->
      <!-- 底部 -->
      <section>
        <div class="activity-header">
          <span class="line left"></span>
          <svg class="activity-icon">
            <use xlink:href="#alarm" />
          </svg>
          限时好礼
          <span class="line right"></span>
        </div>
        <p class="activity-sub-title">金币换豪礼</p>
        <div class="activity-body">
          <a
            ubt-data-title="限时好礼"
            ubt-click="951"
            ubt-data-sort_index="0"
            ubt-data-requrest_id
            class="discover-food"
          >
            <img
              src="https://cube.elemecdn.com/e/02/d86b57a31e7a0740ab3af99bdd97cjpeg.jpeg?x-oss-process=image/format,webp"
              width="300"
              height="322"
            />
            <div>
              <p class="food-name ui-ellipsis">3元品质联盟红包</p>
              <div class="food-info clearfix">
                <div class="food-price">
                  <span class="price ui-ellipsis">
                    <span>90金币</span>
                    <!---->
                  </span>
                  <del class="original-price ui-ellipsis">¥3</del>
                </div>
              </div>
            </div>
            <span class="discount">限时优惠</span>
          </a>
          <a
            ubt-data-title="限时好礼"
            ubt-click="951"
            ubt-data-sort_index="1"
            ubt-data-requrest_id
            class="discover-food"
          >
            <img
              src="https://cube.elemecdn.com/2/20/b0d0d94605fc31b9ee3ab651aa7c4jpeg.jpeg?x-oss-process=image/format,webp"
              width="300"
              height="322"
            />
            <div>
              <p class="food-name ui-ellipsis">数码经络按摩仪</p>
              <div class="food-info clearfix">
                <div class="food-price">
                  <span class="price ui-ellipsis">
                    <span>9金币</span>
                  </span>
                  <del class="original-price ui-ellipsis">¥239</del>
                </div>
              </div>
            </div>
            <span class="discount">特价换购</span>
          </a>
          <a
            ubt-data-title="限时好礼"
            ubt-click="951"
            ubt-data-sort_index="2"
            ubt-data-requrest_id
            class="discover-food"
          >
            <img
              src="https://cube.elemecdn.com/f/93/a096dd082d6c42f600e460fffaa39jpeg.jpeg?x-oss-process=image/format,webp"
              width="300"
              height="322"
            />
            <div>
              <p class="food-name ui-ellipsis">机械手感背光键盘套装</p>
              <div class="food-info clearfix">
                <div class="food-price">
                  <span class="price ui-ellipsis">
                    <span>9金币</span>
                  </span>
                  <del class="original-price ui-ellipsis">¥130</del>
                </div>
              </div>
            </div>
            <span class="discount">特价换购</span>
          </a>
        </div>
        <div class="activity-recommend wall-16TaH"></div>

        <p class="activity-more" @click="goto('/more')">
          查看更多
          <svg class="svg-next">
            <use xlink:href="#tab_found_next_page" />
          </svg>
        </p>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
.discover {
  padding-bottom: 0.013333rem;
  padding-bottom: 0.133333vw;
}

section {
  margin-bottom: 0.28rem;
  margin-bottom: 2.8vw;
  background: #fff;
  border-top: 1px solid #eee;
  border-bottom: 0.013333rem solid #eee;
  border-bottom: 0.133333vw solid #eee;
}

section.parts {
  border-bottom: none;
  background: transparent none repeat 0 0 / auto auto padding-box border-box
    scroll;
  background: initial;
}

.unmerge > .entry:first-child {
  margin-bottom: 0.28rem;
  margin-bottom: 2.8vw;
}

.unmerge > .entry:last-child {
  border-top: 1px solid #ededed;
}

.entry {
  border-width: 1px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: -webkit-flex;
  display: flex;
  background: #fff;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}

.entry:first-child {
  border-top: 0;
}

.entry .content-wrapper {
  max-width: 3rem;
  max-width: 30vw;
}

.entry a {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: center;
  align-items: center;
  width: 100%;
  height: 2.133333rem;
  height: 21.333333vw;
  padding: 0 0.4rem;
  padding: 0 4vw;
  border-bottom: 1px solid #ededed;
}

.entry .sub-pic-hash {
  height: 2.4rem;
  height: 24vw;
  padding: 0;
}

.entry .sub-pic-hash img {
  width: 100%;
}

.entry .icon {
  width: 1.6rem;
  width: 16vw;
}

.entry .title {
  line-height: 1.2;
  font-size: 0.426667rem;
  margin-bottom: 0.16rem;
  margin-bottom: 1.6vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.entry .title img {
  width: 0.48rem;
  width: 4.8vw;
  margin-right: 0.066667rem;
  margin-right: 0.666667vw;
  vertical-align: middle;
}

.entry .tips {
  line-height: 1.2;
  font-size: 0.32rem;
  color: #999;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.entry.list2 a:first-child,
.entry.list3 a:first-child {
  border-right: 1px solid #ededed;
}

.entry.list2 a {
  width: 50%;
  float: left;
}

.entry.list2 a:nth-child(odd) {
  border-right: 1px solid #ededed;
}

.entry.list2 .icon {
  width: 1.2rem;
  width: 12vw;
}

.entry.list3 {
  position: relative;
}

.entry.list3 a {
  width: 50%;
}

.entry.list3 a:nth-child(3n + 1) {
  border-right: 1px solid #ededed;
}

.entry.list3 .icon {
  width: 1.2rem;
  width: 12vw;
}

.entry.list3 a:first-child {
  position: absolute;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  -webkit-align-items: normal;
  align-items: normal;
  height: 4.266667rem;
  height: 42.666667vw;
  padding: 0.586667rem 0.293333rem 0.16rem 0.426667rem;
  padding: 5.866667vw 2.933333vw 1.6vw 4.266667vw;
}

.entry.list3 a:first-child .icon {
  -webkit-align-self: flex-end;
  align-self: flex-end;
  width: 2rem;
  width: 20vw;
}

.entry.list3 a:nth-child(2),
.entry.list3 a:nth-child(3) {
  margin-left: 50%;
}

.entry.list2 .sub-pic-hash,
.entry.list3 .sub-pic-hash {
  width: 100%;
}

.activity-header {
  padding-top: 0.52rem;
  padding-top: 5.2vw;
  text-align: center;
  font-size: 0.48rem;
  font-weight: 700;
  color: #333;
}

.activity-icon {
  position: relative;
  top: 0.053333rem;
  top: 0.533333vw;
  width: 0.44rem;
  width: 4.4vw;
  height: 0.44rem;
  height: 4.4vw;
}

.line {
  display: inline-block;
  margin: 0.213333rem 0.093333rem 0.173333rem;
  margin: 2.133333vw 0.933333vw 1.733333vw;
  border: 1px solid #333;
  width: 0.4rem;
  width: 4vw;
  height: 0;
  position: relative;
}

.line:after {
  position: absolute;
  top: -0.066667rem;
  top: -0.666667vw;
  content: "";
  background: #333;
  height: 0.133333rem;
  height: 1.333333vw;
  width: 0.133333rem;
  width: 1.333333vw;
  border-radius: 50%;
}

.line.left:after {
  right: -0.066667rem;
  right: -0.666667vw;
}

.line.right:after {
  left: -0.066667rem;
  left: -0.666667vw;
}

.activity-sub-title {
  font-size: 0.293333rem;
  color: #999;
  text-align: center;
  padding-bottom: 0.213333rem;
  padding-bottom: 2.133333vw;
}

.activity-more,
.gift-list-more {
  font-size: 0.346667rem;
  color: #999;
  text-align: center;
  padding: 0.4rem 0 0.48rem;
  padding: 4vw 0 4.8vw;
}

.activity-more {
  padding-top: 0;
}

.activity-body {
  padding: 0.32rem 0 0.4rem 0.4rem;
  padding: 3.2vw 0 4vw 4vw;
  white-space: nowrap;
}

.discover-food {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 2.96rem;
  width: 29.6vw;
  margin-right: 0.16rem;
  margin-right: 1.6vw;
}

.discover-food img {
  width: 4.32rem;
  width: 30vw;
  height: 2.933333rem;
  height: 29.333333vw;
  margin-bottom: 0.253333rem;
  margin-bottom: 2.533333vw;
}

.discover-food .discount {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.293333rem;
  color: #fff;
  background: #413d3c;
  padding: 0.066667rem;
  padding: 0.666667vw;
}

.discover-food .food-name {
  font-size: 0.346667rem;
  color: #333;
  margin-bottom: 0.133333rem;
  margin-bottom: 1.333333vw;
}

.discover-food .food-price {
  height: 0.64rem;
  height: 6.4vw;
  line-height: 0.64rem;
  line-height: 6.4vw;
}

.discover-food .price {
  font-size: 0.346667rem;
  height: 0.48rem;
  height: 4.8vw;
  line-height: 0.48rem;
  line-height: 4.8vw;
  color: #ff5339;
  margin-right: 0.093333rem;
  margin-right: 0.933333vw;
  max-width: 1.333333rem;
  max-width: 13.333333vw;
  display: inline-block;
  vertical-align: middle;
}

.discover-food .price .yuan {
  font-size: 0.293333rem;
}

.discover-food .original-price {
  font-size: 0.293333rem;
  color: #aaa;
  max-width: 1.066667rem;
  max-width: 10.666667vw;
  display: inline-block;
  vertical-align: middle;
}

.discover-food .grab {
  float: right;
  font-size: 0.4rem;
  color: #fff;
  background: #f94843;
  padding: 0.12rem 0.333333rem;
  padding: 1.2vw 3.333333vw;
  border-radius: 0.08rem;
  border-radius: 0.8vw;
  line-height: 0.4rem;
  line-height: 4vw;
}

.clearfix:after,
.clearfix:before {
  display: table;
  line-height: 0;
  content: "";
  clear: both;
}

.svg-next {
  height: 0.24rem;
  height: 2.4vw;
  width: 0.133333rem;
  width: 1.333333vw;
  margin-left: 0.146667rem;
  margin-left: 1.466667vw;
}

.swipe {
  height: 2.866667rem;
  height: 28.666667vw;
  color: #fff;
}

.swipe img {
  width: 100%;
}

.ui-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.activity-recommend {
  padding-bottom: 0.4rem;
  padding-bottom: 4vw;
}

.top-banner {
  line-height: 1;
  width: 100%;
  display: block;
}

body[data-v-1421ee24],
html[data-v-1421ee24] {
  -webkit-text-size-adjust: 100%;
}

.order-item[data-v-1421ee24] {
  display: -webkit-flex;
  display: flex;
  background: #fff;
  padding: 0.4rem;
  padding: 4vw;
}

.order-owner[data-v-1421ee24] {
  margin-right: 0.2rem;
  margin-right: 2vw;
  padding-top: 0.026667rem;
  padding-top: 0.266667vw;
}

.order-owner img[data-v-1421ee24] {
  width: 0.8rem;
  width: 8vw;
  border-radius: 50%;
}

.order-detail[data-v-1421ee24] {
  -webkit-flex: 1;
  flex: 1;
}

.owner-name[data-v-1421ee24] {
  font-size: 0;
  color: #666;
  margin-bottom: 0.08rem;
  margin-bottom: 0.8vw;
  padding-left: 0.266667rem;
  padding-left: 2.666667vw;
}

.owner-name .name[data-v-1421ee24] {
  font-size: 0.293333rem;
  font-weight: 700;
}

.owner-name .tag[data-v-1421ee24] {
  display: inline-block;
  margin-left: 0.12rem;
  margin-left: 1.2vw;
  font-size: 0.266667rem;
  color: #f94843;
  border: 1px solid #fda4a2;
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  padding: 0 0.053333rem;
  padding: 0 0.533333vw;
}

.rating[data-v-1421ee24] {
  font-size: 0.293333rem;
  color: #999;
  padding: 0 0.266667rem;
  padding: 0 2.666667vw;
}

.rating .rating-star[data-v-1421ee24] {
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
  position: relative;
  top: 0.026667rem;
  top: 0.266667vw;
}

.rating .rating-star .star[data-v-1421ee24] {
  fill: #ff9a0d;
  width: 0.28rem;
  width: 2.8vw;
  height: 0.28rem;
  height: 2.8vw;
}

.comment[data-v-1421ee24] {
  font-size: 0.32rem;
  color: #666;
  padding: 0 0.266667rem;
  padding: 0 2.666667vw;
  margin-top: 0.213333rem;
  margin-top: 2.133333vw;
  margin-bottom: 0.32rem;
  margin-bottom: 3.2vw;
  word-break: break-all;
}

.comment .ellipsis[data-v-1421ee24] {
  display: none;
}

.comment .unfold[data-v-1421ee24] {
  color: #3190e8;
  cursor: pointer;
  margin-top: 0.066667rem;
  margin-top: 0.666667vw;
  display: inline-block;
}

.comment.overflow .ellipsis[data-v-1421ee24] {
  display: inline;
  display: initial;
}

.comment.overflow .unfold[data-v-1421ee24] {
  display: inline-block;
}

.comment.overflow .sub-text[data-v-1421ee24] {
  display: none;
}

.foods[data-v-1421ee24] {
  border-bottom: 0.026667rem solid #eee;
  border-bottom: 0.266667vw solid #eee;
  padding: 0.266667rem 0.133333rem 0 0.266667rem;
  padding: 2.666667vw 1.333333vw 0 2.666667vw;
  background: #f9f9f9;
}

.foods .restaurant[data-v-1421ee24] {
  font-size: 0.266667rem;
  color: #999;
  margin-bottom: 0.266667rem;
  margin-bottom: 2.666667vw;
}

.foods .restaurant .shop-icon[data-v-1421ee24] {
  position: relative;
  top: 0.026667rem;
  top: 0.266667vw;
  margin-right: 0.08rem;
  margin-right: 0.8vw;
  width: 0.226667rem;
  width: 2.266667vw;
  height: 0.226667rem;
  height: 2.266667vw;
}

.foods .restaurant .restaurant-name[data-v-1421ee24] {
  font-weight: 700;
  color: #888;
}

.foods .restaurant .restaurant-data[data-v-1421ee24] {
  float: right;
}

.foods .food[data-v-1421ee24] {
  display: inline-block;
  position: relative;
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
  margin-bottom: 0.266667rem;
  margin-bottom: 2.666667vw;
  width: 2.466667rem;
  width: 24.666667vw;
  height: 2.466667rem;
  height: 24.666667vw;
  min-width: 31%;
}

.foods .food .food-amount[data-v-1421ee24] {
  position: absolute;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  font-size: 0.24rem;
  font-weight: 700;
  color: #fff;
  padding: 0 0.053333rem;
  padding: 0 0.533333vw;
  border-bottom-left-radius: 0.08rem;
  border-bottom-left-radius: 0.8vw;
}

.foods .food img[data-v-1421ee24] {
  width: 100%;
  height: 100%;
  max-height: 2.48rem;
  max-height: 24.8vw;
  margin: 0;
}

.foods .food .food-name[data-v-1421ee24] {
  position: absolute;
  width: 100%;
  bottom: 0;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAABaCAYAAACSa4e+AAAAAXNSR0IArs4c6QAAAUFJREFUKBVVUkuug0AMC0lA9ALsOQXL3v843fFpy7OdMughtRqc+JMwcZ6nd3jSzPz5fFosy9LP8+w5TVO8Xi/zdV3j8Xh4juPo+753/vl8chgGz23bvO97Yyne77cl/gJalt/vVwc2Bx4XAvRMII6DJdwDEt3dDLEgmvAJNpPOhMmERIrVvBIF6RzHoYPLnTGuuShoikEJ6cDUGIM9xYKy5mLmaHnULEHUAwRzKDNPkE5j0+oUjD3NlM3U4aSdmqUDuBbOKYF0Ci8dItJhD146eql8WwDmSynzoLnIVONlypFPOnMbyRITaOTaD0o1eztQA7/6cDiI3rZBVn0mbYwsums/YkGeyKmRW7N6UNdc9ycgItYvYbst90241qLVlVdjcT/a8w/5zyKz7tjlXuHBSoVHmestU+m0cQCXV0Murz+WU14hDV2l3wAAAABJRU5ErkJggg==);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  font-size: 0.293333rem;
  font-weight: 700;
  color: #fff;
  padding: 0.56rem 0.12rem 0.133333rem;
  padding: 5.6vw 1.2vw 1.333333vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.order-footer[data-v-1421ee24] {
  position: relative;
  padding: 0.266667rem;
  padding: 2.666667vw;
  background: #fcfcfc;
  min-height: 1.333333rem;
  min-height: 13.333333vw;
}

.price[data-v-1421ee24] {
  background: #fcfcfc;
  font-size: 0.32rem;
  font-weight: 700;
  color: #666;
  margin-top: 0.133333rem;
  margin-top: 1.333333vw;
}

.price .amount[data-v-1421ee24] {
  position: relative;
  top: 0.026667rem;
  top: 0.266667vw;
  font-size: 0.426667rem;
  color: #ff6000;
  margin: 0 0.133333rem;
  margin: 0 1.333333vw;
}

.price .reduce[data-v-1421ee24] {
  font-size: 0.24rem;
  color: #ff6000;
}

.benefit[data-v-1421ee24] {
  font-size: 0.266667rem;
  color: #666;
  max-width: 4.8rem;
  max-width: 48vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.benefit span[data-v-1421ee24] {
  line-height: 0.266667rem;
  line-height: 2.666667vw;
  display: inline-block;
  padding: 0.04rem;
  padding: 0.4vw;
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  background-color: #f88615;
  color: #fff;
}

.buy[data-v-1421ee24] {
  display: block;
  position: absolute;
  right: 0.333333rem;
  right: 3.333333vw;
  top: 0.266667rem;
  top: 2.666667vw;
  padding: 0.133333rem 0.533333rem;
  padding: 1.333333vw 5.333333vw;
  border: 1px solid #3190e8;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  font-size: 0.346667rem;
  color: #3190e8;
}

.recommend-36uLI {
  display: inline-block;
  position: relative;
  width: 4.6rem;
  width: 46vw;
  background: #fff;
  border: 1px solid #eee;
  text-align: left;
}

.recommend-36uLI:active {
  opacity: 0.9;
}

.recommend-2Mcp6 {
  display: block;
  width: 4.6rem;
  width: 46vw;
  height: 4.6rem;
  height: 46vw;
}

.recommend-1NWp9 {
  position: absolute;
  top: 4.066667rem;
  top: 40.666667vw;
  left: 0;
  right: 0;
  height: 0.533333rem;
  height: 5.333333vw;
  line-height: 0.533333rem;
  line-height: 5.333333vw;
  text-align: center;
  font-size: 0.266667rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
}

.recommend-1XTm_,
.recommend-2_Rj-,
.recommend-2HWZI {
  margin: 0 0.213333rem 0 0.266667rem;
  margin: 0 2.133333vw 0 2.666667vw;
}

.recommend-2_Rj- {
  padding-top: 0.106667rem;
  padding-top: 1.066667vw;
}

.recommend-2HWZI {
  padding-bottom: 0.08rem;
  padding-bottom: 0.8vw;
}

.recommend-3MjdR {
  overflow: hidden;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
  font-size: 0.4rem;
}

.recommend-2wozE {
  margin-top: 0.08rem;
  margin-top: 0.8vw;
  color: #666;
  font-size: 0.266667rem;
}

.recommend-2HWZI {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}

.recommend-2lnd7 {
  font-size: 0.426667rem;
}

.recommend-2Nr2c {
  margin-left: 0.133333rem;
  margin-left: 1.333333vw;
  padding: 0 0.053333rem;
  padding: 0 0.533333vw;
  border: 1px solid #f66d6b;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  color: #f66d6b;
  font-size: 0.266667rem;
}

.recommend-1XTm_,
.recommend-2Nr2c {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}

.recommend-1XTm_ {
  height: 0.88rem;
  height: 8.8vw;
  border-top: 1px dashed #ccc;
}

.recommend-evJyV {
  display: -webkit-flex;
  display: flex;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-align-items: center;
  align-items: center;
  overflow: hidden;
}

.recommend-evJyV svg {
  display: block;
  -webkit-flex: 0 0 0.266667rem;
  -webkit-flex: 0 0 2.666667vw;
  flex: 0 0 0.266667rem;
  flex: 0 0 2.666667vw;
  width: 0.266667rem;
  width: 2.666667vw;
  height: 0.266667rem;
  height: 2.666667vw;
  fill: #bbb;
}

.recommend-evJyV span {
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  overflow: hidden;
  margin-left: 0.16rem;
  margin-left: 1.6vw;
  color: #999;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.293333rem;
}

.price-1qtfb {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: baseline;
  align-items: baseline;
}

.price-1qtfb i {
  margin-right: 0.04rem;
  margin-right: 0.4vw;
  font-style: normal;
}

.price-1bP9Q {
  color: #ff6000;
  font-size: 1em;
}

.price-1bP9Q i {
  font-size: 0.65em;
}

.price-1bP9Q span {
  font-weight: 700;
}

.price-cQGHJ {
  margin-left: 0.106667rem;
  margin-left: 1.066667vw;
  color: #999;
  font-size: 0.65em;
}

.wall-16TaH {
  padding-left: 0.133333rem;
  padding-left: 1.333333vw;
}
.wall-16TaH > * {
  margin: 0.12rem;
  margin: 1.2vw;
}
</style>