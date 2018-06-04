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
            <h1>Tooltip 文字提示</h1>
            <Anchor title="概述" h2></Anchor>
            <p>文字提示气泡框，在鼠标悬停时显示，代替了系统的<code>title</code>提示。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Tooltip content="这里是提示文字">
                        当鼠标经过这段文字时，会显示一个气泡框
                    </Tooltip>
                </div>
                <div slot="desc">
                    <p>最简单的用法。</p>
                    <p>注意 Tooltip 内的文本使用了 <code>white-space: nowrap;</code>，即不自动换行，如需展示很多内容并自动换行时，建议给内容 slot 增加样式 <code>white-space: normal;</code>。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="位置">
                <div slot="demo">
                    <div class="top">
                        <Tooltip content="Top Left 文字提示" placement="top-start">
                            <Button>上左</Button>
                        </Tooltip>
                        <Tooltip content="Top Center 文字提示" placement="top">
                            <Button>上边</Button>
                        </Tooltip>
                        <Tooltip content="Top Right 文字提示" placement="top-end">
                            <Button>上右</Button>
                        </Tooltip>
                    </div>
                    <div class="center">
                        <div class="center-left">
                            <Tooltip content="Left Top 文字提示" placement="left-start">
                                <Button>左上</Button>
                            </Tooltip><br><br>
                            <Tooltip content="Left Center 文字提示" placement="left">
                                <Button>左边</Button>
                            </Tooltip><br><br>
                            <Tooltip content="Left Bottom 文字提示" placement="left-end">
                                <Button>左下</Button>
                            </Tooltip>
                        </div>
                        <div class="center-right">
                            <Tooltip content="Right Top 文字提示" placement="right-start">
                                <Button>右上</Button>
                            </Tooltip><br><br>
                            <Tooltip content="Right Center 文字提示" placement="right">
                                <Button>右边</Button>
                            </Tooltip><br><br>
                            <Tooltip content="Right Bottom 文字提示" placement="right-end">
                                <Button>右下</Button>
                            </Tooltip>
                        </div>
                    </div>
                    <div class="bottom">
                        <Tooltip content="Bottom Left 文字提示" placement="bottom-start">
                            <Button>下左</Button>
                        </Tooltip>
                        <Tooltip content="Bottom Center 文字提示" placement="bottom">
                            <Button>下边</Button>
                        </Tooltip>
                        <Tooltip content="Bottom Right 文字提示" placement="bottom-end">
                            <Button>下右</Button>
                        </Tooltip>
                    </div>
                </div>
                <div slot="desc">
                    <p>组件提供了12个不同的方向显示Tooltip，具体配置可查看API。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.placement }}</i-code>
            </Demo>
            <Demo title="自定义内容">
                <div slot="demo">
                    <Tooltip placement="top">
                        <Button>多行</Button>
                        <div slot="content">
                            <p>显示多行信息</p>
                            <p><i>可以自定义样式</i></p>
                        </div>
                    </Tooltip>
                </div>
                <div slot="desc">
                    <p>通过自定义 slot 显示多行文本或更复杂的样式。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.content }}</i-code>
            </Demo>
            <Demo title="禁用">
                <div slot="demo">
                    <Tooltip placement="top" content="可以禁用文字提示" :disabled="disabled">
                        <Button @click="disabled = true">点击关闭提示</Button>
                    </Tooltip>
                </div>
                <div slot="desc">
                    <p>通过设置属性<code>disabled</code>可以禁用文字提示。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="延时">
                <div slot="demo">
                    <Tooltip placement="top" content="Tooltip 文字提示" :delay="1000">
                        <Button @click="disabled = true">延时1秒显示</Button>
                    </Tooltip>
                </div>
                <div slot="desc">
                    <p>通过设置属性<code>delay</code>可以延时显示文字提示，单位毫秒。</p>
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
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>content</td>
                            <td>显示的内容</td>
                            <td>String | Number</td>
                            <td>空</td>
                        </tr>
                        <tr>
                            <td>placement</td>
                            <td>提示框出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>，2.12.0 版本开始支持自动识别</td>
                            <td>String</td>
                            <td>bottom</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用提示框</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>delay</td>
                            <td>延迟显示，单位毫秒</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>always</td>
                            <td>是否总是可见</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>transfer</td>
                            <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>options</td>
                            <td>自定义 popper.js 的配置项，具体配置见 <a href="https://popper.js.org/popper-documentation.html" target="_blank">popper.js 文档</a></td>
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
                            <th>事件名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-popper-show</td>
                            <td>在提示框显示时触发</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>on-popper-hide</td>
                            <td>在提示框消失时触发</td>
                            <td>无</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Tooltip slot" h3></Anchor>
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
                            <td>content</td>
                            <td>提示框的内容，定义此 slot 时，会覆盖 props <code>content</code>。</td>
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