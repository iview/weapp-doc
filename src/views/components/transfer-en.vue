<template>
    <i-article>
        <article>
            <h1>Transfer</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Two-Column Transfer select dialog. It's mainly used to transfer items from one side to the other.</p>
            <Anchor title="Explanation" h2></Anchor>
            <p>Transfer has 4 core APIs:</p>
            <ul>
                <li>
                    <code>:data</code>: Overall data / Array / Each item is an object which must contain a <code>key</code> prop. The component does the query operation based on this prop.
                </li>
                <li>
                    <code>:target-keys</code>: Target index / Array / Each item is the key of the data item. Transfer will filter data with these keys and move them to the right.
                </li>
                <li>
                    <code>:render-format</code>: The format function controlling how to display each row of data. label's value will be displayed by default. If there is no label, key's value will be displayed. You can customize your own data format.
                </li>
                <li>
                    <code>@on-change</code>: Emitted when clicking transfer button. Transfer won't transfer data itself. You should handle it by yourself.
                </li>
                <p>Demo:</p>
                <i-code bg>{{ code.demo }}</i-code>
            </ul>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Transfer
                        :data="data1"
                        :target-keys="targetKeys1"
                        :render-format="render1"
                        @on-change="handleChange1"></Transfer>
                </div>
                <div slot="desc">
                    <p>Basic usage. It shows the usage of <code>data</code>, <code>target-keys</code>, render function for each row - <code>render-format</code> and callback function for <code>on-change</code> event.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Search">
                <div slot="demo">
                    <Transfer
                        :data="data2"
                        :target-keys="targetKeys2"
                        filterable
                        @on-change="handleChange2"></Transfer>
                </div>
                <div slot="desc">
                    <p>Set <code>filterable</code> prop to enable filter. You can customize filter function.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.search }}</i-code>
            </Demo>
            <Demo title="Advanced Usage" vertical>
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
                    <p>Advanced usage of Transfer. You can customize the width and the height of the column, change transfer button's text, or add custom operations at the bottom. Details on API Doc.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.high }}</i-code>
            </Demo>
            <Demo title="Custom Row Data Rendering">
                <div slot="demo">
                    <Transfer
                        :data="data4"
                        :target-keys="targetKeys4"
                        :render-format="render4"
                        @on-change="handleChange4"></Transfer>
                </div>
                <div slot="desc">
                    <p>You can render complex data by setting <code>render-format</code>.</p>
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
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>data</td>
                            <td>Source data. Except for those in <code>targetKeys</code>, data will be rendered into the left column.</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>targetKeys</td>
                            <td>The keys of data displayed in the right column.</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>render-format</td>
                            <td>Render function for each row. It accepts items in <code>data</code>.</td>
                            <td>Function</td>
                            <td>Default is label. If no label, key will be displayed.</td>
                        </tr>
                        <tr>
                            <td>selected-keys</td>
                            <td>Which items should be selected.</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>list-style</td>
                            <td>Custom style for columns.</td>
                            <td>Object</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>titles</td>
                            <td>Title text. Order: left-right</td>
                            <td>Array</td>
                            <td>['', '']</td>
                        </tr>
                        <tr>
                            <td>operations</td>
                            <td>Transfer button's text. Order: top-down</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>filterable</td>
                            <td>Show the filter or not.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>filter-placeholder</td>
                            <td>Placeholder of the filter.</td>
                            <td>String</td>
                            <td>Search here</td>
                        </tr>
                        <tr>
                            <td>filter-method</td>
                            <td>Custom filter function. It accepts 3 arguments: data - raw data, query - keyword.</td>
                            <td>Function</td>
                            <td>It searches label by default.</td>
                        </tr>
                        <tr>
                            <td>not-found-text</td>
                            <td>Tip text when list is empty.</td>
                            <td>String</td>
                            <td>Not found</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Transfer events" h3></Anchor>
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
                            <td>Emitted when selection is transfered.</td>
                            <td>targetKeys, direction, moveKeys</td>
                        </tr>
                        <tr>
                            <td>on-selected-change</td>
                            <td>Triggered when the selected item changes.</td>
                            <td>sourceSelectedKeys, targetSelectedKeys</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Transfer slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>-</td>
                            <td>Custom footer.</td>
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