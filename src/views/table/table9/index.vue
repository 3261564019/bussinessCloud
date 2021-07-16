<template>
    <div class="table9">
        <div class="content">
            <img src="@/assets/home/tb1.png">
            <img src="@/assets/home/tb2.png">
        </div>
        <div class="controls">

            <div class="controls-piece" style="color: #E64004">
                <img src="@/assets/home/group21.png">
                <span>下载</span>
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
<style lang="stylus" scoped>
    .table9 {
        width 100%;
        padding-top 15px;
        position relative;
        padding-bottom 15px;

        .content {
            width 90%;
            margin 0 auto;

            img {
                width 100%;
                margin-bottom 20px;
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
