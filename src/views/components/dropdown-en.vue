<template>
    <i-article>
        <article>
            <h1>Dropdown</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Show a folded-styled dropdown menu.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
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
                    <p>Dropdown needs to be used with <code>DropdownMenu</code> and <code>DropdownItem</code> , and slot name needs to be set to <code>list</code>.</p>
                    <p>Trig object can be link, button or other elements.</p>
                    <p>The demo also uses disabled item and split line.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Trig Mode">
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
                    <p>Change the trigger by setting <code>trigger</code> prop. Optional: click, hover(default) or custom.</p>
                    <p>When trigger is set to custom, you need to set visible property manually to control the display of Dropdown.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.trigger }}</i-code>
            </Demo>
            <Demo title="Align Orientation">
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
                    <p>Change the direction that Dropdown displays by setting <code>placement</code> prop. Same as Tooltip Conf, Poptip supports 12 directions. Details on API Doc.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.placement }}</i-code>
            </Demo>
            <Demo title="Nested Usage">
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
                    <p>Dropdown can realise Cascade-like style by nesting. Remind to set subset's expanding direction when nesting.</p>
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
                            <th>Property</th>
                            <th>Desciption</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>trigger</td>
                            <td>Way to activate. Optional Value: <code>hover</code>, <code>click</code>, <code>custom</code>. visible prop is needed when set to custom.</td>
                            <td>String</td>
                            <td>hover</td>
                        </tr>
                        <tr>
                            <td>visible</td>
                            <td>Control the display of Dropdown manually, used when trigger = 'custom'.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>placement</td>
                            <td>The direction Dropdown displays on.Optional Value: <code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>, supports automatic recognition after 2.12.0</td>
                            <td>String</td>
                            <td>bottom</td>
                        </tr>
                        <tr>
                            <td>transfer</td>
                            <td>Whether to append the layer in body. When used in Tabs or a fixed Table column, suggests adding this property, it will not be affected by the parent style, resulting in better results.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Dropdown events" h3></Anchor>
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
                            <td>Emit when clicking the dropdown item.</td>
                            <td>DropdownItem 的 name 值</td>
                        </tr>
                        <tr>
                            <td>on-visible-change</td>
                            <td>Emit when display status of Dropdown changed.</td>
                            <td>visible</td>
                        </tr>
                        <tr>
                            <td>on-clickoutside</td>
                            <td>Triggered when click the outside body.</td>
                            <td>event</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Dropdown slot" h3></Anchor>
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
                            <td>Main content.</td>
                        </tr>
                        <tr>
                            <td>list</td>
                            <td>The content of the list, generally handled by <code>DropdownMenu</code>.</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="DropdownItem props" h3></Anchor>
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
                            <td>Used to tag the item.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Used to disable the item.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>divided</td>
                            <td>Show spilt line.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>selected</td>
                            <td>Tag the item status to selected.</td>
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