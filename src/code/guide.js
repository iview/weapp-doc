let code = {};

code.button = `
"usingComponents": {
    "i-button": "../../dist/button/index"
}
`;

code.wxml = `
<i-button type="primary" bind:click="handleClick">这是一个按钮</i-button>
`;

code.install = `
# 从 GitHub 下载后，安装依赖
npm install

# 编译组件
npm run dev
`;

export default code;