let code = {};

code.import = `
"usingComponents": {
    "i-notice-bar": "../../dist/notice-bar/index"
}
`;
code.usage = `
通告栏

<i-notice-bar>
    2018年世界杯,将于6月14日至7月15日举行
</i-notice-bar>

icon 通告栏

<i-notice-bar icon="systemprompt">
    2018年世界杯,将于6月14日至7月15日举行
</i-notice-bar>

关闭 通告栏

<i-notice-bar icon="systemprompt" closable>
    2018年世界杯,将于6月14日至7月15日举行
</i-notice-bar>

滚动 通告栏

<i-notice-bar icon="systemprompt" loop>
    2018年世界杯,将于6月14日至7月15日举行;2018年世界杯,将于6月14日至7月15日举行;
</i-notice-bar>
`;

export default code;