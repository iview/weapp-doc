<template>
    <i-article>
        <article>
            <h1>Switch 开关</h1>
            <Anchor title="概述" h2></Anchor>
            <p>在两种状态间切换时用到的开关选择器。</p>
            <Alert show-icon style="margin-top: 16px" type="warning">注意：没有使用 <router-link to="/docs/guide/iview-loader">iview-loader</router-link> 时，必须使用 <code>i-switch</code> 标签。</Alert>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基本">
                <div slot="demo">
                    <Switch v-model="switch1" @on-change="change"></Switch>
                </div>
                <div slot="desc">
                    <p>基本用法，状态切换时会触发事件。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="尺寸">
                <div slot="demo">
                    <Switch size="large"></Switch>
                    <Switch></Switch>
                    <Switch size="small"></Switch>
                </div>
                <div slot="desc">
                    <p>设置<code>size</code>为 <code>large</code> 或 <code>small</code> 使用大号和小号的开关。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="文字和图标">
                <div slot="demo">
                    <Switch>
                        <span slot="open">开</span>
                        <span slot="close">关</span>
                    </Switch>
                    <Switch>
                        <Icon type="android-done" slot="open"></Icon>
                        <Icon type="android-close" slot="close"></Icon>
                    </Switch>
                    <br><br>
                    <Switch size="large">
                        <span slot="open">开启</span>
                        <span slot="close">关闭</span>
                    </Switch>
                    <Switch size="large">
                        <span slot="open">ON</span>
                        <span slot="close">OFF</span>
                    </Switch>
                </div>
                <div slot="desc">
                    <p>自定义内容，建议如果使用2个汉字，将开关尺寸设置为 large。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.custom }}</i-code>
            </Demo>
            <Demo title="不可用">
                <div slot="demo">
                    <Switch :disabled="disabled"></Switch>
                    <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
                </div>
                <div slot="desc">
                    <p>禁用开关。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Switch props" h3></Anchor>
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
                            <td>指定当前是否选中，可以使用 v-model 双向绑定数据</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>开关的尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不写。建议开关如果使用了2个汉字的文字，使用 large。</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>禁用开关</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>true-value</td>
                            <td>选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
                            <td>String, Number, Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>false-value</td>
                            <td>没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
                            <td>String, Number, Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Switch events" h3></Anchor>
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
                            <td>开关变化时触发，返回当前的状态</td>
                            <td>true | false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Switch slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>open</td>
                            <td>自定义显示打开时的内容</td>
                        </tr>
                        <tr>
                            <td>close</td>
                            <td>自定义显示关闭时的内容</td>
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
    import Code from '../../code/switch';
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
                disabled: true,
                switch1: false
            }
        },
        methods: {
            change (status) {
                this.$Message.info(`开关状态：${status}`);
            }
        }
    }
</script>