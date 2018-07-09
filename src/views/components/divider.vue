<template>
    <i-article>
        <article>
            <h1>Divider 分隔符</h1>
            <Anchor title="概述" h2></Anchor>
            <Anchor title="使用指南" h2></Anchor>
            <p>在 .json 中引入组件</p>
            <i-code bg lang="json">{{ code.import }}</i-code>
            <Anchor title="示例" h2></Anchor>
            <i-code bg lang="html">{{ code.usage }}</i-code>
            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Divider properties" h3></Anchor>
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
                            <td>content</td>
                            <td>内容，不定义则使用 slot</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>height</td>
                            <td>高度</td>
                            <td>Number</td>
                            <td>48</td>
                        </tr>
                        <tr>
                            <td>color</td>
                            <td>文字颜色</td>
                            <td>String</td>
                            <td>#80848f</td>
                        </tr>
                        <tr>
                            <td>line-color</td>
                            <td>辅助线的颜色</td>
                            <td>String</td>
                            <td>#e9eaec</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>文字大小</td>
                            <td>String</td>
                            <td>12</td>
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
    import Code from '../../code/divider';
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