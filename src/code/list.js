let code = {};

code.import = `
"usingComponents": {
    "i-cell-group": "../../dist/cell-group/index",
    "i-cell": "../../dist/cell/index"
}
`;
code.usage = `
<i-cell-group>
    <i-cell title="只显示箭头" is-link></i-cell>
    <i-cell title="跳转到首页" is-link url="/pages/dashboard/index"></i-cell>
    <i-cell title="只有 footer 点击有效" is-link url="/pages/dashboard/index" only-tap-footer></i-cell>
    <i-cell title="开关">
        <switch slot="footer" checked />
    </i-cell>
</i-cell-group>
`;

export default code;