<style scoped>
    article{
        min-height: 1500px;
    }
    .demo-affix{
        display: inline-block;
        color: #fff;
        padding: 10px 30px;
        text-align: center;
        background: rgba(0, 153, 229, .9);
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Affix 图钉</h1>
            <Anchor title="概述" h2></Anchor>
            <p>使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Affix>
                        <span class="demo-affix">固定在最顶部</span>
                    </Affix>
                </div>
                <div slot="desc">
                    <p>简单使用，当元素不可见时，直接固定在最顶端。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="偏移">
                <div slot="demo">
                    <Affix :offset-top="50">
                        <span class="demo-affix">固定在距离顶部 50px 的位置</span>
                    </Affix>
                </div>
                <div slot="desc">
                    <p>当滚动到一定距离时再固定。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.top }}</i-code>
            </Demo>
            <Demo title="固定在底部">
                <div slot="demo">
                    <Affix :offset-bottom="20">
                        <span class="demo-affix">固定在距离底部 20px 的位置</span>
                    </Affix>
                </div>
                <div slot="desc">
                    <p>在屏幕下方固定，可以通过缩小浏览器窗口高度来查看效果。</p>
                    <p>注意，<code>offset-top</code>和<code>offset-bottom</code>只可以设置一个，如果都设置，会使用<code>offset-top</code>。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.bottom }}</i-code>
            </Demo>
            <Demo title="固定状态改变时的回调">
                <div slot="demo">
                    <Affix :offset-top="100" @on-change="change">
                        <span class="demo-affix">固定在距离顶部 100px 的位置</span>
                    </Affix>
                </div>
                <div slot="desc">
                    <p>当固定状态发生改变时，会触发事件。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.change }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Affix props" h3></Anchor>
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
                            <td>offset-top</td>
                            <td>距离窗口顶部达到指定偏移量后触发</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>offset-bottom</td>
                            <td>距离窗口底部达到指定偏移量后触发</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Affix events" h3></Anchor>
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
                            <td>在固定状态发生改变时触发</td>
                            <td>true | false</td>
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
    import Code from '../../code/affix';
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
            change (status) {
                this.$Message.info(`当前状态：${status}`);
            }
        }
    }
</script>