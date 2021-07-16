<template>
    <div class="table1">
        <div class="content">
            <div class="block">
                <div class="block-left">
                    <span class="bt-span-base">企业商业秘密保护工作开展情况(以上情况如果有相关保密措施请按序号点内容分别拍照留存)</span>
                </div>
                <div class="block-right">
                    <div class="block-right-item">
                        <div class="block-right-item-title">
                            <span>1、保密部门</span>
                        </div>
                        <div class="block-right-item-content">
                            <van-radio-group v-model="radio1" style="display:flex;">
                                <van-radio style="margin-right: 10px;" name="1" checked-color="#E64004">有</van-radio>
                                <van-radio name="2" checked-color="#E64004">无</van-radio>
                            </van-radio-group>
                        </div>
                    </div>
                    <div class="block-right-item">
                        <div class="block-right-item-title">
                            <span>2、保密制度</span>
                        </div>
                        <div class="block-right-item-content">
                            <van-radio-group v-model="radio2" style="display:flex;">
                                <van-radio style="margin-right: 10px;" name="1" checked-color="#E64004">有</van-radio>
                                <van-radio name="2" checked-color="#E64004">无</van-radio>
                            </van-radio-group>
                        </div>
                    </div>
                    <div class="block-right-item">
                        <div class="block-right-item-title">
                            <span>3、员工保密协议或有保密条款的劳动合同</span>
                        </div>
                        <div class="block-right-item-content">
                            <van-radio-group v-model="radio3" style="display:flex;">
                                <van-radio style="margin-right: 10px;" name="1" checked-color="#E64004">有</van-radio>
                                <van-radio name="2" checked-color="#E64004">无</van-radio>
                            </van-radio-group>
                        </div>
                    </div>
                    <div class="block-right-item">
                        <div class="block-right-item-title">
                            <span>4、委托加工的保密协议</span>
                        </div>
                        <div class="block-right-item-content">
                            <van-radio-group v-model="radio4" style="display:flex;">
                                <van-radio style="margin-right: 10px;" name="1" checked-color="#E64004">有</van-radio>
                                <van-radio name="2" checked-color="#E64004">无</van-radio>
                            </van-radio-group>
                        </div>
                    </div>
                    <div class="block-right-item">
                        <div class="block-right-item-title">
                            <span>5、离、辞职竞业限制协议</span>
                        </div>
                        <div class="block-right-item-content">
                            <van-radio-group v-model="radio5" style="display:flex;">
                                <van-radio style="margin-right: 10px;" name="1" checked-color="#E64004">有</van-radio>
                                <van-radio name="2" checked-color="#E64004">无</van-radio>
                            </van-radio-group>
                        </div>
                    </div>
                    <div class="block-right-item">
                        <div class="block-right-item-title">
                            <span>6、文件密级划分(绝密、机密、秘密)</span>
                        </div>
                        <div class="block-right-item-content">
                            <van-radio-group v-model="radio6" style="display:flex;">
                                <van-radio style="margin-right: 10px;" name="1" checked-color="#E64004">有</van-radio>
                                <van-radio name="2" checked-color="#E64004">无</van-radio>
                            </van-radio-group>
                        </div>
                    </div>
                    <div class="block-right-item">
                        <div class="block-right-item-title">
                            <span>7、电子监控设备</span>
                        </div>
                        <div class="block-right-item-content">
                            <van-radio-group v-model="radio7" style="display:flex;">
                                <van-radio style="margin-right: 10px;" name="1" checked-color="#E64004">有</van-radio>
                                <van-radio name="2" checked-color="#E64004">无</van-radio>
                            </van-radio-group>
                        </div>
                        <span class="block-right-item-span">(如果有，请根据设备安装区域分开拍照并备注)</span>
                    </div>
                    <div class="block-right-item">
                        <div class="block-right-item-title">
                            <span>8、电脑及网络管理的保密措施</span>
                        </div>
                        <div class="block-right-item-content">
                            <van-radio-group v-model="radio8" style="display:flex;">
                                <van-radio style="margin-right: 10px;" name="1" checked-color="#E64004">有</van-radio>
                                <van-radio name="2" checked-color="#E64004">无</van-radio>
                            </van-radio-group>
                        </div>
                    </div>
                    <div class="block-right-item">
                        <div class="block-right-item-title">
                            <span>9、门禁系统</span>
                        </div>
                        <div class="block-right-item-content">
                            <van-radio-group v-model="radio9" style="display:flex;">
                                <van-radio style="margin-right: 10px;" name="1" checked-color="#E64004">有</van-radio>
                                <van-radio name="2" checked-color="#E64004">无</van-radio>
                            </van-radio-group>
                        </div>
                        <span class="block-right-item-span">(如果有，请根据设备安装区域分开拍照并备注)</span>
                    </div>
                    <div class="block-right-item">
                        <div class="block-right-item-title">
                            <span>10、智能手机的管控措施</span>
                        </div>
                        <div class="block-right-item-content">
                            <van-radio-group v-model="radio10" style="display:flex;">
                                <van-radio style="margin-right: 10px;" name="1" checked-color="#E64004">有</van-radio>
                                <van-radio name="2" checked-color="#E64004">无</van-radio>
                            </van-radio-group>
                        </div>
                    </div>
                    <div class="block-right-item">
                        <div class="block-right-item-title">
                            <span>11、商业秘密保护标识</span>
                        </div>
                        <div class="block-right-item-content">
                            <van-radio-group v-model="radio11" style="display:flex;">
                                <van-radio style="margin-right: 10px;" name="1" checked-color="#E64004">有</van-radio>
                                <van-radio name="2" checked-color="#E64004">无</van-radio>
                            </van-radio-group>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="nodes"><span>3/10</span></div>
        <div class="instructions">
            <span>说明：企业提交的每张图片均需盖企业章，并注明拍摄地及 提交时间。接收时间以最后收到的图片时间为准。企业提交 的材料可以盖章后扫描上传，也可以送到属地市场监管所。</span>
        </div>
        <div class="underThe">
            <img src="@/assets/home/group18.png" @click="historyGo()">
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
                radio1: '1',
                radio2: '1',
                radio3: '1',
                radio4: '1',
                radio5: '1',
                radio6: '1',
                radio7: '1',
                radio8: '1',
                radio9: '1',
                radio10: '1',
                radio11: '1',
            }
        },
        mounted() {
        },
        methods: {
            historyGo() {
                history.go(-1)
            },
            jumpPage() {
                this.$router.push({path: '/table/table4'})
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .table1 {
        width 100%;
        padding-top 15px;
        position relative;
        padding-bottom 20px;

        .content {
            width: 95%;
            margin 0 auto;
            background-color #fff;
            border-radius: 10px;

            .block {
                width 95%;
                margin 0 auto;
                padding 15px 0 15px 0;
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
                    border-right 1.5px #DFDFDF solid;
                    padding-right 5px;
                }

                .block-right {
                    flex: 0 0 63%;
                    margin-left 2%;
                    display: flex;
                    position relative;
                    flex-direction column;

                    .block-right-item {
                        width 100%;
                        display: flex;
                        flex-direction column;

                        .block-right-item-title {
                            font-family: Alibaba PuHuiTi;
                            font-style: normal;
                            font-weight: 500;
                            font-size: 16px;
                            letter-spacing: -0.24px;
                            color: #404956;
                            padding 10px;
                        }

                        .block-right-item-content {
                            display flex;
                            justify-content space-between;
                            padding 10px;
                        }

                        .block-right-item-span {
                            font-family: Alibaba PuHuiTi;
                            font-style: normal;
                            font-weight: 500;
                            font-size: 12px;
                            letter-spacing: -0.24px;
                            color: #B8B8B8;
                        }
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
