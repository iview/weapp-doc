<template>
    <i-article>
        <article>
            <h1>Message</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>A lightweight feedback message appearing at the top of the screen, fading automatically. Has many different options for different situations.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Normal Prompt">
                <div slot="demo">
                    <Button type="primary" @click="info">Display info prompt</Button>
                </div>
                <div slot="desc">
                    <p>Basic promt, fades after 1.5 seconds by default.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.info }}</i-code>
            </Demo>
            <Demo title="Prompt Type">
                <div slot="demo">
                    <Button @click="success">Display success prompt</Button>
                    <Button @click="warning">Display warning prompt</Button>
                    <Button @click="error">Display error prompt</Button>
                </div>
                <div slot="desc">
                    <p>Different prompt types: success, warning, error.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.type }}</i-code>
            </Demo>
            <Demo title="Loading Prompt">
                <div slot="demo">
                    <Button @click="loading">Display loading...</Button>
                </div>
                <div slot="desc">
                    <p>Loading status, dismissed asynchronously.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.loading }}</i-code>
            </Demo>
            <Demo title="Custom Prompt Duration">
                <div slot="demo">
                    <Button @click="time">Displays a 10 second prompt</Button>
                </div>
                <div slot="desc">
                    <p>Customize prompt duration. Can also be configured in <code>Message.config()</code>, refer to API section below.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.time }}</i-code>
            </Demo>
            <Demo title="Closable">
                <div slot="demo">
                    <Button @click="closable">Display a closable message</Button>
                </div>
                <div slot="desc">
                    <p>Set parameter as an object, and set its <code>closable</code> to true to allow manual close. Details on API Doc.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.closable }}</i-code>
            </Demo>
            <Demo title="render">
                <div slot="demo">
                    <Button @click="renderFunc">show message</Button>
                </div>
                <div slot="desc">
                    <p>You can custom content with render</p>
                </div>
                <i-code lang="html" slot="code">{{ code.render }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Message instance" h3></Anchor>
                <p>This component can be used with the following static methods:</p>
                <ul>
                    <li>
                        <code>this.$Message.info(config)</code>
                    </li>
                    <li>
                        <code>this.$Message.success(config)</code>
                    </li>
                    <li>
                        <code>this.$Message.warning(config)</code>
                    </li>
                    <li>
                        <code>this.$Message.error(config)</code>
                    </li>
                    <li>
                        <code>this.$Message.loading(config)</code>
                    </li>
                </ul>
                <p>The methods above implicitly create and maintain Vue components. Parameter config can be string or object. When string, the content will be directly displayed, when object, the detail usage is explained below:</p>
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
                            <td>Prompt's message content</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>render</td>
                            <td>Custom description renderer. It uses Vue's render function.</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>duration</td>
                            <td>Time before prompt dismisses, in seconds. Use 0 to not dismiss</td>
                            <td>Number</td>
                            <td>1.5</td>
                        </tr>
                        <tr>
                            <td>onClose</td>
                            <td>Function to be called after the prompt is closed</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>closable</td>
                            <td>Whether to show a close button.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <p>Methods for global configuration and disposal are also provided:</p>
                <ul>
                    <li>
                        <code>this.$Message.config(options)</code>
                    </li>
                    <li>
                        <code>this.$Message.destroy()</code>
                    </li>
                </ul>
                <br>
                <i-code bg>{{ code.config }}</i-code>
                <br>
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
                            <td>top</td>
                            <td>Prompt's distance from top, in pixels.</td>
                            <td>Number</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>duration</td>
                            <td>Default time before prompt dismisses, in seconds.</td>
                            <td>Number</td>
                            <td>1.5</td>
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
    import Code from '../../code/message';
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
                code: Code
            }
        },
        methods: {
            info () {
                this.$Message.info('This is a info tip');
            },
            success () {
                this.$Message.success('This is a success tip');
            },
            warning () {
                this.$Message.warning('This is a warning tip');
            },
            error () {
                this.$Message.error('This is an error tip');
            },
            loading () {
                const msg = this.$Message.loading({
                    content: 'Loading...',
                    duration: 0
                });
                setTimeout(msg, 3000);
            },
            time () {
                this.$Message.info({
                    content: 'I\'ll be gone in 10 seconds',
                    duration: 10
                });
            },
            closable () {
                this.$Message.info({
                    content: 'Tips for manual closing',
                    duration: 10,
                    closable: true
                });
            },
            renderFunc () {
                this.$Message.info({
                    render: h => {
                        return h('span', [
                            'This is created by ',
                            h('a', 'render'),
                            ' function'
                        ])
                    }
                });
            }
        }
    }
</script>