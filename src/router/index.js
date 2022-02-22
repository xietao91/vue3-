import { createRouter,createWebHashHistory } from 'vue-router'

const props = () => import(/* webpackChunkName: "props" */ '@/components/props.vue')
const emits = () => import(/* webpackChunkName: "emits" */ '@/components/emits.vue')
const vModel = () => import(/* webpackChunkName: "vModel" */ '@/components/vModel.vue')
const refs = () => import(/* webpackChunkName: "refs" */ '@/components/refs.vue')
const provide = () => import(/* webpackChunkName: "provide" */ '@/components/provideInject.vue')

export const routes = [
    {
        path:'/props',
        component:props
    },
    {
        path:'/emits',
        component:emits
    },
    {
        path:'/vModel',
        component:vModel
    },
    {
        path:'/refs',
        component:refs
    },
    {
        path:'/provide',
        component:provide
    },
]

// 实例化路由对象，使用hash模式
const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router