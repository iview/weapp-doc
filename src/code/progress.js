let code = {};

code.import = `
"usingComponents": {
    "i-progress": "../../dist/progress/index"
}
`;
code.usage = `
<view class="progress-item">
    <i-progress percent="25"></i-progress>
    <i-progress percent="45" status="active"></i-progress>
    <i-progress percent="65" status="wrong"></i-progress>
    <i-progress percent="100" status="success"></i-progress>
    <i-progress percent="25" hide-info></i-progress>
</view>
<view class="progress-item">
    <i-progress percent="{{ percent }}" status="{{ status }}"></i-progress>
    <i-button bindclick="handleAdd" type="ghost">增加</i-button>
    <i-button bindclick="handleReduce" type="ghost">减少</i-button>
</view>
`;

code.js = `
Page({
    data: {
        percent: 0,
        status: 'normal'
    },
    handleAdd () {
        if (this.data.percent === 100) return;
        this.setData({
            percent: this.data.percent + 10
        });
        if (this.data.percent === 100) {
            this.setData({
                status: 'success'
            });
        }
    },
    handleReduce () {
        if (this.data.percent === 0) return;
        this.setData({
            percent: this.data.percent - 10,
            status: 'normal'
        });
    }
});
`;

export default code;