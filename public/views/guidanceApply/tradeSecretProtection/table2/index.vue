<template>
  <div class="table2">
    <div class="content">
      <div class="ckwapper">
        <div class="title">
          对于商业秘密风险保障的需求对于商业秘密风险保障的需求
        </div>
        <view class="ck">
          <div class="s">
            <div class="l">
              <van-radio-group v-model="tab1">
                <van-radio checked-color="#E64004" name="1" label-disabled
                  >有</van-radio
                >
              </van-radio-group>
            </div>

            <div class="r">
              <van-radio-group v-model="tab1">
                <van-radio checked-color="#E64004" name="2" label-disabled
                  >无</van-radio
                >
              </van-radio-group>
            </div>
          </div>
        </view>
      </div>

    <!-- 多选 -->
      <div class="ckwapper">
        <div class="title">
          掌握商业秘密的人员职位(可多选) :
        </div>
        <view class="ck">
          <div class="s">
            <div class="l">
              <van-radio-group v-model="tab3">
                <van-radio checked-color="#E64004" name="1" label-disabled
                  >懂事、监事</van-radio
                >
              </van-radio-group>
            </div>

            <div class="r">
              <van-radio-group v-model="tab4">
                <van-radio checked-color="#E64004" name="1" label-disabled
                  >高级管理人员</van-radio
                >
              </van-radio-group>
            </div>
          </div>

          <div class="x">
            <div class="l">
              <van-radio-group v-model="tab5">
                <van-radio checked-color="#E64004" name="1" label-disabled
                  >技术人员</van-radio
                >
              </van-radio-group>
            </div>

 
          </div>
        </view>
      </div>


          <div class="ckwapper">
        <div class="title">
            企业有无发生过商业失密现象
        </div>
        <view class="ck">
          <div class="s">
            <div class="l">
              <van-radio-group v-model="tab2">
                <van-radio checked-color="#E64004" name="1" label-disabled
                  >有</van-radio
                >
              </van-radio-group>
            </div>

            <div class="r">
              <van-radio-group v-model="tab2">
                <van-radio checked-color="#E64004" name="2" label-disabled
                  >技术信息</van-radio
                >
              </van-radio-group>
            </div>
          </div>

          <div class="x">
            <div class="l">
              <van-radio-group v-model="tab2">
                <van-radio checked-color="#E64004" name="3" label-disabled
                  >经营信息</van-radio
                >
              </van-radio-group>
            </div>

            <div class="r">
              <van-radio-group v-model="tab2">
                <van-radio checked-color="#E64004" name="4" label-disabled
                  >无</van-radio
                >
              </van-radio-group>
            </div>
          </div>
        </view>
      </div>

    </div>

    <div class="nodes"><span>2/2</span></div>
    <!-- <div class="instructions">
      <span
        >说明：企业提交的每张图片均需盖企业章，并注明拍摄地及
        提交时间。接收时间以最后收到的图片时间为准。企业提交
        的材料可以盖章后扫描上传，也可以送到属地市场监管所。</span
      >
    </div> -->
    <div class="underThe">
      <img src="@/assets/home/group18.png" @click="historyGo" />
      <!-- <img src="@/assets/home/group19.png" @click="jumpPage()" /> -->
    </div>
    <div class="controls">
      <div class="controls-piece">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: "",
      zl: "0",
    //  单选
      tab1: "0",
      tab2:'0',
    //  多选
    tab3:'0',
    tab4:'0',
    tab5:'0'


    };
  },
  mounted() {},
  methods: {
    historyGo() {
      history.go(-1);
    },
    jumpPage() {
      this.$router.push({ path: "/table/table3" });
    },
  },
};
</script>
<style lang="stylus" scoped>
.table2 {
  width: 100%;
  padding-top: 15px;
  position: relative;

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

      .right2 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;

        .ipt {
          width: 100%;
          border: none;
        }
      }

      .block-right {
        flex: 0 0 63%;
        margin-left: 2%;
        display: flex;
        align-items: center;
        position: relative;

        .van-radio {
          margin: 10px 10px 10px 0;
        }

        .input {
          border: 0;
          width: 40px;
          height: 25px;
          outline: none;
          border-bottom: 1px #424955 solid;
          position: absolute;
          bottom: 5px;
        }

        img {
          width: 20px;
          height: 20px;
        }

        .block-right-span {
          position: absolute;
          bottom: 0;
          font-family: Alibaba PuHuiTi;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          letter-spacing: -0.24px;
          color: #BEBEBE;
        }
      }
    }

    .ckwapper {
      width: 95%;
      margin: 0 auto;
      padding: 15px 0 15px;
      border-bottom: 1.5px #dfdfdf solid;
      display: flex;
      flex-direction: column;

      .title {
        font-size: 15px;
      }

      .ck {
        padding: 15px;

        .s {
          display: flex;

          .l {
            width: 50%;
          }

          .r {
          }
        }

        .x {
          margin-top: 10px;
          display: flex;

          .l {
            width: 50%;
          }

          .r {
          }
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
