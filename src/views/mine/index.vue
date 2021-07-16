<template>
    <div class="mine">
        <div class="top">
            <div class="top-left">
                <img src="@/assets/mine/group1.png">
            </div>
            <div class="top-right">
                <span class="span1">罗超</span>
                <span class="span2">手机号码：13738503997</span>
            </div>
        </div>
        <div class="content">
            <div class="content-piece">
                <img src="@/assets/mine/group2.png">
                <span>我的事项</span>
            </div>
            <div class="content-piece" @click="jumpPage()">
                <img src="@/assets/mine/group3.png">
                <span>举报记录</span>
            </div>
            <div class="content-kb"></div>
            <div class="content-img">
                <img src="@/assets/linshi/icon1.png">
            </div>
            <div class="content-bb">
                <span>版本号1.0V</span>
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
            jumpPage(){
                this.$router.push('/mine/reportRecord')
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .mine {
        width 100%;
        padding-top 20px;
        height 90vh;

        .top {
            width 90%;
            margin 0 auto;
            display: flex;
            height 10%;

            .top-left {
                display: flex;
                align-items center;

                img {
                    width 60px;
                    height: 60px;
                    border-radius 50%;
                }
            }

            .top-right {
                display: flex;
                flex-direction column;
                justify-content center;

                .span1 {
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    letter-spacing: -0.24px;
                    color: #3B302D;
                    margin-left 5px;
                }

                .span2 {
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 15px;
                    letter-spacing: -0.24px;
                    color: #9C9C9C;
                    margin-left 5px;
                }
            }
        }

        .content {
            background: #ffffff;
            backdrop-filter: blur(20px);
            border-radius 40px 40px 0 0;
            margin-top 20px;
            padding-top 50px;
            height 80%;
            position relative;

            .content-kb {
                width 100%;
                height 200px;
            }

            .content-piece {
                width 90%;
                margin 0 auto;
                height: 50px;
                display: flex;
                align-items center;
                font-family: Alibaba PuHuiTi;
                font-style: normal;
                font-weight: 500;
                font-size: 17px;
                letter-spacing: -0.24px;
                color: #3B302D;

                img {
                    width 20px;
                    height: 20px;
                    margin-right 10px;
                }
            }

            .content-img {
                width 90%;
                height 150px;
                position absolute;
                bottom: 55px;
                margin-left 5%;

                img {
                    width 100%;
                    height: 100%;
                }
            }

            .content-bb {
                width 100%;
                text-align center;
                height 30px;
                line-height: 30px;
                font-family: Alibaba PuHuiTi;
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                letter-spacing: -0.24px;
                color: #CDCDCD;
                position absolute;
                bottom 5px;
            }
        }
    }
</style>
