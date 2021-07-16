<template>
    <div class="moreGuidanceApplications">
        <div class="piece">
            <div class="piece-title">
                <div class="piece-title-left">
                    <span>指导申请</span>
                </div>
            </div>
            <div class="piece-content">
                <div class="piece-content-item" @click="openDialog(i.text,index)" style="flex: 0 0 45%;margin: 15px 0 15px 0;"
                     v-for="i,index in lsit2">
                    <img style="width: 20px;height: 23px;" :src="i.url">
                    <span>{{i.text}}</span>
                </div>
            </div>
        </div>
        <div class='popContainer' v-if="show">
            <div class="popContainer-content">
                <div class="popContainer-content-title">
                    <span>请输入企业名称</span>
                </div>
                <div class="popContainer-content-input">
                    <input placeholder="请输入" v-model="inp">
                </div>
                <div class="popContainer-content-bottom">
                    <p style="background-color:#E64004" @click="clickSubmit">提交</p>
                    <p @click="show=false">取消</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Dialog} from 'vant';

    export default {
        data() {
            return {
                show: false,
                lsit2: [
                    {text: '商业秘密指导申请', url: require('@/assets/home/group7.png')},
                    {text: '“秘转专”申请', url: require('@/assets/home/group8.png')},
                    {text: '企业人才备案', url: require('@/assets/home/group13.png')},
                    {text: '离职人员备案', url: require('@/assets/home/group15.png')},
                    {text: '商业秘密保护措施备案申请', url: require('@/assets/home/group14.png')},
                    {text: '商业秘密保护(市级)示范点申请', url: require('@/assets/home/group16.png')},
                    {text: '商业秘密保护保险申请', url: require('@/assets/home/group12.png')},
                ],
                inp: '浙江易得科技有限公司',
                // 点击了第几个
                chooseval:0,
            }
        },
        mounted() {
        },
        methods: {
            clickSubmit(){

                // 跳转并传入点击了第几个
                this.$router.push({
                    path:'/home/selectForm',
                    query:{code:this.chooseval}
                })
            },
            openDialog(text,index) {
               
               this.chooseval = index+1

                Dialog.confirm({
                    message: '是否申请' + text + '?',
                }).then(() => {
                    // on confirm
                    setTimeout(() => {
                        this.show = true
                    }, 500)
                }).catch(() => {
                    // on cancel
                });
            }
        }
    }
</script>

<style lang="stylus">
    .moreGuidanceApplications {
        width 100%;
        padding-top: 15px;

        .piece {
            width 95%;
            margin: 0 auto;
            background: #FFFFFF;
            border-radius: 8px;
            margin-bottom 15px;
            padding 0 0 15px 0;


            .piece-title {
                width 95%;
                margin 0 auto;
                height 50px;
                display: flex;
                justify-content space-between;

                .piece-title-left {
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 17px;
                    line-height: 50px;
                    letter-spacing: -0.24px;
                    color: #222222;
                }

                .piece-title-right {
                    display: flex;
                    align-items center;
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    letter-spacing: -0.24px;
                    color: #9C9C9C;

                    img {
                        width 9px;
                        height 13px;
                        margin-left 5px;
                    }
                }
            }

            .piece-content {
                width 100%;
                display: flex;
                flex-wrap wrap;
                justify-content space-between;

                .piece-content-item {
                    flex: 0 0 25%;
                    display: flex;
                    align-items center;
                    /*justify-content center;*/
                    flex-direction column;
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 15px;
                    text-align: center;
                    letter-spacing: -0.5px;

                    color: #444444;

                    span {
                        margin 0 10px 0 10px;
                    }

                    img {
                        margin-bottom 7px;
                        width 23px;
                        height 22px;
                    }
                }
            }

            .overlay {
                width 100%;
                height 100px;
                background-color #fff;
            }
        }

        .popContainer {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display flex;
            align-items center;
            justify-content center;

            .popContainer-content {
                width 80%;
                background-color #fff;
                border-radius 10px;

                .popContainer-content-title {
                    width 90%;
                    margin 0 auto;
                    height 50px;
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    letter-spacing: -0.5px;
                    color: #222222;
                    line-height 50px;
                }

                .popContainer-content-input {
                    width 90%;
                    margin 0 auto;
                    height 40px;
                    border 1.5px #222222 solid;

                    input {
                        border: none;
                        outline: none;
                        width 90%;
                        height 90%;
                        padding-left 10px;
                        font-family: Alibaba PuHuiTi;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 15px;
                        letter-spacing: -0.5px;
                        color: #222222;
                    }
                }

                .popContainer-content-bottom {
                    width 90%;
                    margin 0 auto;
                    display: flex;
                    align-items center;
                    justify-content space-between;

                    p {
                        width 80px;
                        height 35px;
                        background: #CACACA;
                        border-radius: 8px;
                        font-family: Alibaba PuHuiTi;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 15px;
                        text-align: center;
                        letter-spacing: -0.24px;
                        color: #FFFFFF;
                        line-height: 35px;
                    }
                }
            }
        }
    }
</style>
