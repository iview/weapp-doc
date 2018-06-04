let code = {};

code.import = `
"usingComponents": {
    "i-row": "../../dist/row/index",
    "i-col": "../../dist/col/index"
}
`;
code.usage = `
<i-row>
    <i-col span="8" i-class="col-class">col-8</i-col>
    <i-col span="8" i-class="col-class">col-8</i-col>
    <i-col span="8" i-class="col-class">col-8</i-col>
</i-row>
`;

export default code;