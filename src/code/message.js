let code = {};

code.import = `
"usingComponents": {
    "i-message": "../../dist/message/index"
}
`;
code.usage = `
<i-button type="ghost" bind:click="handleDefault">默认提醒</i-button>
<i-button type="ghost" bind:click="handleSuccess">成功提醒</i-button>
<i-button type="ghost" bind:click="handleWarning">警告提醒</i-button>
<i-button type="ghost" bind:click="handleError">错误提醒</i-button>
<i-button type="ghost" bind:click="handleDuration">自定义持续时间</i-button>

<i-message id="message" />
`;

code.js = `
const { $Message } = require('../../dist/base/index');

Page({
    handleDefault () {
        $Message({
            content: '这是一条普通提醒'
        });
    },
    handleSuccess () {
        $Message({
            content: '这是一条成功提醒',
            type: 'success'
        });
    },
    handleWarning () {
        $Message({
            content: '这是一条警告提醒',
            type: 'warning'
        });
    },
    handleError () {
        $Message({
            content: '这是一条错误提醒',
            type: 'error'
        });
    },
    handleDuration () {
        $Message({
            content: '我将在 5 秒后消失',
            duration: 5
        });
    }
});
`;

export default code;