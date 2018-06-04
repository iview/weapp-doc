let code = {};

code.import = `
"usingComponents": {
    "i-badge": "../../dist/badge/index"
}
`;
code.usage = `
<i-badge dot>
    <view class="demo-badge"></view>
</i-badge>

<i-badge count="3">
    <view class="demo-badge"></view>
</i-badge>

<i-badge count="123" overflow-count="100">
    <view class="demo-badge"></view>
</i-badge>

<i-badge count="66" i-class-alone="demo-badge-alone" />
`;

export default code;