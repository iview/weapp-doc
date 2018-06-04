<style>
    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content {
        height: 120px;
        margin-top: -16px;
    }

    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
        background: #fff;
        padding: 16px;
    }

    .demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
        border-color: transparent;
    }

    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
        border-color: #fff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
        border-radius: 0;
        background: #fff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
        border-top: 1px solid #3399ff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #3399ff;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Tabs</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Tabs make it easy to switch between different views.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Tabs value="name1">
                        <TabPane label="标签一" name="name1">标签一的内容</TabPane>
                        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
                        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
                    </Tabs>
                </div>
                <div slot="desc">
                    <p><code>Value</code> corresponds to the name of the <code>TabPane</code>, it is used to identify which item is currently active. The name defaults from 0 and activates the first item by default. You can use <code>v-model</code> to enable a two-way bingding on data.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Disabled">
                <div slot="demo">
                    <Tabs>
                        <TabPane label="标签一">标签一的内容</TabPane>
                        <TabPane label="标签二" disabled>标签二的内容</TabPane>
                        <TabPane label="标签三">标签三的内容</TabPane>
                    </Tabs>
                </div>
                <div slot="desc">
                    <p>Disabled a tab.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="Icon">
                <div slot="demo">
                    <Tabs>
                        <TabPane label="macOS" icon="social-apple">标签一的内容</TabPane>
                        <TabPane label="Windows" icon="social-windows">标签二的内容</TabPane>
                        <TabPane label="Linux" icon="social-tux">标签三的内容</TabPane>
                    </Tabs>
                </div>
                <div slot="desc">
                    <p>The Tab with Icon.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.icon }}</i-code>
            </Demo>
            <Demo title="Mini tab">
                <div slot="demo">
                    <Tabs size="small">
                        <TabPane label="标签一">标签一的内容</TabPane>
                        <TabPane label="标签二">标签二的内容</TabPane>
                        <TabPane label="标签三">标签三的内容</TabPane>
                    </Tabs>
                </div>
                <div slot="desc">
                    <p>Set the property <code></code> to <code>small</code> can be displayed as a mini-type, only effective when the <code>type</code> is <code>line</code>.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.mini }}</i-code>
            </Demo>
            <Demo title="Card type tab">
                <div slot="demo">
                    <Tabs type="card">
                        <TabPane label="标签一">标签一的内容</TabPane>
                        <TabPane label="标签二">标签二的内容</TabPane>
                        <TabPane label="标签三">标签三的内容</TabPane>
                    </Tabs>
                </div>
                <div slot="desc">
                    <p>Set the property <code>type</code> to <code>card</code> can display the card style, commonly used at the top of the container.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.card }}</i-code>
            </Demo>
            <Demo title="Closable">
                <div slot="demo">
                    <Tabs type="card" closable @on-tab-remove="handleTabRemove">
                        <TabPane label="标签一" v-if="tab0">标签一的内容</TabPane>
                        <TabPane label="标签二" v-if="tab1">标签二的内容</TabPane>
                        <TabPane label="标签三" v-if="tab2">标签三的内容</TabPane>
                    </Tabs>
                </div>
                <div slot="desc">
                    <p>You can close an tab by setting the property <code>closable</code>, only if the <code>type</code> is <code>card</code>.</p>
                    <p>The tab should be closed manually in conjunction with the <code>on-tab-remove</code> event.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.closable }}</i-code>
            </Demo>
            <Demo title="Custom tab">
                <div slot="demo">
                    <Tabs value="name1">
                        <TabPane :label="label" name="name1">标签一的内容</TabPane>
                        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
                        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
                    </Tabs>
                </div>
                <div slot="desc">
                    <p>You can customize the contents of the tab by setting label as Render function.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.render }}</i-code>
            </Demo>
            <Demo title="Extra content">
                <div slot="demo">
                    <Tabs type="card">
                        <TabPane v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签{{ tab }}</TabPane>
                        <Button type="ghost" @click="handleTabsAdd" size="small" slot="extra">增加</Button>
                    </Tabs>
                </div>
                <div slot="desc">
                    <p>You can add extra actions to the right of Tabs by adding the slot <code>extra</code>.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.extra }}</i-code>
            </Demo>
            <Demo title="Do not use animation">
                <div slot="demo">
                    <Tabs :animated="false">
                        <TabPane label="标签一">标签一的内容</TabPane>
                        <TabPane label="标签二">标签二的内容</TabPane>
                        <TabPane label="标签三">标签三的内容</TabPane>
                    </Tabs>
                </div>
                <div slot="desc">
                    <p>Animating can be disabled by setting the property <code>animated</code> to <code>false</code>.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.animated }}</i-code>
            </Demo>
            <Demo title="Other styles" vertical hide-code>
                <div slot="demo">
                    <Row :gutter="32">
                        <Col span="12" class="demo-tabs-style1" style="background: #e3e8ee;padding:16px;">
                            <Tabs type="card">
                                <TabPane label="标签一">标签一的内容</TabPane>
                                <TabPane label="标签二">标签二的内容</TabPane>
                                <TabPane label="标签三">标签三的内容</TabPane>
                            </Tabs>
                        </Col>
                        <Col span="12" class="demo-tabs-style2">
                            <Tabs type="card">
                                <TabPane label="标签一">标签一的内容</TabPane>
                                <TabPane label="标签二">标签二的内容</TabPane>
                                <TabPane label="标签三">标签三的内容</TabPane>
                            </Tabs>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>Custom UI, needs to override styles.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.style }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Tabs props" h3></Anchor>
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
                            <td>Activates the name of the tab panel. Use v-model to enable a two-way binding.</td>
                            <td>String</td>
                            <td>Defaults to the first name</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>The basic style of the tab，Optional value: <code>line</code> and <code>card</code>.</td>
                            <td>String</td>
                            <td>line</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>Size, Optional value:  <code>default</code> and <code>small</code>, only effective when the <code>type</code> is <code>line</code>.</td>
                            <td>String</td>
                            <td>default</td>
                        </tr>
                        <tr>
                            <td>closable</td>
                            <td>Whether to close the tab, only effective when the <code>type</code> is <code>card</code>.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>animated</td>
                            <td>Whether to use the CSS3 animation.</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>capture-focus</td>
                            <td>Whether form components in Tabs automatically get focus.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Tabs events" h3></Anchor>
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
                            <td>on-click</td>
                            <td>Emitted when tab is clicked.</td>
                            <td>name</td>
                        </tr>
                        <tr>
                            <td>on-tab-remove</td>
                            <td>Emitted when tab is closed.</td>
                            <td>name</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Tabs slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>extra</td>
                            <td>Extra content.</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="TabPane props" h3></Anchor>
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
                            <td>name</td>
                            <td>Used to identify the current panel, corresponding to the value, the default for its index.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>The display text of the tab, supports the Render function.</td>
                            <td>String | Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>Icon of tab.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Whether to disable the tab.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>closable</td>
                            <td>Whether to close the tab，only effective when <code>type="card"</code>.</td>
                            <td>Boolean</td>
                            <td>null</td>
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
    import Code from '../../code/tabs';
    import Anchor from '../../components/anchor.vue';
    import studyRender from '../../components/study.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor,
            studyRender
        },
        data () {
            return {
                code: Code,
                tab0: true,
                tab1: true,
                tab2: true,
                tabs: 2,
                label: (h) => {
                    return h('div', [
                        h('span', '标签一'),
                        h('Badge', {
                            props: {
                                count: 3
                            }
                        })
                    ])
                }
            }
        },
        methods: {
            handleTabRemove (name) {
                this['tab' + name] = false;
            },
            handleTabsAdd () {
                this.tabs ++;
            }
        }
    }
</script>