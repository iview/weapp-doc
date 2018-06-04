<template>
    <i-article>
        <article>
            <h1>Alert</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Present some warning messages staticlly, can be closed manually.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Alert>An info prompt</Alert>
                    <Alert type="success">A success prompt</Alert>
                    <Alert type="warning">A warning prompt</Alert>
                    <Alert type="error">An error prompt</Alert>
                </div>
                <div slot="desc">
                    <p>Basic Usage: 4 alternative types: <code>info</code>, <code>success</code>, <code>warning</code>, <code>error</code>.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="With Description">
                <div slot="demo">
                    <Alert>
                        An info prompt
                        <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
                    </Alert>
                    <Alert type="success">
                        A success prompt
                        <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
                    </Alert>
                    <Alert type="warning">
                        A warning prompt
                        <template slot="desc">
                        Content of prompt. Content of prompt. Content of prompt.
                    </template>
                    </Alert>
                    <Alert type="error">
                        An error prompt
                        <span slot="desc">
                            Custom error description copywriting. <Icon type="help-circled" size="14"></Icon>
                        </span>
                    </Alert>
                </div>
                <div slot="desc">
                    <p>Customize <code>&lt;slot name="desc"&gt;</code> Discription Content.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.desc }}</i-code>
            </Demo>
            <Demo title="Icon">
                <div slot="demo">
                    <Alert show-icon>An info prompt</Alert>
                    <Alert type="success" show-icon>A success prompt</Alert>
                    <Alert type="warning" show-icon>A warning prompt</Alert>
                    <Alert type="error" show-icon>An error prompt</Alert>
                    <Alert show-icon>
                        An info prompt
                        <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
                    </Alert>
                    <Alert type="success" show-icon>
                        A success prompt
                        <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>
                    </Alert>
                    <Alert type="warning" show-icon>
                        A warning prompt
                        <template slot="desc">
                        Content of prompt. Content of prompt. Content of prompt.
                    </template>
                    </Alert>
                    <Alert type="error" show-icon>
                        An error prompt
                        <span slot="desc">
                            Custom error description copywriting.
                        </span>
                    </Alert>
                    <Alert show-icon>
                        Custom icon
                        <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
                        <template slot="desc">Custom icon copywriting. Custom icon copywriting. Custom icon copywriting. </template>
                    </Alert>
                </div>
                <div slot="desc">
                    <p>Add different icons by type property, or customize icon slot.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.icon }}</i-code>
            </Demo>
            <Demo title="Closable">
                <div slot="demo">
                    <Alert closable>An info prompt</Alert>
                    <Alert type="success" show-icon closable>
                        A success prompt
                        <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>
                    </Alert>
                    <Alert type="warning" closable>
                        Custom closing content
                        <span slot="close">No longer prompt</span>
                    </Alert>
                </div>
                <div slot="desc">
                    <p>Show close button, click to close alert. User can also customize close slot.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.close }}</i-code>
            </Demo>
            <Demo title="Banner">
                <div slot="demo">
                    <Alert banner type="warning">Notice: notification contents...</Alert>
                    <Alert banner closable type="warning">Notice: notification contents...</Alert>
                </div>
                <div slot="desc">
                    <p>Set property <code>banner</code> can apply banner style.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.banner }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Alert props" h3></Anchor>
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
                            <td>type</td>
                            <td>Alert style, alternative value: <code>info</code>, <code>success</code>, <code>warning</code>, <code>error</code></td>
                            <td>String</td>
                            <td>info</td>
                        </tr>
                        <tr>
                            <td>closable</td>
                            <td>Closable or not</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-icon</td>
                            <td>Show Icon or not</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Alert events" h3></Anchor>
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
                            <td>on-close</td>
                            <td>Emit when close the alert.</td>
                            <td>event</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Alert slot" h3></Anchor>
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
                            <td>Alert text</td>
                        </tr>
                        <tr>
                            <td>desc</td>
                            <td>Alert assistant text description</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>Customized icon content</td>
                        </tr>
                        <tr>
                            <td>close</td>
                            <td>Customized close content</td>
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
    import Code from '../../code/alert';
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

        }
    }
</script>