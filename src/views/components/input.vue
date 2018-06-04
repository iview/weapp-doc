<template>
    <i-article>
        <article>
            <h1>Input 输入框</h1>
            <Anchor title="概述" h2></Anchor>
            <p>基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。</p>
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
                <Anchor title="Input properties" h3></Anchor>
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
                            <td>title</td>
                            <td>输入框左侧标题，若传入为空，则不显示标题</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>输入框类型，可选值为 text、textarea、password、number</td>
                            <td>String</td>
                            <td>text</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>设置输入框为禁用状态</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>占位文本</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>autofocus</td>
                            <td>自动获取焦点</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>mode</td>
                            <td>输入框展示样式，可选值为 wrapped, normal</td>
                            <td>String</td>
                            <td>normal</td>
                        </tr>
                        <tr>
                            <td>right</td>
                            <td>输入框内容是否居右显示</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>error</td>
                            <td>是否显示为输入框错误情况下的样式</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>maxlength</td>
                            <td>最大输入长度</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Input events" h3></Anchor>
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
                        <td>event</td>
                    </tr>
                    <tr>
                        <td>bind:focus</td>
                        <td>输入框 focus</td>
                        <td>event</td>
                    </tr>
                    <tr>
                        <td>bind:blur</td>
                        <td>输入框 blur</td>
                        <td>event</td>
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
    import Code from '../../code/input';
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