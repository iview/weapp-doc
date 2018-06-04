/**
 * Created by aresn on 16/8/22.
 */
const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/docs/guide/start',
        meta: {
            title: '快速上手'
        },
        component: (resolve) => require(['./views/guide/start.vue'], resolve)
    },
    {
        path: '/docs/guide/update',
        meta: {
            title: '更新日志'
        },
        component: (resolve) => require(['./views/guide/update.vue'], resolve)
    },
    {
        path: '/components/layout',
        meta: {
            title: '栅格布局 Layout'
        },
        component: (resolve) => require(['./views/components/layout.vue'], resolve)
    },
    {
        path: '/components/grid',
        meta: {
            title: '宫格 Grid'
        },
        component: (resolve) => require(['./views/components/grid.vue'], resolve)
    },
    {
        path: '/components/panel',
        meta: {
            title: '面板 Panel'
        },
        component: (resolve) => require(['./views/components/panel.vue'], resolve)
    },
    {
        path: '/components/list',
        meta: {
            title: '列表 List'
        },
        component: (resolve) => require(['./views/components/list.vue'], resolve)
    },
    {
        path: '/components/card',
        meta: {
            title: '卡片 Card'
        },
        component: (resolve) => require(['./views/components/card.vue'], resolve)
    },
    {
        path: '/components/button',
        meta: {
            title: '按钮 Button'
        },
        component: (resolve) => require(['./views/components/button.vue'], resolve)
    },
    {
        path: '/components/color',
        meta: {
            title: '色彩 Color'
        },
        component: (resolve) => require(['./views/components/color.vue'], resolve)
    },
    {
        path: '/components/icon',
        meta: {
            title: '图标 Icon'
        },
        component: (resolve) => require(['./views/components/icon.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/'
    }
];

export default routers;
