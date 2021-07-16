<template>
    <div class="home">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(i,index)  in swiperList" :key="index">
                <img :src='$store.state.baseUrl+i.url'>
            </van-swipe-item>
        </van-swipe>

        <div class="piece">
            <div class="piece-title">
                <div class="piece-title-left">
                    <span>示范反馈</span>
                </div>
            </div>
            <div class="piece-content">
                <div class="piece-content-item" v-for="(i,index) in lsit1" :key="index" @click="jumpage1(i.path)">
                    <img :src="i.url">
                    <span>{{i.text}}</span>
                </div>
            </div>
        </div>



        <div class="piece">
            <div class="piece-title">
                <div class="piece-title-left">
                    <span>指导申请</span>
                </div>
                <div class="piece-title-right" @click="clickMore">
                    <span>更多test</span>
                    <img src="@/assets/gengduo.png">
                </div>
            </div>
            <div class="piece-content">
                <div class="piece-content-item" style="flex: 0 0 45%;margin: 15px 0 15px 0;" v-for="(i,index) in lsit2" :key="index"
                     @click="openDialog(i.text,i.code)">
                    <img style="width: 20px;height: 23px;" :src="i.url">
                    <span>{{i.text}}</span>
                </div>
            </div>
        </div>



        <div class="news">
            <div class="news-title">
                <img src="@/assets/home/group9.png">
                <span>新闻政策</span>
            </div>
            <div class="news-content">
                <div class="news-content-item" v-for="(i,index) in linshi_list2" :key="index"
                     :style="{'background-image': 'url('+i.releasavatar+')'}" @click="jumpDetails(i.id)">
                    <span>{{i.releasename}}</span>
                    <span>{{i.addtime}}</span>
                </div>
            </div>
        </div>


<!--  最下方一小块一小块的新闻-->
        <div class="news-piece" v-for="(i,index) in linshi_list1" :key="index" @click="jumpDetails(i.id)">
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
                    <img v-show="i.coverimg" :src="i.coverimg">
                </div>
            </div>
        </div>



        <div class='popContainer' v-if="show">
            <div class="popContainer-content">
                <div class="popContainer-content-title">
                    <span>请输入企业名称</span>
                </div>
                <div class="popContainer-content-input">
                    <input placeholder="请输入" v-model="inp">
                </div>
                <div class="popContainer-content-bottom">
                    <p style="background-color:#E64004" @click="clickSubmit">提交</p>
                    <p @click="show=false">取消</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Dialog} from 'vant';
    import api from "@/utils/net";
    export default {
        data() {
            return {
                sss: require('@/assets/linshi/icon1.png'),
                swiperList: [

                ],
                lsit1: [
                    {text: '示范申请', url: require('@/assets/home/group1.png')},
                    {text: '在线律师', url: require('@/assets/home/group2.png'), path: '/home/onlineLawyer'},
                    {text: '人才围栏', url: require('@/assets/home/group3.png')},
                    {text: '举报', url: require('@/assets/home/group4.png'), path: '/home/toReport'},
                ],
                lsit2: [
                    {text: '商业秘密保护措施备案', url: require('@/assets/home/group5.png'),code:5},
                    {text: '商业秘密保护保险', url: require('@/assets/home/group6.png'), code: 7},
                    {text: '商业秘密指导申请', url: require('@/assets/home/group7.png'),code:1},
                    {text: '“秘转专”申请', url: require('@/assets/home/group8.png'),code:2},
                ],
                code: 0,
                show: false,
                inp: '浙江易得科技有限公司',
                linshi_list1: [
                    {
                        id: 1,
                        address: '浙江在线',
                        title: '脚踩滚烫沥青，他们不停歇',
                        images: 'https://img.zjol.com.cn/mlf/dzw/zjxw/202107/W020210708263135335178.jpg',
                        content: '“让着点，你那鞋底薄，小心靠太近烫脚。”滚烫的沥青旁，陈哲航一边提醒我们，一边上前查看铺设情况，同时不忘提醒工人们注意摊铺细节。'
                    },
                    {
                        id: 2,
                        address: '浙江在线',
                        title: '上山打通致富路 下山绘出安居图',
                        images: 'https://img.zjol.com.cn/mlf/dzw/zjxw/202107/W020210708257274942778.jpg',
                        content: '“茶叶加工厂里，机器轰鸣，闻香而来的茶主播迫不及待地拿起手机现场直播带货；群山怀抱的古村落里，修旧如旧的老屋吸引了如织的游客和天南地北的资本'
                    },
                    {
                        id: 3,
                        address: '浙江在线',
                        title: '停车资源最大化利用 杭州这一繁忙又让人头疼的路口变样了',
                        images: 'https://img.zjol.com.cn/mlf/dzw/zjxw/zjnews/hznews/202107/W020210708318269190325.jpg',
                        content: '新华路凤起路口，北靠环北丝绸服装城，西接环北小商品市场、中国丝绸城'
                    },
                ],
                linshi_list2: [
                    {
                        id: 4,
                        images: 'https://img.zjol.com.cn/mlf/dzw/zjxw/gaoceng_developments/202106/W020210611674057331880.bmp',
                        title: '省人大常委会党组学习贯彻省委全会精神',
                        time: '2021年06月11日 18:43:28 '
                    },
                    {
                        id: 5,
                        images: 'https://img.zjol.com.cn/mlf/dzw/zjxw/gaoceng_developments/202106/W020210609286205413248.jpg',
                        title: '习近平致信祝贺第二届中国—中东欧国家博览会开幕',
                        time: '2021年06月09日 07:57:03 '
                    }
                ]
            }
        },
        mounted() {
        },
        methods: {
            //获取新闻政策
            getNewsZC(){
              api({
                url:"/client/getnewslist.action",
                method:"get",
                params:{
                  types:2
                }
              }).then(
                  (res)=>{
                    this.linshi_list2=res.data.data;
                    console.log("新闻政策",res.data.data);
                  }
              )
            },
            //获取新闻
            getNews(){

              api({
                url:"/client/getnewslist.action",
                method:"get",
                params:{
                  types:1
                }
              }).then(
                  (res)=>{
                    this.linshi_list1=res.data.data;
                    console.log("新闻",res.data.data);
                  }
              )
            },
            //获取轮播图
            getBanner(){
              api({
                url:"/client/getlbtlist.action",
                method:"get",
              }).then(
                  (res)=>{
                    this.swiperList=res.data
                  }
              )

            },
            clickMore() {
                this.$router.push('/home/moreGuidanceApplications')
            },
            jumpage1(path) {
                this.$router.push(path)
            },
            openDialog(text, code) {
                this.code = code
                Dialog.confirm({
                    message: '是否申请' + text + '?',
                }).then(() => {
                    // on confirm
                    setTimeout(() => {
                        this.show = true
                    }, 500)
                }).catch(() => {
                    // on cancel
                });
            },
            clickSubmit() {
                this.$router.push({path: '/home/selectForm', query: {code: this.code}})
            },
            jumpDetails(id) {
              console.log(id);
              this.$router.push({path: '/training/trainingDetails', query: {id: id}})
            }
        },
        created(){
          this.getBanner();
          this.getNews();
          this.getNewsZC();
        }
    }
