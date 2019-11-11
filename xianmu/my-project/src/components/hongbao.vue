<template>
  <div>
    <div class="box">
      <div class="hhh1">
        <p>
          <span id="box1" @click="goto('/login')" v-if="disabled">
            <span>
              <van-icon name="bill-o" />
            </span>
          </span>
          <span id="box3" @click="goto('/login')" v-else>
            <span style="color:rgb(255, 95, 62); font-size: 4.8vw;">{{value}}</span>
          </span>
        </p>
        <span id="span1" @click="goto('/login')">红包</span>
      </div>
      <div class="hhh2">
        <p>
          <span id="box2" @click="goto('/login')" v-if="disabled">
            <van-icon name="balance-o" />
          </span>
          <span id="box4" @click="goto('/login')" v-else>
            <span style="color:rgb(106, 194, 11); font-size: 4.8vw;">{{value}}</span>
          </span>
        </p>

        <span id="span1" @click="goto('/login')">金币</span>
      </div>
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
       
      disabled: true,
      value: "0个",
    
    };
  },
  created(){
       this.getuser()
  },
   activated(){
     this.getuser()
   },
   computed:{
      
   },
  methods: {
    getuser(){
      let user=localStorage.phone;
      //  let user=1;
      if (user) {
    this.disabled=false
      }
      else{
     this.disabled=true
      }
    },
    goto(pash) {
      this.$router.push(pash);
    }
  }
};
</script>

<style>
.box {
  height: 80px;
  display: flex;
}
.hhh1 {
  width: 375px;
  text-align: center;
  border-right: 1px #cccccc solid;
}
#span1 {
  color: black;
}
.hhh2 {
  text-align: center;
  width: 375px;
}
#box1 {
  display: inline-block;
  width: 25px;
  height: 23px;
  border-radius: 50%;
  color: white;
  background: rgb(255, 95, 62);
}
#box2 {
  display: inline-block;
  width: 25px;
  height: 23px;
  color: white;
  border-radius: 50%;
  background: rgb(106, 194, 11);
}
</style>