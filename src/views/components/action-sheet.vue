<template>
    <i-article>
        <article>
            <h1>ActionSheet 动作面板</h1>
            <Anchor title="概述" h2></Anchor>
            <p>从底部弹出的模态框，提供和当前场景相关的 2 个以上的操作动作，也支持提供标题和描述。内置固定的展示样式、不支持特别灵活的修改。</p>
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
                <Anchor title="ActionSheet properties" h3></Anchor>
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
                            <td>i-class-mask</td>
                            <td>自定义 遮罩层 类名</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>i-class-header</td>
                            <td>自定义 标题栏 类名</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>visible</td>
                            <td>是否显示组件</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>mask-closable</td>
                            <td>点击遮罩层是否可以关闭组件</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>show-cancel</td>
                            <td>是否显示取消按钮</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>cancel-text</td>
                            <td>取消按钮的文案</td>
                            <td>String</td>
                            <td>取消</td>
                        </tr>
                        <tr>
                            <td>actions</td>
                            <td>按钮组，具体项参照后面的表格</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="ActionSheet events" h3></Anchor>
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
                        <td>bind:cancel</td>
                        <td>点击关闭或遮罩层时触发</td>
                        <td>-</td>
                    </tr>
                    </tbody>
                </table>
                <Anchor title="ActionSheet slot" h3></Anchor>
                <table>
                    <thead>
                    <tr>
                        <th>名称</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>header</td>
                        <td>标题栏，可以添加提示信息</td>
                    </tr>
                    </tbody>
                </table>
                <Anchor title="ActionSheet actions" h3></Anchor>
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
                        <td>loading</td>
                        <td>按钮是否显示为加载中</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>openType</td>
                        <td>按钮的微信开放能力</td>
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
    import Code from '../../code/action-sheet';
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