</script>

<style lang="stylus" scoped>
    .home {
        width 100%;
        padding-top 10px;
        padding-bottom: 60px;


        .my-swipe {
            width: 95%;
            margin: 0 auto;
            margin-bottom 15px;

            height:150px;

            img {
                width 100%;
                height 100%;
            }
        }

        .piece {
            width 95%;
            margin: 0 auto;
            background: #FFFFFF;
            border-radius: 8px;
            margin-bottom 15px;
            padding 0 0 15px 0;


            .piece-title {
                width 95%;
                margin 0 auto;
                height 50px;
                display: flex;
                justify-content space-between;

                .piece-title-left {
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 17px;
                    line-height: 50px;
                    letter-spacing: -0.24px;
                    color: #222222;
                }

                .piece-title-right {
                    display: flex;
                    align-items center;
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    letter-spacing: -0.24px;
                    color: #9C9C9C;

                    img {
                        width 10px;
                        height 13px;
                        margin-left 5px;
                    }
                }
            }

            .piece-content {
                width 100%;
                display: flex;
                flex-wrap wrap;
                justify-content space-between;


                .piece-content-item {
                    flex: 0 0 25%;
                    display: flex;
                    align-items center;
                    /*justify-content center;*/
                    flex-direction column;
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 15px;
                    text-align: center;
                    letter-spacing: -0.5px;
                    color: #444444;

                    span {
                        margin 0 10px 0 10px;
                    }

                    img {
                        margin-bottom 7px;
                        width 23px;
                        height 22px;
                    }
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
            width 100%;
            background-color #fff;
            padding: 5px 0 10px 0;
            margin-bottom 15px;

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


                img{
                    width:25px;
                    border:1px solid #e64004;
                  border-radius:50%;
                }
              span{
                display inline-block;
                margin-left 10px;
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

                    img {
                        max-width:170px;
                        max-height:95px;
                        width 100%;
                        height 90%;
                    }
                }
            }
        }

        .popContainer {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display flex;
            align-items center;
            justify-content center;

            .popContainer-content {
                width 80%;
                background-color #fff;
                border-radius 10px;

                .popContainer-content-title {
                    width 90%;
                    margin 0 auto;
                    height 50px;
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    letter-spacing: -0.5px;
                    color: #222222;
                    line-height 50px;
                }

                .popContainer-content-input {
                    width 90%;
                    margin 0 auto;
                    height 40px;
                    border 1.5px #222222 solid;

                    input {
                        border: none;
                        outline: none;
                        width 90%;
                        height 90%;
                        padding-left 10px;
                        font-family: Alibaba PuHuiTi;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 15px;
                        letter-spacing: -0.5px;
                        color: #222222;
                    }
                }

                .popContainer-content-bottom {
                    width 90%;
                    margin 0 auto;
                    display: flex;
                    align-items center;
                    justify-content space-between;

                    p {
                        width 80px;
                        height 35px;
                        background: #CACACA;
                        border-radius: 8px;
                        font-family: Alibaba PuHuiTi;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 15px;
                        text-align: center;
                        letter-spacing: -0.24px;
                        color: #FFFFFF;
                        line-height: 35px;
                    }
                }
            }
        }
    }
</style>
