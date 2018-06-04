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
            <h1>Tooltip</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>A simple text popup tip.</p>
            <p>The tip shows while mouse enter, and hides while mouse leave. The Tooltip doesn't support complex text and operation.</p>
            <p>It can provide an explanation of button/text/operation that can cover the usage of the default system <code>title</code>.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Tooltip content="Here is the prompt text">
                        A balloon appears when the mouse passes over this text
                    </Tooltip>
                </div>
                <div slot="desc">
                    <p>The simplest usage.</p>
                    <p>Tip: Tooltip use <code>white-space: nowrap;</code> in text that is not automatically wrap. You can add style <code>white-space: normal;</code> in slot if you want to show a lot of content and automatically wrap.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Placement">
                <div slot="demo">
                    <div class="top">
                        <Tooltip content="Top Left text" placement="top-start">
                            <Button>Top Left</Button>
                        </Tooltip>
                        <Tooltip content="Top Center text" placement="top">
                            <Button>Top Center</Button>
                        </Tooltip>
                        <Tooltip content="Top Right text" placement="top-end">
                            <Button>Top Right</Button>
                        </Tooltip>
                    </div>
                    <div class="center">
                        <div class="center-left">
                            <Tooltip content="Left Top text" placement="left-start">
                                <Button>Left Top</Button>
                            </Tooltip><br><br>
                            <Tooltip content="Left Center text" placement="left">
                                <Button>Left Center</Button>
                            </Tooltip><br><br>
                            <Tooltip content="Left Bottom text" placement="left-end">
                                <Button>Left Bottom</Button>
                            </Tooltip>
                        </div>
                        <div class="center-right">
                            <Tooltip content="Right Top text" placement="right-start">
                                <Button>Right Top</Button>
                            </Tooltip><br><br>
                            <Tooltip content="Right Center text" placement="right">
                                <Button>Right Center</Button>
                            </Tooltip><br><br>
                            <Tooltip content="Right Bottom text" placement="right-end">
                                <Button>Right Bottom</Button>
                            </Tooltip>
                        </div>
                    </div>
                    <div class="bottom">
                        <Tooltip content="Bottom Left text" placement="bottom-start">
                            <Button>Bottom Left</Button>
                        </Tooltip>
                        <Tooltip content="Bottom Center text" placement="bottom">
                            <Button>Bottom Center</Button>
                        </Tooltip>
                        <Tooltip content="Bottom Right text" placement="bottom-end">
                            <Button>Bottom Right</Button>
                        </Tooltip>
                    </div>
                </div>
                <div slot="desc">
                    <p>The ToolTip has 12 placements choice. Details on API Doc.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.placement }}</i-code>
            </Demo>
            <Demo title="Custom">
                <div slot="demo">
                    <Tooltip placement="top">
                        <Button>Multiple lines</Button>
                        <div slot="content">
                            <p>Display multiple lines of information</p>
                            <p><i>Can customize the style</i></p>
                        </div>
                    </Tooltip>
                </div>
                <div slot="desc">
                    <p>Display multiple lines of text or more complex styles by customizing the slot.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.content }}</i-code>
            </Demo>
            <Demo title="Disabled">
                <div slot="demo">
                    <Tooltip placement="top" content="Can disable text prompts" :disabled="disabled">
                        <Button @click="disabled = true">Click to close</Button>
                    </Tooltip>
                </div>
                <div slot="desc">
                    <p>You can disable text prompts by setting the property <code>disabled</code>.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="Delay">
                <div slot="demo">
                    <Tooltip placement="top" content="Tooltip text" :delay="1000">
                        <Button @click="disabled = true">Delay 1 second to show</Button>
                    </Tooltip>
                </div>
                <div slot="desc">
                    <p>By setting the property <code>delay</code>, you can delay the text prompt, in milliseconds.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.delay }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Tooltip props" h3></Anchor>
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
                            <td>content</td>
                            <td>prompt text</td>
                            <td>String | Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>placement</td>
                            <td>To set the position, which can be one of <code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>, supports automatic recognition after 2.12.0</td>
                            <td>String</td>
                            <td>bottom</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Whether to disable the Tooltip.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>delay</td>
                            <td>Delay display in milliseconds.</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>always</td>
                            <td>Whether it is always visible.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>transfer</td>
                            <td>Whether to append the layer in body. When used in Tabs or a fixed Table column, suggests adding this property, it will not be affected by the parent style, resulting in better results.</td>
                            <td>Boolean</td>
                            <td>false</td>
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
                <Anchor title="Tooltip events" h3></Anchor>
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
                            <td>Emit when Tooltip disappear.</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Tooltip slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>default</td>
                            <td>Main content.</td>
                        </tr>
                        <tr>
                            <td>content</td>
                            <td>The contents of the Tooltip, when this slot is defined, overwrites the props content.</td>
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
    import Code from '../../code/tooltip';
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
                disabled: false
            }
        }
    }
</script>