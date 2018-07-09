let code = {};

code.import = `
"usingComponents": {
    "i-divider": "../../dist/divider/index"
}
`;
code.usage = `
<i-divider content="加载已经完成,没有其他数据"></i-divider>
<i-divider content="加载已经完成,没有其他数据" color="#2d8cf0" lineColor="#2d8cf0"></i-divider>
<i-divider content="加载已经完成,没有其他数据" lineColor="#2d8cf0"></i-divider>
<i-divider content="加载已经完成,没有其他数据" color="#ed3f14" lineColor="#ed3f14"></i-divider>
<i-divider content="加载已经完成,没有其他数据" color="#ff9900" lineColor="#ff9900"></i-divider>
<i-divider  color="#2d8cf0" lineColor="#2d8cf0">加载已经完成,没有其他数据</i-divider>
<i-divider color="#ed3f14" lineColor="#ed3f14">加载已经完成,没有其他数据</i-divider>
`;

export default code;