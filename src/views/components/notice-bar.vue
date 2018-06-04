<template>
    <i-article>
        <article>
            <h1>NoticeBar 通告栏</h1>
            <Anchor title="使用指南" h2></Anchor>
            <p>在 .json 中引入组件</p>
            <i-code bg lang="json">{{ code.import }}</i-code>
            <Anchor title="示例" h2></Anchor>
            <i-code bg lang="html">{{ code.usage }}</i-code>
            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="NoticeBar properties" h3></Anchor>
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
                            <td>i-class</td>
                            <td>自定义 class 类名</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>closable</td>
                            <td>是否显示关闭按钮</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>自定义图标</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>loop</td>
                            <td>文字是否滚动显示</td>
                            <td>Boolean</td>
                            <td>false</td>
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
    import Code from '../../code/notice-bar';
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
        }
    }
</script>