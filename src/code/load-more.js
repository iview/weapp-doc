let code = {};

code.import = `
"usingComponents": {
    "i-load-more": "../../dist/load-more/index"
}
`;
code.usage = `
<i-load-more />
<i-load-more tip="暂无数据" loading="{{ false }}" />
<i-load-more loading="{{ false }}" />
`;

export default code;