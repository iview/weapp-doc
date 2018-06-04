let code = {};

code.import = `
"usingComponents": {
    "i-spin": "../../dist/spin/index"
}
`;
code.usage = `
三种尺寸

<i-grid>
    <i-grid-item i-class="item">
        <i-spin size="small"></i-spin>
    </i-grid-item>
    <i-grid-item i-class="item">
        <i-spin></i-spin>
    </i-grid-item>
    <i-grid-item i-class="item">
        <i-spin size="large"></i-spin>
    </i-grid-item>
</i-grid>

居中固定

<view class="container">
    <i-spin fix></i-spin>
</view>

自定义内容

<i-grid>
    <i-grid-item i-class="item">
        <i-spin custom>加载中...</i-spin>
    </i-grid-item>
    <i-grid-item i-class="item">
        <i-spin custom>
            <i-icon type="refresh" size="20" i-class="icon-load"></i-icon>
            <view>Loading</view>
        </i-spin>
    </i-grid-item>
    <i-grid-item i-class="item">
        <i-spin custom>
            <view class="loading"></view>
        </i-spin>
    </i-grid-item>
</i-grid>

切换显示状态

<view class="spin-article">
    <view class="title">登金陵凤凰台</view>
    <view class="name">李白</view>
    <view class="article">
        <view>凤凰台上凤凰游，凤去台空江自流。</view>
        <view>吴宫花草埋幽径，晋代衣冠成古丘。</view>
        <view>三山半落青天外，二水中分白鹭洲。</view>
        <view>总为浮云能蔽日，长安不见使人愁。</view>
    </view>

    <i-spin size="large" fix wx:if="{{ spinShow }}"></i-spin>
</view>

<view class="switch">
    <i-switch value="{{ switch }}" bindchange="onSwitchChange"></i-switch>
</view>
`;

code.js = `
Page({
    data: {
        spinShow: true,
        switch: false
    },
    onSwitchChange ({ detail }) {
        const value = detail.value;
        this.setData({
            switch: value,
            spinShow: !value
        });
    }
});
`;

export default code;