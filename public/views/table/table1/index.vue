<template>
    <div class="table1">
        <div class="content">
            <div class="block">
                <div class="block-left">
                    <span class="bt-span-base">企业名称</span>
                </div>
                <div class="block-right">
                    <input placeholder="请输入企业名称" v-model="value1">
                </div>
            </div>
            <div class="block">
                <div class="block-left">
                    <span class="bt-span-base">法定代表人</span>
                </div>
                <div class="block-right">
                    <input placeholder="请输入法定代表人" v-model="value2">
                </div>
            </div>
            <div class="block">
                <div class="block-left">
                    <span class="bt-span-base">电话</span>
                </div>
                <div class="block-right">
                    <input placeholder="请输入电话" v-model="value3">
                </div>
            </div>
            <div class="block">
                <div class="block-left">
                    <span class="bt-span-base">商业秘密保护工作联系人</span>
                </div>
                <div class="block-right">
                    <input placeholder="请输入联系人" v-model="value4">
                </div>
            </div>
            <div class="block">
                <div class="block-left">
                    <span class="bt-span-base">电话</span>
                </div>
                <div class="block-right">
                    <input placeholder="请输入电话" v-model="value5">
                </div>
            </div>
            <div class="block">
                <div class="block-left">
                    <span class="bt-span-base">QQ/微信</span>
                </div>
                <div class="block-right">
                    <input placeholder="请输入QQ或微信" v-model="value6">
                </div>
            </div>
            <div class="block">
                <div class="block-left">
                    <span class="bt-span-base">注册资本（万元）</span>
                </div>
                <div class="block-right">
                    <input placeholder="请输入注册资本" v-model="value7">
                </div>
            </div>
            <div class="block">
                <div class="block-left">
                    <span class="bt-span-base">年产值（万元）</span>
                </div>
                <div class="block-right">
                    <input placeholder="请输入年产值" v-model="value8">
                </div>
            </div>
            <div class="block">
                <div class="block-left">
                    <span class="bt-span-base">主要产品</span>
                </div>
                <div class="block-right">
                    <input placeholder="请输入主要产品" v-model="value9">
                </div>
            </div>
            <div class="block">
                <div class="block-left">
                    <span class="bt-span-base">产品市场占有率</span>
                </div>
                <div class="block-right">
                    <input placeholder="请输入占有率" v-model="value10">
                </div>
            </div>
        </div>
        <div class="nodes"><span>1/10</span></div>
        <div class="instructions">
            <span>说明：企业提交的每张图片均需盖企业章，并注明拍摄地及 提交时间。接收时间以最后收到的图片时间为准。企业提交 的材料可以盖章后扫描上传，也可以送到属地市场监管所。</span>
        </div>
        <div class="underThe">
            <!--<img src="@/assets/home/group18.png">-->
            <div></div>
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
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                value6: '',
                value7: '',
                value8: '',
                value9: '',
                value10: '',
            }
        },
        mounted() {
        },
        methods: {
            jumpPage() {
                this.$router.push({path: '/table/table2'})
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .table1 {
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
                    flex: 0 0 65%;
                    display: flex;
                    align-items center;

                    input {
                        border: 0;
                        width: 90%;
                        height: 25px;
                        outline none
                    }

                    img {
                        width 20px;
                        height: 20px;
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
