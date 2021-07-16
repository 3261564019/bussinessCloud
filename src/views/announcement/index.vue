<template>
  <div class="announcement">
    <div class="tips">
      <img src="@/assets/linshi/icon1.png">
    </div>
    <div class="content">
      <!--            <div class="content-select">-->
      <!--                <div class="content-select-item" v-for="i,index in selectList" @click="selectTitle(i,index)">-->
      <!--                    <span :style="index==indexs?'color: #222222;':''">{{i.text}}</span>-->
      <!--                    <div :style="index==indexs?'background-color: #E64004;':''" class="content-select-item-p"></div>-->
      <!--                </div>-->
      <!--            </div>-->
      <tabs v-model="active" swipeable>
        <tab title="合同模板" title-style="font-size:16px">

          <div class="content-probably">
            <div v-for="i in datas" class="content-probably-item">
              <div class="content-probably-item-left">
                <span>{{ i.text }}</span>
                <img v-show="i.url" :src="i.url">
              </div>
              <div class="content-probably-item-right">
                <img src="@/assets/gengduo.png">
              </div>
            </div>
          </div>


        </tab>
        <tab title="保护示范" title-style="font-size:16px">

          <div class="news-piece"  v-for="(i,index) in protected_demo" :key="index">
            <div class="news-piece-title">
              <img :src="i.releasavatar">
              <span>{{i.releasename}}</span>
            </div>
            <div class="news-piece-tips">
              <span>{{i.titles}}</span>
            </div>
            <div class="news-piece-content">
              <div class="news-piece-content-left">
                <span>{{i.introduction}}</span>
              </div>
              <div class="news-piece-content-right">
                <img :src="i.coverimg">
              </div>
            </div>
          </div>

        </tab>
        <tab title="商业秘密" title-style="font-size:16px">


          <div class="news-piece"  v-for="(i,index) in business_secret" :key="index">
            <div class="news-piece-title">
              <img :src="i.releasavatar">
              <span>{{i.releasename}}</span>
            </div>
            <div class="news-piece-tips">
              <span>{{i.titles}}</span>
            </div>
            <div class="news-piece-content">
              <div class="news-piece-content-left">
                <span>{{i.introduction}}</span>
              </div>
              <div class="news-piece-content-right">
                <img :src="i.coverimg">
              </div>
            </div>
          </div>


        </tab>
        <tab title="秘密标准" title-style="font-size:16px">


          <div class="news-piece"  v-for="(i,index) in secret_standard" :key="index">   <!--@click="jumpDetails(i.id)"-->
            <div class="news-piece-title">
              <img :src="i.releasavatar">
              <span>{{i.releasename}}</span>
            </div>
            <div class="news-piece-tips">
              <span>{{i.titles}}</span>
            </div>
            <div class="news-piece-content">
              <div class="news-piece-content-left">
                <span>{{i.introduction}}</span>
              </div>
              <div class="news-piece-content-right">
                <img :src="i.coverimg">
              </div>
            </div>
          </div>

        </tab>
      </tabs>


    </div>
  </div>
</template>
<script>
import api from "@/utils/net";
import {Tab, Tabs} from 'vant';

