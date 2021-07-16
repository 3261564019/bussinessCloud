<template>
  <div class="root">
    <div class="title">
      <div class="title">离职人员备案申请表</div>
    </div>

    <div class="radiocontent">
      <div class="title">企业是否属政府项目：</div>
      <div class="radio">
        <radio-group v-model="isgovermnent">
          <radio name="1" checked-color="#ee0a24">政府引入项目</radio>
          <radio name="2" checked-color="#ee0a24">政府重点项目</radio>
        </radio-group>
      </div>
    </div>

    <div class="radiocontent">
      <div class="title">企业核心商业秘密的类型类型：</div>
      <div class="radio">
        <radio-group v-model="secret_type">
          <radio name="1" checked-color="#ee0a24">经营信息</radio>
          <radio name="2" checked-color="#ee0a24">政府重点项目</radio>
        </radio-group>
      </div>
    </div>

    <div class="item mc">
      <span> 离职人员姓名<br /> </span>
      <input type="text" />
    </div>
    <div class="item mc">
      <span> 拟离职时间 </span>
      <input type="text" />
    </div>

    <div class="radiocontent">
      <div class="title">离职人员在企业的涉密重要性及范围：</div>
      <div class="radio">
        <radio-group v-model="secret_type">
          <radio name="1" checked-color="#ee0a24">经营信息</radio>
          <radio name="2" checked-color="#ee0a24">技术信息</radio>
        </radio-group>
      </div>
    </div>


    <div class="pagenumber">2 / 3</div>

    <div class="bottom">
      说明：表格填好后下载打印，签字盖章后扫描件或照片 <br />
      上传，完成申请提交。
    </div>

    <img
      id="prve"
      src="@/assets/home/group18.png"
      alt=""
      @click="$router.back()"
    />
    <img id="next" src="@/assets/home/group19.png" alt="" @click="$router.push('/departures3')" />
  </div>
</template>

<script>
import { RadioGroup, Radio } from "vant";
export default {
  name: "index1",
  data: () => {
    return {
      check_arr: [true, false, true, false],
      isgovermnent: "1",
      secret_type: "2",
    };
  },

   

  components: {
    RadioGroup,
    Radio,
  },

};
</script>

<style lang="stylus">
html, body {
  width: 100%;
  height: 100%;
  background-color: #FFFFFF !important;

  .root {
    padding-bottom: 1px;

    .title {
      font-family: '微软雅黑';
      font-style: normal;
      font-weight: 550;
      font-size: 18px;
      letter-spacing: -0.24px;
      color: #222222;
      text-align: center;
      line-height: 80px;
    }

    .item {
      height: 90px;
      width: 90%;
      margin: 0px auto;
      font-size: 12px;
      border-bottom: 1px solid rgba(191, 191, 191, 0.5);
      display: flex;
      justify-content: space-between;

      span {
        width: 25%;
        font-family: '微软雅黑';
        font-style: normal;
        font-weight: 520;
        font-size: 14px;
        line-height: 50px;
        /* identical to box height */
        letter-spacing: -0.24px;
        color: #404956;
      }

      input {
        width: 70%;
        outline: none;
        border: none;
        background-color: #FFFFFF;
      }
    }

    .mc {
      span {
        display: flex;
        line-height: 20px;
        align-items: center;
      }
    }

    .pagenumber {
      width: 40px;
      margin: 50px auto;
      overflow: hidden;
      color: #A7A7A7;
    }

    .bottom {
      width: 90%;
      font-family: Alibaba PuHuiTi;
      font-style: normal;
      margin: 0 auto;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: -0.24px;
      color: #999999;
      margin-bottom: 50px;
    }

    .radiocontent {
      width: 90%;
      margin: 0 auto;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(191, 191, 191, 0.5);

      .title {
        font-family: '微软雅黑';
        font-style: normal;
        font-weight: 520;
        font-size: 14px;
        line-height: 50px;
        /* identical to box height */
        letter-spacing: -0.24px;
        color: #404956;
        text-align: left;
      }

      .radio {
        display: flex;
        justify-content: space-around;
        margin: 10px 0;

        .van-radio-group {
          width: 100%;
          display: flex;
          justify-content: space-around;

          .van-radio__label {
            font-size: 13px;
          }
        }
      }
    }

    #next {
      position: fixed;
      top: 48%;
      right: 10px;
      width: 7vw;
    }

    #prve {
      position: fixed;
      top: 48%;
      left: 10px;
      width: 7vw;
    }
  }
}
</style>