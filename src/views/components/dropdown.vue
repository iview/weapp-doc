<template>
    <i-article>
        <article>
            <h1>Dropdown 下拉菜单</h1>
            <Anchor title="概述" h2></Anchor>
            <p>展示一组折叠的下拉菜单。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Dropdown>
                        <a href="javascript:void(0)">
                            下拉菜单
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>驴打滚</DropdownItem>
                            <DropdownItem>炸酱面</DropdownItem>
                            <DropdownItem disabled>豆汁儿</DropdownItem>
                            <DropdownItem>冰糖葫芦</DropdownItem>
                            <DropdownItem divided>北京烤鸭</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown style="margin-left: 20px">
                        <Button type="primary">
                            下拉菜单
                            <Icon type="arrow-down-b"></Icon>
                        </Button>
                        <DropdownMenu slot="list">
                            <DropdownItem>驴打滚</DropdownItem>
                            <DropdownItem>炸酱面</DropdownItem>
                            <DropdownItem disabled>豆汁儿</DropdownItem>
                            <DropdownItem>冰糖葫芦</DropdownItem>
                            <DropdownItem divided>北京烤鸭</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div slot="desc">
                    <p>需要配合 <code>DropdownMenu</code> 和 <code>DropdownItem</code> 两个组件来使用，并且给列表设置具名 slot 为 <code>list</code>。</p>
                    <p>触发对象可以是链接、按钮等各种元素。</p>
                    <p>本例还展示了禁用项和分隔线。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="触发方式">
                <div slot="demo">
                    <Dropdown>
                        <a href="javascript:void(0)">
                            hover 触发
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>驴打滚</DropdownItem>
                            <DropdownItem>炸酱面</DropdownItem>
                            <DropdownItem>豆汁儿</DropdownItem>
                            <DropdownItem>冰糖葫芦</DropdownItem>
                            <DropdownItem>北京烤鸭</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown trigger="click" style="margin-left: 20px">
                        <a href="javascript:void(0)">
                            click 触发
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>驴打滚</DropdownItem>
                            <DropdownItem>炸酱面</DropdownItem>
                            <DropdownItem>豆汁儿</DropdownItem>
                            <DropdownItem>冰糖葫芦</DropdownItem>
                            <DropdownItem>北京烤鸭</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown trigger="custom" :visible="visible" style="margin-left: 20px">
                        <a href="javascript:void(0)" @click="handleOpen">
                            custom 触发
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <p>常用于各种自定义下拉内容的场景。</p>
                            <div style="text-align: right;margin:10px;">
                                <Button type="primary" @click="handleClose">关闭</Button>
                            </div>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div slot="desc">
                    <p>通过设置属性 <code>trigger</code> 可以更改触发方式，可选项为 click 、 hover(默认) 或 custom(自定义)。</p>
                    <p>触发方式设置为 custom 自定义时，需手动设置 visible 属性来控制下拉框的显示。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.trigger }}</i-code>
            </Demo>
            <Demo title="对齐方向">
                <div slot="demo">
                    <Dropdown placement="bottom-start">
                        <a href="javascript:void(0)">
                            菜单(左)
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>驴打滚</DropdownItem>
                            <DropdownItem>炸酱面</DropdownItem>
                            <DropdownItem>豆汁儿</DropdownItem>
                            <DropdownItem>冰糖葫芦</DropdownItem>
                            <DropdownItem>北京烤鸭</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown style="margin-left: 20px">
                        <a href="javascript:void(0)">
                            菜单(居中)
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>驴打滚</DropdownItem>
                            <DropdownItem>炸酱面</DropdownItem>
                            <DropdownItem>豆汁儿</DropdownItem>
                            <DropdownItem>冰糖葫芦</DropdownItem>
                            <DropdownItem>北京烤鸭</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown style="margin-left: 20px" placement="bottom-end">
                        <a href="javascript:void(0)">
                            菜单(右)
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>驴打滚</DropdownItem>
                            <DropdownItem>炸酱面</DropdownItem>
                            <DropdownItem>豆汁儿</DropdownItem>
                            <DropdownItem>冰糖葫芦</DropdownItem>
                            <DropdownItem>北京烤鸭</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div slot="desc">
                    <p>通过设置属性 <code>placement</code> 可以更改下拉菜单出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.placement }}</i-code>
            </Demo>
            <Demo title="嵌套用法">
                <div slot="demo">
                    <Dropdown>
                        <a href="javascript:void(0)">
                            北京小吃
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>驴打滚</DropdownItem>
                            <DropdownItem>炸酱面</DropdownItem>
                            <DropdownItem>豆汁儿</DropdownItem>
                            <Dropdown placement="right-start">
                                <DropdownItem>
                                    北京烤鸭
                                    <Icon type="ios-arrow-right"></Icon>
                                </DropdownItem>
                                <DropdownMenu slot="list">
                                    <DropdownItem>挂炉烤鸭</DropdownItem>
                                    <DropdownItem>焖炉烤鸭</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <DropdownItem>冰糖葫芦</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div slot="desc">
                    <p>下拉菜单可以进行嵌套实现级联的效果，嵌套时注意设置子集的展开方向。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.nest }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Dropdown props" h3></Anchor>
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
                            <td>trigger</td>
                            <td>触发方式，可选值为 <code>hover</code>（悬停）<code>click</code>（点击）<code>custom</code>（自定义），使用 custom 时，需配合 visible 一起使用</td>
                            <td>String</td>
                            <td>hover</td>
                        </tr>
                        <tr>
                            <td>visible</td>
                            <td>手动控制下拉框的显示，在 trigger = 'custom' 时使用</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>placement</td>
                            <td>下拉菜单出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>, 2.12.0 版本开始支持自动识别</td>
                            <td>String</td>
                            <td>bottom</td>
                        </tr>
                        <tr>
                            <td>transfer</td>
                            <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Dropdown events" h3></Anchor>
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
                            <td>点击菜单项时触发</td>
                            <td>DropdownItem 的 name 值</td>
                        </tr>
                        <tr>
                            <td>on-visible-change</td>
                            <td>菜单显示状态改变时调用</td>
                            <td>visible</td>
                        </tr>
                        <tr>
                            <td>on-clickoutside</td>
                            <td>点击外部关闭下拉菜单时触发</td>
                            <td>event</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Dropdown slot" h3></Anchor>
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
                            <td>主体内容</td>
                        </tr>
                        <tr>
                            <td>list</td>
                            <td>列表内容，一般由 <code>DropdownMenu</code> 承担</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="DropdownItem props" h3></Anchor>
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
                            <td>用来标识这一项</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>禁用该项</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>divided</td>
                            <td>显示分割线</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>selected</td>
                            <td>标记该项为选中状态</td>
                            <td>Boolean</td>
                            <td>false</td>
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
    import Code from '../../code/dropdown';
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
                visible: false
            }
        },
        methods: {
            handleOpen () {
                this.visible = true;
            },
            handleClose () {
                this.visible = false;
            }
        }
    }
</script>