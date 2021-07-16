<template>
    <div class="trainingDetails">
        <div class="news-piece">

            <div class="news-piece-title">
                <div class="news-piece-title-left">
                    <img :src='datas.releasavatar'/>
                    <span>{{datas.releasename}}</span>
                </div>
                <div class="news-piece-title-right">
                    <img style="width: 17px;height: 17px;" src="@/assets/training/group1.png">
                    <span>{{filterTime(datas.addtime)}}</span>
                </div>
            </div>
            <div class="news-piece-tips">
                <span>{{datas.titles}}</span>
            </div>


            <div class="news-piece-content"  >
<!--                <div class="news-piece-content-top">-->
<!--                    <span>{{datas.content}}</span>-->
<!--                </div>-->
<!--                <div class="news-piece-content-bottom">-->
<!--                    <img :src="datas.coverimg">-->
<!--                </div>-->
                <div v-html="datas.content">

                </div>

            </div>


<!--          <div class="news-piece-content" v-for="j in i.ss">-->
<!--            <div class="news-piece-content-top">-->
<!--              <span>{{j.content1}}</span>-->
<!--            </div>-->
<!--            <div class="news-piece-content-bottom">-->
<!--              <img :src="j.image1">-->
<!--            </div>-->
<!--          </div>-->



        </div>
    </div>
</template>

