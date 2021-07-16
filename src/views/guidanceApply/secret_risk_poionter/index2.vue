<template>
    <div class="table7">
        <div class="content">
            <div class="tips">
                <span>涉密技术信息</span>
            </div>
            <div class="tabs">
                <div class="tabs-title">
                    <div class="tabs-title-item1">
                        <span>项目</span>
                    </div>
                    <div class="tabs-title-item2">
                        <span>表现形式</span>
                    </div>
                    <div class="tabs-title-item1" style="border: none;">
                        <span>请勾选</span>
                    </div>
                </div>
                <div class="tabs-content">
                    <div class="tabs-content-item1">
                        <span>管理文件</span>
                    </div>
                    <div class="tabs-content-item2">
                        <span>文件、规章制度等。</span>
                    </div>
                    <div class="tabs-content-item1" style="border: none;">
                        <van-checkbox v-model="checked1" checked-color="#E64004"></van-checkbox>
                    </div>
                </div>
                <div class="tabs-content">
                    <div class="tabs-content-item1">
                        <span>采购技术信息</span>
                    </div>
                    <div class="tabs-content-item2">
                        <span>决策信息</span>
                    </div>
                    <div class="tabs-content-item1" style="border: none;">
                        <van-checkbox v-model="checked1" checked-color="#E64004"></van-checkbox>
                    </div>
                </div>
                <div class="tabs-content">
                    <div class="tabs-content-item1">
                        <span>研发信息</span>
                    </div>
                    <div class="tabs-content-item2">
                        <span>研发策略、研发经费预 算等。</span>
                    </div>
                    <div class="tabs-content-item1" style="border: none;">
                        <van-checkbox v-model="checked1" checked-color="#E64004"></van-checkbox>
                    </div>
                </div>
                <div class="tabs-content">
                    <div class="tabs-content-item1">
                        <span>采购经营信息</span>
                    </div>
                    <div class="tabs-content-item2">
                        <span>采购渠道、采购价格、采购计划、采购记录等。</span>
                    </div>
                    <div class="tabs-content-item1" style="border: none;">
                        <van-checkbox v-model="checked1" checked-color="#E64004"></van-checkbox>
                    </div>
                </div>
                <div class="tabs-content">
                    <div class="tabs-content-item1">
                        <span>营销信息</span>
                    </div>
                    <div class="tabs-content-item2">
                        <span>营销策划、营销方案、营销政策、营销手册、物流信息、快递信息等。</span>
                    </div>
                    <div class="tabs-content-item1" style="border: none;">
                        <van-checkbox v-model="checked1" checked-color="#E64004"></van-checkbox>
                    </div>
                </div>
                <div class="tabs-content">
                    <div class="tabs-content-item1">
                        <span>招投标信息</span>
                    </div>
                    <div class="tabs-content-item2">
                        <span>标书、标底等。</span>
                    </div>
                    <div class="tabs-content-item1" style="border: none;">
                        <van-checkbox v-model="checked1" checked-color="#E64004"></van-checkbox>
                    </div>
                </div>
                <div class="tabs-content">
                    <div class="tabs-content-item1">
                        <span>财务信息</span>
                    </div>
                    <div class="tabs-content-item2">
                        <span>财务报表、财务分析、 统计报表、预决算报告、 各类帐册、工资信息等。</span>
                    </div>
                    <div class="tabs-content-item1" style="border: none;">
                        <van-checkbox v-model="checked1" checked-color="#E64004"></van-checkbox>
                    </div>
                </div>
            </div>
        </div>
        <div class="nodes"><span>7/10</span></div>
        <div class="instructions">
            <span>说明：企业提交的每张图片均需盖企业章，并注明拍摄地及 提交时间。接收时间以最后收到的图片时间为准。企业提交 的材料可以盖章后扫描上传，也可以送到属地市场监管所。</span>
        </div>
        <div class="underThe">
            <img src="@/assets/home/group18.png" @click="historyGo">
            <img src="@/assets/home/group19.png" @click="jumpPage()">
        </div>
        <div class="controls">
            <div class="controls-piece">
                <img src="@/assets/home/group20.png">
                <span>保存</span>
            </div>
            <div class="controls-piece" style="color: #E64004">
                <img src="@/assets/home/group21.png">
                <span>下载</span>
            </div>
            <div class="controls-piece" style="color: #016EF9">
                <img src="@/assets/home/group22.png">
                <span>上传</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value1: '',
                radio: '1',
                radio2: '1',

                checked1: false,
                ceshi2: false,
                ceshi3: false,
                ceshi4: false,
            }
        },
        mounted() {
        },
        methods: {
            historyGo() {
                history.go(-1)
            },
            jumpPage() {
                this.$router.push({path: '/secret_risk_poionter3'})
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .table7 {
        width 100%;
        padding-top 15px;
        position relative;
        padding-bottom 15px;

        .content {
            width: 95%;
            margin 0 auto;
            background-color #fff;
            border-radius: 10px;
            padding-bottom 15px;

            .tips {
                width 90%;
                margin 0 auto;
                font-family: Alibaba PuHuiTi;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                text-align: center;
                letter-spacing: -0.24px;
                color: #404956;
                height 50px;
                line-height 50px;
            }

            .block {
                width 95%;
                margin 0 auto;
                padding 15px 0 15px 0;
                border-bottom 1.5px #dfdfdf solid;
                display: flex;


                .block-left {
                    flex: 0 0 35%;
                    display flex;
                    align-items: center;
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 15px;
                    line-height: 22px;
                    letter-spacing: -0.24px;
                    color: #404956;
                }

                .block-right {
                    flex: 0 0 63%;
                    margin-left 2%;
                    display: flex;
                    align-items center;
                    position relative;


                    .van-radio {
                        margin 10px 10px 10px 0;
                    }

                    input {
                        border: 0;
                        width: 40px;
                        height: 25px;
                        outline none;
                        border-bottom 1px #424955 solid;
                        position absolute;
                        bottom 5px;
                    }

                    img {
                        width 100px;
                        height: 100px;
                    }

                    .block-right-span {
                        position absolute;
                        bottom 0;
                        font-family: Alibaba PuHuiTi;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        letter-spacing: -0.24px;
                        color: #BEBEBE;

                    }
                }
            }
        }

        .nodes {
            width 100%;
            height 60px;
            line-height 60px;
            text-align center;
            font-family: Alibaba PuHuiTi;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            letter-spacing: -0.24px;
            color: #A7A7A7;
        }

        .instructions {
            width 70%;
            font-family: Alibaba PuHuiTi;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            letter-spacing: -0.24px;
            color: #999999;
            margin-left 2.5%;
        }

        .underThe {
            width 100%;
            position fixed;
            top: 30%;
            display: flex;
            justify-content space-between;

            img {
                width 30px;
                height: 30px;
                margin 0 15px 0 15px;
            }
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

        .tabs {
            width 90%;
            border-top 1px #9C9C9C solid;
            border-left 1px #9C9C9C solid;
            border-right 1px #9C9C9C solid;
            margin 0 auto;

            .tabs-title {
                width 100%;
                border-bottom 1px #9C9C9C solid;
                height 35px;
                display flex;
                font-family: Alibaba PuHuiTi;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 22px;
                letter-spacing: -0.24px;
                color: #404956;


                .tabs-title-item1 {
                    flex: 0 0 30%;
                    display: flex;
                    align-items center;
                    justify-content center;
                    border-right 1px #9C9C9C solid;
                }

                .tabs-title-item2 {
                    flex: 0 0 40%;
                    display: flex;
                    align-items center;
                    justify-content center;
                    border-right 1px #9C9C9C solid;

                }
            }

            .tabs-content {
                width 100%;
                border-bottom 1px #9C9C9C solid;
                min-height 50px;
                display flex;
                font-family: Alibaba PuHuiTi;
                font-style: normal;
                font-weight: 500;
                font-size: 15px;
                line-height: 22px;
                letter-spacing: -0.24px;
                color: #404956;


                .tabs-content-item1 {
                    flex: 0 0 30%;
                    display: flex;
                    align-items center;
                    justify-content center;
                    border-right 1px #9C9C9C solid;

                    span {
                        margin 5px;
                    }
                }

                .tabs-content-item2 {
                    flex: 0 0 40%;
                    display: flex;
                    align-items center;
                    justify-content center;
                    border-right 1px #9C9C9C solid;

                    span {
                        margin 5px;
                    }
                }
            }
        }
    }
</style>
