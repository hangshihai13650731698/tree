<template>
  <div class="profile-3g0uv">
    <div class="index-18Ili" style="width: 30vw; height: 120px;">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="
      />
    </div>
    <div>
      <span style="position: absolute;
    right: 8vw;
    top: 3vw;" @click="goto('/quit')">个人设置</span>
      <p>
        <!-- 注意语法点击后路由切换到登录页 -->

        <span class="span1" @click="goto('/login')">{{username}}</span>
        <span class="span2" @click="goto('/zhuce')">{{username1}}</span>
        <span class="jin" @click="goto('/login')">></span>
      </p>
      <p>口{{userphone}}</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
export default {
  data() {
    return {
      username: "",
      userphone: "",
      username1: ""
    };
  },
  created() {
    // keep-alive的意思是不用每次切换都要等数据很久，而是缓存过的会保留
    // 方法1取出本地状态判断
    // let user=1;
    this.getuser();
  },
  activated(){
     this.getuser();
  },
  methods: {
    // 判断号码的有无
    getuser() {
      let user = localStorage.phone;
      //  let user=1;
      if (user) {
        this.username = "35a200f78hhh";
        this.userphone = 15777716150;
        window.console.log(88);
      } else {
        this.username = "登录/";
        this.username1 = "注册";
        this.userphone = "登录后享受更多特权";
      }
    },
    goto(path) {
      window.console.log(8888);
      this.$router.push(
        path
        // name: "/login",
        // params: { id: index }
      );
    }
  }
};
</script>

<style>
.profile-3g0uv {
  height: 68px;
  display: flex;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  padding: 6.666667vw 4vw;
  color: #fff;
}

.index-18Ili img {
  border-radius: 50%;
  width: 80px;
  height: 80px;
}
.span1 {
  color: white;
  font-size: 1.56rem;
}
.span2 {
  color: white;
  font-size: 1.56rem;
}
.jin {
  position: absolute;
  right: 15px;
  color: white;
}
</style>
