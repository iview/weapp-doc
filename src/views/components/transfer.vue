<template>
    <i-article>
        <article>
            <h1>Transfer 穿梭框</h1>
            <Anchor title="概述" h2></Anchor>
            <p>双栏穿梭选择框，常用于将多个项目从一边移动到另一边。</p>
            <Anchor title="说明" h2></Anchor>
            <p>Transfer 组件主要基于以下四个 API 来使用：</p>
            <ul>
                <li>
                    <code>:data</code>：总体数据，数组，每项为一个对象，且必须含有 <code>key</code> 值，组件基于此做索引。
                </li>
                <li>
                    <code>:target-keys</code>：目标列索引集合，数组，每项为数据的 key 值，Transfer 会将含有这些 key 值的数据筛选到右边。
                </li>
                <li>
                    <code>:render-format</code>：每行数据显示的格式函数，默认优先显示 label 值，没有时显示 key 值，可以自己组合出需要的数据格式。
                </li>
                <li>
                    <code>@on-change</code>：当点击转移按钮时，组件本身并不会转移数据，而是触发事件，由用户来操作数据。
                </li>
                <p>示例：</p>
                <i-code bg>{{ code.demo }}</i-code>
            </ul>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Transfer
                        :data="data1"
                        :target-keys="targetKeys1"
                        :render-format="render1"
                        @on-change="handleChange1"></Transfer>
                </div>
                <div slot="desc">
                    <p>基本用法，展示了 <code>data</code>、<code>target-keys</code>、每行的渲染函数 <code>render-format</code> 以及回调函数 <code>on-change</code> 的用法。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="搜索">
                <div slot="demo">
                    <Transfer
                        :data="data2"
                        :target-keys="targetKeys2"
                        filterable
                        @on-change="handleChange2"></Transfer>
                </div>
                <div slot="desc">
                    <p>通过设置属性 <code>filterable</code> 可以进行搜索，可以自定义搜索函数。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.search }}</i-code>
            </Demo>
            <Demo title="高级用法" vertical>
                <div slot="demo">
                    <Transfer
                        :data="data3"
                        :target-keys="targetKeys3"
                        :list-style="listStyle"
                        :render-format="render3"
                        :operations="['To left','To right']"
                        filterable
                        @on-change="handleChange3">
                        <div :style="{float: 'right', margin: '5px'}">
                            <Button type="ghost" size="small" @click="reloadMockData">Refresh</Button>
                        </div>
                    </Transfer>
                </div>
                <div slot="desc">
                    <p>穿梭框高级用法，可以自定义两列的宽高、操作文案，以及底部自定义操作，更多配置见 API。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.high }}</i-code>
            </Demo>
            <Demo title="自定义渲染行数据">
                <div slot="demo">
                    <Transfer
                        :data="data4"
                        :target-keys="targetKeys4"
                        :render-format="render4"
                        @on-change="handleChange4"></Transfer>
                </div>
                <div slot="desc">
                    <p>可以通过 <code>render-format</code> 来渲染复杂的数据。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.render }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Transfer props" h3></Anchor>
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
                            <td>数据源，其中的数据将会被渲染到左边一栏中，<code>targetKeys</code> 中指定的除外。</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>targetKeys</td>
                            <td>显示在右侧框数据的key集合</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>render-format</td>
                            <td>每行数据渲染函数，该函数的入参为 <code>data</code> 中的项</td>
                            <td>Function</td>
                            <td>默认显示label，没有时显示key</td>
                        </tr>
                        <tr>
                            <td>selected-keys</td>
                            <td>设置哪些项应该被选中</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>list-style</td>
                            <td>两个穿梭框的自定义样式</td>
                            <td>Object</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>titles</td>
                            <td>标题集合，顺序从左至右</td>
                            <td>Array</td>
                            <td>['源列表', '目的列表']</td>
                        </tr>
                        <tr>
                            <td>operations</td>
                            <td>操作文案集合，顺序从上至下</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>filterable</td>
                            <td>是否显示搜索框</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>filter-placeholder</td>
                            <td>搜索框的占位</td>
                            <td>String</td>
                            <td>请输入搜索内容</td>
                        </tr>
                        <tr>
                            <td>filter-method</td>
                            <td>自定义搜索函数，入参为 data 和 query，data 为项，query 为当前输入的搜索词</td>
                            <td>Function</td>
                            <td>默认搜索label</td>
                        </tr>
                        <tr>
                            <td>not-found-text</td>
                            <td>当列表为空时显示的内容</td>
                            <td>String</td>
                            <td>列表为空</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Transfer events" h3></Anchor>
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
                            <td>选项在两栏之间转移时的回调函数</td>
                            <td>targetKeys, direction, moveKeys</td>
                        </tr>
                        <tr>
                            <td>on-selected-change</td>
                            <td>选中项发生变化时触发</td>
                            <td>sourceSelectedKeys, targetSelectedKeys</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Transfer slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>无</td>
                            <td>自定义底部内容</td>
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
    import Code from '../../code/transfer';
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
                data1: this.getMockData(),
                targetKeys1: this.getTargetKeys(),
                data2: this.getMockData(),
                targetKeys2: this.getTargetKeys(),
                data3: this.getMockData(),
                targetKeys3: this.getTargetKeys(),
                listStyle: {
                    width: '250px',
                    height: '300px'
                },
                data4: this.getMockData(),
                targetKeys4: this.getTargetKeys()
            }
        },
        methods: {
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
                        .map(item => item.key);
            },
            render1 (item) {
                return item.label;
            },
            handleChange1 (newTargetKeys, direction, moveKeys) {
                console.log(newTargetKeys);
                console.log(direction);
                console.log(moveKeys);
                this.targetKeys1 = newTargetKeys;
            },
            handleChange2 (newTargetKeys) {
                this.targetKeys2 = newTargetKeys;
            },
            filterMethod (data, query) {
                return data.label.indexOf(query) > -1;
            },
            handleChange3 (newTargetKeys) {
                this.targetKeys3 = newTargetKeys;
            },
            render3 (item) {
                return item.label + ' - ' + item.description;
            },
            reloadMockData () {
                this.data3 = this.getMockData();
                this.targetKeys3 = this.getTargetKeys();
            },
            render4 (item) {
                return item.label + ' - ' + item.description;
            },
            handleChange4 (newTargetKeys) {
                this.targetKeys4 = newTargetKeys;
            }
        }
    }
</script>