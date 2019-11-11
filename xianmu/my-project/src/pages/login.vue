<template>
  <div>
    <div class="App-1EAON">
      <!---->
      <div class="App-3Q8Qb">
        <!-- 标题 -->
        <div class="LoginHeader-1jXn6">
          <img
            src="//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png"
            class="LoginHeader-85WpV"
          />
        </div>
        <!---->

        <!-- 表单 -->
        <div>
          <form class="MessageLogin-iYvWA" ref="regForm">
            <section class="MessageLogin-FsPlX">
              <input type="tel" maxlength="11" v-model="phone" placeholder="手机号" />
              <button
                disabled="disabled"
                class="CountButton-3e-kd"
                ubt-click="101161"
                data-spm-anchor-id="a2ogi.12119171.0.i0"
              >
              <!-- 获取验证码 -->
                <van-button style="color:blue"   :disabled="disabled" :text="btnTitle" @click="huoqu" />
                <!-- <button >{{btnTitle}}</button> -->
              </button>
            </section>
            <!-- 提醒 -->
            <div style="color:red">{{error}}</div>

            <section class="MessageLogin-FsPlX">
              <input type="tel" maxlength="8" v-model="password" placeholder="验证码" />
            </section>
            <div id="_umfp" style="display: inline; width: 1px; height: 1px; overflow: hidden;"></div>
            <div id="slideVerify" class="nc-container"></div>
            <section class="MessageLogin-15xD9">
              新用户登录即自动注册，并表示已同意
              <a
                href="//h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&amp;key=ruleQue18"
              >《用户服务协议》</a>
              和
              <a
                href="http://terms.alicdn.com/legal-agreement/terms/suit_bu1_other/suit_bu1_other201903051859_43484.html"
              >《隐私权政策》</a>
            </section>
            <!-- 点击登录验证正确则跳转到首页 -->
            <button class="SubmitButton-2wG4T" @click="handleLogin" :disabled="isClick">登录</button>
          </form>
          <!---->
          <a href="javascript:;" class="MessageLogin-31EIr">关于我们</a>
        </div>
      </div>
      <!---->
    </div>
    <div>
      <!-- <van-button type="primary" text="显示遮罩层" @click="show = true" /> -->
      <!-- <van-overlay :show="show" @click="show = false" /> -->
      <!-- 遮罩 -->
      <div class="Captcha-wrapper_mYEHRq0" v-if="show">
        <div class="Captcha-dialog_S_fJM6F">
          <p class="Captcha-title_3K2-BwV">请填写图形验证码</p>
          <div class="Captcha-captcha_1sciDlS">
            <div>
              <input />
            </div>
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAYAEADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0++1kad4ogtBIsVmQWkULgbiSSfxJzW/ZX0V6rmN0ba2Mo2QRXGarZf2j4xliaFpUSMFlTqRTfDrNp/iK7ggtZ2QL/q8jIq3G6OCNVqdntct31xPp/iTU5UkKCWAHrjJAwD74pNP8Q6mdEjmYrNcSXIiG4dqh8V3NxLcRJ9iaIyr5YLYyeao6Ol1/aIsvJd0hk80oCN2RTtdakOVp2T/pnS69NrLTxW2nK6+YvzOvGPXntVPTJdT07xImn3Vw9ykqg+Y5ycDP/wBetu51G9FvIYdNm8zHy5IxmuTt77UdL8QpcajZsZLn5FAbj8Pekk2rGk5JSUrv9DstZv203S5rlF3OowB7muU0+41K38RWtxfSuy3YEYx0x2H05/nSeMNQubo29lHDLCznJViMN6VDYWmuza1pyagrmO3kVgewH170KNo6kzqOVSyT0sSTX91b+N7p7O3adifKKj1xn+hP4V0GgaRcWc1ze3m37TcNkhf4R6UUUpPoaUoXbk+7Ha1o82pX9hMjKEt33OD3rM0XTpovE2qOweNiMqxHZicEfkfyNFFJSdrFSprmT8/0N3U7u9sbKOS3tmu5QQGVB1HrXKz22r+ItQt/tFpNaJC25XkQ9PSiikpWHOnz7vTsaXifQbm/8iezG+eMAEFsDiq9vceIzd2trc2bpGMKZ41yVzxuzyOOvNFFHNpYHSu7p2P/2Q=="
            />
          </div>
          <p class="Captcha-error_2_9Csz_">
            <!---->
          </p>
          <div class="Captcha-operation_VaFJBx-">
            <button class="Captcha-cancel_32LMCMX" @click="show=false">取消</button>
            <button class="Captcha-ok_2tFUQc1">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Overlay } from "vant";
