<template>
  <div class="table1">
    <div class="content">
      <div class="block">
        <div class="block-left">
          <span class="bt-span-base">市场监管局</span>
        </div>
        <div class="block-right">
          <input
            placeholder="请输入市场监管局"
            v-model="formdata[0][0].scjgj"
          />
        </div>
      </div>

      <div class="block">
        为了提升我单位的商业秘密保护意识，评估发现企业的泄密风险，构建商业秘密体系，完善保密措施，切实提高我单位商业秘密保护的能力，特申请贵局派人来我单位进行行政指导
      </div>
      <div class="block" @click="timeshow = true">
        <div class="block-left">
          <span class="bt-span-base">申请日期</span>
        </div>
        <div class="block-right" @click="choose_data">
          <div
            v-html="formdata[0][0].sqrq && formdata[0][0].sqrq!=''?formdata[0][0].sqrq:'请选择日期'"
            style="
              width: 100%;
              padding-left: 5px;
              display: flex;
              color: rgb(133, 133, 133);
              justify-content: flex-start;
            "
          >
          
          </div>
        </div>
      </div>
      <div class="block">
        <div class="block-left">
          <span class="bt-span-base">编号</span>
        </div>
        <div class="block-right">
          <input placeholder="请输入编号" v-model="formdata[0][0].bh" />
        </div>
      </div>
      <div class="block">
        <div class="block-left">
          <span class="bt-span-base">单位名称</span>
        </div>
        <div class="block-right">
          <input placeholder="请输入单位名称" v-model="formdata[0][0].dwmc" />
        </div>
      </div>
      <div class="block">
        <div class="block-left">
          <span class="bt-span-base">经营地址</span>
        </div>
        <div class="block-right">
          <input placeholder="请选择经营地址" v-model="formdata[0][0].jydz" />
        </div>
      </div>
      <div class="block">
        <div class="block-left">
          <span class="bt-span-base">注册资本（万元）</span>
        </div>
        <div class="block-right">
          <input placeholder="请输入注册资本" v-model="formdata[0][0].zczb" />
        </div>
      </div>

      <div class="block">
        <div class="block-left">
          <span class="bt-span-base">主要产品</span>
        </div>
        <div class="block-right">
          <input placeholder="请输入主要产品" v-model="formdata[0][0].zycp" />
        </div>
      </div>
      <div class="block">
        <div class="block-left">
          <span class="bt-span-base">年产值（万元）</span>
        </div>
        <div class="block-right">
          <input placeholder="请输入年产值" v-model="formdata[0][0].ncz" />
        </div>
      </div>
    </div>
    <div class="nodes"><span>1/3</span></div>
    <!-- <div class="instructions">
      <span
        >说明：企业提交的每张图片均需盖企业章，并注明拍摄地及
        提交时间。接收时间以最后收到的图片时间为准。企业提交
        的材料可以盖章后扫描上传，也可以送到属地市场监管所。</span
      >
    </div> -->
    <img id="next" src="@/assets/home/group19.png" alt="" @click="jumpPage" />

    <div class="controls">
      <div class="controls-piece" @click="baocun()">
        <img src="@/assets/home/group20.png" />
        <span>保存</span>
      </div>
      <!-- <div class="controls-piece" style="color: #e64004">
        <img src="@/assets/home/group21.png" />
        <span>下载</span>
      </div>
      <div class="controls-piece" style="color: #016ef9">
        <img src="@/assets/home/group22.png" />
        <span>上传</span>
      </div> -->
    </div>

    <van-popup v-model="timeshow" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="timeshow = !timeshow"
        @confirm="confirm"
      />
    </van-popup>
  </div>
</template>
<script>
import { DatetimePicker } from "vant";
import api from "@/utils/net";
export default {
  data() {
    return {
      date: "请选择申请日期",
      timeshow: false,
      minDate: new Date(2000, 0, 1),
      maxDate: new Date(3000, 10, 1),
      // 默认打开，及双向绑定
      currentDate: new Date(),
      // 选择的时间
      value1: "1",
      value4: "",

      // 本地的数据
      formdata: "",
    };
  },
  components: {
    DatetimePicker,
  },
  mounted() {},

  created() {
    // 取值
    this.formdata = JSON.parse(localStorage.getItem("formdata"));
  },

  methods: {

    // 点击保存
    baocun() {
      api({
        url: "/client/postsymmzdsqdata.action",
        method: "post",
        data:{
          ...this.formdata[0][0],
          id:localStorage.getItem('primarykeyid')
        }
      }).then((res) => {
        console.log(res)
        if(res.data.status == 1){
          this.$toast.success({
            message:'保存成功',
            duration:3000
          })
          localStorage.setItem('primarykeyid',JSON.stringify(res.data.id))
        }
      });
    },

    choose_data() {
      this.timeshow = true;
    },
    jumpPage() {
      // 保存
      this.baocun()
      localStorage.setItem("formdata", JSON.stringify(this.formdata));
      this.$router.push({ path: "/tradeSecret2" });
    },

    cancel() {
      console.log(11);
    },

    confirm(v) {
      this.date =
      v.getFullYear() + "年" + v.getMonth() + "月" + v.getDate() + "日";
      this.timeshow = false;
      this.formdata[0][0].sqrq =
       v.getFullYear() + "年" + v.getMonth() + "月" + v.getDate() + "日";
    },
  },
};
</script>
<style lang="stylus" scoped>
.table1 {
  width: 100%;
  padding-top: 15px;
  position: relative;

  #next {
    position: fixed;
    top: 48%;
    right: 10px;
    width: 7vw;
  }

  .content {
    width: 95%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;

    .block {
      width: 95%;
      margin: 0 auto;
      padding: 15px 0 15px 0;
      border-bottom: 1.5px #dfdfdf solid;
      display: flex;

      .block-left {
        flex: 0 0 35%;
        display: flex;
        align-items: center;
        font-family: Alibaba PuHuiTi;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
        letter-spacing: -0.24px;
        color: #404956;
      }

      .block-right {
        flex: 0 0 65%;
        display: flex;
        align-items: center;

        input {
          border: 0;
          width: 90%;
          height: 25px;
          outline: none;
        }

        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .nodes {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-family: Alibaba PuHuiTi;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.24px;
    color: #A7A7A7;
  }

  .instructions {
    width: 70%;
    font-family: Alibaba PuHuiTi;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.24px;
    color: #999999;
    margin-left: 2.5%;
  }

  .underThe {
    width: 100%;
    position: fixed;
    top: 30%;
    display: flex;
    justify-content: space-between;

    img {
      width: 30px;
      height: 30px;
      margin: 0 15px 0 15px;
    }
  }

  .controls {
    width: 100px;
    position: fixed;
    bottom: 40px;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .controls-piece {
      width: 50px;
      height: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: Alibaba PuHuiTi;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      letter-spacing: -0.24px;
      color: #FFA800;
      background-color: #fff;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
      margin-bottom: 10px;

      img {
        width: 18px;
        height: 18px;
        margin-bottom: 3px;
      }
    }
  }
}
</style>
