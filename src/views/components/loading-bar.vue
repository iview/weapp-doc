<template>
    <i-article>
        <article>
            <h1>LoadingBar 加载进度条</h1>
            <Anchor title="概述" h2></Anchor>
            <p>全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。</p>
            <Anchor title="说明" h2></Anchor>
            <p>LoadingBar 只会在全局创建一个，因此在任何位置调用的方法都会控制这同一个组件。主要使用场景是路由切换和Ajax，因为这两者都不能拿到精确的进度，LoadingBar 会模拟进度，当然也可以通过<code>update()</code>方法来传入一个精确的进度，比如在文件上传时会很有用，具体见API。</p>
            <Anchor title="在路由中使用" h4></Anchor>
            <i-code bg>{{ code.router }}</i-code>
            <Anchor title="在异步请求中使用" h4></Anchor>
            <i-code bg lang="html">{{ code.ajax }}</i-code>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基本用法">
                <div slot="demo">
                    <Button @click="start">Start</Button>
                    <Button @click="finish">Finish</Button>
                    <Button @click="error">Error</Button>
                </div>
                <div slot="desc">
                    <p>点击 Start 开始进度，点击 Finish 结束。在调用<code>start()</code>方法后，组件会自动模拟进度，当调用<code>finish()</code>或<code>error()</code>时，补全进度并自动消失。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="LoadingBar instance" h3></Anchor>
                <p>通过直接调用以下方法来使用组件：</p>
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
                <p>以上方法隐式的创建及维护Vue组件。函数及参数说明如下：</p>
                <table>
                    <thead>
                        <tr>
                            <th>函数名</th>
                            <th>说明</th>
                            <th>参数</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>start</td>
                            <td>开始从 0 显示进度条，并自动加载进度</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>finish</td>
                            <td>结束进度条，自动补全剩余进度</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>error</td>
                            <td>以错误的类型结束进度条，自动补全剩余进度</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>update</td>
                            <td>精确加载到指定的进度</td>
                            <td>percent，指定的进度百分比</td>
                        </tr>
                    </tbody>
                </table>
                <p>另外提供了全局配置和全局销毁的方法：</p>
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
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>color</td>
                            <td>进度条的颜色，默认为 iView 主色</td>
                            <td>String</td>
                            <td>primary</td>
                        </tr>
                        <tr>
                            <td>failedColor</td>
                            <td>失败时的进度条颜色，默认为 iView 主色</td>
                            <td>String</td>
                            <td>error</td>
                        </tr>
                        <tr>
                            <td>height</td>
                            <td>进度条高度，单位 px</td>
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