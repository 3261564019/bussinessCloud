<template>
  <div class="root">

      <img id="next" src="@/assets/home/group19.png" alt=""  @click="nextPage">


    <div class="toptitle" >
      “秘转专”备案申请表
    </div>

    <div class="title">
      有些产品面世后需转为专利保护的，建议在产品设计之
      初同步进行专利申请。专利申请有两种方式，一种是在
      国家知识产权网站（加个网址链接）上自主申请；另一
      种是通过有资质的专利代理机构申请。商业秘密保护转
      为专利保护的请填写下表。
    </div>

    <div class="content">
      <div class="item">
        <span>企业名称</span>
        <input type="text" v-model="formdata[index][0].qymc" disabled>
      </div>
      <div class="item">
        <span>企业类别</span>
        <input type="text" v-model="formdata[index][0].qylb">
      </div>
      <div class="item">
        <span>企业地址</span>
        <input type="text" v-model="formdata[index][0].qydz">
      </div>
      <div class="item zc" @click="choose_zc">
        <span>企业资产</span>
        <span>{{items_chooose}}</span>
        <span>（点击后可选择）</span>
      </div>
      <div class="item">
        <span>联系人</span>
        <input type="text" v-model="formdata[index][0].lxr">
      </div>
      <div class="item">
        <span>电话</span>
        <input type="text" v-model="formdata[index][0].dh">
      </div>
      <div class="item">
        <span>
          企业商业秘<br/>
          密转为专利<br/>
          的产品名称
        </span>
        <textarea name="" id="" cols="30" rows="15" resize="none" v-model="formdata[index][0].qysy"></textarea>
      </div>
    </div>

    <div class="pagenumber">
      1 / 2
    </div>

<!--    <choose ref="son" :items="items" :show="show" @banlancechoose="handlerChoose" @cancelchoose="show = !show"></choose>-->
      <div class="wrapper" v-if="show">
          <van-picker
              title="企业资产"
              show-toolbar
              :columns="items"
              @cancel="show=false"
              @confirm="onConfirm"
          />
      </div>

  </div>
</template>

<script>
import { Picker ,Popup ,Field } from 'vant';
import choose  from '@/components/balanceChoose/choose';

export default {
  name: "index.vue",
  data:()=>{
    return {
      index:0,      //当前属于第几页
      value: '',
      showPicker: false,
      items:['1000万以下', '1000万-5000万','5000万以上'],
      items_chooose:"1000万以下",
      show:false,
      formdata:[]
    }
  },
  created() {
    this.formdata=JSON.parse(localStorage.getItem("formdata"))
    this.formdata[this.index][0].qymc=localStorage.getItem("company_name");
    this.items_chooose=this.formdata[this.index][0].qyzc;

  },
  components: {
    Picker,
    Popup,
    Field

  },
  methods:{
    saveData(){
      //  赋值企业资产
      this.formdata[this.index][0].qyzc=this.items_chooose;

      //存储到本地
      localStorage.setItem("formdata",JSON.stringify(this.formdata));

    },
    nextPage(){
      this.saveData();
      this.$router.push("/m_to_z_apply2");
    }
    ,
    choose_zc(){
        this.show=!this.show
        console.log("外部的show",this.show);
    },
    onConfirm(value) {
      this.items_chooose = value;
      this.show=!this.show
      console.log(this.value);
    }
  },mounted(){
  }
}
</script>

<style lang="stylus" scoped>
body{
  background-color white!important;
}
.root {
    //background-color:rgba(100,100,100,.5);
  width:90%;
  height :100%;
  margin:20px auto;
  background-color:#FFFFFF;
  padding-top:10px;
  padding-bottom:20px;
  border-radius:4px;
  #next{

      position absolute;
      top:48%;
      right  10px;
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
    font-family: '微软雅黑';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.24px;
    color: #404956;
    margin 0 auto;
    margin-bottom 18px;
  }
  .content{

    .item{
      height 50px;
      width: 95%;
      margin: 0px auto;
      border-top: 1px solid rgba(191, 191, 191, 0.5);
      display flex;
      justify-content space-between;
      box-sizing border-box
      padding-right:20px;

      span{
        width 33%;
        font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 50px;
        letter-spacing: -0.24px;
        color: #404956;
      }
      input{
        width 70%;
        outline none;
        border none;
        background-color :#FFFFFF;
      }
      textarea{
        width:80%;
        height:70%;
        resize:none
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
  .wrapper{
    width:100%;
    position fixed;
    left :0;
    bottom:0;
    box-shadow:0 -5px 5px #ccc;
  }

}
</style>