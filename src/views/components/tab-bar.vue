<template>
    <i-article>
        <article>
            <h1>TabBar 面板</h1>
            <Anchor title="概述" h2></Anchor>
            <p>位于 APP 底部，方便用户在不同功能模块之间进行快速切换。</p>
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
                <Anchor title="TabBar properties" h3></Anchor>
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
                            <td>当前所在的标签的 key 值</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>color</td>
                            <td>主题色</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>fixed</td>
                            <td>是否固定在底部</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="TabBar events" h3></Anchor>
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
                        <td>切换标签时触发</td>
                        <td>{ key }</td>
                    </tr>
                    </tbody>
                </table>
                <Anchor title="TabBarItem properties" h3></Anchor>
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
                        <td>icon</td>
                        <td>图标</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>current-icon</td>
                        <td>当前面板被选中时的图标</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>key</td>
                        <td>面板的唯一标识</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>名称</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>dot</td>
                        <td>是否显示小红点</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>count</td>
                        <td>徽标数</td>
                        <td>Number</td>
                        <td>0</td>
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
    import Code from '../../code/tab-bar';
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