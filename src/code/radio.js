let code = {};

code.import = `
"usingComponents": {
    "i-radio-group": "../../dist/radio-group/index",
    "i-radio": "../../dist/radio/index"
}
`;
code.usage = `
<i-panel title="group-水果">
    <i-radio-group current="{{current}}" bindchange="handleFruitChange">
        <i-radio wx:for="{{fruit}}" position="{{position}}" wx:key="{{item.id}}" value="{{item.name}}">
        </i-radio>
    </i-radio-group>
</i-panel>

<i-button bindclick="handleClick" type="ghost">切换单选框位置</i-button>

<i-panel title="radio-动物">
    <i-radio value="{{animal}}" disabled="{{disabled}}" checked="{{checked}}" bindchange="handleAnimalChange">
    </i-radio>
</i-panel>

<i-button bindclick="handleDisabled" type="ghost">切换disabled状态</i-button>
`;

code.js = `
Page({
    data: {
        fruit: [{
            id: 1,
            name: '香蕉',
        }, {
            id: 2,
            name: '苹果'
        }, {
            id: 3,
            name: '西瓜'
        }, {
            id: 4,
            name: '葡萄',
        }],
        current: '苹果',
        position: 'left',
        animal: '熊猫',
        checked: false,
        disabled: false,
    },
    handleFruitChange({ detail = {} }) {
        this.setData({
            current: detail.value
        });
    },
    handleClick() {
        this.setData({
            position: this.data.position.indexOf('left') !== -1 ? 'right' : 'left',
        });
    },
    handleDisabled() {
        this.setData({
            disabled: !this.data.disabled
        });
    },
    handleAnimalChange({ detail = {} }) {
        this.setData({
            checked: detail.current
        });
    },

});
`;

export default code;