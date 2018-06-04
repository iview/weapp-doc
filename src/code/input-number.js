let code = {};

code.import = `
"usingComponents": {
    "i-input-number": "../../dist/input-number/index"
}
`;
code.usage = `
<i-panel title="基础用法">
    <view style="padding: 16px">
        <i-input-number value="{{ value1 }}" min="0" max="100" bindchange="handleChange1" />
    </view>
</i-panel>

<i-panel title="小数">
    <view style="padding: 16px">
        <i-input-number value="{{ value2 }}" min="0" max="100" step="0.2" bindchange="handleChange2" />
    </view>
</i-panel>
`;

code.js = `
Page({
    data: {
        value1: 1,
        value2: 0.1
    },

    handleChange1 ({ detail }) {
        this.setData({
            value1: detail.value
        })
    },

    handleChange2 ({ detail }) {
        this.setData({
            value2: detail.value
        })
    }
});
`;

export default code;