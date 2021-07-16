import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../views/home";

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/index.vue')
    },
    //台州商业秘密保护保险申请表      1
    {
        path: '/tradeSecretProtection1',
        name: '/tradeSecretProtection1',
        component: () => import('../views/guidanceApply/tradeSecretProtection/index1')
    },

    //台州商业秘密保护保险申请表      2
    {
        path: '/tradeSecretProtection2',
        name: '/tradeSecretProtection2',
        component: () => import('../views/guidanceApply/tradeSecretProtection/index2')
    },
    //离职人员备案表      1
    {
        path: '/departures1',
        name: '/departures1',
        component: () => import('../views/guidanceApply/departures/index1')
    },

    //离职人员备案表      2
    {
        path: '/departures2',
        name: '/departures2',
        component: () => import('../views/guidanceApply/departures/index2')
    },
    //离职人员备案表      3
    {
        path: '/departures3',
        name: '/departures3',
        component: () => import('../views/guidanceApply/departures/index3')
    },

    //商业秘密指导申请      1
    {
        path: '/tradeSecret1',
        name: '/tradeSecret1',
        component: () => import('../views/guidanceApply/tradeSecret/index1')
    },
    //商业秘密指导申请      2
    {
        path: '/tradeSecret2',
        name: '/tradeSecret2',
        component: () => import('../views/guidanceApply/tradeSecret/index2')
    },
    //商业秘密指导申请      3
    {
        path: '/tradeSecret3',
        name: '/tradeSecret3',
        component: () => import('../views/guidanceApply/tradeSecret/index3')
    },
    //企业商业秘密保护核心秘密点和风险点 1
    {
        path: '/secret_risk_poionter1',
        name: '/secret_risk_poionter1',
        component: () => import('../views/guidanceApply/secret_risk_poionter/index1')
    },

    //企业商业秘密保护核心秘密点和风险点 2
    {
        path: '/secret_risk_poionter2',
        name: '/secret_risk_poionter2',
        component: () => import('../views/guidanceApply/secret_risk_poionter/index2')
    },

    //企业商业秘密保护核心秘密点和风险点 3
    {
        path: '/secret_risk_poionter3',
        name: '/secret_risk_poionter3',
        component: () => import('../views/guidanceApply/secret_risk_poionter/index3')
    },
    //企业创新人才备案登记表   1
    {
        path: '/innovative_talent1',
        name: 'innovative_talent1',
        component: () => import('../views/guidanceApply/innovative_talent/index1')
    },
    //企业创新人才备案登记表   2
    {
        path: '/innovative_talent2',
        name: 'innovative_talent2',
        component: () => import('../views/guidanceApply/innovative_talent/index2')
    },
    //企业创新人才备案登记表   3
    {
        path: '/innovative_talent3',
        name: 'innovative_talent3',
        component: () => import('../views/guidanceApply/innovative_talent/index3')
    },
    //台州市商业秘密保护示范点申报表   1
    {
        path: '/business_secret_protect',
        name: 'business_secret_protect',
        component: () => import('../views/guidanceApply/business_secret_protect/index1')
    },
    //台州市商业秘密保护示范点申报表   2
    {
        path: '/business_secret_protect2',
        name: 'business_secret_protect2',
        component: () => import('../views/guidanceApply/business_secret_protect/index2')
    },
    //台州市商业秘密保护示范点申报表   3
    {
        path: '/business_secret_protect3',
        name: 'business_secret_protect3',
        component: () => import('../views/guidanceApply/business_secret_protect/index3')
    },
    // “秘转专”备案申请表 1
    {
        path: '/m_to_z_apply',
        component: () => import('../views/guidanceApply/m_to_z_apply/index_1.vue')
    },
    // “秘转专”备案申请表 2
    {
        path: '/m_to_z_apply2',
        component: () => import('../views/guidanceApply/m_to_z_apply/index_2.vue')
    },
    //在线律师
    {
        path: '/home/onlineLawyer',
        name: 'onlineLawyer',
        component: () => import('../views/home/onlineLawyer/index.vue')
    },
    //在线聊天
    {
        path: '/home/onlineLawyer/onlineChat',
        name: 'onlineChat',
        component: () => import('../views/home/onlineChat/index.vue')
    },
    //更多指导申请
    {
        path: '/home/moreGuidanceApplications',
        name: 'moreGuidanceApplications',
        component: () => import('../views/home/moreGuidanceApplications/index.vue')
    },

    //选择表格
    {
        path: '/home/selectForm',
        name: 'selectForm',
        component: () => import('../views/home/selectForm/index.vue')
    },
    //举报
    {
        path: '/home/toReport',
        name: 'toReport',
        component: () => import('../views/home/toReport/index.vue')
    },
    //地图选点
    {
        path: '/home/mapChoosing',
        name: 'mapChoosing',
        component: () => import('../components/mapChoosing/index.vue')
    },

    {
        path: '/announcement',
        name: 'announcement',
        component: () => import('../views/announcement')
    },
    {
        path: '/training',
        name: 'training',
        component: () => import('../views/training/index.vue')
    },
    //培训详情
    {
        path: '/training/trainingDetails',
        name: 'trainingDetails',
        component: () => import('../views/training/trainingDetails/index.vue')
    },
    {
        path: '/mine',
        name: 'mine',
        component: () => import('../views/mine/index.vue')
    },
    //举报记录
    {
        path: '/mine/reportRecord',
        name: 'reportRecord',
        component: () => import('../views/mine/reportRecord/index.vue')
    },
    {
        path: '/table/table1',
        name: 'table1',
        component: () => import('../views/table/table1/index.vue')
    },
    {
        path: '/table/table2',
        name: 'table2',
        component: () => import('../views/table/table2/index.vue')
    },
    {
        path: '/table/table3',
        name: 'table3',
        component: () => import('../views/table/table3/index.vue')
    },
    {
        path: '/table/table4',
        name: 'table4',
        component: () => import('../views/table/table4/index.vue')
    },
    {
        path: '/table/table5',
        name: 'table5',
        component: () => import('../views/table/table5/index.vue')
    },
    {
        path: '/table/table6',
        name: 'table6',
        component: () => import('../views/table/table6/index.vue')
    },
    {
        path: '/table/table7',
        name: 'table7',
        component: () => import('../views/table/table7/index.vue')
    },
    {
        path: '/table/table8',
        name: 'table8',
        component: () => import('../views/table/table8/index.vue')
    },
    {
        path: '/table/table9',
        name: 'table9',
        component: () => import('../views/table/table9/index.vue')
    },
    {
        path: '/table/table10',
        name: 'table10',
        component: () => import('../views/table/table10/index.vue')
    },
    {
        path: '/table/table11',
        name: 'table11',
        component: () => import('../views/table/table11/index.vue')
    }
]
const router = new VueRouter({
  routes
})

export default router
