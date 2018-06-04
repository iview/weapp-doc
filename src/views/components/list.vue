<template>
    <i-article>
        <article>
            <h1>List 列表</h1>
            <Anchor title="概述" h2></Anchor>
            <p>基础布局组件。</p>
            <Anchor title="使用指南" h2></Anchor>
            <p>在 .json 中引入组件</p>
            <i-code bg lang="json">{{ code.import }}</i-code>
            <Anchor title="示例" h2></Anchor>
            <i-code bg lang="html">{{ code.usage }}</i-code>
            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="CellGroup properties" h3></Anchor>
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
                <Anchor title="Cell properties" h3></Anchor>
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
                            <td>左侧标题</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>标题下方的描述信息</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>右侧内容</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>only-tap-footer</td>
                            <td>只有点击 footer 区域才触发 tab 事件</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>is-link</td>
                            <td>是否展示右侧箭头并开启尝试以 url 跳转</td>
                            <td>null</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>url</td>
                            <td>当 isLink 设置为 true 时，点击 cell 会尝试跳转到该路径</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>link-type</td>
                            <td>链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch</td>
                            <td>String</td>
                            <td>navigateTo</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Cell events" h3></Anchor>
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
                            <td>点击 cell 时触发，onlyTapFooter 为 true 时点击 footer 区域触发</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Cell slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>默认</td>
                            <td>自定义内容</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>标题前自定义的 icon，可使用 icon 自定义组件，具体使用参考 icon 组件</td>
                        </tr>
                        <tr>
                            <td>footer</td>
                            <td>右侧自定义 wxml 内容，如果设置了 value 属性，则不生效</td>
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
    import Code from '../../code/list';
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