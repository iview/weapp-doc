let code = {};

code.import = `
"usingComponents": {
    "i-steps": "../../dist/steps/index",
    "i-step": "../../dist/step/index"
}
`;
code.usage = `
基本用法

<i-steps>
    <i-step status="finish">
        <view slot="title">
              已完成
        </view>
        <view slot="content">
            这里是该步骤的描述信息
        </view>
    </i-step>
    <i-step status="process">
        <view slot="title">
            进行中
        </view>
        <view slot="content">
            这里是该步骤的描述信息
        </view>
    </i-step>
    <i-step status="">
        <view slot="title">
            错误
        </view>
        <view slot="content">
            这里是该步骤的描述信息
        </view>
    </i-step>
</i-steps>

使用 icon 图标

<i-steps>
    <i-step status="finish" icon="barrage">
        <view slot="title">
              已完成
        </view>
        <view slot="content">
            这里是该步骤的描述信息
        </view>
    </i-step>
    <i-step status="process" icon="brush">
        <view slot="title">
            进行中
        </view>
        <view slot="content" icon="camera">
            这里是该步骤的描述信息
        </view>
    </i-step>
    <i-step  icon="collection">
        <view slot="title">
            错误
        </view>
        <view slot="content">
            这里是该步骤的描述信息
        </view>
    </i-step>
</i-steps>

步骤进度

<i-steps current="{{current}}">
    <i-step>
        <view slot="title">
              已完成
        </view>
        <view slot="content">
            这里是该步骤的描述信息
        </view>
    </i-step>
    <i-step>
        <view slot="title">
            进行中
        </view>
        <view slot="content">
            这里是该步骤的描述信息
        </view>
    </i-step>
    <i-step>
        <view slot="title">
            错误
        </view>
        <view slot="content">
            这里是该步骤的描述信息
        </view>
    </i-step>
</i-steps>
<i-button bindclick="handleClick">下一步</i-button>

垂直方向

<i-steps current="{{verticalCurrent}}" direction="vertical">
    <i-step>
        <view slot="title">
              已完成
        </view>
        <view slot="content">
            这里是该步骤的描述信息
        </view>
    </i-step>
    <i-step>
        <view slot="title">
            进行中
        </view>
        <view slot="content">
            这里是该步骤的描述信息
        </view>
    </i-step>
    <i-step>
        <view slot="title">
            错误
        </view>
        <view slot="content">
            这里是该步骤的描述信息
        </view>
    </i-step>
</i-steps>
`;

code.js = `
Page({
    data : {
        current : 2,
        verticalCurrent : 2
    },
    handleClick () {
        const addCurrent = this.data.current + 1;
        const current = addCurrent > 2 ? 0 : addCurrent;
        this.setData({
            'current' : current
        })
    }
});
`;

export default code;