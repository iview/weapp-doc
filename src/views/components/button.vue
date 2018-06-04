<template>
    <i-article>
        <article>
            <h1>Button 按钮</h1>
            <Anchor title="概述" h2></Anchor>
            <p>基础组件，触发业务逻辑时使用。</p>
            <Anchor title="使用指南" h2></Anchor>
            <p>在 .json 中引入组件</p>
            <i-code bg lang="json">{{ code.import }}</i-code>
            <Anchor title="示例" h2></Anchor>
            <i-code bg lang="html">{{ code.usage }}</i-code>
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
                            <td>type</td>
                            <td>按钮类型，可选值为 default, primary, ghost, info, success, warning, error 或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>按钮大小，可选值为 large、small、default 或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>shape</td>
                            <td>按钮形状，可选值为 circle 和 square</td>
                            <td>String</td>
                            <td>square</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>设置按钮为禁用状态</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>loading</td>
                            <td>设置按钮为加载中状态</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>long</td>
                            <td>开启后，按钮没有间距</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>open-type</td>
                            <td>微信开放能力</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>app-parameter</td>
                            <td>打开 APP 时，向 APP 传递的参数</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>hover-start-time</td>
                            <td>按住后多久出现点击态，单位毫秒</td>
                            <td>Number</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>hover-stay-time</td>
                            <td>手指松开后点击态保留时间，单位毫秒</td>
                            <td>Number</td>
                            <td>70</td>
                        </tr>
                        <tr>
                            <td>session-from</td>
                            <td>会话来源</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>send-message-title</td>
                            <td>会话内消息卡片标题</td>
                            <td>String</td>
                            <td>当前标题</td>
                        </tr>
                        <tr>
                            <td>send-message-path</td>
                            <td>会话内消息卡片点击跳转小程序路径</td>
                            <td>String</td>
                            <td>当前分享路径</td>
                        </tr>
                        <tr>
                            <td>send-message-img</td>
                            <td>会话内消息卡片图片</td>
                            <td>String</td>
                            <td>截图</td>
                        </tr>
                        <tr>
                            <td>send-message-card</td>
                            <td>显示会话内消息卡片</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Button events" h3></Anchor>
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
                        <td>按钮在可用状态被点击时触发</td>
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
    import Code from '../../code/button';
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