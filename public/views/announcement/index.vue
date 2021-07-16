<template>
    <div class="announcement">
        <div class="tips">
            <img src="@/assets/linshi/icon1.png">
        </div>
        <div class="content">
            <div class="content-select">
                <div class="content-select-item" v-for="i,index in selectList" @click="selectTitle(index)">
                    <span :style="index==indexs?'color: #222222;':''">{{i.text}}</span>
                    <div :style="index==indexs?'background-color: #E64004;':''" class="content-select-item-p"></div>
                </div>
            </div>
            <div class="content-probably">
                <div class="content-probably-item" v-for="i in datas">
                    <div class="content-probably-item-left">
                        <span>{{i.text}}</span>
                        <img :src="i.url">
                    </div>
                    <div class="content-probably-item-right">
                        <img src="@/assets/gengduo.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                selectList: [
                    {text: '案例分享'},
                    {text: '在线律师'},
                    {text: '定制模版'},
                ],
                indexs: 0,
                datas: [
                    {text: '省/市级商业秘密保护示范点', url: require('@/assets/announcement/group1.png')},
                    {text: '省/市级商业秘密保护示范园区', url: require('@/assets/announcement/group2.png')},
                    {text: '省商业秘密标准  ', url: require('@/assets/announcement/group3.png')},
                    {text: '台州保密合同模版', url: require('@/assets/announcement/group4.png')},
                    {text: '商业秘密案件判例-市法院', url: ''},
                ]
            }
        },
        mounted() {
        },
        methods: {
            selectTitle(index) {
                this.indexs = index
            }
        }
    }
</script>
<style lang="stylus">
    .announcement {
        width 100%;
        padding-top: 15px;
        background-color #fff;


        .tips {
            width 95%;
            height 120px;
            margin 0 auto;

            img {
                width 100%;
                height 100%;
            }
        }

        .content {
            padding-top 10px;
            background-color #fff;
            width 100%;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);

            .content-select {
                border-bottom 1px #E2E2E2 solid;
                height 50px;
                width 100%;
                overflow-x auto;
                display: flex;

                .content-select-item {
                    min-width 80px;
                    height 100%;
                    display: flex;
                    align-items center;
                    justify-content center;
                    flex-direction column;
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 17px;
                    text-align: center;
                    letter-spacing: -0.24px;
                    color: #9C9C9C;
                    padding 0 10px 0 10px;

                    .content-select-item-p {
                        background-color: #9C9C9C;
                        width 30px;
                        height 3px;
                        margin-top 10px;
                    }
                }
            }

            .content-probably {
                width 95%;
                margin 0 auto;
                margin-top 15px;

                .content-probably-item {
                    width 100%;
                    border-bottom: 1px solid #E2E2E2;
                    padding: 15px 0 15px 0;
                    display: flex;
                    align-items center;

                    .content-probably-item-left {
                        flex 0 0 92%;
                        font-family: Alibaba PuHuiTi;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 17px;
                        letter-spacing: -0.24px;
                        color: #222222;
                        display: flex;
                        align-items center;

                        img {
                            width 20px;
                            height: 20px;
                            margin-left 5px;
                        }
                    }

                    .content-probably-item-right {
                        flex 0 0 8%;
                        display: flex;
                        justify-content center;

                        img {
                            width 10px;
                            height 14px;
                            /*margin-left 10px;*/
                        }
                    }
                }
            }
        }
    }
</style>
