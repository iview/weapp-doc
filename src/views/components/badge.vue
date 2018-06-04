<template>
    <i-article>
        <article>
            <h1>Badge 徽标数</h1>
            <Anchor title="概述" h2></Anchor>
            <p>主要用于通知未读数的角标，提醒用户点击。</p>
            <Anchor title="使用指南" h2></Anchor>
            <p>在 .json 中引入组件</p>
            <i-code bg lang="json">{{ code.import }}</i-code>
            <Anchor title="示例" h2></Anchor>
            <i-code bg lang="html">{{ code.usage }}</i-code>
            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Badge properties" h3></Anchor>
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
                            <td>i-class-alone</td>
                            <td>自定义 alone 类名</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>count</td>
                            <td>显示的数字，大于 overflowCount 时，显示 ${overflowCount}+，为 0 时隐藏</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>overflow-count</td>
                            <td>展示封顶的数字值</td>
                            <td>Number</td>
                            <td>99</td>
                        </tr>
                        <tr>
                            <td>dot</td>
                            <td>不展示数字，只有一个小红点，如需隐藏 dot ，需要设置 count 为 0</td>
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
    import Code from '../../code/badge';
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