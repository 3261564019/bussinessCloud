<template>
    <div class="tabBar">
        <van-tabbar v-model="active">
            <van-tabbar-item v-for="i,index in tabbarList" :key="index" @click="jumpPage(i.path)">
                <div class="items">
                    <img :src="active==index?i.selected1:i.tab1">
                    <span :style="active==index?'color:#E64004':''">{{ i.text }}</span>
                </div>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0,
                tabbarList: [
                    {
                        text: '首页',
                        tab1: require('@/assets/tab1.png'),
                        selected1: require('@/assets/selected1.png'),
                        path: '/'
                    },
                    {
                        text: '公告',
                        tab1: require('@/assets/tab2.png'),
                        selected1: require('@/assets/selected2.png'),
                        path: '/announcement'
                    },
                    {
                        text: '培训',
                        tab1: require('@/assets/tab3.png'),
                        selected1: require('@/assets/selected3.png'),
                        path: '/training'
                    },
                    {
                        text: '个人中心',
                        tab1: require('@/assets/tab4.png'),
                        selected1: require('@/assets/selected4.png'),
                        path: '/mine'
                    }
                ]
            }
        },
        watch: {
            $route(to, from) {
                // console.log(to.path)
                this.tabbarList.forEach((item, index) => {
                    if (item.path == to.path) {
                        this.active = index
                    } else {
                    }
                })
            }
        },
        mounted() {
        }
        ,
        methods: {
            jumpPage(path) {
                this.$router.push(path)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .tabBar {
        .items {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #BFBFBF;

            img {
                width: 25px;
                height: 25px;
                margin-bottom 5px;
            }
        }
    }
</style>