Vue.use(Overlay);
export default {
  data() {
    return {
      disabled: false, //是否可点击
      show: false,
      // ruleForm:{
      phone: "",
      password: "",
      error: "",
      btnTitle: "获取验证码",
      mima:693488,
      user:''
      // },
      // rules:{
      //   password:[{required:true,mesage:'请输入密码',trigger:'blur'}],
      //   phone:[{
      //     required:true,message:'请输入手机号',trigger:'blur'
      //   }]
      // }
    };
  },
  methods: {
    async huoqu() {
    
      let phone =String(this.phone);
    //  let num= String(phone)
     window.console.log(phone)
      if (this.validatePhone()) {
        //先检查号码格式和非空
        this.validateBtn(); //调用倒计时方法
        //点击获取验证码
        // let code = await this.$axios.post("http://localhost:5000/duanxin", {
        // // post不用panrem带参数
        //     phone:phone,
        //     key:'dbbb545f3d0182eb7f17a295773a8564',
        //     tpl_id:197158
        // });
        // // 由于返回的密码在code对象里面，所以要取出来后转换成数据类型
        //   this.mima=parseInt(code.data)
        // // 验证码
        // // window.console.log(code);
        window.console.log(this.mima)
      } else {
        // window.alert("请输入手机号码");
      }

      // })
    },

    // 倒计时点击
    validateBtn() {
      let time = 60;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.btnTitle = "获取验证码";
           this.disabled = false;
        } else {
          // 倒计时
          this.btnTitle = time + "秒后重试";
           this.disabled = true;
          time--;
        }
      }, 1000);
    },

    validatePhone() {
      // 验证手机号码
      if (!this.phone) {
        // window.alert("手机号码不能为空");
        this.error = "手机号码不能为空";
        return false;
      } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
        window.console.log("请填写正确的手机号码");
        this.error = "请填写正确的手机号码";
        return false;
      }
      // 验证正确时
      else {
        this.error = "";
        return true;
      }
    },
    // 点击登录发送请求
    handleLogin() {
      // 点击发送校验
      this.error = "";
      if (this.password==this.mima) {
        window.console.log('成功')
        localStorage.phone=this.phone;
        this.$router.push('/main/shezhi')
        //  localStorage.setItem("ele_login", true);
      //     this.$store.dispatch("setzhuangTai", {
      //   num: this.jishu++ //传个形参过去
      // });
      }
      else{
        this.error='验证码错误';
      }
      // this.$axios
      //   .post('"http://localhost:5000/duanxin', {
      //     phone: this.phone,
      //     code: this.password
      //   })
      //   .then(res => {
      //     window.console.log(res);
      //     //登录成功保存在本地
      //     localStorage.setItem("ele_login", true);
      //   })
      //   // 拦截错误
      //   .catch(error => {
      //     this.error = error.respose.data.msg;
      //   });
    }
  },
  computed: {
    // 判断是否可以点击登录
    isClick() {
      //手机号和验证码都不能为空
      if (!this.phone || !this.password) {
        return true;
      } else {
        return false;
      }
    },
    // disabled要为ture时才是禁止使用
    // Click(){
    //   if (!this.phone) {
    //     return true
    //   }else{
    //     return false
    //   }
    // }
  }
};
</script>

<style>
.van-button{
  border: none;
}
input{
  width: 94% !important;
}
.SubmitButton-2wG4T{
  width: 94% !important;
}
.Captcha-wrapper_mYEHRq0 {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.4);
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
}
.Captcha-dialog_S_fJM6F {
  width: 77.333333vw;
  background: hsla(0, 0%, 100%, 0.9);
  border-radius: 1.333333vw;
  animation: Captcha-showAlert_24ewgzq 0.3s;
}
.Captcha-title_3K2-BwV {
  margin: 0.586667rem 0;
  text-align: center;
  font-size: 0.533333rem;
  font-weight: 700;
  color: #000;
}
.Captcha-operation_VaFJBx- {
  display: flex;
  border-top: 0.133333vw solid #ddd;
}
/* n内容框 */
.Captcha-captcha_1sciDlS {
  margin: 0 3.733333vw;
  background: #fff;
  display: flex;
}
/* 按钮 */
.Captcha-operation_VaFJBx- button {
  height: 11.733333vw;
  background: none;
  font-size: 0.453333rem;
  flex: 1;
  border-right: 0.133333vw solid #ddd;
  color: #666;
}

