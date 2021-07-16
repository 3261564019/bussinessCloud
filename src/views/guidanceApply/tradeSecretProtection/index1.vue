<template>
  <div class="table2">
    <div class="content">
      <div class="block">
        <div class="block-left">
          <span class="bt-span-base">企业名称</span>
        </div>
        <div class="block-right right2">
          <input
            v-model="formdata[0][0].qymc"
            class="ipt"
            placeholder="请输入企业名称"
            type="text"
          />
        </div>
      </div>

      <div class="block">
        <div class="block-left">
          <span class="bt-span-base">企业类别</span>
        </div>
        <div class="block-right right2">
          <input
            class="ipt"
            v-model="formdata[0][0].qylb"
            placeholder="请输入企业类别"
            type="text"
          />
        </div>
      </div>

      <div class="block">
        <div class="block-left">
          <span class="bt-span-base">企业地址</span>
        </div>
        <div class="block-right right2">
          <input
            class="ipt"
            v-model="formdata[0][0].qydz"
            placeholder="请输入企业地址"
            type="text"
          />
        </div>
      </div>

      <div class="block" @click="zcshow = true">
        <div class="block-left">
          <span class="bt-span-base">企业资产</span>
        </div>
        <div class="block-right right2">
          <div style="width: 100%" v-html="formdata[0][0].qyzc?formdata[0][0].qyzc:'请选择企业资产'"></div>
        </div>
      </div>

      <div class="block">
        <div class="block-left">
          <span class="bt-span-base">联系人</span>
        </div>
        <div class="block-right right2">
          <input
            class="ipt"
            v-model="formdata[0][0].lxr"
            placeholder="请输入联系人姓名"
            type="text"
          />
        </div>
      </div>

      <div class="block">
        <div class="block-left">
          <span class="bt-span-base">电话</span>
        </div>
        <div class="block-right right2">
          <input
            class="ipt"
            v-model="formdata[0][0].dh"
            placeholder="请输入联系人电话"
            type="text"
          />
        </div>
      </div>

      <div class="block">
        <div class="block-left">
          <span class="bt-span-base">专利情况</span>
        </div>
        <div class="block-right">
          <van-radio-group
            v-model="formdata[0][0].zlqk"
            style="display: flex; align-items: center"
          >
            <van-radio
              style="margin-right: 70px"
              name="0"
              checked-color="#E64004"
              ><span>有</span>
              <input v-model="formdata[0][0].zlqkj" class="input" />
            </van-radio>
            <van-radio name="1" checked-color="#E64004">无</van-radio>
          </van-radio-group>
        </div>
      </div>

      <div class="ckwapper">
        <div class="title">
          对于商业秘密风险保障的需求对于商业秘密风险保障的需求
        </div>
        <div class="ck">
          <div class="s">
            <div class="l">
              <van-radio-group v-model="formdata[0][0].symmbz">
                <van-radio checked-color="#E64004" name="1"
                  >基础保证55万</van-radio
                >
              </van-radio-group>
            </div>

            <div class="r">
              <van-radio-group v-model="formdata[0][0].symmbz">
                <van-radio checked-color="#E64004" name="2"
                  >综合保证150万</van-radio
                >
              </van-radio-group>
            </div>
          </div>

          <div class="x">
            <div class="l">
              <van-radio-group v-model="formdata[0][0].symmbz">
                <van-radio checked-color="#E64004" name="3"
                  >进阶保证300万</van-radio
                >
              </van-radio-group>
            </div>

            <div class="r">
              <van-radio-group v-model="formdata[0][0].symmbz">
                <van-radio checked-color="#E64004" name="4"
                  >其他
                  <input v-model="formdata[0][0].symmbzqt" id="input" />
                </van-radio>
              </van-radio-group>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nodes"><span>1/2</span></div>
    <!-- <div class="instructions">
      <span
        >说明：企业提交的每张图片均需盖企业章，并注明拍摄地及
        提交时间。接收时间以最后收到的图片时间为准。企业提交
        的材料可以盖章后扫描上传，也可以送到属地市场监管所。</span
      >
    </div> -->

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


    <van-action-sheet title="请选择企业资产" v-model="zcshow" :actions="actions" @select="onSelect" />

    <img id="next" src="@/assets/home/group19.png" alt=""  @click="jumpPage">
  </div>
</template>
<script>
import api from "@/utils/net";
export default {
  data() {
    return {
      zcshow:false,
       actions: [{ name: '100w' }, { name: '300w' }, { name: '100w' }],
      formdata: "",
    };
  },
  mounted() {},
  created() {
    // 取值
    this.formdata = JSON.parse(localStorage.getItem("formdata"));
  },
  methods: {
    historyGo() {
      this.baocun()
      history.go(-1);
    },

    // 点击保存
    baocun() {
      api({
        url: "/client/postsymmzdsqdata.action",
        method: "post",
        data: {
          ...this.formdata[0][0],
          id: localStorage.getItem("primarykeyid"),
        },
      }).then((res) => {
        console.log(res);
        if (res.data.status == 1) {
          this.$toast.success({
            message: "保存成功",
            duration: 3000,
          });
          localStorage.setItem("primarykeyid", JSON.stringify(res.data.id));
        }
      });
    },

    qyzc() {
      console.log(55);
    },

    jumpPage() {
      this.baocun();
      this.$router.push({ path: "/tradeSecretProtection2" });
    },

    onSelect(e){
      this.formdata[0][0].qyzc = e.name
      this.zcshow = false
    }
    
  },
};
</script>
<style lang="stylus" scoped>
#input {
  border: 0;
  width: 40px;
  height: 25px;
  outline: none;
  border-bottom: 1px #424955 solid;
}

.table2 {
  width: 100%;
  padding-top: 15px;
  position: relative;
  #next{

    position absolute;
    top:48%;
    right  10px;
    width 7vw;

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
            display: flex;

            .van-radio {
            }
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
