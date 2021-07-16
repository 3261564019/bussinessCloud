<template>
  <div class="table1">
    <div class="content">
      <div class="block" style="display;flex">
        <div class="shang">
          <div class="block-left">
            <span class="bt-span-base">指导类容</span>
          </div>


          <div class="block-right">
            <div class="block-right-item">
              <div class="block-right-item-content">
                <van-radio-group v-model="formdata[2][0].zdnr">
                  <van-radio checked-color="#ee0a24" name="1"
                  >法规法律</van-radio
                  >
                </van-radio-group>
              </div>
            </div>

            <div class="block-right-item">
              <div class="block-right-item-content">
                <van-radio-group v-model="formdata[2][0].zdnr">
                  <van-radio checked-color="#ee0a24" name="2"
                  >评估商业密码风险</van-radio
                  >
                </van-radio-group>
              </div>
            </div>

            <div class="block-right-item">
              <div class="block-right-item-content">
                <van-radio-group v-model="formdata[2][0].zdnr">
                  <van-radio checked-color="#ee0a24" name="3"
                  >业务培训</van-radio
                  >
                </van-radio-group>
              </div>
            </div>

            <div class="block-right-item">
              <div class="block-right-item-content">
                <van-radio-group v-model="formdata[2][0].zdnr">
                  <van-radio checked-color="#ee0a24" name="4"
                  >建立保密制度</van-radio
                  >
                </van-radio-group>
              </div>
            </div>

            <div class="block-right-item">
              <div class="block-right-item-content">
                <van-radio-group v-model="formdata[2][0].zdnr">
                  <van-radio checked-color="#ee0a24" name="5"
                  >搭建保密体系</van-radio
                  >
                </van-radio-group>
              </div>
            </div>

            <div class="block-right-item">
              <div class="block-right-item-content">
                <van-radio-group v-model="formdata[2][0].zdnr">
                  <van-radio checked-color="#ee0a24" name="6"
                  >完善保密措施</van-radio
                  >
                </van-radio-group>
              </div>
            </div>

            <div
                class="block-right-item"
                style="border-bottom: 1.5px #dfdfdf solid"
            >

              <div class="block-right-item-content">
                <van-radio-group v-model="formdata[2][0].zdnr">
                  <van-radio checked-color="#ee0a24" name="7"
                  >提供规范文本模板</van-radio
                  >
                </van-radio-group>
              </div>


            </div>

            <div class="block-right-item">
              <div
                  class="block-right-item-content"
                  style="display: flex; flex-direction: column"
              >
                <van-radio-group v-model="formdata[2][0].zdnr">
                  <van-radio checked-color="#ee0a24" name="8"
                  >其他需要指导的事项 , 请说明</van-radio
                  >
                </van-radio-group>
                <div>
                  <span>(</span>
                  <input
                      style="
                      width: 80%;
                      border: none;
                      border-bottom: 0.1px solid black;
                      margin-top: 10px;
                      margin-bottom: 15px;
                      font-size: 14px;
                    "
                      type="text"
                  />
                  <span>)</span>
                </div>
              </div>
            </div>
          </div>


        </div>
        <div class="xia">
          <div class="tab" style="border-top: 0.1px solid #dfdfdf">
            <div class="l">指导方式</div>
            <div class="r">
              <van-radio-group v-model="checked" direction="horizontal">
                <van-radio name="1" checked-color="#ee0a24">线上方式</van-radio>
                <van-radio name="2" checked-color="#ee0a24">线下方式</van-radio>
              </van-radio-group>
            </div>
          </div>

          <div class="tab" style="border-top: 0.1px solid #dfdfdf">
            <div class="l">申请人</div>
            <div class="r">
              <input
                  v-model='formdata[2][0].sqr'
                  placeholder="请输入申请人"
                  style="border: none"
                  type="text"
              />
            </div>
          </div>

          <div class="tab" style="border-top: 0.1px solid #dfdfdf">
            <div class="l">联系电话</div>
            <div class="r">
              <input
                  v-model="formdata[2][0].lxdh"
                  placeholder="请输入联系电话"
                  style="border: none"
                  type="text"
              />
            </div>
          </div>

          <div class="tab" style="border-top: 0.1px solid #dfdfdf">
            <div class="l">备注</div>
            <div class="r">
              <input
                v-model="formdata[2][0].bz"
                  placeholder="请输入备注"
                  style="border: none"
                  type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nodes"><span>3/3</span></div>
    <!-- <div class="instructions">
      <span
        >说明：企业提交的每张图片均需盖企业章，并注明拍摄地及
        提交时间。接收时间以最后收到的图片时间为准。企业提交
        的材料可以盖章后扫描上传，也可以送到属地市场监管所。</span
      >
    </div> -->
    <div class="underThe">
      <img src="@/assets/home/group18.png" @click="historyGo()" />
    </div>
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
  </div>
</template>
<script>
import api from "@/utils/net";
export default {
  data() {
    return {
      formdata:'',
      radio1:'',
      radio2:'',
      radio3:'',
      checked:''
    };
  },
  mounted() {},
  created(){
     // 取值
     this.formdata = JSON.parse(localStorage.getItem('formdata'))
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


    historyGo() {
         // 保存
      localStorage.setItem('formdata',JSON.stringify(this.formdata))
      this.$router.go('-1')
    },

  },
};
</script>
<style lang="stylus" scoped>

.table1 {
  width: 100%;
  padding-top: 15px;
  position: relative;
  padding-bottom: 20px;

  .content {
    width: 95%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;

    .block {
      width: 95%;
      margin: 0 auto;
      padding: 15px 0 0px 0;
      display: flex;
      flex-direction: column;

      .shang {
        display: flex;
      }

      .xia {
        .tab {
          height: 40px;
          display: flex;
          align-items: center;
          display: flex;

          .l {
            flex-shrink: 0;
            width: 25vw;
            font-weight: 500;
            font-size: 15px;
          }

          .r {
            padding: 0 20px;
            flex: auto;
          }
        }
      }

      .block-left {
        box-sizing: border-box;
        flex-shrink: 0;
        width: 25vw;
        display: flex;
        align-items: center;
        font-family: Alibaba PuHuiTi;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
        letter-spacing: -0.24px;
        color: #404956;
        border-right: 1.5px #DFDFDF solid;
      }

      .block-right {
        flex: auto;
        margin-left: 2%;
        display: flex;
        position: relative;
        flex-direction: column;

        .block-right-item {
          width: 100%;
          display: flex;
          flex-direction: column;

          .block-right-item-title {
            font-family: Alibaba PuHuiTi;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            letter-spacing: -0.24px;
            color: #404956;
            padding: 10px;
          }

          .block-right-item-content {
            display: flex;
            justify-content: space-between;
            padding: 10px;
          }

          .block-right-item-span {
            font-family: Alibaba PuHuiTi;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            letter-spacing: -0.24px;
            color: #B8B8B8;
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
