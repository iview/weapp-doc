<template>
    <i-article>
        <article>
            <h1>Switch</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>When To Use?</p>
            <ul>
                <li>If you need to represent the switching between two states or on-off state.</li>
                <li>The difference between Switch and Checkbox is that Switch will trigger a state change directly when you toggle it, while Checkbox is generally used for state marking, which should work in conjunction with submit operation.</li>
            </ul>
            <Alert show-icon style="margin-top: 16px" type="warning">Warning: If you don't use <router-link to="/docs/guide/iview-loader-en">iview-loader</router-link>, you have to use <code>i-switch</code> tag.</Alert>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Switch v-model="switch1" @on-change="change"></Switch>
                </div>
                <div slot="desc">
                    <p>The most basic usage.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Size">
                <div slot="demo">
                    <Switch size="large"></Switch>
                    <Switch></Switch>
                    <Switch size="small"></Switch>
                </div>
                <div slot="desc">
                    <p>Set the size to <code>large</code> or <code>small</code> to use large/small size of switch, by default the switch's size is medium.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="Text & icon">
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
                    <p>With text and icon.</p>
                    <p>Customize content, it is recommended that if you use 2 characters, set the switch size to large.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.custom }}</i-code>
            </Demo>
            <Demo title="Disabled">
                <div slot="demo">
                    <Switch :disabled="disabled"></Switch>
                    <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
                </div>
                <div slot="desc">
                    <p>Disabled state of Switch.</p>
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
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>value</td>
                            <td>Determine whether the Switch is checked. Use <code>v-model</code> to enable two-way binding.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>Set the size to <code>large</code>, <code>small</code> or <code>default</code> to use large/small size of switch, by default the switch's size is medium. It is recommended that if you use 2 characters, set the switch size to large.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Disabled state of Switch.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>true-value</td>
                            <td>Value of the switch if it's checked.</td>
                            <td>String, Number, Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>false-value</td>
                            <td>Value of the switch if it's not checked.</td>
                            <td>String, Number, Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Switch events" h3></Anchor>
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
                            <td>Emitted when the state of the switch changed.</td>
                            <td>true | false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Switch slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>open</td>
                            <td>Customize content when state is opening.</td>
                        </tr>
                        <tr>
                            <td>close</td>
                            <td>Customize content when state is closed.</td>
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