export default {
  data() {
    return {
      active:"",
      selectList: [
        {text: '合同模板'},
        {text: '保护示范', types: 3},
        {text: '商业秘密', types: 4},
        {text: '秘密标准', types: 5}
      ],
      indexs: 0,
      datas: [
        {text: '省/市级商业秘密保护示范点', url: require('@/assets/announcement/group1.png')},
        {text: '省/市级商业秘密保护示范园区', url: require('@/assets/announcement/group2.png')},
        {text: '省商业秘密标准  ', url: require('@/assets/announcement/group3.png')},
        {text: '台州保密合同模版', url: require('@/assets/announcement/group4.png')},
        {text: '商业秘密案件判例-市法院',},
        {text: '商业秘密案件判例-省高院',},
      ],
      secret_standard:[],    //秘密标准的数据
      protected_demo:[] ,     //保护示范的数据
      business_secret:[]      //商业秘密
    }
  },
  components: {
    Tabs,
    Tab
  },
  mounted() {
  },
  methods: {

    getData() {


      api({
        url: "/client/getnewslist.action",
        method: 'get',
        params: {
          types: 5
        }
      }).then(
          (res) => {
            this.secret_standard=res.data.data;
          }
      );

      api({
        url: "/client/getnewslist.action",
        method: 'get',
        params: {
          types: 3
        }
      }).then(
          (res) => {
            this.protected_demo=res.data.data;
            console.log("保护示范：",this.protected_demo);
          }
      );

      api({
        url: "/client/getnewslist.action",
        method: 'get',
        params: {
          types: 4
        }
      }).then(
          (res) => {
            this.business_secret=res.data.data;
            console.log("商业秘密：",this.business_secret);
          }
      );

    }
  },
  created() {
    this.getData();
  }
}
</script>
<style lang="stylus" scoped>
.announcement {
  width 100%;
  padding-top: 15px;
  background-color #fff;
  padding-bottom:65px;

  .tips {
    width 95%;
    height 120px;
    margin 0 auto;

    img {
      width 100%;
      height 100%;
    }
  }

  .content {
    padding-top 10px;
    background-color #fff;
    width 100%;
    box-shadow: 0px 4px 6px rgba(0,0,0,0.08);

    .van-tabs {
      .van-tabs__content {
        .van-tab__pane{
          background-color:#e5e5e5;
          padding:1px 0px;
        }
      }
    }
    .news-piece {
      width 95%;
      background-color #fff;
      padding: 5px 0 10px 0;
      margin:15px auto;
      border-radius:6px;
      box-shadow: 1px 1px 8px #ccc;
      .news-piece-title {
        width 95%;
        margin 0 auto;
        height 40px;
        display: flex;
        align-items center;
        font-family: Alibaba PuHuiTi;
        font-style: normal;
        font-size: 15px;
        line-height: 50px;
        letter-spacing: -0.24px;
        color: #888888;

        img {
          width 18px;
          height: 18px;
          margin-right 5px;
        }

        p {
          width 17px;
          height: 17px;
          margin-right 5px;
          background-color #E64004;
          border-radius 50%;
        }
      }

      .news-piece-tips {
        width 95%;
        margin 0 auto;
        font-family: Alibaba PuHuiTi;
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 20px;
        letter-spacing: -0.24px;
        color: #222222;
        text-align: justify;
      }

      .news-piece-content {
        width 95%;
        margin 0 auto;
        display flex;
        margin-top 5px;

        .news-piece-content-left {
          flex: 0 0 55%
          font-family: Alibaba PuHuiTi;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 20px;
          letter-spacing: -0.24px;
          text-align: justify;
          color: #888888;
          padding 5px 0 0 0;
          span{
            word-break:break-all;
          }
        }

        .news-piece-content-right {
          flex: 0 0 43%;
          margin-left 2%;
          display: flex;
          align-items center;
          justify-content center;

          img {
            width 100%;
            height 90%;

            max-width:170px;
            max-height:95px;
          }
        }
      }
    }


    .content-select {
      border-bottom 1px #E2E2E2 solid;
      height 50px;
      width 100%;
      overflow-x auto;
      display: flex;

      .content-select-item {
        min-width 80px;
        height 100%;
        display: flex;
        align-items center;
        justify-content center;
        flex-direction column;
        font-family: Alibaba PuHuiTi;
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        text-align: center;
        letter-spacing: -0.24px;
        color: #9C9C9C;
        padding 0 10px 0 10px;

        .content-select-item-p {
          background-color: #9C9C9C;
          width 30px;
          height 3px;
          margin-top 10px;
        }
      }
    }

    .content-probably {
      width 95%;
      margin 0 auto;
      margin-top 15px;

      .content-probably-item {
        width 100%;
        border-bottom: 1px solid #E2E2E2;
        padding: 15px 0 15px 0;
        display: flex;
        align-items center;

        .content-probably-item-left {
          flex 0 0 92%;
          font-family: Alibaba PuHuiTi;
          font-style: normal;
          font-weight: 400;
          font-size: 17px;
          letter-spacing: -0.24px;
          color: #222222;
          display: flex;
          align-items center;

          img {
            width 20px;
            height: 20px;
            margin-left 5px;
          }
        }

        .content-probably-item-right {
          flex 0 0 8%;
          display: flex;
          justify-content center;

          img {
            width 10px;
            height 14px;
            /*margin-left 10px;*/
          }
        }
      }
    }
  }
}
</style>
