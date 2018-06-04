let code = {};

code.import = `
"usingComponents": {
    "i-drawer": "../../dist/drawer/index"
}
`;
code.usage = `
<i-button bind:click="toggleLeft1" type="ghost">左边弹出1</i-button>
<i-button bind:click="toggleLeft2" type="primary">左边弹出2</i-button>
<i-button bind:click="toggleRight1" type="ghost">右边弹出1</i-button>
<i-button bind:click="toggleRight2" type="primary">右边弹出2</i-button>
<i-drawer mode="left" visible="{{showLeft1}}" bind:close="toggleLeft1">
    <view class="demo-container">
        单击遮罩层关闭
    </view>
</i-drawer>
<i-drawer mode="left" visible="{{showLeft2}}" mask-closable="{{false}}">
    <view class="demo-container">
        禁止单击遮罩关闭
        <i-button bind:click="toggleLeft2" type="primary">关闭</i-button>
    </view>
</i-drawer>
<i-drawer mode="right" visible="{{showRight1}}" bind:close="toggleRight1">
    <view class="demo-container">
        单击遮罩层关闭
    </view>
</i-drawer>
<i-drawer mode="right" visible="{{showRight2}}" mask-closable="{{false}}">
    <view class="demo-container">
        禁止单击遮罩关闭
        <i-button bind:click="toggleRight2" type="primary">关闭</i-button>
    </view>
</i-drawer>
`;

code.js = `
Page({
    data: {
        showLeft1: false,
        showLeft2: false,
        showRight1: false,
        showRigh2: false,
    },
    toggleLeft1() {
        this.setData({
            showLeft1: !this.data.showLeft1
        });
    },
    toggleLeft2() {
        this.setData({
            showLeft2: !this.data.showLeft2
        });
    },
    toggleRight1() {
        this.setData({
            showRight1: !this.data.showRight1
        });
    },
    toggleRight2() {
        this.setData({
            showRight2: !this.data.showRight2
        });
    }
});

`;

export default code;