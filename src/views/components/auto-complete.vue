<style>
    .demo-auto-complete-item{
        padding: 4px 0;
        border-bottom: 1px solid #F6F6F6;
    }
    .demo-auto-complete-group{
        font-size: 12px;
        padding: 4px 6px;
    }
    .demo-auto-complete-group span{
        color: #666;
        font-weight: bold;
    }
    .demo-auto-complete-group a{
        float: right;
    }
    .demo-auto-complete-count{
        float: right;
        color: #999;
    }
    .demo-auto-complete-more{
        display: block;
        margin: 0 auto;
        padding: 4px;
        text-align: center;
        font-size: 12px;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>AutoComplete 自动完成</h1>
            <Anchor title="概述" h2></Anchor>
            <p>输入框自动完成功能。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <AutoComplete
                        v-model="value1"
                        :data="data1"
                        @on-search="handleSearch1"
                        placeholder="input here"
                        style="width:200px"></AutoComplete>
                </div>
                <div slot="desc">
                    <p>基本用法，通过 data 设置自动完成的数据源。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="自定义选项">
                <div slot="demo">
                    <AutoComplete
                        v-model="value2"
                        @on-search="handleSearch2"
                        placeholder="input here"
                        style="width:200px">
                        <Option v-for="item in data2" :value="item" :key="item">{{ item }}</Option>
                    </AutoComplete>
                </div>
                <div slot="desc">
                    <p>除了使用 data，还可以直接传入 <code>Option</code> 组件作为 slot 使用，这样可以自定义显示效果。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.slot }}</i-code>
            </Demo>
            <Demo title="不区分大小写">
                <div slot="demo">
                    <AutoComplete
                        v-model="value3"
                        :data="data3"
                        :filter-method="filterMethod"
                        placeholder="input here"
                        style="width:200px">
                    </AutoComplete>
                </div>
                <div slot="desc">
                    <p>不区分大小写的 AutoComplete，及过滤的用法。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.filter }}</i-code>
            </Demo>
            <Demo title="查询模式">
                <div slot="demo">
                    <AutoComplete
                        v-model="value4"
                        icon="ios-search"
                        placeholder="input here"
                        style="width:300px">
                        <div class="demo-auto-complete-item" v-for="item in data4">
                            <div class="demo-auto-complete-group">
                                <span>{{ item.title }}</span>
                                <a href="https://www.google.com/search?q=iView" target="_blank">更多</a>
                            </div>
                            <Option v-for="option in item.children" :value="option.title" :key="option.title">
                                <span class="demo-auto-complete-title">{{ option.title }}</span>
                                <span class="demo-auto-complete-count">{{ option.count }} 人关注</span>
                            </Option>
                        </div>
                        <a href="https://www.google.com/search?q=iView" target="_blank" class="demo-auto-complete-more">查看所有结果</a>
                    </AutoComplete>
                </div>
                <div slot="desc">
                    <p>完全自定义 Option，显示复杂的布局。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.search }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="AutoComplete props" h3></Anchor>
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
                            <td>绑定的值，可使用 v-model 双向绑定</td>
                            <td>String | Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>data</td>
                            <td>自动完成的数据源</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>clearable</td>
                            <td>是否可以清空选项</td>
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
                            <td>placeholder</td>
                            <td>占位文本</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>输入框尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>输入框尾部图标</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>filter-method</td>
                            <td>是否根据输入项进行筛选。当其为一个函数时，会接收 <code>value</code> 和 <code>option</code> 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false</td>
                            <td>Function | Boolean</td>
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
                <Anchor title="AutoComplete events" h3></Anchor>
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
                            <td>选中 option，或 input 的 value 变化时，调用此函数</td>
                            <td>value</td>
                        </tr>
                        <tr>
                            <td>on-select</td>
                            <td>被选中时调用，参数为选中项的 value 值</td>
                            <td>value</td>
                        </tr>
                        <tr>
                            <td>on-search</td>
                            <td>搜索补全项的时候调用</td>
                            <td>query</td>
                        </tr>
                        <tr>
                            <td>on-focus</td>
                            <td>聚焦时触发</td>
                            <td>event</td>
                        </tr>
                        <tr>
                            <td>on-blur</td>
                            <td>失焦时触发</td>
                            <td>event</td>
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
    import Code from '../../code/auto-complete';
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
                value1: '',
                data1: [],
                value2: '',
                data2: [],
                value3: '',
                data3: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive'],
                value4: '',
                data4: [
                    {
                        title: '话题',
                        children: [
                            {
                                title: 'iView',
                                count: 10000,

                            },
                            {
                                title: 'iView UI',
                                count: 10600,

                            }
                        ]
                    },
                    {
                        title: '问题',
                        children: [
                            {
                                title: 'iView UI 有多好',
                                count: 60100,

                            },
                            {
                                title: 'iView 是啥',
                                count: 30010,

                            }
                        ]
                    },
                    {
                        title: '文章',
                        children: [
                            {
                                title: 'iView 是一个设计语言',
                                count: 100000,

                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            handleSearch1 (value) {
                this.data1 = !value ? [] : [
                    value,
                    value + value,
                    value + value + value
                ];
            },
            handleSearch2 (value) {
                this.data2 = !value || value.indexOf('@') >= 0 ? [] : [
                    value + '@qq.com',
                    value + '@sina.com',
                    value + '@163.com'
                ];
            },
            filterMethod (value, option) {
                return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
            }
        }
    }
</script>