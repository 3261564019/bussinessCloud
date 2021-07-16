<template>
  <div class="root">
    <div class="title">
      台州市商业秘密保护示范点申报表
    </div>
    <div class="content">
      <div class="c_title">
        企业商业秘密保护开展情况
      </div>
      <textarea v-model="formdata[index][0].symm" name="" id="" cols="30" rows="10" placeholder="围绕企业商业秘密保护示范点创建的组织机构是否建立、人员配备是否合理、基础保障是否到位、制度建设是否健全、防范措施是否齐备等方面进行简要叙述，需提供相关依据。（1500字以内）"></textarea>
    </div>


    <div class="pagenumber">
      2 / 3
    </div>

    <img id="prve" src="@/assets/home/group18.png" alt=""   @click="prvePage">
    <img id="next" src="@/assets/home/group19.png" alt=""  @click="nextPage()">

    <controls></controls>
  </div>
</template>

<script>
import Controls from "../../../components/controls/Controls";
export default {
  name: "index2",
  data:()=>{
    return{
      index:1,
      formdata:[]
    }
  },
  components: {Controls},
  methods:{
    prvePage(){
      this.$router.back();
    },
    nextPage(){
      this.$router.push('/business_secret_protect3');
      localStorage.setItem("formdata",JSON.stringify(this.formdata));
    }
  },
  created() {
    this.formdata=JSON.parse(localStorage.getItem("formdata"))
  }
}
</script>
<style lang="stylus" scoped>

  .root {
    padding-bottom: 1px;

    height:100vh;
    background-color white;

    #next{
      position fixed;
      top:48%;
      right:10px;
      width:7vw;
    }
    #prve{
      position fixed;
      top:46%;
      left   10px;
      width 7vw;
    }
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
    .content{
      width:90%;
      margin:0 auto;
      .c_title{

        font-family: Alibaba PuHuiTi;
        font-style: normal;
        font-weight: 650;
        font-size: 16px;
        line-height: 30px;
        margin-bottom 10px;

        /* identical to box height */
        letter-spacing: -0.24px;

        color: #404956;
      }
      textarea{
        width:97%;
        height:60vh;
        border:1px solid #000000;
        border-radius 4px;
        resize: none;
      }

    }
    .pagenumber{
      width:40px;
      margin:50px auto;
      color : #A7A7A7;
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