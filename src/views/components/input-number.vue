<template>
    <i-article>
        <article>
            <h1>InputNumber 数字输入框</h1>
            <Anchor title="概述" h2></Anchor>
            <p>输入一定范围的标准数值。</p>
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
                <Anchor title="InputNumber properties" h3></Anchor>
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
                            <td>value</td>
                            <td>当前值</td>
                            <td>Number</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>max</td>
                            <td>最大值</td>
                            <td>Number</td>
                            <td>Infinity</td>
                        </tr>
                        <tr>
                            <td>min</td>
                            <td>最小值</td>
                            <td>Number</td>
                            <td>-Infinity</td>
                        </tr>
                        <tr>
                            <td>step</td>
                            <td>每次改变的步伐，可以是小数</td>
                            <td>Number</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="InputNumber events" h3></Anchor>
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
                        <td>当绑定值变化时触发的事件</td>
                        <td>{ value, type }</td>
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
    import Code from '../../code/input-number';
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