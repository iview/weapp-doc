<template>
    <i-article>
        <article>
            <h1>Collapse 折叠面板</h1>
            <Anchor title="概述" h2></Anchor>
            <p>将内容区域折叠/展开。</p>
            <Anchor title="使用指南" h2></Anchor>
            <p>在 .json 中引入组件</p>
            <i-code bg lang="json">{{ code.import }}</i-code>
            <Anchor title="示例" h2></Anchor>
            <i-code bg lang="html">{{ code.usage }}</i-code>
            <br><br>
            <i-code bg lang="js">{{ code.js }}</i-code>
            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Collapse properties" h3></Anchor>
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
                            <td>name</td>
                            <td>当前展开的面板的 name</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>accordion</td>
                            <td>是否为手风琴模式</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="CollapseItem properties" h3></Anchor>
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
                        <td>i-class-title</td>
                        <td>自定义标题类名</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>i-class-content</td>
                        <td>自定义内容类名</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>name</td>
                        <td>当前面板的标识</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>当前面板的标题</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    </tbody>
                </table>
                <Anchor title="CollapseItem slots" h3></Anchor>
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
    import Code from '../../code/collapse';
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