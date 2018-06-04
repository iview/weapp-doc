let code = {};

code.import = `
"usingComponents": {
    "i-grid": "../../dist/grid/index",
    "i-grid-item": "../../dist/grid-item/index",
    "i-grid-icon": "../../dist/grid-icon/index",
    "i-grid-label": "../../dist/grid-label/index"
}
`;
code.usage = `
<i-grid>
    <i-grid-item>
        <i-grid-icon>
            <image src="../images/icon-vip.png" />
        </i-grid-icon>
        <i-grid-label>Grid</i-grid-label>
    </i-grid-item>
    <i-grid-item>Grid</i-grid-item>
    <i-grid-item>Grid</i-grid-item>
</i-grid>
`;

export default code;