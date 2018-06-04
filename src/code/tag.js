let code = {};

code.import = `
"usingComponents": {
    "i-tag": "../../dist/tag/index"
}
`;
code.usage = `
基本用法

<i-tag>标签一</i-tag>

设置边框配置

<i-tag 
    class="i-tags"
    name="标签一" 
    type="border" 
    color="red">
    标签一
</i-tag>
<i-tag 
    class="i-tags"
    name="标签一" 
    color="green"
    type="border">
    标签一
</i-tag>

各种颜色配置

<i-tag 
    class="i-tags"
    name="单个标签">
    标签一
</i-tag>
<i-tag 
    class="i-tags"
    name="单个标签" 
    color="red">
    标签一
</i-tag>
<i-tag 
    class="i-tags" 
    name="标签一" 
    color="green">
    标签一
</i-tag>
<i-tag 
    class="i-tags" 
    name="标签一" 
    color="blue">
    标签一
</i-tag>
<i-tag 
    class="i-tags" 
    name="标签一" 
    color="yellow">
    标签一
</i-tag>

多个标签

<i-tag 
    wx:for="{{tags}}" 
    wx:key="{{index}}"
    bindchange="onChange" 
    checkable="{{true}}" 
    name="{{index}}" 
    color="{{item.color}}" 
    checked="{{item.checked}}" 
    type="border"
    style="margin-right:5px;">
    {{item.name}}
</i-tag>
`;

code.js = `
Page({
    data : {
        oneChecked : false,
        tags : [
            {
                name : '标签一',
                checked : false,
                color : 'default'
            },
            {
                name : '标签二',
                checked : false,
                color : 'red'
            },
            {
                name : '标签三',
                checked : true,
                color : 'blue'
            },
            {
                name : '标签4️',
                checked : true,
                color : 'green'
            }
        ]
    },
    oneChange(event){
        this.setData({
            'oneChecked' : event.detail.checked
        })
    },
    onChange(event){
        const detail = event.detail;
        this.setData({
            ['tags['+event.detail.name+'].checked'] : detail.checked
        })
        
    }
});
`;

export default code;