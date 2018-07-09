// 定义左侧导航

const list = {
    beforeComponents: [
        {
            title: '快速上手',
            titleEn: 'Quick Start',
            path: '/docs/guide/start'
        },
        {
            title: '更新日志',
            titleEn: 'Change Log',
            path: '/docs/guide/update'
        }
    ],
    components: [
        {
            type: 'Layout',
            title: '布局',
            list: [
                {
                    title: 'Layout 栅格布局',
                    path: '/components/layout'
                },
                {
                    title: 'Grid 宫格',
                    path: '/components/grid'
                },
                {
                    title: 'Panel 面板',
                    path: '/components/panel'
                },
                {
                    title: 'List 列表',
                    path: '/components/list'
                },
                {
                    title: 'Card 卡片',
                    path: '/components/card'
                },
            ]
        },
        {
            type: 'Basic',
            title: '基础',
            list: [
                {
                    title: 'Button 按钮',
                    path: '/components/button'
                },
                {
                    title: 'Color 色彩',
                    path: '/components/color'
                },
                {
                    title: 'Icon 图标',
                    path: '/components/icon'
                },
            ]
        },
        {
            type: 'Navigation',
            title: '导航',
            list: [
                {
                    title: 'TabBar 标签栏',
                    path: '/components/tab-bar'
                },
                {
                    title: 'Tabs 标签页',
                    path: '/components/tabs'
                },
                {
                    title: 'Drawer 抽屉',
                    path: '/components/drawer'
                },
                {
                    title: 'Page 分页',
                    path: '/components/page'
                },
                {
                    title: 'Steps 步骤条',
                    path: '/components/steps'
                },
                {
                    title: 'NoticeBar 通告栏',
                    path: '/components/notice-bar'
                },
                {
                    title: 'Index 索引选择器',
                    path: '/components/index'
                },
                {
                    title: 'Sticky 吸顶容器',
                    path: '/components/sticky'
                },
            ]
        },
        {
            type: 'Feedback',
            title: '操作反馈',
            list: [
                {
                    title: 'ActionSheet 动作面板',
                    path: '/components/action-sheet'
                },
                {
                    title: 'Toast 轻提示',
                    path: '/components/toast'
                },
                {
                    title: 'Modal 对话框',
                    path: '/components/modal'
                },
                {
                    title: 'Message 全局提醒',
                    path: '/components/message'
                },
                {
                    title: 'Spin 加载中',
                    path: '/components/spin'
                },
                {
                    title: 'Swipeout 滑动菜单',
                    path: '/components/swipeout'
                },
            ]
        },
        {
            type: 'View',
            title: '视图',
            list: [
                {
                    title: 'Badge 徽章',
                    path: '/components/badge'
                },
                {
                    title: 'Alert 警告提示',
                    path: '/components/alert'
                },
                {
                    title: 'Tag 标签',
                    path: '/components/tag'
                },
                {
                    title: 'Progress 进度条',
                    path: '/components/progress'
                },
                {
                    title: 'Avatar 头像',
                    path: '/components/avatar'
                },
                {
                    title: 'CountDown 倒计时',
                    path: '/components/count-down'
                },
                {
                    title: 'Divider 分隔符',
                    path: '/components/divider'
                },
                {
                    title: 'LoadMore 页底提示',
                    path: '/components/load-more'
                },
            ]
        },
        {
            type: 'Form',
            title: '表单',
            list: [
                {
                    title: 'Input 输入框',
                    path: '/components/input'
                },
                {
                    title: 'Radio 单选',
                    path: '/components/radio'
                },
                {
                    title: 'Checkbox 复选',
                    path: '/components/checkbox'
                },
                {
                    title: 'Switch 开关',
                    path: '/components/switch'
                },
                {
                    title: 'Rate 评分',
                    path: '/components/rate'
                },
                {
                    title: 'InputNumber 数字输入框',
                    path: '/components/input-number'
                },
            ]
        }
    ]
};

export default list;