.Captcha-operation_VaFJBx- .Captcha-ok_2tFUQc1 {
  height: 11.733333vw;
  background: none;
  flex: 1;
  color: #3190e8;
  font-weight: 700;
}
.LoginHeader-1jXn6 {
  text-align: center;
  margin-top: 40px;
}
.LoginHeader-1jXn6 img {
  height: 56px;
}
.MessageLogin-iYvWA {
  margin-top: 16px;
}

*,
:after,
:before {
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent;
}
.MessageLogin-FsPlX {
  position: relative;
  margin-bottom: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.MessageLogin-FsPlX > input {
  width: 100%;
  height: 100%;
  left: 0;
  padding-left: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #333;
  -webkit-appearance: none;
}
body,
html {
  width: 100%;
  height: 100%;
  font-size: 12px;
  background: #fff;
}

.App-1EAON {
  width: 100%;
  height: 100%;
}

.App-3Q8Qb {
  width: 300px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: center;
  justify-content: center;
  margin: 0 auto;
}

.App-3Q8Qb > div:last-child {
  min-height: 296px;
}

.App-PZaG3 .App-3Q8Qb,
.App-PZaG3 .App-OjtAb {
  opacity: 0.4;
}

.App-OjtAb {
  -webkit-justify-content: center;
  justify-content: center;
  position: relative;
  width: 100%;
  background: #f5f5f5;
}

.App-1EAON,
.App-OjtAb {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
}

.App-1EAON {
  -webkit-align-items: center;
  align-items: center;
}

.App-1EAON > div:first-child {
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
}

.App-1EAON > div:first-child + div {
  -webkit-flex: 0 0 104px;
  flex: 0 0 104px;
}

@media (max-width: 768px) {
  .App-1EAON {
    height: auto;
    min-height: 100%;
    padding-top: 40px;
  }

  .App-3Q8Qb {
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
  }

  .App-OjtAb {
    background: #fff;
    -webkit-justify-content: space-between;
    justify-content: space-between;
  }
}

.MessageLogin-31EIr {
  display: none;
  margin-top: 20px;
  text-align: center;
  color: #999;
}

@media (max-width: 768px) {
  .MessageLogin-31EIr {
    display: block;
  }
}

.MessageLogin-FsPlX {
  position: relative;
  margin-bottom: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}

.MessageLogin-FsPlX > * {
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 10px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.MessageLogin-FsPlX > input {
  width: 100%;
  height: 100%;
  left: 0;
  padding-left: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #333;
  -webkit-appearance: none;
}

.MessageLogin-FsPlX > input::-webkit-input-placeholder {
  color: #999;
}

.MessageLogin-FsPlX > input::placeholder {
  color: #999;
}

.MessageLogin-FsPlX > input:focus {
  border-color: #0089dc;
}

.MessageLogin-1LX22 {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}

.MessageLogin-1LX22 img {
  display: block;
  width: 85px;
  height: 32px;
}

.MessageLogin-12c03 {
  margin-left: 10px;
  color: #666;
  font-size: 12px;
  line-height: 14px;
}

.MessageLogin-12c03 > span {
  color: #2395ff;
  cursor: pointer;
}

.MessageLogin-15xD9 {
  margin-top: 12px;
  color: #999;
  font-size: 14px;
  line-height: 20px;
}

.MessageLogin-15xD9 a {
  color: #2395ff;
}

.MessageLogin-iYvWA {
  margin-top: 16px;
}

.CountButton-3e-kd {
  padding: 0;
  border-radius: 6px;
  color: #2395ff;
  background: transparent;
  text-align: center;
  font-size: 14px;
  border: navajowhite;
}

.CountButton-3e-kd[disabled] {
  color: #ccc;
}

.SubmitButton-2wG4T {
  display: block;
  width: 100%;
  height: 42px;
  margin-top: 30px;
  border-radius: 4px;
  background: #4cd96f;
  color: #fff;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  line-height: 42px;
}

.SubmitButton-2wG4T[disabled] {
  background: #ccc;
}

.SubmitButton-2wG4T:focus,
.SubmitButton-2wG4T:hover {
  background: #4cd964;
}

.SubmitButton-2wG4T:disabled {
  background: #ccc;
}

.form-Kr7wg {
  display: none;
  margin-top: 20px;
  text-align: center;
  color: #999;
}

@media (max-width: 768px) {
  .form-Kr7wg {
    display: block;
  }
}

.form-b6px1 {
  position: relative;
  margin-bottom: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}

.form-b6px1 > * {
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 10px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.form-b6px1 > input {
  width: 100%;
  height: 100%;
  left: 0;
  padding-left: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #333;
  -webkit-appearance: none;
}

.form-b6px1 > input::-webkit-input-placeholder {
  color: #999;
}

.form-b6px1 > input::placeholder {
  color: #999;
}

.form-b6px1 > input:focus {
  border-color: #0089dc;
}

.form-2o2sO {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}

.form-2o2sO img {
  display: block;
  width: 85px;
  height: 32px;
}

.form-2DBWI {
  margin-left: 10px;
  color: #666;
  font-size: 12px;
  line-height: 14px;
}

.form-2DBWI > span {
  color: var(--global-blue-color);
  cursor: pointer;
}

.SwitchButton-2b6RO {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  padding: 0 6px;
  width: 40px;
  height: 16px;
  color: #999;
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.3s, border-color 0.3s;
}

.SwitchButton-1rBfm {
  position: absolute;
  top: -1px;
  left: -1px;
  width: 16px;
  height: 16px;
  border: 1px solid #ddd;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}

.SwitchButton-3wLB9 {
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  color: #fff;
  border-color: #3190e8;
  background: #3190e8;
}

.SwitchButton-3wLB9 .SwitchButton-1rBfm {
  -webkit-transform: translate3d(24px, 0, 0);
  transform: translate3d(24px, 0, 0);
}

.SwitchButton-3BmOw {
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
}

.LoginFooter-UxQIr {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
}

.LoginFooter-2KaAB {
  line-height: 16px;
  color: #999;
  line-height: 18px;
  text-align: center;
}

.LoginFooter-2KaAB > h2 {
  font-size: 12px;
  color: #555;
}

.LoginFooter-2KaAB > .LoginFooter-1QHDG {
  display: inline-block;
  margin-top: 12px;
}

.LoginFooter-3s25U:after {
  content: "|";
  padding: 0 4px;
}

@media (max-width: 768px) {
  .LoginFooter-2KaAB {
    display: none;
  }
}

.LoginHeader-1jXn6 {
  text-align: center;
}

.LoginHeader-1jXn6 .LoginHeader-85WpV {
  height: 56px;
}

.LoginHeader-22Up7 {
  margin-top: 40px;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
}

.LoginHeader-22Up7 > a {
  font-size: 14px;
  padding-bottom: 4px;
  cursor: pointer;
  display: block;
  width: 58px;
  margin: 0 20px;
}

.LoginHeader-22Up7 > a:focus,
.LoginHeader-22Up7 > a:hover {
  color: #000;
}

.LoginHeader-22Up7 > a.LoginHeader-33EiC {
  color: #2395ff;
  font-weight: 700;
  border-bottom: 2px solid #2395ff;
}

.AlipayLogin-2XPS- {
  border-top: 1px solid #eee;
  text-align: center;
  padding-bottom: 15px;
  background-color: #fafafa;
  padding: 16px 0;
  width: 100%;
}

.AlipayLogin-2XPS-.AlipayLogin-3h4HY {
  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0" /></filter></svg>#filter');
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
}

.AlipayLogin-3B7m1 {
  color: #666;
}

.AlipayLogin-1gWwX {
  width: 300px;
  margin: 0 auto;
  padding: 12px 0;
  border: 1px solid #ddd;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  border-radius: 2px;
  font-size: 16px;
  color: #25abee;
}

.AlipayLogin-3BwhX {
  width: 18px;
  height: 18px;
  margin-right: 6px;
}

.AlipayLogin-25u8B {
  font-size: 13px;
  color: #999;
  margin-top: 12px;
}
</style>