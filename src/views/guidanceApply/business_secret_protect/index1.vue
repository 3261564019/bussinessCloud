<template>
  <div class="root">
    <div class="title">
      台州市商业秘密保护示范点申报表
    </div>

    <div class="item">
      <span>企业名称</span>
      <input type="text" v-model="formdata[index][0].qymc">
    </div>
    <div class="item">
      <span>法定代表人</span>
      <input type="text"  v-model="formdata[index][0].fddbr">
    </div>
    <div class="item">
      <span>经营地址</span>
      <input type="text"  v-model="formdata[index][0].jydz">
    </div>
    <div class="item">
      <span>邮政编码</span>
      <input type="text"  v-model="formdata[index][0].yzbm">
    </div>
    <div class="item">
      <span>员工数量</span>
      <input type="text"  v-model="formdata[index][0].ygsl">
    </div>
    <div class="item">
      <span>企业类型</span>
      <input type="text"  v-model="formdata[index][0].qylx">
    </div>
    <div class="item">
      <span>所属行业</span>
      <input type="text"  v-model="formdata[index][0].sshy">
    </div>
    <div class="item ncz">
      <span>
         &nbsp;   年产值<br/>
        （万元）
      </span>
      <input type="text"  v-model="formdata[index][0].ncz">
    </div>
    <div class="item">
      <span>联系人</span>
      <input type="text"  v-model="formdata[index][0].lxr">
    </div>
    <div class="item">
      <span>职务/职称</span>
      <input type="text"  v-model="formdata[index][0].zw">
    </div>
    <div class="item">
      <span>联系电话</span>
      <input type="text"  v-model="formdata[index][0].lxdh">
    </div>



    <div class="pagenumber">
      1 / 3
    </div>


    <img id="next" src="@/assets/home/group19.png" alt=""  @click="nextPage">

    <controls></controls>
  </div>
</template>

<script>
import Controls from "../../../components/controls/Controls";
export default {
  name: "index1",
  components: {Controls},
  data:()=>{
    return{
      index:0,
      formdata:[]
    }
  },
  methods:{
    nextPage(){
      localStorage.setItem("formdata",JSON.stringify(this.formdata));
      this.$router.push("/business_secret_protect2");
    },

  },
  created(){
    this.formdata=JSON.parse(localStorage.getItem("formdata"))
  }
}
</script>

<style lang="stylus" scoped>
  .root{
    padding-bottom : 1px;

    background-color: #FFFFFF;
    .title{
      font-family:'微软雅黑';
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
      border-bottom: 1px solid rgba(191, 191, 191, 0.5);
      display flex;
      justify-content space-between;

      span{
        width 25%;
        font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 50px;
        letter-spacing: -0.24px;
        color: #404956;
      }
      input{
        width 75%;
        outline none;
        border none;
        background-color :#FFFFFF;
      }

    }
    .ncz{
      span{
        display block;
        height 50px;
        line-height 25px;
        text-align left
      }
    }
    .item:last-child{
      border none
    }
    .pagenumber{
      width 40px;
      margin: 50px auto;
      overflow hidden;
      color : #A7A7A7;
    }

    #next{

      position fixed;
      top:48%;
      right  10px;
      width 7vw;

    }
    .controls {
      width 100px;
      position fixed;
      bottom 40px;
      right 0;
      display flex;
      flex-direction column;
      justify-content center;
      align-items center;

      .controls-piece {
        width 50px;
        height 50px;
        display flex;
        flex-direction column;
        align-items center;
        justify-content center;
        font-family: Alibaba PuHuiTi;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        letter-spacing: -0.24px;
        color: #FFA800;
        background-color #fff;
        border-radius 50%;
        border: 1px solid rgba(0, 0, 0, 0.08);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        margin-bottom 10px;


        img {
          width 18px;
          height: 18px;
          margin-bottom 3px;
        }
      }

  }
}
</style>