<template>
    <div class="training">
      <tabs v-model:active="active" swipeable>
        <tab title="分享案例" title-style="font-size:16px">

          <div class="news-piece" @click="jumpDetails(i.index)" v-for="i,index in caseShare">
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
        <tab title="知识问答" title-style="font-size:16px">内容 2</tab>
        <tab title="在线律师" title-style="font-size:16px">内容 3</tab>
        <tab title="定制模版" title-style="font-size:16px">

          <div class="news-piece" @click="jumpDetails(i.index)" v-for="i,index in customTemplates">
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

<!--        <div class="news-video">-->
<!--            <div class="news-video-left">-->
<!--                <video width="85" height="85" controls="controls"></video>-->
<!--            </div>-->

<!--            <div class="news-video-right">-->
<!--                <div class="news-video-right-title">-->
<!--                    <div class="news-video-right-title-left">-->
<!--                        <span>先行指标释放经济积极信号</span>-->
<!--                    </div>-->
<!--                    <div class="news-video-right-title-right">-->
<!--                        <img src="@/assets/training/group1.png">-->
<!--                        <span>2021-7-2</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="news-video-right-content">-->
<!--                    <span>最新发布的6月份采购经理指数显示，我国经济继 续稳步恢复。6月份，中国制造业采购经理指数 （PMI）为50.9%</span>-->
<!--                </div>-->
<!--                <div class="news-video-right-title">-->
<!--                    <div class="news-video-right-title-left"></div>-->
<!--                    <div class="news-video-right-title-right">-->
<!--                        <img style="height: 13px;margin-top: 2px" src="@/assets/training/group2.png">-->
<!--                        <span>999次</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

<!--        </div>-->





    </div>
</template>

<script>
import api from "@/utils/net";
import { Tab, Tabs } from 'vant';
    export default {
        data() {
            return {
                active:'',
                indexs: 0,
                selectList: [
                    {text: '分享案例'},
                    {text: '常见知识问答'},
                    {text: '在线律师'},
                    {text: '定制模版'},
                ],
                datas: [
                    {
                        id: '5',
                        address: '新华社',
                        title: '省委常委会会议传达学习贯彻汪洋在浙江考察调研时重要讲话精神',
                        content: '省委常委会会议传达学习贯彻汪洋在浙江考察调研时重要讲话精神奋力推动新时代浙江政协工作走在前列省委书记袁家军主持',
                        images: 'https://img.zjol.com.cn/mlf/dzw/zjxw/gaoceng_developments/202105/W020210507598621583148.jpg'
                    },
                    {
                        id: '6',
                        address: '新华社',
                        title: '浙江省十三届人大四次会议隆重开幕',
                        content: '9月28日下午，省十三届人大四次会议在杭州隆重开幕。肩负全省人民的重托与期望，602名省人大代表出席会议。。',
                        images: 'https://img.zjol.com.cn/mlf/dzw/zjxw/gaoceng_developments/202009/W020200928742075079268.jpeg'
                    },
                ],
                customTemplates:[],
                caseShare:[]

            }
        },
        mounted() {
        },
        components:{
          Tab,
          Tabs
        }
        ,
        methods: {
            selectTitle(index) {
                this.indexs = index
            },
            jumpDetails(id) {
                this.$router.push({path: '/training/trainingDetails', query: {id: id}})
            },
            getData(){

              //获取案例分享的数据
              api({
                url: "/client/getnewslist.action",
                method: 'get',
                params: {
                  types: 6
                }
              }).then(
                  (res) => {
                    this.caseShare=res.data.data;
                    console.log("案例分享",res);
                  }
              );

              //定制模板
              api({
                url: "/client/getnewslist.action",
                method: 'get',
                params: {
                  types: 7
                }
              }).then(
                  (res) => {
                    this.customTemplates=res.data.data;
                    console.log("定制模板",res);
                  }
              );

            }
        },
        created(){
          this.getData();
        }
    }
</script>

<style lang="stylus" scoped>
    .training {
        width 100%;
        padding-bottom: 60px;

        .content-select {
            border-bottom 1px #E2E2E2 solid;
            height 50px;
            width 100%;
            overflow-x auto;
            display: flex;
            background-color #fff;

            .content-select-item {
                min-width 105px;
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

        .news {
            width 100%;
            background-color #FFFFFF;
            padding 10px 0 20px 0;
            margin-bottom 15px;

            .news-title {
                width 95%;
                margin 0 auto;
                height 40px;
                display: flex;
                align-items center;
                font-family: Alibaba PuHuiTi;
                font-style: normal;
                font-weight: 500;
                font-size: 17px;
                line-height: 50px;
                letter-spacing: -0.24px;
                color: #222222;

                img {
                    width 18px;
                    height: 18px;
                    margin-right 5px;
                }
            }

            .news-content {
                width 97.5%;
                margin-left 2.5%;
                overflow-x auto;
                display flex;

                .news-content-item {
                    flex: 0 0 85%;
                    margin 0 auto;
                    height: 130px;
                    font-weight 500;
                    margin-top 10px;
                    color #fff;
                    background-size 100% 100%;
                    font-size 15px;
                    display flex;
                    flex-direction column;
                    justify-content center;
                    margin-right 20px;

                    span {
                        margin-left 10px;
                    }
                }
            }
        }

        .news-piece {
            width 95%;
            background-color #fff;
            padding: 5px 0 10px 0;
            margin 0 auto;
            margin-top 15px;
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
                    }
                }
            }
        }


        .news-video {
            width 95%;
            margin 0 auto;
            display: flex;
            background-color #fff;
            padding 10px 0 10px 0;
            margin-bottom 15px;
            margin-top 15px;
            border-radius 8px;

            .news-video-left {
                flex 0 0 30%
                display: flex;
                justify-content center;
            }

            .news-video-right {
                flex 0 0 70%

                .news-video-right-title {
                    width 100%;
                    display: flex;

                    .news-video-right-title-left {
                        flex 0 0 65%
                        font-family: Alibaba PuHuiTi;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        letter-spacing: -0.24px;
                        color: #000000;

                    }

                    .news-video-right-title-right {
                        flex 0 0 35%
                        display: flex;
                        font-family: Alibaba PuHuiTi;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 13px;
                        letter-spacing: -0.24px;
                        color: #9C9C9C;

                        img {
                            width 13px;
                            height: 13px;
                            margin-right 5px;
                            margin-top 2px;
                        }

                    }
                }

                .news-video-right-content {
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 16px;
                    letter-spacing: -0.24px;
                    color: #9C9C9C;
                }
            }
        }
    }
</style>
