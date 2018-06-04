<template>
    <i-article>
        <article>
            <h1>Card 卡片</h1>
            <Anchor title="概述" h2></Anchor>
            <p>基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。</p>
            <Anchor title="使用指南" h2></Anchor>
            <p>在 .json 中引入组件</p>
            <i-code bg lang="json">{{ code.import }}</i-code>
            <Anchor title="示例" h2></Anchor>
            <i-code bg lang="html">{{ code.usage }}</i-code>
            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Card properties" h3></Anchor>
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
                            <td>full</td>
                            <td>是否通栏</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>thumb</td>
                            <td>左侧缩略图</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>卡片标题</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>extra</td>
                            <td>额外内容</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Card slot" h3></Anchor>
                <table>
                    <thead>
                    <tr>
                        <th>名称</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>content</td>
                        <td>内容</td>
                    </tr>
                    <tr>
                        <td>footer</td>
                        <td>尾部内容</td>
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
    import Code from '../../code/card';
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