<script>
import api from "@/utils/net";
    export default {
        data() {
            return {
                linshi_list2: [
                    {
                        id: 1,
                        address: '浙江在线',
                        title: '脚踩滚烫沥青，他们不停歇',
                        content: '“让着点，你那鞋底薄，小心靠太近烫脚。”滚烫的沥青旁，陈哲航一边提醒我们，一边上前查看铺设情况，同时不忘提醒工人们注意摊铺细节。',
                        images: 'https://img.zjol.com.cn/mlf/dzw/zjxw/202107/W020210708263134059099.jpg',
                        ss: [
                            {
                                content1: '7月7日，小暑，杭州气象台连续第二天发布高温橙色预警。作为杭州风情大道快速路（机场路-建设二路）工程项目负责人，陈哲航知道，连日晴朗，能畅快做工的日子到了，这也是一年中最紧迫的日子。',
                                image1: 'https://img.zjol.com.cn/mlf/dzw/zjxw/202107/W020210708263136609866.jpg'
                            }, {
                                content1: '作为杭州“四纵五横”快速路网的重要组成部分，也是2022年杭州亚运会的配套保障工程，这条全长约12.6公里的风情大道快速路全线北起机场快速路，南至绕城高速，其中北段（金城路以北）将于今年年底具备通车条件，届时将实现杭州主城区至江南片区一路高架，并与机场高速无缝对接。现在，陈哲航们需要克服的，不仅是技术难题、迫在眉睫的工期，还有头顶的烈日和脚下的“热土”。',
                                image1: 'https://img.zjol.com.cn/mlf/dzw/zjxw/202107/W020210708263135335178.jpg'
                            },
                        ]
                    },
                    {
                        id: 2,
                        address: '浙江在线',
                        title: '脚踩滚烫沥青，他们不停歇',
                        content: '“让着点，你那鞋底薄，小心靠太近烫脚。”滚烫的沥青旁，陈哲航一边提醒我们，一边上前查看铺设情况，同时不忘提醒工人们注意摊铺细节。',
                        images: 'https://img.zjol.com.cn/mlf/dzw/zjxw/202107/W020210708263134059099.jpg',
                        ss: [
                            {
                                content1: '这就是今天的松阳。乡村的人居环境改善了，乡村产业基础扎实了，群众收入增加了，在古与今的碰撞、城与乡的交融、保护与发展的协同中，不断夯实着共同富裕的物质基础和精神基础。',
                                image1: ''
                            }, {
                                content1: '　　刚刚过去的周末，几位来自嘉兴的游客骑着共享单车畅游松阴溪绿道。他们感叹：到松阳，不仅可以住民宿、逛古村落，还可以在原生态、高品质的绿道上快意畅游。整合闲置资源和各类项目，松阳建成了百公里“浙江最美绿道”，用绿道联通城区、山区，串联起村庄和景区。游客可以漫步绿道、“暴走”古道、驰骋骑行赛道。“逛一逛古村落，走一走绿道，游客找到乡愁，都舍不得走了。”枫坪乡沿坑岭头村“柿里艺宿”经营者叶晨波说。',
                                image1: 'https://img.zjol.com.cn/mlf/dzw/zjxw/202107/W020210708257274942778.jpg'
                            },
                        ]
                    },
                    {
                        id: 3,
                        address: '浙江在线',
                        title: '脚踩滚烫沥青，他们不停歇',
                        content: '“让着点，你那鞋底薄，小心靠太近烫脚。”滚烫的沥青旁，陈哲航一边提醒我们，一边上前查看铺设情况，同时不忘提醒工人们注意摊铺细节。',
                        images: 'https://img.zjol.com.cn/mlf/dzw/zjxw/202107/W020210708263134059099.jpg',
                        ss: [
                            {
                                content1: '杭州市中心最繁忙的区域之一。三大市场林立，商户们进出货需求大，每天从这里进出的车辆有4000多辆、停靠在附近的非机动车达到6000多辆。本来就不宽敞的路口要承载这样庞大的流量，交通压力可想而知。',
                                image1: 'https://img.zjol.com.cn/mlf/dzw/zjxw/zjnews/hznews/202107/W020210708318270852733.jpg'
                            }, {
                                content1: '在这样的客观环境下，无论是机动车还是非机动车的违停现象都屡屡发生，时常造成拥堵不说，还极易引发交通事故。最近，这样的情况明显好转，整个路口的环境焕然一新。昨天下午，记者跟随交警来到现场进行了探访。',
                                image1: 'https://img.zjol.com.cn/mlf/dzw/zjxw/zjnews/hznews/202107/W020210708318272421405.jpg'
                            }, {
                                content1: '新华路附近大多是上了年份的老小区，住在这里的大部分都是老杭州人。对于这一带的交通变化，他们自然是最清楚的。“喏，这边路上之前一排排都是电动车，我们骑车过去都只能往汽车道走”，63岁的柴阿姨在这里住了26年，她朝新华路东侧一指告诉记者，在整治之前这边的非机动车道上经常停满了来批发取货的电动车，而且只要有两三辆车停下了，后面很快会排成一排。'
                            }
                        ]
                    },
                    {
                        id: 4,
                        address: '浙江在线',
                        title: '省人大常委会党组学习贯彻省委全会精神',
                        content: '“让着点，你那鞋底薄，小心靠太近烫脚。”滚烫的沥青旁，陈哲航一边提醒我们，一边上前查看铺设情况，同时不忘提醒工人们注意摊铺细节。',
                        images: 'https://img.zjol.com.cn/mlf/dzw/zjxw/202107/W020210708263134059099.jpg',
                        ss: [
                            {
                                content1: '浙江在线6月11日讯（记者 蒋欣如）6月11日，省人大常委会党组召开扩大会议，传达学习省委十四届九次全会精神，对常委会及机关学习贯彻全会精神进行部署。省人大常委会党组书记、副主任梁黎明主持。',
                                image1: 'https://img.zjol.com.cn/mlf/dzw/zjxw/gaoceng_developments/202106/W020210611674057331880.bmp'
                            }, {
                                content1: '　　会议指出，省委十四届九次全会是在即将迎来建党百年华诞、宣布全面建成小康社会的历史节点，召开的一次具有里程碑意义的会议，对我省高质量发展建设共同富裕示范区进行了系统谋划和全面部署。',
                                image1: ''
                            }, {
                                content1: '会议强调，各级人大要切实抓好省委全会精神的学习领会和贯彻落实，深刻理解把握省委全会精神实质，以人大履职助力高质量发展建设共同富裕示范区。要聚焦改革破题，积极推进政策制度创新，会同政府及有关部门，认真研究梳理共同富裕示范区建设涉及调整的现行法律或行政法规需求清单，积极争取全国人大常委会或国务院授权暂时调整适用，为共同富裕体制机制探索创新释放制度空间、法律空间。要强化法治引领，加快共同富裕自主性先行性地方立法，坚持共同富裕示范区建设推进到哪里，人大立法保障就跟进到哪里。要深化依法监督，全力助推省委决策部署落实落地，用实用好人大监督职权，加强法定监督方式的系统集成，推动共同富裕法律法规有效执行和目标任务落地见效。要发挥代表作用，有效汇聚共同富裕示范区建设的强大合力，充分调动全省各级人大代表的履职热情，主动投身共同富裕相关领域工作，引领激发广大人民群众促进共同富裕的积极性、主动性、创造性。要深化推进人大数字化改革，加快建设民生实事项目、代表联系选民等多跨应用场景，依托数字化手段更好地反映民意、梳理问题、分析原因，提高政策举措制定出台、落地实施的精准性、有效性，进一步走深走实共同富裕之路。'
                            }
                        ]
                    },
                    {
                        id: 5,
                        address: '新华社',
                        title: '7日上午，省委常委会召开会议，传达学习贯彻中共中央政治局常委、全国政协主席汪洋在浙江考察调研时重要讲话精神，研究部署我省贯彻落实举措。',
                        content: '“新华社北京7月6日电（记者 于佳欣） 随着自贸试验区第四批18个“最佳实 践案例”发布，截至目前，我国自贸 这是记者从商务部6日召开的',
                        images: 'https://img.zjol.com.cn/mlf/dzw/zjxw/202107/W020210708263134059099.jpg',
                        ss: [
                            {
                                content1: '会议指出，2019年中央政协工作会议以来，汪洋主席两次来浙江考察调研，充分体现了以习近平同志为核心的党中央对浙江的关心厚爱，也充分体现了全国政协对浙江工作的高度重视。尤其这次汪洋主席在建党百年、“十四五”开局的重要时间节点，就“建设高质量教育体系、强化国家战略科技力量”来浙开展主题调研，对于我们深入学习贯彻习近平总书记考察浙江重要讲话精神，完整、准确、全面贯彻新发展理念，忠实践行“八八战略”、奋力打造“重要窗口”，争创社会主义现代化先行省，具有十分重要的推动作用。',
                                image1: 'https://img.zjol.com.cn/mlf/dzw/zjxw/gaoceng_developments/202105/W020210507598621583148.jpg'
                            }, {
                                content1: '会议强调，要认真学习贯彻习近平总书记关于教育和科技工作的重要论述精神，结合浙江实际创造性落实党中央作出的重大决策部署，做好前瞻性研究、战略性谋划，为建设高质量教育体系、强化国家战略科技力量贡献浙江力量。要全面深化教育领域综合改革，全面落实高等教育强省战略，在高等教育探索创新上加大力度，推进教育资源均衡化，加快构建现代职业教育体系，努力打造高质量的现代教育体系。要积极探索新型举国体制的浙江路径，充分发挥政府作为重大科技创新组织者的作用，统筹各类创新主体同向发力，协调各方面力量共同行动，着力激发企业主体的创新活力，不断优化创新生态，强化平台抓手建设，努力打造具有世界影响力的创新策源地。要着力营造最优人才环境，深入实施“鲲鹏行动”等人才计划，完善容错机制和监管机制，探索构建“科技大脑+未来实验室”的科技创新数字化改革体系，努力打造全球人才蓄水池。'
                            }, {
                                content1: '会议强调，要认真学习领会习近平总书记关于加强和改进人民政协工作的重要论述精神，落实好汪洋主席对我省政协工作的指示要求，进一步提高政治站位、增强使命担当，奋力推动新时代浙江政协工作走在前列。要深入实践探索，进一步抓好“请你来协商”“委员会客厅”两大协商平台建设，凝聚更多界别群众的共识，不断推动政协工作高质量发展。要强化理论研究，着力从运行机制、制度建设等层面加强对我省政协创新活动成效经验的概括提炼，进一步打响政协工作品牌。要积极建言献策，在高水平履职工作中充分展现政协担当作为，助力我省建设高质量教育体系、强化国家战略科技力量，努力为人民政协制度更加成熟更加定型提供更多的浙江素材。'
                            }
                        ]
                    },
                    {
                        id: 6,
                        address: '新华社',
                        title: '9月28日下午，省十三届人大四次会议在杭州隆重开幕。肩负全省人民的重托与期望，602名省人大代表出席会议。',
                        content: '“新华社北京7月6日电（记者 于佳欣） 随着自贸试验区第四批18个“最佳实 践案例”发布，截至目前，我国自贸 这是记者从商务部6日召开的',
                        images: 'https://img.zjol.com.cn/mlf/dzw/zjxw/202107/W020210708263134059099.jpg',
                        ss: [
                            {
                                content1: '开幕式由大会执行主席、主席团常务主席袁家军主持。大会执行主席黄建发、梁黎明、姒健敏、李卫宁、李学忠、赵光君、史济锡、李火林和大会主席团成员在主席台就座。'
                            }, {
                                content1: '省领导郑栅洁、葛慧君、陈金彪、冯飞、朱国贤、许罗德、周江勇、熊建平、冯文平、陈伟俊、朱从玖、高兴夫、成岳冲、王文序、彭佳学、陈奕君、刘小涛和驻浙部队负责同志张晓林、田俊清、王波，省法院院长李占国，省检察院检察长贾宇，浙江大学党委书记任少波等在主席台就座。',
                                image1: 'https://img.zjol.com.cn/mlf/dzw/zjxw/gaoceng_developments/202009/W020200928742077702434.jpeg'
                            }, {
                                content1: '　列席会议的有省政府组成人员，不是省人大代表的省级有关单位负责人，不是省人大代表的设区市党委、人大、政府主要负责人等。',
                                image1: 'https://img.zjol.com.cn/mlf/dzw/zjxw/gaoceng_developments/202009/W020200928742080623536.jpeg'
                            }
                        ]
                    },


                ],
                datas: {},  //当前页面的内容
                id:-1
            }
        },
        created() {
          this.id=this.$route.query.id;
          // console.log();
          this.getDetial();
        },
        mounted() {
            // this.linshi_list2.forEach((item, index) => {
            //     if (this.$route.query.id == item.id) {
            //         this.datas = item
            //     }
            // })
            // console.log(this.datas)
        },
        methods: {
          filterTime(p){
              if(p){
                    return p.split(" ")[0];
              }
          },
          // 获取新闻政策详情
          getDetial(){
            api({
              url:this.$store.state.baseUrl+"/client/getnewsinfo.action",
              method:"get",
              params:{
                id:this.id
              }
            }).then(
                (res)=>{
                  this.datas=res.data.data;
                  console.log("新闻政策详情：",res.data.data);
                }
            )
          }
        }
    }
</script>

<style lang="stylus" scoped>
    .trainingDetails {
        width 100%;
        padding-bottom: 60px;

        .news {
            width 100%;
            background-color #FFFFFF;
            padding 10px 0 20px 0;
            margin-bottom 15px;

            .news-piece-title {
                width 95%;
                margin 0 auto;
                height 40px;
                display: flex;
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
                width 90%;
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
                justify-content space-between;


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

                .news-piece-title-left {
                    display flex;
                    align-items center;
                }

                .news-piece-title-right {
                    display flex;
                    align-items center;
                }

            }

            .news-piece-tips {
                width 90%;
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
                width 90%;
                margin 0 auto;
                margin-top 5px;
                div{
                  font-family: Alibaba PuHuiTi;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 15px;
                  line-height: 20px;
                  letter-spacing: -0.24px;
                  text-align: justify;
                  color: #888888;
                }
                .news-piece-content-top {
                    width 100%;
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

                .news-piece-content-bottom {
                    width 100%;
                    display: flex;
                    align-items center;
                    justify-content center;
                    margin-top 15px;
                    margin-bottom 15px;

                    img {
                        width 100%;
                    }
                }
            }
        }
    }
</style>
