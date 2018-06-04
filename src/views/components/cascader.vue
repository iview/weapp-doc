<style scoped>
    .ivu-cascader{
        width: 200px;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Cascader 级联选择</h1>
            <Anchor title="概述" h2></Anchor>
            <p>从一组相关联的数据集合中进行选择，常用于省市区、公司级层、事务分类等。</p>
            <p>相比 Select 组件，可以一次性完成选择，体验更好。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Cascader :data="data" v-model="value1"></Cascader>
                </div>
                <div slot="desc">
                    <p>级联选择对数据有较严格要求，请参照示例的格式使用<code>data</code>，每项数据至少包含 <code>value</code>、<code>label</code> 两项，子集为 <code>children</code>，以此类推。</p>
                    <p><code>value</code> 为当前选择的数据的 value 值的数组，比如 <code>['beijing', 'gugong']</code> ，按照级联顺序依次排序，使用 <code>v-model</code> 进行双向绑定。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="默认值">
                <div slot="demo">
                    <Cascader :data="data" v-model="value2"></Cascader>
                </div>
                <div slot="desc">
                    <p>指定 <code>value</code> 默认值，组件会在初始化时选定数据。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.value }}</i-code>
            </Demo>
            <Demo title="移入展开">
                <div slot="demo">
                    <Cascader :data="data" trigger="hover"></Cascader>
                </div>
                <div slot="desc">
                    <p>设置属性 <code>trigger</code> 为 <code>hover</code>，当鼠标悬停时就会展开子集。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.trigger }}</i-code>
            </Demo>
            <Demo title="自定义显示">
                <div slot="demo">
                    {{ text }}
                    <Cascader :data="data" @on-change="handleChange">
                        <a href="javascript:void(0)">选择</a>
                    </Cascader>
                </div>
                <div slot="desc">
                    <p>通过设置 slot 可以自定义显示内容，不局限于输入框。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.slot }}</i-code>
            </Demo>
            <Demo title="禁用">
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
                    <p>设置属性 <code>disabled</code> 可以禁用组件。</p>
                    <p>给某项数据设置 <code>disabled: true</code> 可以禁用某一项。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="选择即改变">
                <div slot="demo">
                    <Cascader :data="data" change-on-select></Cascader>
                </div>
                <div slot="desc">
                    <p>设置属性 <code>change-on-select</code> 点任何一级都可以选择。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.select }}</i-code>
            </Demo>
            <Demo title="自定义已选项">
                <div slot="demo">
                    <Cascader :data="data3" :render-format="format"></Cascader>
                </div>
                <div slot="desc">
                    <p>对于显示的结果，可以通过 <code>render-format</code> 接收一个函数来自定义。</p>
                    <p>其中第一个参数 <code>labels</code> 是当前选择的label的集合，第二个参数 <code>selectedData</code> 是当前选择的数据集合，可以利用它们组合出你想要显示的内容。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.format }}</i-code>
            </Demo>
            <Demo title="尺寸">
                <div slot="demo">
                    <Cascader :data="data" size="large"></Cascader>
                    <br>
                    <Cascader :data="data"></Cascader>
                    <br>
                    <Cascader :data="data" size="small"></Cascader>
                </div>
                <div slot="desc">
                    <p>通过设置<code>size</code>属性为<code>large</code>和<code>small</code>将输入框设置为大和小尺寸，不设置为默认（中）尺寸。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="动态加载选项">
                <div slot="demo">
                    <Cascader :data="data4" :load-data="loadData"></Cascader>
                </div>
                <div slot="desc">
                    <p>使用 <code>load-data</code> 属性可以异步加载子选项，需要给数据增加 <code>loading</code> 来标识当前是否在加载中。</p>
                    <p>load-data 的第二个参数为回调，如果执行，则会自动展开当前项的子列表。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.loadData }}</i-code>
            </Demo>
            <Demo title="搜索">
                <div slot="demo">
                    <Cascader v-model="value3" :data="data" filterable></Cascader>
                </div>
                <div slot="desc">
                    <p>使用属性 <code>filterable</code> 可直接搜索选项并选择。</p>
                    <p>暂不支持服务端搜索。</p>
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
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>data</td>
                            <td>可选项的数据源，格式参照示例说明</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>当前已选项的数据，格式参照示例说明</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>render-format</td>
                            <td>选择后展示的函数，用于自定义显示格式</td>
                            <td>Function</td>
                            <td>label => label.join(' / ')</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用选择器</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>clearable</td>
                            <td>是否支持清除</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>

                        <tr>
                            <td>placeholder</td>
                            <td>输入框占位符</td>
                            <td>String</td>
                            <td>请选择</td>
                        </tr>
                        <tr>
                            <td>trigger</td>
                            <td>次级菜单展开方式，可选值为 <code>click</code> 或 <code>hover</code></td>
                            <td>String</td>
                            <td>click</td>
                        </tr>
                        <tr>
                            <td>change-on-select</td>
                            <td>当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的示例</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>输入框大小，可选值为<code>large</code>和<code>small</code>或者不填</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>load-data</td>
                            <td>动态获取数据，数据源需标识 loading</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>filterable</td>
                            <td>是否支持搜索</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>not-found-text</td>
                            <td>当搜索列表为空时显示的内容</td>
                            <td>String</td>
                            <td>无匹配数据</td>
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
                <Anchor title="Cascader events" h3></Anchor>
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
                            <td>选择完成后的回调，返回值 value 即已选值 value，selectedData 为已选项的具体数据</td>
                            <td>value, selectedData</td>
                        </tr>
                        <tr>
                            <td>on-visible-change</td>
                            <td>展开和关闭弹窗时触发</td>
                            <td>显示状态，Boolean</td>
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