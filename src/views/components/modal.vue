<template>
    <i-article>
        <article>
            <h1>Modal 对话框</h1>
            <Anchor title="概述" h2></Anchor>
            <p>模态对话框，在浮层中显示，引导用户进行相关操作。</p>
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
                <Anchor title="Modal properties" h3></Anchor>
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
                            <td>visible</td>
                            <td>是否显示组件</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>标题</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>show-ok</td>
                            <td>是否显示确定按钮</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>show-cancel</td>
                            <td>是否显示取消按钮</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>ok-text</td>
                            <td>确定按钮的文案</td>
                            <td>String</td>
                            <td>确定</td>
                        </tr>
                        <tr>
                            <td>cancel-text</td>
                            <td>取消按钮的文案</td>
                            <td>String</td>
                            <td>取消</td>
                        </tr>
                        <tr>
                            <td>actions</td>
                            <td>按钮组，具体项参照后面的表格，设置此值后，则默认的确定和取消按钮不予显示</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>action-mode</td>
                            <td>按钮的排列方向，可选值为 horizontal 或 vertical</td>
                            <td>String</td>
                            <td>horizontal</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Modal events" h3></Anchor>
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
                        <td>bind:click</td>
                        <td>点击某个按钮时触发，返回按钮所在 actions 中的索引</td>
                        <td>{ index }</td>
                    </tr>
                    <tr>
                        <td>bind:ok</td>
                        <td>点击确定按钮时触发</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>bind:cancel</td>
                        <td>点击取消按钮时触发</td>
                        <td>-</td>
                    </tr>
                    </tbody>
                </table>
                <Anchor title="Modal actions" h3></Anchor>
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
                        <td>name</td>
                        <td>按钮文案</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>按钮图标</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>color</td>
                        <td>按钮文字的颜色</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>loading</td>
                        <td>按钮是否显示为加载中</td>
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
    import Code from '../../code/modal';
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