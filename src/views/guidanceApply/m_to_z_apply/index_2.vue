<template>
  <div class="root">

      <img id="prve" src="@/assets/home/group18.png" alt="" @click="prvePage">


    <div class="toptitle">
      “秘转专”备案申请表
    </div>


    <div class="content">
      <div class="item">
        <span>专利名称</span>
        <input type="text" v-model="formdata[index][0].zlmc">
      </div>
      <div class="item">
        <span>专利类型</span>
        <input type="text" v-model="formdata[index][0].zllx">
      </div>
      <div class="item">
        <span>授权公告日</span>
        <input type="text" v-model="formdata[index][0].sqggr">
      </div>
      <div class="item">
        <span>专利权人</span>
        <input type="text"  v-model="formdata[index][0].zlqr" >
      </div>
      <div class="item">
        <span>专利号</span>
        <input type="text"  v-model="formdata[index][0].zlh">
      </div>
      <div class="item">
        <span>
          增加备案<br/>
          产品选择
        </span>
        <textarea type="text"  v-model="formdata[index][0].kzj"/>
      </div>
    </div>

    <div class="pagenumber">
      2 / 2
    </div>

    <controls @save="save"></controls>
  </div>
</template>

<script>
import {Picker, Popup, Field, Toast} from 'vant';
import Controls from "../../../components/controls/Controls";
import api from "../../../utils/net";


export default {
  name: "index.vue",
  created() {
    this.formdata=JSON.parse(localStorage.getItem("formdata"))
  },
  data:()=>{
    return {
      index:1,
      zc:"1000万以下",
      value: '',
      showPicker: false,
      formdata:[]
    }
  },
  components: {
    Controls,
    Picker,
    Popup,
    Field
  },
  methods:{
    nextPage(){
      this.$router.push("");
    },
    prvePage(){
      localStorage.setItem("formdata",JSON.stringify(this.formdata));
      this.$router.push("/m_to_z_apply");
    }
    ,
    choose_zc(){

    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    save(){
      localStorage.setItem("formdata",JSON.stringify(this.formdata));

      // console.log(this.formdata);
      let res={};
      //追加上企业id
      res.id=localStorage.getItem("company_id");

      //遍历所有页表单的数据
      this.formdata.forEach(
          (v,i,a)=>{
            //将遍历出来页的数据结构
            let temp={...v[0]};
            //并追加到用于储存结果的res中
            res=Object.assign(res,temp)
            console.log(res);
          }
      );

      api({
        url:'/client/postmizzuandata.action',
        method:'post',
        params: res
      }).then(
          (res)=>{
            console.log(res);
            if(res.data.status==1){
              Toast.success("保存成功");
              this.$router.push("/home/selectForm?code=2");
            }
          }
      );
    }
  }
}
</script>

<style lang="stylus" scoped>

.root {
  background-color: #FFFFFF !important;
  width:90%;
  margin:20px auto;
  padding:30px 0px;
  border-radius:5px;
  #next{

      position fixed;
      top:48%;
      right  10px;
      width 7vw;

  }
  #prve{
    position fixed;
    top:46%;
    left   10px;
    width 7vw;
  }
  .toptitle{
    font-family: '微软雅黑';
    font-style: normal;
    font-weight: 501;
    font-size: 18px;
    line-height: 25px;
    margin 16px auto;
    /* identical to box height */
    text-align: center;
    letter-spacing: -0.24px;

    color: #000000;


  }
  .title {
    width: 95%;
    margin: 16px auto;
    font-family: '微软雅黑';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.24px;
    color: #404956;

    padding 5px
  }
  .content{

    .item{
      height 50px;
      width: 95%;
      margin: 0px auto;
      border-top: 1px solid rgba(191, 191, 191, 0.5);
      display flex;
      justify-content space-between;

      span{
        width 33%;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 50px;
        font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;

        letter-spacing: -0.24px;
        color: #646566;
      }
      input{
        width 70%;
        outline none;
        border none;
        background-color :#FFFFFF;
      }
      textarea{
        width 60%;
        height 70%;
        resize none;
      }
    }
    .item:last-child{
      height 75px
      display flex;
      align-items center
      span{
        line-height 23px
      }
    }
    .zc{
      span:last-child{
        color #9C9C9C;

        font-size 14px
      }
    }
  }
  .pagenumber{
    width 40px
    margin 50px auto;
    color : #A7A7A7;
  }
}
</style>