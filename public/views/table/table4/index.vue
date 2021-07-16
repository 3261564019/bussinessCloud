<template>
    <div class="table4">
        <div class="content">
            <div class="block">
                <div class="block-left">
                    <span class="bt-span-base">商业秘密(知识产权)保护培训及法律宣传情况</span>
                </div>
                <div class="block-right" style=" justify-content:center;">
                    <img src="@/assets/home/group23.png">
                </div>
            </div>
            <div class="block">
                <div class="block-left">
                    <span class="bt-span-base">企业有无发生过商业秘密失密现象</span>
                </div>
                <div class="block-right" style="flex-wrap: wrap;">
                    <van-radio v-model="ceshi1" style="margin-right: 10px;" checked-color="#E64004">有</van-radio>
                    <van-radio v-model="ceshi2" checked-color="#E64004">技术信息</van-radio>
                    <van-radio v-model="ceshi3" checked-color="#E64004">经营信息</van-radio>
                    <van-radio v-model="ceshi4" checked-color="#E64004">其他信息</van-radio>
                </div>
            </div>

        </div>
        <div class="nodes"><span>4/10</span></div>
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
                ceshi1: false,
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
                this.$router.push({path: '/table/table5'})
            }
        }
    }
</script>
<style lang="stylus">
    .table4 {
        width 100%;
        padding-top 15px;
        position relative;

        .content {
            width: 95%;
            margin 0 auto;
            background-color #fff;
            border-radius: 10px;

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
    }
</style>
