<template>
    <i-article>
        <article>
            <h1>Notice</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Show global notice at the right top of the page. Often used in such scenarios: </p>
            <ul>
                <li>The content of the notice includes description info.</li>
                <li>Active push by system.</li>
            </ul>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Button type="primary" @click="open(false)">Open notice</Button>
                    <Button @click="open(true)">Open notice(only title)</Button>
                </div>
                <div slot="desc">
                    <p>Basic usage. It'll be closed after 4.5 sec by default. If <code>desc</code> prop is empty or not set, Title-Only style will be used.</p>
                    <p>We suggest that the title should be as clear as possiblem like "Delete Sucessfully" etc. Detail content can be placed into description area.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.open }}</i-code>
            </Demo>
            <Demo title="Notice Type">
                <div slot="demo">
                    <p>With desc</p>
                    <Button @click="info(false)">Info</Button>
                    <Button @click="success(false)">Success</Button>
                    <Button @click="warning(false)">Warning</Button>
                    <Button @click="error(false)">Error</Button>
                    <p>Only title</p>
                    <Button @click="info(true)">Info</Button>
                    <Button @click="success(true)">Success</Button>
                    <Button @click="warning(true)">Warning</Button>
                    <Button @click="error(true)">Error</Button>
                </div>
                <div slot="desc">
                    <p>Notice with status icon.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.type }}</i-code>
            </Demo>
            <Demo title="Custom Duration">
                <div slot="demo">
                    <Button type="primary" @click="time">Open notice</Button>
                </div>
                <div slot="desc">
                    <p>Set duration to 0 to disable auto close. You can also configure Notice globally in <code>Notice.config()</code>. Details on API Doc.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.time }}</i-code>
            </Demo>
            <Demo title="render">
                <div slot="demo">
                    <Button type="primary" @click="renderFunc">Open notice</Button>
                </div>
                <div slot="desc">
                    <p>You can custom the render function instead of desc.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.render }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Notice instance" h3></Anchor>
                <p>Use the component by directly calling methods below:</p>
                <ul>
                    <li>
                        <code>this.$Notice.open(config)</code>
                    </li>
                    <li>
                        <code>this.$Notice.info(config)</code>
                    </li>
                    <li>
                        <code>this.$Notice.success(config)</code>
                    </li>
                    <li>
                        <code>this.$Notice.warning(config)</code>
                    </li>
                    <li>
                        <code>this.$Notice.error(config)</code>
                    </li>
                </ul>
                <p>The methods above create and maintain Vue component implicitly. The only parameter is a config object. It's details are mentioned below:</p>
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
                            <td>title</td>
                            <td>The title of Notice.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>desc</td>
                            <td>The content of Notice. If empty or not set, Title-Only style will be used.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>render</td>
                            <td>Custom description renderer. It uses Vue's render function. If both set 'render' and 'desc', there just show the content create by render.</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>duration</td>
                            <td>Close Notice automatically after the duration. 0 means never close.</td>
                            <td>Number</td>
                            <td>4.5</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>The unique identifier of current Notice.</td>
                            <td>String</td>
                            <td>Auto set</td>
                        </tr>
                        <tr>
                            <td>onClose</td>
                            <td>Callback when closing Notice.</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <p>Some global methods are also provided: (config, close and destroy)</p>
                <ul>
                    <li>
                        <code>this.$Notice.config(options)</code>
                    </li>
                    <li>
                        <code>this.$Notice.close(name)</code>
                    </li>
                    <li>
                        <code>this.$Notice.destroy()</code>
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
                            <td>The distance from Notice to page top. Unit: px</td>
                            <td>Number</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>duration</td>
                            <td>Default auto close duration. Unit: second</td>
                            <td>Number</td>
                            <td>4.5</td>
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
    import Code from '../../code/notice';
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
            open (nodesc) {
                this.$Notice.open({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            info (nodesc) {
                this.$Notice.info({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            success (nodesc) {
                this.$Notice.success({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            warning (nodesc) {
                this.$Notice.warning({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            error (nodesc) {
                this.$Notice.error({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            time () {
                this.$Notice.open({
                    title: 'Notification title',
                    desc: 'This notification does not automatically close, and you need to click the close button to close.',
                    duration: 0
                });
            },
            renderFunc () {
                this.$Notice.success({
                    title: 'Notification title',
                    desc: 'The desc will hide when you set render.',
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