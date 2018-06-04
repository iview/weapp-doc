<template>
    <i-article>
        <article>
            <h1>Steps 步骤条</h1>
            <Anchor title="概述" h2></Anchor>
            <p>拆分某项流程的步骤，引导用户按流程完成任务。</p>
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
                <Anchor title="Steps properties" h3></Anchor>
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
                            <td>current</td>
                            <td>当前步骤，从 0 开始计数</td>
                            <td>Number</td>
                            <td>-1</td>
                        </tr>
                        <tr>
                            <td>status</td>
                            <td>当前步骤的状态，可选值为 wait、process、finish、error</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>direction</td>
                            <td>步骤条的方向，可选值为 horizontal（水平）或 vertical（垂直）</td>
                            <td>String</td>
                            <td>horizontal</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Step properties" h3></Anchor>
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
                        <td>status</td>
                        <td>步骤的状态，可选值为 wait、process、finish、error，不设置时自动判断</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>标题</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>content</td>
                        <td>步骤的详细描述，可选</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>步骤的图标，可选</td>
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
    import Code from '../../code/steps';
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