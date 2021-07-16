<template>
    <div class="pages">
        <div class="titlename">台州市商业秘密保护示范点申报表</div>
        <div class="titleleft">申报企业意见</div>
        <div class="contentwait">
            <div class="contentleft">
                <div class="Duties">负责人：</div>
                <div style="text-align: center;">
                    <div class="signature">点击电子签名</div>
                    <div class="turebottom">（单位公章）</div>
                </div>
            </div>
            <div class="time" style="font-weight: 500;">2021年6月21日</div>
        </div>
        <div class="titleleft">县级市场监管局推荐意见</div>
        <div class="contentwait">
            <div class="contentleft">
                <div class="Duties">负责人：</div>
                <div style="text-align: center;">
                    <div class="signature">点击电子签名</div>
                    <div class="turebottom">（单位公章）</div>
                </div>
            </div>
            <div class="time" style="font-weight: 500;">2021年6月21日</div>
        </div>
        <div class="titleleft">市级市场监管局考核认定意见</div>
        <div class="contentwait">
            <div class="contentleft">
                <div class="Duties">负责人：</div>
                <div style="text-align: center;">
                    <div class="signature">点击电子签名</div>
                    <div class="turebottom">（单位公章）</div>
                </div>
            </div>
            <div class="time" style="font-weight: 500;">2021年6月21日</div>
        </div>
        <div class="contentwait" style="border-bottom: none;">
            <div class="contentleft">
                <div class="Duties">备注：</div>
            </div>
            <textarea style="resize: none;"></textarea>
        </div>
        <div class="nodes"><span>10/10</span></div>
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
            return {}
        },
        mounted() {
        },
        methods: {
            historyGo() {
                history.go(-1)
            },
            jumpPage() {
                this.$router.push({path: '/table/table9'})
            }
        }
    }
</script>

<style lang="stylus">
    .pages {
        padding: 15px;
        min-height: 100%;
        font-size: 14px;
        font-weight: bold;
        color: #404956;
    }

    .titlename {
        width: 100%;
        text-align: center;
        padding: 10px 0;
        font-size: 16px;
        color: #000;
    }

    .titleleft {
        padding: 15px 0;
    }

    .contentwait {
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(191, 191, 191, 0.5);
        padding: 15px 0;
    }

    .contentleft {
        display: flex;
    }

    .signature {
        border: 1px solid #000;
        border-radius: 2px;
        color: #9C9C9C;
        padding: 4px 8px;
    }

    .turebottom {
        color: #9C9C9C;
        margin-top: 3px;
    }

    .Duties {
        padding: 4px 0;
        width: 65px;
    }

    textarea {
        width: calc(95% - 65px);
        padding: 6px 2.5%;
        border-radius: 6px;
        outline: none;
        border: none;
        min-height: 120px;
    }

    .bottom {
        text-align: center;
        color: #A7A7A7;
        margin-top: 10px;
    }

    .time {
        padding: 4px 0;
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
</style>
