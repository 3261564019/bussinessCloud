<template>
    <div class="toPraise">
        <div style="width:100%;height: 20px;"></div>
        <div class="content">
            <div class="block">
                <div class="block-left">
                    <span class="bt-span-base">名称</span>
                    <div class="block-left-p">
                        <p></p>
                        <span>必填</span>
                    </div>
                </div>
                <div class="block-right">
                    <input placeholder="请输入名称" v-model="pageData.name">
                </div>
            </div>
            <div class="block">
                <div class="block-left">
                    <span class="bt-span-base">单位</span>
                </div>
                <div class="block-right">
                    <input placeholder="请输入单位" v-model="pageData.part">
                </div>
            </div>
            <div class="block">
                <div class="block-left">
                    <span class="bt-span-base">地址</span>
                </div>
                <div class="block-right">
                    <input placeholder="请输入地址" v-model="pageData.address">
                    <!--<img src="@/assets/home/group17.png" @click="clickChoosing">-->
                </div>
            </div>
            <div class="block">
                <div class="block-left">
                    <span class="bt-span-base">联系电话</span>
                </div>
                <div class="block-right">
                    <input placeholder="请输入联系电话" v-model="pageData.tel">
                </div>
            </div>
            <div class="remark" style="border: none">
                <div class="remark-left">
                    <span class="bt-span-base">举报内容</span>
                </div>
                <div class="remark-right">
                    <textarea placeholder="请输入举报内容" v-model="pageData.remark"></textarea>
                </div>
            </div>
        </div>
        <div class="buttoms" @click="clickConfirm">
            <span style="color: #fff">提交</span>
        </div>

    </div>
</template>

<script>

    import api from "../../../utils/net";
    import {Toast} from "vant";

    export default {
        data() {
            return {
                checked: false,
                //
                // name: '',
                // moblie: '',
                // remark: '',
                // type: 0
                pageData:{}
            }
        },
        mounted() {
        },
        methods: {
            // clickChoosing(){
            //     this.$router.push('/mapChoosing')
            // }
            clickConfirm(){
              let that=this;
              console.log(this.pageData);
              api({
                url:'/client/postReport.action',
                method:"post",
                params:this.pageData
              }).then(
                  (res)=>{
                    console.log(res);
                    if(res.data.status==0){
                      Toast.success("举报成功");
                    }
                  }
              );
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .toPraise {
        width 100%
        padding-bottom: 20px;
        background: #F4F7F9;


        .content {
            width: 95%;
            margin 0 auto;
            background-color #fff;
            border-radius: 10px;

            .block {
                width 95%;
                margin 0 auto;
                height: 55px;
                border-bottom 1.5px #dfdfdf solid;
                display: flex;


                .block-left {
                    flex: 0 0 35%;
                    display flex;
                    align-items: center;

                    .block-left-p {
                        float: left;
                        height 15px;
                        line-height: 15px;
                        font-size: 0.5rem;
                        background-color: #E64004;
                        color: #fff;
                        border-radius 0 8px 8px 8px;
                        margin: 0 0 0 10px;
                        position relative;
                        padding 0px 5px 0px 10px


                        p {
                            position: absolute;
                            width: 4px;
                            height: 4px;
                            background-color: #fff;
                            top: -5px;
                            left: 2px
                            border-radius 50%;
                        }
                    }
                }

                .block-right {
                    flex: 0 0 65%;
                    display: flex;
                    align-items center;

                    input {
                        border: 0;
                        width: 90%;
                        height: 50%;
                        outline none
                    }

                    img {
                        width 20px;
                        height: 20px;
                    }
                }
            }


            .block3 {
                width 95%;
                margin 0 auto;
                height: 55px;
                display: flex;
                border-bottom 1.5px #dfdfdf solid;
                display: flex;


                .block3-left {
                    flex: 0 0 35%;
                    display flex;
                    align-items: center;

                    .block3-left-p {
                        float: left;
                        height 15px;
                        line-height: 15px;
                        font-size: 0.5rem;
                        background-color: #016EF9;
                        color: #fff;
                        border-radius 0 8px 8px 8px;
                        margin: 0 0 0 10px;
                        position relative;
                        padding 0px 5px 0px 10px


                        p {
                            position: absolute;
                            width: 4px;
                            height: 4px;
                            background-color: #fff;
                            top: 2px;
                            left: 2px
                            border-radius 50%;
                        }
                    }
                }

                .block3-right {
                    flex: 0 0 55%;
                    display: flex;
                    align-items: center;

                    span {
                        margin-left 0px;
                        font-family: Alibaba PuHuiTi;
                        font-style: normal;
                        font-size: 0.8rem;
                    }
                }

                .block3-outside {
                    flex: 0 0 10%;
                    height: 40%;
                    margin-top: 5%;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    img {
                        width 15px;
                        height: 9px;
                    }
                }
            }

            .block2 {
                width 95%;
                margin 0 auto;
                /*height: 55px;*/
                display: flex;
                border-bottom 1.5px #dfdfdf solid;
                flex-direction: column;


                .block2-top {
                    width 100%;
                    height 40px;
                    display flex;
                    align-items: center;

                    .block2-top-p {
                        float: left;
                        height 15px;
                        line-height: 15px;
                        font-size: 0.5rem;
                        background-color: #016EF9;
                        color: #fff;
                        border-radius 0 8px 8px 8px;
                        margin: 0 0 0 10px;
                        position relative;
                        padding 0px 5px 0px 10px


                        p {
                            position: absolute;
                            width: 4px;
                            height: 4px;
                            background-color: #fff;
                            top: 2px;
                            left: 2px
                            border-radius 50%;
                        }
                    }
                }

                .block2-bottom {
                    width 100%;
                    height 40px;
                    display: flex;
                    align-items center;
                    justify-content space-between;

                    input {
                        border: 0;
                        width: 85%;
                        height: 100%;
                        outline none
                    }

                    img {
                        width 18px;
                        height: 18px;
                        margin-right 10px;
                    }

                }

            }

            .remark {
                width 95%;
                margin 0 auto;
                height: 100px;
                border-bottom 1.5px #dfdfdf solid;
                display: flex;


                .remark-left {
                    flex: 0 0 35%;
                    display flex;

                    span {
                        margin-top 10px;
                    }
                }

                .remark-right {
                    flex: 0 0 65%;
                    display: flex;
                    align-items center;

                    textarea {
                        border: 0;
                        width: 90%;
                        height: 75%;
                        outline none;
                        resize: none;
                        border none;
                        font-family: Alibaba PuHuiTi;
                        font-style: normal;
                        letter-spacing: -0.24px;
                        color: #404956;
                    }
                }
            }

            .prompt {
                width: 100%;
                height: 50px;
                display flex;
                align-items center;

                span {
                    font-family: Alibaba PuHuiTi;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 0.8rem;
                    color: #808DA1;
                }
            }
        }

        .buttoms {
            width: 80%;
            margin: 0 auto;
            height: 45px;
            line-height: 45px;
            text-align: center;
            border-radius: 10px;
            margin-top: 30px;
            background-color: #E64004;
        }

        .van-toast {
            width 150px !important;
        }
    }
</style>
