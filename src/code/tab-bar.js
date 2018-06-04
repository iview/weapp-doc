let code = {};

code.import = `
"usingComponents": {
    "i-tab-bar": "../../dist/tab-bar/index",
    "i-tab-bar-item": "../../dist/tab-bar-item/index"
}
`;
code.usage = `
基本用法

<i-tab-bar current="{{ current }}" bindchange="handleChange">
    <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="Home"></i-tab-bar-item>
    <i-tab-bar-item key="group" icon="group" current-icon="group_fill" title="Friends"></i-tab-bar-item>
    <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" count="3" title="Notice"></i-tab-bar-item>
    <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" dot title="My"></i-tab-bar-item>
</i-tab-bar>

自定义主题色

<i-tab-bar current="{{ current }}" color="#f759ab" bindchange="handleChange">
    <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="首页"></i-tab-bar-item>
    <i-tab-bar-item key="group" icon="group" current-icon="group_fill" title="朋友"></i-tab-bar-item>
    <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" title="通知"></i-tab-bar-item>
    <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" title="我的"></i-tab-bar-item>
</i-tab-bar>
`;

code.js = `
Page({
    data: {
        current: 'homepage'
    },

    handleChange ({ detail }) {
        this.setData({
            current: detail.key
        });
    }
});
`;

export default code;