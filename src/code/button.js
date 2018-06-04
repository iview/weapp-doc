let code = {};

code.import = `
"usingComponents": {
    "i-button": "../../dist/button/index"
}
`;
code.usage = `
一般用法

<i-button bind:click="handleClick">默认按钮</i-button>
<i-button bind:click="handleClick" type="error" long="true">联通两边按钮</i-button>
<i-button bind:click="handleClick" type="primary">Primary</i-button>
<i-button bind:click="handleClick" type="ghost">Ghost</i-button>
<i-button bind:click="handleClick" type="info">Info</i-button>
<i-button bind:click="handleClick" type="success">Success</i-button>
<i-button bind:click="handleClick" type="warning">Warning</i-button>
<i-button bind:click="handleClick" type="error">Error</i-button>

不同尺寸

<i-button bind:click="handleClick" type="primary" size="large">大尺寸</i-button>
<i-button bind:click="handleClick" type="primary" size="default">默认尺寸</i-button>
<i-button bind:click="handleClick" type="primary" size="small">小尺寸</i-button>

圆角的不同尺寸

<i-button bind:click="handleClick" type="success" shape="circle" size="large">大尺寸</i-button>
<i-button bind:click="handleClick" type="success" shape="circle">默认尺寸</i-button>
<i-button bind:click="handleClick" type="success" shape="circle" size="small">小尺寸</i-button>

<i-button bind:click="handleClick" type="primary" loading="true">加载中按钮</i-button>

<i-button bind:click="handleClick" type="primary" disabled>禁用按钮</i-button>
`;

export default code;