<template>
    <i-article>
        <article>
            <h1>Toast 轻提示</h1>
            <Anchor title="概述" h2></Anchor>
            <p>一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。</p>
            <Anchor title="使用指南" h2></Anchor>
            <p>在 .json 中引入组件</p>
            <i-code bg lang="json">{{ code.import }}</i-code>
            <Anchor title="示例" h2></Anchor>
            <Alert show-icon>
                <div slot="desc">
                    <p>Toast 组件主要依靠 JavaScript 主动调用，所以只需在 wxml 中添加一个组件，并设置 id，其余配置在 .js 里完成。</p>
                    <p>如果只有一个 Toast 组件，建议将 id 设置为 #toast，否则需要额外配置 selector 属性来指定。</p>
                </div>
            </Alert>
            <i-code bg lang="html">{{ code.usage }}</i-code>
            <br><br>
            <i-code bg lang="js">{{ code.js }}</i-code>
            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="$Toast properties" h3></Anchor>
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
                            <td>content</td>
                            <td>内容</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>内置的类型，可选值为 default、success、warning、error、loading</td>
                            <td>String</td>
                            <td>default</td>
                        </tr>
                        <tr>
                            <td>duration</td>
                            <td>持续时间，单位秒，设置为 0 则不自动关闭，需调用 $Toast.hide() 方法手动关闭</td>
                            <td>Number</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>自定义图标</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>image</td>
                            <td>自定义图片地址</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>mask</td>
                            <td>是否显示一个隐藏的遮罩层，点击遮罩层可立即关闭组件</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>selector</td>
                            <td>组件标识</td>
                            <td>String</td>
                            <td>#toast</td>
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
    import Code from '../../code/toast';
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