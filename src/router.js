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
        path: '/components/tab-bar',
        meta: {
            title: '标签栏 TabBar'
        },
        component: (resolve) => require(['./views/components/tab-bar.vue'], resolve)
    },
    {
        path: '/components/tabs',
        meta: {
            title: '标签页 Tabs'
        },
        component: (resolve) => require(['./views/components/tabs.vue'], resolve)
    },
    {
        path: '/components/drawer',
        meta: {
            title: '抽屉 Drawer'
        },
        component: (resolve) => require(['./views/components/drawer.vue'], resolve)
    },
    {
        path: '/components/page',
        meta: {
            title: '分页 Page'
        },
        component: (resolve) => require(['./views/components/page.vue'], resolve)
    },
    {
        path: '/components/steps',
        meta: {
            title: '步骤条 Steps'
        },
        component: (resolve) => require(['./views/components/steps.vue'], resolve)
    },
    {
        path: '/components/notice-bar',
        meta: {
            title: '通告栏 NoticeBar'
        },
        component: (resolve) => require(['./views/components/notice-bar.vue'], resolve)
    },
    {
        path: '/components/action-sheet',
        meta: {
            title: '动作面板 ActionSheet'
        },
        component: (resolve) => require(['./views/components/action-sheet.vue'], resolve)
    },
    {
        path: '/components/toast',
        meta: {
            title: '轻提示 Toast'
        },
        component: (resolve) => require(['./views/components/toast.vue'], resolve)
    },
    {
        path: '/components/modal',
        meta: {
            title: '对话框 Modal'
        },
        component: (resolve) => require(['./views/components/modal.vue'], resolve)
    },
    {
        path: '/components/message',
        meta: {
            title: '全局提醒 Message'
        },
        component: (resolve) => require(['./views/components/message.vue'], resolve)
    },
    {
        path: '/components/spin',
        meta: {
            title: '加载中 Spin'
        },
        component: (resolve) => require(['./views/components/spin.vue'], resolve)
    },
    {
        path: '/components/badge',
        meta: {
            title: '徽标数 Badge'
        },
        component: (resolve) => require(['./views/components/badge.vue'], resolve)
    },
    {
        path: '/components/alert',
        meta: {
            title: '警告提示 Alert'
        },
        component: (resolve) => require(['./views/components/alert.vue'], resolve)
    },
    {
        path: '/components/tag',
        meta: {
            title: '标签 Tag'
        },
        component: (resolve) => require(['./views/components/tag.vue'], resolve)
    },
    {
        path: '/components/progress',
        meta: {
            title: '进度条 Progress'
        },
        component: (resolve) => require(['./views/components/progress.vue'], resolve)
    },
    {
        path: '/components/avatar',
        meta: {
            title: '头像 Avatar'
        },
        component: (resolve) => require(['./views/components/avatar.vue'], resolve)
    },
    {
        path: '/components/input',
        meta: {
            title: '输入框 Input'
        },
        component: (resolve) => require(['./views/components/input.vue'], resolve)
    },
    {
        path: '/components/radio',
        meta: {
            title: '单选 Radio'
        },
        component: (resolve) => require(['./views/components/radio.vue'], resolve)
    },
    {
        path: '/components/checkbox',
        meta: {
            title: '复选 Checkbox'
        },
        component: (resolve) => require(['./views/components/checkbox.vue'], resolve)
    },
    {
        path: '/components/switch',
        meta: {
            title: '开关 Switch'
        },
        component: (resolve) => require(['./views/components/switch.vue'], resolve)
    },
    {
        path: '/components/rate',
        meta: {
            title: '评分 Rate'
        },
        component: (resolve) => require(['./views/components/rate.vue'], resolve)
    },
    {
        path: '/components/input-number',
        meta: {
            title: '数字输入框 InputNumber'
        },
        component: (resolve) => require(['./views/components/input-number.vue'], resolve)
    },
    {
        path: '/components/count-down',
        meta: {
            title: '倒计时 CountDown'
        },
        component: (resolve) => require(['./views/components/count-down.vue'], resolve)
    },
    {
        path: '/components/swipeout',
        meta: {
            title: '滑动菜单 Swipeout'
        },
        component: (resolve) => require(['./views/components/swipeout.vue'], resolve)
    },
    {
        path: '/components/index',
        meta: {
            title: '索引选择器 Index'
        },
        component: (resolve) => require(['./views/components/index.vue'], resolve)
    },
    {
        path: '/components/divider',
        meta: {
            title: '分隔符 Divider'
        },
        component: (resolve) => require(['./views/components/divider.vue'], resolve)
    },
    {
        path: '/components/sticky',
        meta: {
            title: '吸顶容器 Sticky'
        },
        component: (resolve) => require(['./views/components/sticky.vue'], resolve)
    },
    {
        path: '/components/load-more',
        meta: {
            title: '页底提示 LoadMore'
        },
        component: (resolve) => require(['./views/components/load-more.vue'], resolve)
    },
    {
        path: '/components/collapse',
        meta: {
            title: '折叠面板 Collapse'
        },
        component: (resolve) => require(['./views/components/collapse.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/'
    }
];

export default routers;
