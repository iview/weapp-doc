<template>
    <i-article>
        <article>
            <h1>LoadingBar</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Create a global loading bar to display page loading, asynchronous request, file uploading etc.</p>
            <Anchor title="Explanation" h2></Anchor>
            <p>LoadingBar will be created only once globally, so you'll control the same component no matter where you call the methods. It is mainly used on route changing or Ajax. In those two situations, operation cannot get the accurate progress rate, so LoadingBar will simulate the progress rate. You can also use <code>update()</code> to pass an accurate progress rate. Details on API Doc.</p>
            <Anchor title="Using in Router" h4></Anchor>
            <i-code bg>{{ code.router }}</i-code>
            <Anchor title="Using in Asynchronous Request" h4></Anchor>
            <i-code bg lang="html">{{ code.ajax }}</i-code>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Button @click="start">Start</Button>
                    <Button @click="finish">Finish</Button>
                    <Button @click="error">Error</Button>
                </div>
                <div slot="desc">
                    <p>Click Start to start loading. Click Finish to complete. When calling <code>start()</code> method, the component will automatically simulate the loading bar. When calling <code>finish()</code> or <code>error()</code> methods, the loading bar will be fulfilled and then disappear.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="LoadingBar instance" h3></Anchor>
                <p>Use the component by calling method below directly.</p>
                <ul>
                    <li>
                        <code>this.$Loading.start()</code>
                    </li>
                    <li>
                        <code>this.$Loading.finish()</code>
                    </li>
                    <li>
                        <code>this.$Loading.error()</code>
                    </li>
                    <li>
                        <code>this.$Loading.update(percent)</code>
                    </li>
                </ul>
                <p>Those methods above create and maintain Vue componenets implicitly. Details on API Doc.</p>
                <table>
                    <thead>
                        <tr>
                            <th>Method Name</th>
                            <th>Description</th>
                            <th>Parameter</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>start</td>
                            <td>Start the loading bar from 0 and automatically simulate the progress rate.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>finish</td>
                            <td>Finish loading bar.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>error</td>
                            <td>Finish loading bar in an error style.</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>update</td>
                            <td>Fill the loading bar to an accurate rate.</td>
                            <td>loading percent</td>
                        </tr>
                    </tbody>
                </table>
                <p>Furthermore, we provide global config and global destroy methods.</p>
                <ul>
                    <li>
                        <code>this.$Loading.config(options)</code>
                    </li>
                    <li>
                        <code>this.$Loading.destroy()</code>
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
                            <td>color</td>
                            <td>Color of the loading bar. Default: iView's main color.</td>
                            <td>String</td>
                            <td>primary</td>
                        </tr>
                        <tr>
                            <td>failedColor</td>
                            <td>Color of the loading bar when finishing with error. Default: iView's main color.</td>
                            <td>String</td>
                            <td>error</td>
                        </tr>
                        <tr>
                            <td>height</td>
                            <td>Height of the loading bar. Unit: px</td>
                            <td>Number</td>
                            <td>2</td>
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
    import Code from '../../code/loading-bar';
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
            start () {
                this.$Loading.start();
            },
            finish () {
                this.$Loading.finish();
            },
            error () {
                this.$Loading.error();
            }
        }
    }
</script>