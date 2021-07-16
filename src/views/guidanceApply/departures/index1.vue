<template>
  <div class="root">
    <div class="title">
      <div class="title">
       离职人员备案申请表
      </div>
    </div>

    <div class="item mc">
      <span>
        企业名称<br/>
        （盖章）
      </span>
      <input type="text">
    </div>
    <div class="item mc">
      <span>
        企业营业执 <br/>
        照登记号
      </span>
      <input type="text">
    </div>
    <div class="item">
      <span>法定代表人</span>
      <input type="text">
    </div>
    <div class="item">
      <span>企业详细地址</span>
      <input type="text">
    </div>
    <div class="item mc">
      <span>
        企业人事部 <br/>
        联系人姓名
      </span>
      <input type="text">
    </div>
    <div class="item mc">
      <span>
        企业人事部联  <br/>
        系人手机号码
      </span>
      <input type="text">
    </div>

<!--    企业所属 类型（本行均可多选）：-->
    <div class="company">
      <div class="com_title">企业所属类型（本行均可多选）：</div>
      <div class="items">
        <checkbox v-model="check_arr[0]" checked-color="#ee0a24">传统产业</checkbox>
        <checkbox v-model="check_arr[1]" checked-color="#ee0a24">高新企业</checkbox>
        <checkbox v-model="check_arr[2]" checked-color="#ee0a24">上市公司</checkbox>
        <checkbox v-model="check_arr[3]" checked-color="#ee0a24">规上公司</checkbox>
      </div>
    </div>


    <div class="pagenumber">
      1 / 3
    </div>

    <div class="bottom">
      说明：表格填好后下载打印，签字盖章后扫描件或照片 <br/>
      上传，完成申请提交。
    </div>

    <img id="next" src="@/assets/home/group19.png" alt=""  @click="nextPage">
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup } from 'vant';
export default {
name: "index1",
  data:()=>{
    return {
      check_arr:[true,false,true,false]
    }
  },
  methods:{
    nextPage(){
      this.$router.push("/departures2");
    },

  },
  components:{
    Checkbox,
    CheckboxGroup
  }
}
</script>

<style lang="stylus" scoped>
html, body {
  width: 100%;
  height: 100%;
  background-color: #FFFFFF !important;

  .root {
    padding-bottom: 1px;
      background-color: #FFFFFF !important;
    .title {
      font-family: '微软雅黑';
      font-style: normal;
      font-weight: 550;
      font-size: 18px;
      letter-spacing: -0.24px;
      color: #222222;
      text-align center;
      line-height 80px;

    }
    .item{
      height 50px;
      width: 90%;
      margin: 0px auto;
      font-size :12px;
      border-bottom: 1px solid rgba(191, 191, 191, 0.5);
      display flex;
      justify-content space-between;

      span{
        width 25%;
        font-family: '微软雅黑';
        font-style: normal;
        font-weight: 520;
        font-size: 14px;
        line-height: 50px;

        /* identical to box height */
        letter-spacing: -0.24px;

        color: #404956;
      }
      input{
        width 65%;
        outline none;
        border none;
        background-color :#FFFFFF;
      }

    }
    .mc{
      span{
        display:flex;
        line-height:20px;
        align-items center;
      }
    }
    .company{
      width:90%;
      margin:00px auto;
      .com_title{
        font-family: '微软雅黑';
        font-style: normal;
        font-weight: 520;
        font-size: 14px;
        line-height: 50px;
        letter-spacing: -0.24px;
        color: #404956;
      }
      .items{
        .van-checkbox{
          width:48%;
          display flex;
          justify-content center;
        }
        height:100px;
        display flex;
        justify-content:space-around;
        flex-wrap :wrap;
        align-items center
      }
    }
    .pagenumber{
      width 40px;
      margin: 50px auto;
      overflow hidden;
      color : #A7A7A7;
    }
    .bottom{
      width:90%;
      font-family: Alibaba PuHuiTi;
      font-style: normal;
      margin:0 auto;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: -0.24px;
      color: #999999;
      margin-bottom:50px;
    }
    #next{

      position fixed;
      top:48%;
      right  10px;
      width 7vw;

    }
  }
}
</style>