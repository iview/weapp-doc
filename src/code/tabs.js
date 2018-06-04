let code = {};

code.import = `
"usingComponents": {
    "i-tabs": "../../dist/tabs/index",
    "i-tab": "../../dist/tab/index"
}
`;
code.usage = `
基本用法

<i-tabs current="{{ current }}" bindchange="handleChange">
    <i-tab key="tab1" title="选项1"></i-tab>
    <i-tab key="tab2" title="选项2"></i-tab>
    <i-tab key="tab3" title="选项3"></i-tab>
</i-tabs>

自定义主题色

<i-tabs current="{{ current }}" color="#f759ab" bindchange="handleChange">
    <i-tab key="tab1" title="选项1"></i-tab>
    <i-tab key="tab2" title="选项2"></i-tab>
    <i-tab key="tab3" title="选项3"></i-tab>
</i-tabs>

徽标

<i-tabs current="{{ current }}" bindchange="handleChange">
    <i-tab key="tab1" title="选项1" count="3"></i-tab>
    <i-tab key="tab2" title="选项2"></i-tab>
    <i-tab key="tab3" title="选项3" dot></i-tab>
</i-tabs>

滚动

<i-tabs current="{{ current_scroll }}" scroll bindchange="handleChangeScroll">
    <i-tab key="tab1" title="选项1"></i-tab>
    <i-tab key="tab2" title="选项2"></i-tab>
    <i-tab key="tab3" title="选项3"></i-tab>
    <i-tab key="tab4" title="选项4"></i-tab>
    <i-tab key="tab5" title="选项5"></i-tab>
    <i-tab key="tab6" title="选项6"></i-tab>
    <i-tab key="tab7" title="选项7"></i-tab>
    <i-tab key="tab8" title="选项8"></i-tab>
    <i-tab key="tab9" title="选项9"></i-tab>
</i-tabs>
`;

code.js = `
Page({
    data: {
        current: 'tab1',
        current_scroll: 'tab1'
    },

    handleChange ({ detail }) {
        this.setData({
            current: detail.key
        });
    },

    handleChangeScroll ({ detail }) {
        this.setData({
            current_scroll: detail.key
        });
    }
});
`;

export default code;