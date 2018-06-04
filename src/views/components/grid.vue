<template>
    <i-article>
        <article>
            <h1>Grid 宫格</h1>
            <Anchor title="概述" h2></Anchor>
            <p>基础宫格布局。每行 3 个宫格使用最佳。</p>
            <p>宫格共包含 4 个组件：i-grid、i-grid-item、i-grid-icon、i-grid-label，其中，i-grid-icon 和 i-grid-label 默认定制好了样式，但在开发中也可不用这两个组件。</p>
            <Anchor title="使用指南" h2></Anchor>
            <p>在 .json 中引入组件</p>
            <i-code bg lang="json">{{ code.import }}</i-code>
            <Anchor title="示例" h2></Anchor>
            <i-code bg lang="html">{{ code.usage }}</i-code>
            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Grid properties" h3></Anchor>
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
                    </tbody>
                </table>
                <Anchor title="GridItem properties" h3></Anchor>
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
                    </tbody>
                </table>
                <Anchor title="GridIcon properties" h3></Anchor>
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
                    </tbody>
                </table>
                <Anchor title="GridLabel properties" h3></Anchor>
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
    import Code from '../../code/grid';
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