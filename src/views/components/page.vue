<template>
    <i-article>
        <article>
            <h1>Page 分页</h1>
            <Anchor title="概述" h2></Anchor>
            <p>当数据量较多时，使用分页可以快速进行数据切换。</p>
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
                <Anchor title="Panel properties" h3></Anchor>
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
                            <td>mode</td>
                            <td>类型，可选值为 button、number、pointer</td>
                            <td>String</td>
                            <td>button</td>
                        </tr>
                        <tr>
                            <td>current</td>
                            <td>当前页码</td>
                            <td>Number</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>total</td>
                            <td>总页数</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>simple</td>
                            <td>是否隐藏数值</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Page events" h3></Anchor>
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
                        <td>bind:change</td>
                        <td>切换页码时触发，返回 prev 或 next</td>
                        <td>{ type }</td>
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
    import Code from '../../code/page';
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