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
            <h1>Tabs 标签页</h1>
            <Anchor title="概述" h2></Anchor>
            <p>选项卡切换组件，常用于平级区域大块内容的的收纳和展现。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Tabs value="name1">
                        <TabPane label="标签一" name="name1">标签一的内容</TabPane>
                        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
                        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
                    </Tabs>
                </div>
                <div slot="desc">
                    <p><code>value</code> 与 <code>TabPane</code> 的 <code>name</code> 对应，用于标识当前激活的是哪一项，name 值默认从 0 开始，默认激活第一项。可以使用 v-model 双向绑定数据。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="禁用">
                <div slot="demo">
                    <Tabs>
                        <TabPane label="标签一">标签一的内容</TabPane>
                        <TabPane label="标签二" disabled>标签二的内容</TabPane>
                        <TabPane label="标签三">标签三的内容</TabPane>
                    </Tabs>
                </div>
                <div slot="desc">
                    <p>禁用某一项。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="图标">
                <div slot="demo">
                    <Tabs>
                        <TabPane label="macOS" icon="social-apple">标签一的内容</TabPane>
                        <TabPane label="Windows" icon="social-windows">标签二的内容</TabPane>
                        <TabPane label="Linux" icon="social-tux">标签三的内容</TabPane>
                    </Tabs>
                </div>
                <div slot="desc">
                    <p>通过设置属性 <code>icon</code>，可以显示一个图标。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.icon }}</i-code>
            </Demo>
            <Demo title="迷你型">
                <div slot="demo">
                    <Tabs size="small">
                        <TabPane label="标签一">标签一的内容</TabPane>
                        <TabPane label="标签二">标签二的内容</TabPane>
                        <TabPane label="标签三">标签三的内容</TabPane>
                    </Tabs>
                </div>
                <div slot="desc">
                    <p>设置属性 <code>size</code> 为 <code>small</code> 可以显示为迷你型，只在 <code>type</code> 为 <code>line</code> 时有效。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.mini }}</i-code>
            </Demo>
            <Demo title="卡片样式">
                <div slot="demo">
                    <Tabs type="card">
                        <TabPane label="标签一">标签一的内容</TabPane>
                        <TabPane label="标签二">标签二的内容</TabPane>
                        <TabPane label="标签三">标签三的内容</TabPane>
                    </Tabs>
                </div>
                <div slot="desc">
                    <p>设置属性 <code>type</code> 为 <code>card</code> 可以显示卡片样式，常用于容器顶部。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.card }}</i-code>
            </Demo>
            <Demo title="可关闭">
                <div slot="demo">
                    <Tabs type="card" closable @on-tab-remove="handleTabRemove">
                        <TabPane label="标签一" v-if="tab0">标签一的内容</TabPane>
                        <TabPane label="标签二" v-if="tab1">标签二的内容</TabPane>
                        <TabPane label="标签三" v-if="tab2">标签三的内容</TabPane>
                    </Tabs>
                </div>
                <div slot="desc">
                    <p>通过设置属性 <code>closable</code> 可以关闭某一项，仅在 <code>type</code> 为 <code>card</code> 时有效。</p>
                    <p>需结合 @on-tab-remove 事件手动关闭标签页。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.closable }}</i-code>
            </Demo>
            <Demo title="自定义标签页">
                <div slot="demo">
                    <Tabs value="name1">
                        <TabPane :label="label" name="name1">标签一的内容</TabPane>
                        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
                        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
                    </Tabs>
                </div>
                <div slot="desc">
                    <p>设置 label 为 Render 函数后，可以自定义标签页的内容。</p>
                    <p><study-render></study-render></p>
                </div>
                <i-code lang="html" slot="code">{{ code.render }}</i-code>
            </Demo>
            <Demo title="附加内容">
                <div slot="demo">
                    <Tabs type="card">
                        <TabPane v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签{{ tab }}</TabPane>
                        <Button type="ghost" @click="handleTabsAdd" size="small" slot="extra">增加</Button>
                    </Tabs>
                </div>
                <div slot="desc">
                    <p>设置 slot <code>extra</code> 可以在页签右边添加附加操作。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.extra }}</i-code>
            </Demo>
            <Demo title="不使用动画">
                <div slot="demo">
                    <Tabs :animated="false">
                        <TabPane label="标签一">标签一的内容</TabPane>
                        <TabPane label="标签二">标签二的内容</TabPane>
                        <TabPane label="标签三">标签三的内容</TabPane>
                    </Tabs>
                </div>
                <div slot="desc">
                    <p>通过设置属性 <code>animated</code> 为 <code>false</code> 可以禁用动画。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.animated }}</i-code>
            </Demo>
            <Demo title="其它样式" vertical hide-code>
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
                    <p>可以根据业务自定义 UI，需要一点额外的样式覆盖。</p>
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
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>value</td>
                            <td>当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据</td>
                            <td>String</td>
                            <td>默认为第一项的 name</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>页签的基本样式，可选值为 <code>line</code> 和 <code>card</code></td>
                            <td>String</td>
                            <td>line</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>尺寸，可选值为 <code>default</code> 和 <code>small</code>，仅在 <code>type="line"</code> 时有效</td>
                            <td>String</td>
                            <td>default</td>
                        </tr>
                        <tr>
                            <td>closable</td>
                            <td>是否可以关闭页签，仅在 <code>type="card"</code> 时有效</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>animated</td>
                            <td>是否使用 CSS3 动画</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>capture-focus</td>
                            <td>Tabs 内的表单类组件是否自动获得焦点</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Tabs events" h3></Anchor>
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
                            <td>on-click</td>
                            <td>tab 被点击时触发</td>
                            <td>name</td>
                        </tr>
                        <tr>
                            <td>on-tab-remove</td>
                            <td>tab 被关闭时触发</td>
                            <td>name</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Tabs slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>extra</td>
                            <td>附加内容</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="TabPane props" h3></Anchor>
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
                            <td>name</td>
                            <td>用于标识当前面板，对应 value，默认为其索引值</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>选项卡头显示文字，支持 Render 函数。<study-render></study-render></td>
                            <td>String | Function</td>
                            <td>空</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>选项卡图标</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用该选项卡</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>closable</td>
                            <td>是否可以关闭页签，仅在 <code>type="card"</code> 时有效</td>
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