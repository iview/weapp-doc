<style scoped>
    .top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Poptip</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Poptip is simlar to Tooltip. It has many common configurations. The difference is Poptip contains more content in a card style, such as link, table and button.</p>
            <p>Poptip can also contain a confirm dialog. Different to Modal. It'll be shown beside the nearest element, so it's relatively lighter.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Poptip trigger="hover" title="Title" content="content">
                        <Button>Hover</Button>
                    </Poptip>
                    <Poptip title="Title" content="content">
                        <Button>Click</Button>
                    </Poptip>
                    <Poptip trigger="focus" title="Title" content="content">
                        <Button>Focus</Button>
                    </Poptip>
                    <Poptip trigger="focus" title="Title" content="content">
                        <Input placeholder="Input focus" />
                    </Poptip>
                </div>
                <div slot="desc">
                    <p>Poptip supports 3 triggers: hover, click and focus. The default is click.</p>
                    <p>Attention: Text in Poptip uses <code>white-space: nowrap;</code>, that is, no line wrap. If there are much content to show and line wrap is needed, we suggest you add style <code>white-space: normal;</code> to content slot.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Direction">
                <div slot="demo">
                    <div class="top">
                        <Poptip title="Title" content="content" placement="top-start">
                            <Button>Top Left</Button>
                        </Poptip>
                        <Poptip title="Title" content="content" placement="top">
                            <Button>Top Center</Button>
                        </Poptip>
                        <Poptip title="Title" content="content" placement="top-end">
                            <Button>Top Right</Button>
                        </Poptip>
                    </div>
                    <div class="center">
                        <div class="center-left">
                            <Poptip title="Title" content="content" placement="left-start">
                                <Button>Left Top</Button>
                            </Poptip><br><br>
                            <Poptip title="Title" content="content" placement="left">
                                <Button>Left Center</Button>
                            </Poptip><br><br>
                            <Poptip title="Title" content="content" placement="left-end">
                                <Button>Left Right</Button>
                            </Poptip>
                        </div>
                        <div class="center-right">
                            <Poptip title="Title" content="content" placement="right-start">
                                <Button>Right Top</Button>
                            </Poptip><br><br>
                            <Poptip title="Title" content="content" placement="right">
                                <Button>Right Center</Button>
                            </Poptip><br><br>
                            <Poptip title="Title" content="content" placement="right-end">
                                <Button>Right Bottom</Button>
                            </Poptip>
                        </div>
                    </div>
                    <div class="bottom">
                        <Poptip title="Title" content="content" placement="bottom-start">
                            <Button>Bottom Left</Button>
                        </Poptip>
                        <Poptip title="Title" content="content" placement="bottom">
                            <Button>Bottom Center</Button>
                        </Poptip>
                        <Poptip title="Title" content="content" placement="bottom-end">
                            <Button>Bottom Right</Button>
                        </Poptip>
                    </div>
                </div>
                <div slot="desc">
                    <p>We provide 12 different directions to show Poptip. Details on API Doc.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.placement }}</i-code>
            </Demo>
            <Demo title="Close inside the Floating Layer">
                <div slot="demo">
                    <Poptip v-model="visible">
                        <a>Click</a>
                        <div slot="title"><i>Custom title</i></div>
                        <div slot="content">
                            <a @click="close">close</a>
                        </div>
                    </Poptip>
                </div>
                <div slot="desc">
                    <p>You can control tooltip's visibility by changing <code>v-model</code> to true or false.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.visible }}</i-code>
            </Demo>
            <Demo title="Nest Complex Content">
                <div slot="demo">
                    <Poptip placement="right" width="400">
                        <Button type="ghost">Click</Button>
                        <div class="api" slot="content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Version</th>
                                        <th>Update Time</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0.9.5</td>
                                        <td>2016-10-26</td>
                                        <td>Add new components <code>Tooltip</code> and <code>Poptip</code></td>
                                    </tr>
                                    <tr>
                                        <td>0.9.4</td>
                                        <td>2016-10-25</td>
                                        <td>Add new components <code>Modal</code></td>
                                    </tr>
                                    <tr>
                                        <td>0.9.2</td>
                                        <td>2016-09-28</td>
                                        <td>Add new components <code>Select</code></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Poptip>
                </div>
                <div slot="desc">
                    <p>You can add complex content into Poptip by using content slot.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.slot }}</i-code>
            </Demo>
            <Demo title="Confirm Dialog">
                <div slot="demo">
                    <Poptip
                        confirm
                        title="Are you sure you want to delete this item?"
                        @on-ok="ok"
                        @on-cancel="cancel">
                        <Button>Delete</Button>
                    </Poptip>
                    <Poptip
                        confirm
                        title="Are you sure delete this task?"
                        @on-ok="ok"
                        @on-cancel="cancel"
                        ok-text="yes"
                        cancel-text="no">
                        <Button>Internationalization</Button>
                    </Poptip>
                </div>
                <div slot="desc">
                    <p>Open confirm-dialog mode by setting <code>confirm</code> prop. The confirm dialog can only be activated by clicking. It only shows title's text. The content will be ignored.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.confirm }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Poptip props" h3></Anchor>
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
                            <td>trigger</td>
                            <td>The trigger. Optional value: <code>hover</code>, <code>click</code>, <code>focus</code>. In confirm mode, only <code>click</code> works.</td>
                            <td>String</td>
                            <td>click</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>The title of Poptip.</td>
                            <td>String | Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>content</td>
                            <td>The content of Poptip. In confirm mode, it'll be ignored.</td>
                            <td>String | Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>placement</td>
                            <td>The direction tooltip shows. Optional value: <code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>, supports automatic recognition after 2.12.0</td>
                            <td>String</td>
                            <td>top</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>The width of the tooltip. The minimal width allowed is 150px. The maximum width by default in confirm mode is 300px.</td>
                            <td>String | Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>confirm</td>
                            <td>Enable confirm mode or not.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>ok-text</td>
                            <td>Text in OK button. It only works in confirm mode.</td>
                            <td>String</td>
                            <td>OK</td>
                        </tr>
                        <tr>
                            <td>cancel-text</td>
                            <td>Text in Cancel button. It only works in confirm mode.</td>
                            <td>String</td>
                            <td>Cancel</td>
                        </tr>
                        <tr>
                            <td>transfer</td>
                            <td>Whether to append the layer in body. When used in Tabs or a fixed Table column, suggests adding this property, it will not be affected by the parent style, resulting in better results.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>popper-class</td>
                            <td>Setting class-name for Poptip, it is useful when using transfer.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>options</td>
                            <td>Customize popper.js configuration items. For details, see <a href="https://popper.js.org/popper-documentation.html" target="_blank">popper.js document</a>.</td>
                            <td>Object</td>
                            <td>
                                <i-code lang="js">{{ code.options }}</i-code>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Poptip events" h3></Anchor>
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
                            <td>on-popper-show</td>
                            <td>Emit when tooltip displays.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-popper-hide</td>
                            <td>Emit when tooltip disappears.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-ok</td>
                            <td>Callback when clicking OK button. It only works in confirm mode.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-cancel</td>
                            <td>Callback when clicking Cancel button. It only works in confirm mode.</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Poptip slot" h3></Anchor>
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
                            <td>Main content</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>Title. It'll convert <code>title</code> prop.</td>
                        </tr>
                        <tr>
                            <td>content</td>
                            <td>The content of the tooltip. It'll convert <code>content</code> props. It'll be ignored in confirm mode.</td>
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
    import Code from '../../code/poptip';
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
            close () {
                this.visible = false;
            },
            ok () {
                this.$Message.info('You click ok');
            },
            cancel () {
                this.$Message.info('You click cancel');
            }
        }
    }
</script>