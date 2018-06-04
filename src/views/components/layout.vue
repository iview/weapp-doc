<template>
    <i-article>
        <article>
            <h1>Layout 栅格布局</h1>
            <Anchor title="概述" h2></Anchor>
            <p>我们采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。</p>
            <p>我们定义了两个概念，行<code>row</code>和列<code>col</code>，具体使用方法如下：</p>
            <ul>
                <li>使用<code>i-row</code>在水平方向创建一行</li>
                <li>将一组<code>i-col</code>插入在<code>i-row</code>中</li>
                <li>在每个<code>i-col</code>中，键入自己的内容</li>
                <li>通过设置<code>i-col</code>的<code>span</code>参数，指定跨越的范围，其范围是1到24</li>
                <li>每个<code>i-row</code>中的<code>i-col</code>总和应该为24</li>
            </ul>
            <Anchor title="使用指南" h2></Anchor>
            <p>在 .json 中引入组件</p>
            <i-code bg lang="json">{{ code.import }}</i-code>
            <Anchor title="示例" h2></Anchor>
            <i-code bg lang="html">{{ code.usage }}</i-code>
            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Row props" h3></Anchor>
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
                <Anchor title="Col props" h3></Anchor>
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
                            <td>span</td>
                            <td>栅格的占位格数，可选值为0~24的整数，为 0 时，相当于<code>display:none</code></td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>offset</td>
                            <td>栅格左侧的间隔格数，间隔内不可以有栅格</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>i-class</td>
                            <td>自定义 class 类名</td>
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
    import Code from '../../code/layout';
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