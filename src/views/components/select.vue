<style lang="less">
    .ivu-article .ivu-select li{
        margin-bottom: 0;
    }
    .ivu-article .ivu-select ul{
        padding-left: 0 !important;
        list-style-type: none;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Select 选择器</h1>
            <Anchor title="概述" h2></Anchor>
            <p>使用模拟的增强下拉选择器来代替浏览器原生的选择器。</p>
            <p>选择器支持单选、多选、搜索，以及键盘快捷操作。</p>
            <Alert show-icon style="margin-top: 16px">注意：非 template/render 模式下，需使用 <code>i-select</code>、<code>i-option</code>。</Alert>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Select v-model="model1" style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <span class="demo-data">{{ model1 }}</span>
                </div>
                <div slot="desc">
                    <p>基本用法。可以使用 v-model 双向绑定数据。</p>
                    <p>单选时，value 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据<code>Option</code>的<code>value</code>来返回选中的数据。</p>
                    <p>可以给<code>Select</code>添加 style 样式，比如宽度。</p>
                    <p>在展开选择器后，可以使用键盘的<code>up</code>和<code>down</code>快速上下选择，按下<code>Enter</code>选择，按下<code>Esc</code>收起选择器。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="尺寸">
                <div slot="demo">
                    <Select v-model="model2" size="small" style="width:100px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <Select v-model="model3" style="width:100px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <Select v-model="model4" size="large" style="width:100px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </div>
                <div slot="desc">
                    <p>通过设置<code>size</code>属性为<code>large</code>和<code>small</code>将输入框设置为大和小尺寸，不设置为默认（中）尺寸。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="禁用">
                <div slot="demo">
                    <Select v-model="model5" disabled style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <Select v-model="model6" style="width:200px">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai" disabled>London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </div>
                <div slot="desc">
                    <p>通过给<code>Select</code>设置属性<code>disabled</code>禁用整个选择器。</p>
                    <p>通过给<code>Option</code>设置属性<code>disabled</code>可以禁用当前项。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="可清空">
                <div slot="demo">
                    <Select v-model="model8" clearable style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <span class="demo-data">{{ model8 }}</span>
                </div>
                <div slot="desc">
                    <p>通过设置属性<code>clearable</code>可以清空已选项，仅适用于单选模式。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.clearable }}</i-code>
            </Demo>
            <Demo title="分组">
                <div slot="demo">
                    <Select v-model="model7" style="width:200px">
                        <OptionGroup label="Hot Cities">
                            <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </OptionGroup>
                        <OptionGroup label="Other Cities">
                            <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </OptionGroup>
                    </Select>
                    <span class="demo-data">{{ model7 }}</span>
                </div>
                <div slot="desc">
                    <p>使用<code>OptionGroup</code>可将选项进行分组。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.group }}</i-code>
            </Demo>
            <Demo title="自定义模板">
                <div slot="demo">
                    <Select v-model="model9" style="width:200px">
                        <Option value="New York" label="New York">
                            <span>New York</span>
                            <span style="float:right;color:#ccc">America</span>
                        </Option>
                        <Option value="London" label="London">
                            <span>London</span>
                            <span style="float:right;color:#ccc">U.K.</span>
                        </Option>
                        <Option value="Sydney" label="Sydney">
                            <span>Sydney</span>
                            <span style="float:right;color:#ccc">Australian</span>
                        </Option>
                    </Select>
                    <span class="demo-data">{{ model9 }}</span>
                </div>
                <div slot="desc">
                    <p>对选项内容可以进行自定义。注意在<code>Option</code>中使用<code>label</code>属性，可以让选择器优先读取该属性的值以显示，否则选中时显示的内容会和自定义的一样，这往往不是我们想要的。</p>
                    <p>对于选项显示内容的逻辑：优先显示 slot 内容，如果没有定义 slot，则显示<code>label</code>的值，如果没有设置 label，则显示<code>value</code>的值。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.label }}</i-code>
            </Demo>
            <Demo title="多选">
                <div slot="demo">
                    <p class="demo-data">{{ model10 }}</p>
                    <Select v-model="model10" multiple style="width:260px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </div>
                <div slot="desc">
                    <p>通过设置属性<code>multiple</code>可以开启多选模式。多选模式下，model 接受数组类型的数据，所返回的也是数组。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.multiple }}</i-code>
            </Demo>
            <Demo title="可搜索">
                <div slot="demo">
                    <Row>
                        <Col span="12" style="padding-right:10px">
                            <Select v-model="model11" filterable>
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </Col>
                        <Col span="12">
                            <Select v-model="model12" filterable multiple>
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>通过设置属性<code>filterable</code>可以开启搜索模式。单选和多选都支持搜索模式。多选搜索时，可以使用键盘<code>Delete</code>快捷删除最后一个已选项。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.filterable }}</i-code>
            </Demo>
            <Demo title="远程搜索">
                <div slot="demo">
                    <Row>
                        <Col span="12" style="padding-right:10px">
                            <Select
                                v-model="model13"
                                filterable
                                remote
                                :remote-method="remoteMethod1"
                                :loading="loading1">
                                <Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>
                            </Select>
                        </Col>
                        <Col span="12">
                        <Select
                            v-model="model14"
                            multiple
                            filterable
                            remote
                            :remote-method="remoteMethod2"
                            :loading="loading2">
                            <Option v-for="(option, index) in options2" :value="option.value" :key="index">{{option.label}}</Option>
                        </Select>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>远程搜索需同时设置 <code>filterable</code>、<code>remote</code>、<code>remote-method</code>、<code>loading</code> 四个 props，其中 loading 用于控制是否正在搜索中，remote-method 是远程搜索的方法。</p>
                    <p>注意：需要给 Option 设置 key。</p>
                    <p>设置初始显示值，需设置 <code>label</code> 属性。</p>
                    <p>本例为美国州名，尝试输入一些字母。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.remote }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Select props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>value</td>
                            <td>指定选中项目的 value 值，可以使用 v-model 双向绑定数据。单选时只接受 String 或 Number，多选时只接受 Array</td>
                            <td>String | Number | Array</td>
                            <td>空</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>是否支持多选</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>clearable</td>
                            <td>是否可以清空选项，只在单选时有效</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>filterable</td>
                            <td>是否支持搜索</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>remote</td>
                            <td>是否使用远程搜索</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>remote-method</td>
                            <td>远程搜索的方法</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>loading</td>
                            <td>当前是否正在远程搜索</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>loading-text</td>
                            <td>远程搜索中的文字提示</td>
                            <td>String</td>
                            <td>加载中</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>仅在 remote 模式下，初始化时使用。因为仅通过 value 无法得知选项的 label，需手动设置。</td>
                            <td>String | Number | Array</td>
                            <td>空</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>选择框大小，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不填</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>选择框默认文字</td>
                            <td>String</td>
                            <td>请选择</td>
                        </tr>
                        <tr>
                            <td>not-found-text</td>
                            <td>当下拉列表为空时显示的内容</td>
                            <td>String</td>
                            <td>无匹配数据</td>
                        </tr>
                        <tr>
                            <td>label-in-value</td>
                            <td>在返回选项时，是否将 label 和 value 一并返回，默认只返回 value</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>placement</td>
                            <td>弹窗的展开方向，可选值为 <code>bottom</code> 和 <code>top</code>，2.12.0 版本开始支持自动识别</td>
                            <td>String</td>
                            <td>bottom</td>
                        </tr>
                        <tr>
                            <td>transfer</td>
                            <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>element-id</td>
                            <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Select events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>事件名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>on-change</td>
                            <td>选中的<code>Option</code>变化时触发，默认返回 value，如需返回 label，详见 label-in-value 属性</td>
                            <td>当前选中项</td>
                        </tr>
                        <tr>
                            <td>on-query-change</td>
                            <td>搜索词改变时触发</td>
                            <td>query</td>
                        </tr>
                        <tr>
                            <td>on-clear</td>
                            <td>点击清空按钮时触发</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>on-open-change</td>
                            <td>下拉框展开或收起时触发</td>
                            <td>true / false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Select methods" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>方法名</th>
                            <th>说明</th>
                            <th>参数</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>setQuery</td>
                            <td>设置搜索词，为空时清空，仅在 <code>filterable="true"</code> 时有效</td>
                            <td>query</td>
                        </tr>
                        <tr>
                            <td>clearSingleSelect</td>
                            <td>清空单选项，仅在 <code>clearable="true"</code> 时有效</td>
                            <td>无</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Option props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>value</td>
                            <td>选项值，默认根据此属性值进行筛选，必填</td>
                            <td>String | Number</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>选项显示的内容，默认会读取 slot，无 slot 时，优先读取该 label 值，无 label 时，读取 value。当选中时，选择器会显示 label 为已选文案。大部分情况不需要配置此项，直接写入 slot 即可，在自定义选项时，该属性非常有用。</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用当前项</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="OptionGroup props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>label</td>
                            <td>分组的组名</td>
                            <td>String</td>
                            <td>空</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/select';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor
        },
        data () {
            return {
                code: Code,
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                cityList1: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    }
                ],
                cityList2: [
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: '',
                model2: '',
                model3: '',
                model4: '',
                model5: '',
                model6: '',
                model7: '',
                model8: '',
                model9: '',
                model10: [],
                model11: '',
                model12: [],
                list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'],
                model13: '',
                loading1: false,
                options1: [],
                model14: [],
                loading2: false,
                options2: []
            }
        },
        methods: {
            remoteMethod1 (query) {
                if (query !== '') {
                    this.loading1 = true;
                    setTimeout(() => {
                        this.loading1 = false;
                        const list = this.list.map(item => {
                            return {
                                value: item,
                                label: item
                            };
                        });
                        this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
                    }, 200);
                } else {
                    this.options1 = [];
                }
            },
            remoteMethod2 (query) {
                if (query !== '') {
                    this.loading2 = true;
                    setTimeout(() => {
                        this.loading2 = false;
                        const list = this.list.map(item => {
                            return {
                                value: item,
                                label: item
                            };
                        });
                        this.options2 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
                    }, 200);
                } else {
                    this.options2 = [];
                }
            }
        }
    }
</script>