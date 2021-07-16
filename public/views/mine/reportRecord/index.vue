<template>
    <div class="reportRecord">
        <div class="item">
            <div class="item-title">
                <div class="item-title-left">
                    <span>罗超</span>
                </div>
                <div class="item-title-right">
                    <img src="@/assets/training/group1.png">
                    <span>2021-7-2</span>
                </div>
            </div>
            <div class="item-piece1">
                <span>单位文案单位文案</span>
            </div>
            <div class="item-piece1">
                <span>举报内容举报内容举报内容举报内容举报内容 举报内容举报内容举报内容</span>
            </div>
            <div class="item-piece2">
                <div class="item-piece2-left"></div>
                <div class="item-piece2-right">
                    <img src="@/assets/mine/group4.png">
                    <span>已审核</span>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="item-title">
                <div class="item-title-left">
                    <span>罗超</span>
                </div>
                <div class="item-title-right">
                    <img src="@/assets/training/group1.png">
                    <span>2021-7-2</span>
                </div>
            </div>
            <div class="item-piece1">
                <span>单位文案单位文案</span>
            </div>
            <div class="item-piece1">
                <span>举报内容举报内容举报内容举报内容举报内容 举报内容举报内容举报内容</span>
            </div>
            <div class="item-piece2">
                <div class="item-piece2-left"></div>
                <div class="item-piece2-right">
                    <img src="@/assets/mine/group5.png">
                    <span style="color: #E35709">未审核</span>
                </div>
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
        methods: {}
    }
</script>

<style lang="stylus">
    .reportRecord {
        width 100%;
        padding-top 15px;

        .item {
            width 90%;
            margin 0 auto;
            background: #FFFFFF;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
            border-radius: 4px;
            padding 10px 0 10px 0;
            margin-bottom 15px;

            .item-title {
                width 90%;
                margin 0 auto;
                display: flex;
                justify-content space-between;
                padding 5px 0 5px 0;

                .item-title-left {
                    display: flex;
                    align-items center;
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    letter-spacing: -0.24px;
                    color: #000000;
                }

                .item-title-right {
                    display flex;
                    align-items center;
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 13px;
                    letter-spacing: -0.24px;

                    color: #9C9C9C;


                    img {
                        width 16px;
                        height: 16px;
                        margin-right 5px;
                    }
                }
            }

            .item-piece1 {
                width 90%;
                margin 0 auto;
                font-family: Alibaba PuHuiTi;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                letter-spacing: -0.24px;
                color: #9C9C9C;
                line-height 18px;
            }

            .item-piece2 {
                width 90%;
                margin 0 auto;
                display flex;
                justify-content space-between

                .item-piece2-left {

                }

                .item-piece2-right {
                    display flex;
                    align-items center;
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    letter-spacing: -0.24px;

                    color: #09E31E;


                    img{
                        width 19px;
                        height 19px;
                    }
                }
            }
        }
    }
</style>
