<template>
  <div>
    <div class="LoginHeader-1jXn6">
      <img src="//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" class="LoginHeader-85WpV" />
    </div>
    <div class="newlog_con">
      <div class="zc_dl">
        <h4 class="nzc zc_con">新用户注册</h4>
        <span class="liner">|</span>
        <h4 class="ddl zc_con">
          已有账号
          <a
            href="###"
            @click="goto('/login')"
            id="go_login"
            class="go_login"
            style="color: blue;"
          >登录</a>
        </h4>
      </div>
      <!--=================注册账号（11）================= -->
      <div class="reg_con shouji">
        <input type="text" placeholder="请输入手机号(11)" class="yz yz_shouji" id="yz_shouji" />
        <p id="verifyUserNameMsg"></p>
      </div>
      <!-- =================注册密码（6-20） =================-->
      <div class="reg_con mima">
        <input type="password" placeholder="密码(6-20)" class="yz yz_mima" id="yz_mima" />
      </div>

      <!-- =================注册按钮================= -->
      <div class="reg_con zc_btn">
        <a href="###" id="zhuce">注册</a>
      </div>
      <div class="tips">
        <p>
          <input type="radio" id="radios" name="radio" />
          我同意饿了么
          <a href>《用户使用协议》</a>
        </p>
        <a href="https://www.baidu.com/">遇到问题？</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goto(path) {
      window.console.log(8888);
      this.$router.push(
        path
      );
    }
  }
};
</script>

<style>
.newlog_con {
  border-top: 1px solid #888;
  width: 322px;
  height: 100%;
  margin: auto;
  box-sizing: border-box;
}

.newlog_con .zc_dl {
  width: 100%;
  height: 24px;
  margin: 40px 0;
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  text-align: center;
  line-height: 24px;
}

.newlog_con .zc_dl .zc_con {
  margin-top: 40px;
  padding-bottom: 30px;
}

.newlog_con .zc_dl .liner {
  margin-top: 40px;
}

.newlog_con .reg_con {
  width: 317px;
  height: 42px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin-top: 20px;
}

.newlog_con .reg_con span {
  display: inline-block;
  width: 27px;
  height: 42px;
  line-height: 100%;
  text-align: center;
}

.newlog_con .reg_con .yz {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: none;
  background: #9996f438;
}

.newlog_con .zc_btn {
  background: #195;
  line-height: 42px;
  text-align: center;
}

.newlog_con .zc_btn a {
  color: white;
}

.newlog_con .tips {
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 14px;
}

.newlog_con .tips p a {
  color: red;
}

.newlog_con .tips a {
  color: #666;
}
</style>