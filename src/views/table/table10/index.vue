<template>
    <div class="pages">
        <div class="titlename">台州市商业秘密保护示范点申报表</div>
        <div class="titleleft">企业商业秘密保护开展情况</div>
        <textarea style="resize: none;"
                  placeholder="围绕企业商业秘密保护示范点创建的组织机构是否建立、人员配备是否合理、基础保障是否到位、制度建设是否健全、防范措施是否齐备等方面进行简要叙述，需提供相关依据。（1500字以内）"></textarea>

        <div class="nodes"><span>9/10</span></div>
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
                this.$router.push({path: '/table/table11'})
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .pages {
        padding: 15px;
        min-height: 100%;
        font-size: 14px;
        background-color #fff;
    }

    .titlename {
        width: 100%;
        text-align: center;
        padding: 20px 0;
        font-size: 16px;
        font-weight: bold;
    }

    .titleleft {
        padding: 15px 0;
    }

    textarea {
        width: 95%;
        padding: 15px 2.5%;
        min-height: 60vh;
        border-radius: 6px;
        outline: none;
    }

    .bottom {
        text-align: center;
        color: #A7A7A7;
        margin-top: 10px;
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
