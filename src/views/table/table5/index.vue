<template>
    <div class="table5">
        <div class="content">
            <div class="tips">
                <span>企业提交的商业秘密保护措施的图片(按上述企业保密措施序号标注并注明上图片张数)</span>
            </div>
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
                    <span class="bt-span-base">接收人</span>
                </div>
                <div class="block-right">
                    <input placeholder="请输入接收人" v-model="value2">
                </div>
            </div>
            <div class="block">
                <div class="block-left">
                    <span class="bt-span-base">接收日期</span>
                </div>
                <div class="block-right">
                    <span @click="show1 = true">{{yctime?yctime:'请选择接收日期'}}</span>
                </div>
            </div>
            <div class="block">
                <div class="block-left">
                    <span class="bt-span-base">是否需要市场监管部门对你公司开展商业秘密保护指导</span>
                </div>
                <div class="block-right" style="flex-wrap: wrap;">
                    <van-radio-group v-model="radio1" style="display:flex;">
                        <van-radio style="margin-right: 10px;" name="1" checked-color="#E64004">需要</van-radio>
                        <van-radio name="2" checked-color="#E64004">不需要</van-radio>
                    </van-radio-group>
                </div>
            </div>
            <div class="block">
                <div class="block-left">
                    <span class="bt-span-base">备注</span>
                </div>
                <div class="block-right">
                    <textarea placeholder="请输入备注" v-model="value2"></textarea>
                </div>
            </div>
        </div>
        <div class="nodes"><span>5/10</span></div>
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
        <div class='popContainer' v-if="show1">
            <van-datetime-picker
                    style="width: 100%;position: absolute;bottom: 0;"
                    v-model="currentDate"
                    type="datehour"
                    title="选择年月日小时"
                    :min-date="minDate"
                    :max-date="maxDate"
                    @confirm="confirm1"
                    :formatter="formatter"
                    @cancel="show1 = false"
            />
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value1: '',
                value2: '',
                radio1: '1',
                show1: false,
                minDate: new Date(2021, 0, 1),
                maxDate: new Date(2025, 10, 1),
                currentDate: new Date(),
                yctime: ''
            }
        },
        mounted() {
        },
        methods: {
            historyGo() {
                history.go(-1)
            },
            jumpPage() {
                this.$router.push({path: '/table/table6'})
            },
            confirm1(val) {
                let year = val.getFullYear()

                let month = val.getMonth() + 1

                let day = val.getDate()

                let hour = val.getHours()

                let minute = val.getMinutes()

                if (month >= 1 && month <= 9) {
                    month = `0${month}`
                }

                if (day >= 1 && day <= 9) {
                    day = `0${day}`
                }

                if (hour >= 0 && hour <= 9) {
                    hour = `0${hour}`
                }

                if (minute >= 0 && minute <= 9) {
                    minute = `0${minute}`
                }
                // this.className = 'timeClass'

                this.currentDate = `${year}-${month}-${day} ${hour}:${minute}`
                this.yctime = this.currentDate
                this.show1 = false
            },
            formatter(type, val) {
                if (type === 'year') {
                    return `${val}年`;
                } else if (type === 'month') {
                    return `${val}月`;
                } else if (type === 'day') {
                    return `${val}日`;
                } else if (type === 'hour') {
                    return `${val}点`;
                }
                return val;
            },
        }
    }
</script>
<style lang="stylus" scoped>
    .table5 {
        width 100%;
        padding-top 15px;
        position relative;

        .content {
            width: 95%;
            margin 0 auto;
            background-color #fff;
            border-radius: 10px;
            padding-top 15px;

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
                        width: 100px;
                        height: 25px;
                        outline none;
                        border none;
                        border-bottom 1px #424955 solid;

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

                    textarea {
                        border: 0;
                        width: 90%;
                        height: 75%;
                        outline none;
                        resize: none;
                        border none;
                        color: #404956;
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

        .tips {
            width 90%;
            margin 0 auto;
            font-family: Alibaba PuHuiTi;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            letter-spacing: -0.24px;
            color: #999999;
        }

        .popContainer {
            position: fixed;
            background: rgba(0, 0, 0, 0.5);
            display flex;
            align-items center;
            justify-content center;
            bottom 0;
            width 100%;
            height 100%;
        }
    }
</style>
