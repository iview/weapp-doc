<template>
    <i-article>
        <article>
            <h1>Swipeout 滑动菜单</h1>
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
                <Anchor title="Swipeout properties" h3></Anchor>
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
                            <td>actions</td>
                            <td>按钮组，具体项参照后面的表格</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>unclosable</td>
                            <td>点击菜单时，是否收起</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>toggle</td>
                            <td>当此值由 false 转为 true 时，收起菜单</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>operate-width</td>
                            <td>菜单项的总宽度</td>
                            <td>Number</td>
                            <td>160</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Swipeout events" h3></Anchor>
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
                        <td>点击菜单项时触发</td>
                        <td>index</td>
                    </tr>
                    </tbody>
                </table>
                <Anchor title="Swipeout slot" h3></Anchor>
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
                        <td>菜单内容</td>
                    </tr>
                    <tr>
                        <td>button</td>
                        <td>自定义按钮组</td>
                    </tr>
                    </tbody>
                </table>
                <Anchor title="Swipeout actions" h3></Anchor>
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
                        <td>fontsize</td>
                        <td>字号</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>width</td>
                        <td>宽度</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>background</td>
                        <td>背景色</td>
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
    import Code from '../../code/swipeout';
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