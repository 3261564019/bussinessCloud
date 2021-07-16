<template>
    <div class="onlineLawyer">
        <div class="item" v-for="i in 3" @click="jumpPage">
            <div class="item-left">
                <img src="@/assets/home/group10.png">
                <span>休息中</span>
            </div>
            <div class="item-right">
                <div class="item-right-piece1">
                    <span>罗超</span>
                </div>
                <div class="item-right-piece2">
                    <span>某某某律师事务所</span>
                </div>
                <div class="item-right-piece1">
                    <van-rate v-model="value" disabled-color="#E64004" disabled/>
                </div>
                <div class="item-right-piece2">
                    <span>律师资格编号：ZY0000000000</span>
                </div>
                <div class="item-right-piece3">
                    <p>点击咨询</p>
                    <span>19KM</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value: 5
            }
        },
        mounted() {
        },
        methods: {
            jumpPage() {
                // this.$router.push({name:'onlineChat'})
                // this.$router.push('/home/onlineLawyer/onlineChat')
                this.$router.push({path:'/home/onlineLawyer/onlineChat'});
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .onlineLawyer {
        width 100%;
        padding-top 15px;

        .item {
            width 100%;
            background-color #fff;
            display: flex;
            padding 10px 0 10px 0;
            margin-bottom 15px;

            .item-left {
                flex: 0 0 35%;
                display: flex;
                align-items center;
                justify-content center;
                position relative;

                span {
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 13px;
                    text-align: center;
                    letter-spacing: -0.24px;
                    color: #FFFFFF;
                    position absolute;
                    bottom 10px;
                    left 30%;
                    z-index 99;
                }

                img {
                    width 90%;
                    height: 90%;
                    z-index 1;
                }
            }

            .item-right {
                flex: 0 0 65%;

                .item-right-piece1 {
                    width: 100%;
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 17px;
                    letter-spacing: -0.24px;
                    color: #3B302D;
                }

                .item-right-piece2 {
                    width: 100%;
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 19px;
                    letter-spacing: -0.24px;
                    color: #848484;

                }

                .item-right-piece3 {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    letter-spacing: -0.24px;
                    color: #3B302D;
                    align-items center;


                    span {
                        margin-right 10px;
                    }


                    p {
                        width 90px;
                        height: 25px;
                        line-height: 20px;
                        text-align center;
                        color #fff;
                        background: #E64004;
                        border: 1px solid #701E00;
                        box-sizing: border-box;
                        border-radius: 4px;
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>
