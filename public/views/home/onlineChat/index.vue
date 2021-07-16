<template>
    <div class="onlineChat" id="chatRecord">
        <div class="title">
            <span :style="code==1?'color:#d54d25':''">说明问题</span>
            <img src="@/assets/gengduo.png">
            <span :style="code==2?'color:#d54d25':''">接入律师</span>
            <img src="@/assets/gengduo.png">
            <span :style="code==3?'color:#d54d25':''">获取解答</span>
        </div>
        <div class="tips">
            <span>解决法律问题请输入内容,18亿人次使用,20万注册律师为你解答。本次沟通已经加密,请放心输入你的问题,提交问题默认同意服务
                <span style="color: #1c5bf3">《用户服务协议》</span>、
                <span style="color: #1c5bf3">《个人信息保护协议》</span>、
                <span style="color: #1c5bf3">《资讯产品服务协议》</span>
            </span>
        </div>
        <div class="contents" v-for="i in content">
            <div class="contents-left" v-show="i.code==0">
                <img src="@/assets/mine/group1.png">
                <div class="contents-left-piece">
                    <span>{{i.text}}</span>
                </div>
            </div>
            <div class="contents-right" v-show="i.code==1">
                <div class="contents-right-piece">
                    <span>{{i.text}}</span>
                </div>
                <img src="@/assets/mine/group1.png">
            </div>
            <div class="contents-tips" v-show="i.code==2">
                <img src="@/assets/home/group11.png">
                <span>对话已加密，请放心输入</span>
            </div>
            <div class="contents-right-clear"></div>
        </div>
        <div class="bottoms">
            <div class="bottoms-top">
                <div class="bottoms-top-left">
                    <van-checkbox v-model="checked" icon-size="15px">匿名咨询</van-checkbox>
                </div>
                <div class="bottoms-top-right">{{mreark.length}}/500</div>
            </div>
            <div class="bottoms-bot">
                <div class="bottoms-bot-left">
                    <input placeholder="请简单说明您的问题(至少10个字)" v-model="mreark">
                </div>
                <div class="bottoms-bot-right" @click="clickSend">
                    <p>发送</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                checked: false,
                code: 1,
                content: [
                    {
                        text: '您好，我是您的咨询助手，请在下方输入问题并发送给我，我将为您分析问题和通知律师为您解答。',
                        code: 0
                    },
                    {
                        text: '您好，请问您遇见了什么法律问题？',
                        code: 0
                    },
                    {
                        text: '对话已加密，请放心输入',
                        code: 2
                    },
                    {
                        text: '你好，我想咨询一下',
                        code: 1
                    }
                ],
                mreark: ''
            }
        },
        watch: {},
        updated() {
            // 聊天定位到底部
            let ele = document.getElementById('chatRecord');
            ele.scrollTop = ele.scrollHeight;
        },
        mounted() {
            console.log(this.$route)
        },
        methods: {
            clickSend() {
                let obj = [{text: this.mreark, code: 1}]
                this.content = [...this.content, ...obj]
                this.mreark = ''
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .onlineChat {
        width: 100%;
        position: relative;
        padding-bottom :100px;
        height: 120vh;
        overflow-y: auto;

        .title {
            width 100%;
            display flex;
            align-items center;
            justify-content: center;
            font-family: Alibaba PuHuiTi;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            letter-spacing: -0.24px;
            color: #333333;
            background-color #fff;
            height 50px;
            margin-bottom 20px;

            img {
                width: 10px;
                height: 13px;
                margin 0 10px 0 10px
            }
        }

        .tips {
            width 90%;
            margin 0 auto;
            background-color #eeeeee;
            font-family: Alibaba PuHuiTi;
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 16px;
            letter-spacing: -0.24px;
            color: #333333;
            border-radius 4px;
            padding 10px;
            text-align: justify;
        }

        .contents {
            width :100%;
            margin-bottom :20px;
            margin-top: 20px;


            .contents-left {
                float: left;
                margin-left :10px;
                display: flex;
                /*margin-top 20px;*/

                img {
                    width :35px;
                    height: 35px;
                    border-radius :50%;
                    float: left;
                }


                .contents-left-piece {
                    float: left
                    max-width 82%;
                    background-color :#fff;
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    letter-spacing: -0.24px;
                    color: #333333;
                    padding: 8px;
                    margin-left :5px;
                    margin-top :8px;
                    border-radius :4px;
                    margin-right :5px;
                }
            }

            .contents-right {
                float: right;
                margin-right: 10px;
                display: flex;

                img {
                    width :35px;
                    height: 35px;
                    border-radius :50%;
                    float: left;
                }


                .contents-right-piece {
                    float: right;
                    max-width :82%;
                    background-color :#fff;
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    letter-spacing: -0.24px;
                    color: #333333;
                    padding :8px;
                    margin-left: 5px;
                    margin-top: 8px;
                    border-radius :4px;
                    margin-right :5px;
                }
            }

            .contents-tips {
                width :80%;
                height :32px;
                background-color: #eeeeee;
                display: flex;
                align-items: center;
                justify-content :center;
                margin: 0 auto;
                border-radius :50px;
                color: #aaaaaa;
                font-family: Alibaba PuHuiTi;
                font-style: normal;
                font-weight: normal;
                font-size: 13px;
                letter-spacing: -0.24px;


                img {
                    width 13px;
                    height: 14px;
                    margin-right 5px;
                }
            }

            .contents-right-clear {
                clear: both;
            }
        }

        .bottoms {
            width 100%;
            /*height 80px;*/
            background-color #fff;
            position fixed;
            bottom 0;

            .bottoms-top {
                width 95%;
                margin 0 auto;
                height: 40px;
                display: flex;
                justify-content: space-between;


                .bottoms-top-left {
                    display: flex;
                    align-items center;
                    font-size: 15px;

                }

                .bottoms-top-right {
                    line-height: 40px;
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 15px;
                    letter-spacing: -0.24px;
                    color: #333333;

                }
            }

            .bottoms-bot {
                width 95%;
                margin 0 auto;
                height 60px;
                display: flex;
                justify-content space-between;

                .bottoms-bot-left {
                    display: flex;
                    justify-content center;
                    align-items center;

                    input {
                        width 240px;
                        height 40px;
                        background-color #f0f0f0;
                        outline none;
                        font-size 15px;
                        /*color #aaaaaa;*/
                        padding 0 10px 0 20px;
                        border none;
                        border-radius 20px;
                    }
                }

                .bottoms-bot-right {
                    display: flex;
                    justify-content center;
                    align-items center;

                    p {
                        width 80px;
                        height 40px;
                        background-color #d54d25;
                        border-radius :20px;
                        color #fff;
                        font-size 15px;
                        text-align :center;
                        line-height: 40px;
                    }
                }
            }
        }
    }
</style>
