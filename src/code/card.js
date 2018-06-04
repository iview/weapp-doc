let code = {};

code.import = `
"usingComponents": {
    "i-card": "../../dist/card/index"
}
`;
code.usage = `
<i-card title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
    <view slot="content">内容不错</view>
    <view slot="footer">尾部内容</view>
</i-card>
`;

export default code;