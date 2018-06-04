let code = {};

code.import = `
"usingComponents": {
    "i-switch": "../../dist/switch/index"
}
`;
code.usage = `
<i-cell-group>
    <i-cell title="基本用法">
        <i-switch value="{{switch1}}" bind:change="onChange" slot="footer"></i-switch>
    </i-cell>
    <i-cell title="自定义内容">
        <i-switch value="{{switch1}}" size="large" bind:change="onChange" slot="footer">
            <view slot="open">开启</view>
            <view slot="close">关闭</view>
        </i-switch>
    </i-cell>
    <i-cell title="图标">
        <i-switch value="{{switch1}}" bind:change="onChange" slot="footer">
            <i-icon type="right" slot="open"></i-icon>
            <i-icon type="close" slot="close"></i-icon>
        </i-switch>
    </i-cell>
    <i-cell title="禁止切换">
        <i-switch value="{{switch1}}" disabled="{{true}}" slot="footer"></i-switch>
    </i-cell>
</i-cell-group>
`;

code.js = `
Page({
    data : {
        switch1 : false
    },
    onChange(event){
        const detail = event.detail;
        this.setData({
            'switch1' : detail.value
        })
        
    }
});
`;

export default code;