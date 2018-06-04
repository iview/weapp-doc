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
            <h1>AutoComplete</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Autocomplete function of input field.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <AutoComplete
                        v-model="value1"
                        :data="data1"
                        @on-search="handleSearch1"
                        placeholder="input here"
                        style="width:200px"></AutoComplete>
                </div>
                <div slot="desc">
                    <p>Basic Usage, set datasource of AutoComplete with <code>data</code> property.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Customized">
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
                    <p>You could pass <code>Option</code> as slot of <code>AutoComplete</code>, instead of using data. This allows you to customize the display</p>
                </div>
                <i-code lang="html" slot="code">{{ code.slot }}</i-code>
            </Demo>
            <Demo title="Non-case-sensitive AutoComplete">
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
                    <p>A non-case-sensitive AutoComplete and how to use filter method.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.filter }}</i-code>
            </Demo>
            <Demo title="Lookup-Patterns">
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
                    <p>Fully customizable Option to display a complex layout.</p>
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
                        <th>Property</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Default</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>value</td>
                        <td>Bound value. Use v-model to enable a two-way binding.</td>
                        <td>String | Number</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>Data source for autocomplete.</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>clearable</td>
                        <td>Set AutoComplete to clear option.</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>Whether disabled select.</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>placeholder</td>
                        <td>Placeholder of input.</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>size</td>
                        <td>The size of Input. Optional value: <code>large</code>, <code>small</code>, <code>default</code> or leave empty.</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>Icon at the end of Input.</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>filter-method</td>
                        <td>Filter options by input, if function, filter options against it. The function will receive two arguments, <code>value</code> and <code>option</code>, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded.</td>
                        <td>Function | Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>placement</td>
                        <td>The direction of pop-ups. The value could be <code>bottom</code> or <code>top</code>, supports automatic recognition after 2.12.0</td>
                        <td>String</td>
                        <td>bottom</td>
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
                <Anchor title="AutoComplete events" h3></Anchor>
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
                        <td>Called when select an option or input value change, or value of input is changed.</td>
                        <td>value</td>
                    </tr>
                    <tr>
                        <td>on-select</td>
                        <td>Called when a option is selected. param is option's value and option instance.</td>
                        <td>value</td>
                    </tr>
                    <tr>
                        <td>on-search</td>
                        <td>Called when searching items.</td>
                        <td>query</td>
                    </tr>
                    <tr>
                        <td>on-focus</td>
                        <td>Called when focus.</td>
                        <td>event</td>
                    </tr>
                    <tr>
                        <td>on-blur</td>
                        <td>Called when blur.</td>
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