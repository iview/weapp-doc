<style scoped>
    .ivu-cascader{
        width: 200px;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Cascader</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Select from a set of associated data, such as province/city/district, company level, things classification.</p>
            <p>User will have better experience using Cascader than Select for they can complete their selection in one operation.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Cascader :data="data" v-model="value1"></Cascader>
                </div>
                <div slot="desc">
                    <p>Cascader has a strict requirement on data. Please follow the demo to use <code>data</code>. Each piece of data should contains at least two items: <code>value</code>, <code>label</code>. Its subset is called <code>children</code>.</p>
                    <p><code>value</code> is an array stored selected data's value, for example:  <code>['beijing', 'gugong']</code>. It will sorted by cascader's order. Use <code>v-model</code> to enable a two-way binding.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Default Value">
                <div slot="demo">
                    <Cascader :data="data" v-model="value2"></Cascader>
                </div>
                <div slot="desc">
                    <p>Let the component select default selected data on initialization by setting default <code>value</code> prop.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.value }}</i-code>
            </Demo>
            <Demo title="Move In and Spread">
                <div slot="demo">
                    <Cascader :data="data" trigger="hover"></Cascader>
                </div>
                <div slot="desc">
                    <p>Set <code>trigger</code> to <code>hover</code> to spread the subset when mouse hovers on.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.trigger }}</i-code>
            </Demo>
            <Demo title="Customize Display">
                <div slot="demo">
                    {{ text }}
                    <Cascader :data="data" @on-change="handleChange">
                        <a href="javascript:void(0)">选择</a>
                    </Cascader>
                </div>
                <div slot="desc">
                    <p>Customize display content by setting slot. You can not only use it on input box.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.slot }}</i-code>
            </Demo>
            <Demo title="Disable">
                <div slot="demo">
                    <Row>
                        <Col span="12">
                            <Cascader :data="data2" disabled></Cascader>
                        </Col>
                        <Col span="12">
                            <Cascader :data="data2"></Cascader>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>Disable the component by setting <code>disabled</code> prop.</p>
                    <p>Set <code>disabled: true</code> prop to a certain item can disable it.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="Change When Selected">
                <div slot="demo">
                    <Cascader :data="data" change-on-select></Cascader>
                </div>
                <div slot="desc">
                    <p>Set <code>change-on-select</code> to allow user select any level.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.select }}</i-code>
            </Demo>
            <Demo title="Customize Selected Items.">
                <div slot="demo">
                    <Cascader :data="data3" :render-format="format"></Cascader>
                </div>
                <div slot="desc">
                    <p>You can use <code>render-format</code> which accepts a function to customize displayed result.</p>
                    <p>The first argument <code>labels</code> is current selected label set, the second argument <code>selectedData</code> is current selected data set. You can make what you want to display by combining them.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.format }}</i-code>
            </Demo>
            <Demo title="Size">
                <div slot="demo">
                    <Cascader :data="data" size="large"></Cascader>
                    <br>
                    <Cascader :data="data"></Cascader>
                    <br>
                    <Cascader :data="data" size="small"></Cascader>
                </div>
                <div slot="desc">
                    <p>Set <code>size</code> prop to <code>large</code> or <code>small</code> to set the input box to large or small size. Default size is medium.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="Load Options Lazily">
                <div slot="demo">
                    <Cascader :data="data4" :load-data="loadData"></Cascader>
                </div>
                <div slot="desc">
                    <p>Load options lazily with <code>load-data</code>. You need add <code>loading</code> to your data to show whether it is loading.</p>
                    <p>The second arguments of load-data is callback function, if you run it, the children options will be opened.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.loadData }}</i-code>
            </Demo>
            <Demo title="Filterable">
                <div slot="demo">
                    <Cascader v-model="value3" :data="data" filterable></Cascader>
                </div>
                <div slot="desc">
                    <p>Search and select options directly with <code>filterable</code>.</p>
                    <p>Now, it doesn't support search on server.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.filterable }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Cascader props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>data</td>
                            <td>Optional data source, the format is shown on the demos above.</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>Selected item's data, the format is shown on the demos above.</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>render-format</td>
                            <td>Customize display format by sending a function to this property. It will be called after selection.</td>
                            <td>Function</td>
                            <td>label => label.join(' / ')</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Disable the selector or not.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>clearable</td>
                            <td>Support clear operation or not.</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>

                        <tr>
                            <td>placeholder</td>
                            <td>Input box placeholder.</td>
                            <td>String</td>
                            <td>Select</td>
                        </tr>
                        <tr>
                            <td>trigger</td>
                            <td>The way subset spreading. Optional value: <code>click</code> or <code>hover</code></td>
                            <td>String</td>
                            <td>click</td>
                        </tr>
                        <tr>
                            <td>change-on-select</td>
                            <td>When it's set to true, change will occur when selecting each level of the data set. For more details, see demos above.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>The size of the input box, Optional value: <code>large</code> or <code>small</code> or leave blank.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>load-data</td>
                            <td>Load options lazily, you need add loading to data.</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>filterable</td>
                            <td>Whether show search input.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>not-found-text</td>
                            <td>Specify content to show when no result matches.</td>
                            <td>String</td>
                            <td>Not Found</td>
                        </tr>
                        <tr>
                            <td>transfer</td>
                            <td>Whether to append the layer in body. When used in Tabs or a fixed Table column, suggests adding this property, it will not be affected by the parent style, resulting in better results.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>element-id</td>
                            <td>Set the <code>id</code> for the input element, more info can be found in Form.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Cascader events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Description</th>
                            <th>Return Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-change</td>
                            <td>Callback function after selection. value is the selected item's value. selectedData is the detail data of the selected item./td>
                            <td>value, selectedData</td>
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
    import Code from '../../code/cascader';
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
                text: '未选择',
                value1: [],
                value2: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }],
                data2: [{
                    value: 'zhejiang',
                    label: '浙江',
                    children: [{
                        value: 'hangzhou',
                        label: '杭州',
                        children: [{
                            value: 'xihu',
                            label: '西湖'
                        }]
                    }]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    disabled: true,
                    children: [{
                        value: 'nanjing',
                        label: '南京',
                        children: [{
                            value: 'zhonghuamen',
                            label: '中华门'
                        }]
                    }]
                }],
                data3: [{
                    value: 'zhejiang',
                    label: '浙江',
                    children: [{
                        value: 'hangzhou',
                        label: '杭州',
                        children: [{
                            value: 'xihu',
                            label: '西湖',
                            code: 310000
                        }]
                    }]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [{
                        value: 'nanjing',
                        label: '南京',
                        children: [{
                            value: 'zhonghuamen',
                            label: '中华门',
                            code: 210000
                        }]
                    }]
                }],
                data4: [
                    {
                        value: 'beijing',
                        label: '北京',
                        children: [],
                        loading: false
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州',
                        children: [],
                        loading:false
                    }
                ],
                value3: []
            }
        },
        methods: {
            format (labels, selectedData) {
                const index = labels.length - 1;
                const data = selectedData[index] || false;
                if (data && data.code) {
                    return labels[index] + ' - ' + data.code;
                }
                return labels[index];
            },
            handleChange (value, selectedData) {
                this.text = selectedData.map(o => o.label).join(', ');
            },
            loadData (item, callback) {
                item.loading = true;
                setTimeout(() => {
                    if (item.value === 'beijing') {
                        item.children = [
                            {
                                value: 'talkingdata',
                                label: 'TalkingData'
                            },
                            {
                                value: 'baidu',
                                label: '百度'
                            },
                            {
                                value: 'sina',
                                label: '新浪'
                            }
                        ];
                    } else if (item.value === 'hangzhou') {
                        item.children = [
                            {
                                value: 'ali',
                                label: '阿里巴巴'
                            },
                            {
                                value: '163',
                                label: '网易'
                            }
                        ];
                    }
                    item.loading = false;
                    callback();
                }, 1000);
            }
        }
    }
</script>