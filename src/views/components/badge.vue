<style scoped>
    .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
</style>
<style>
    .demo-badge-alone{
        background: #5cb85c !important;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Badge 徽标数</h1>
            <Anchor title="概述" h2></Anchor>
            <p>主要用于通知未读数的角标，提醒用户点击。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Badge count="3">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                </div>
                <div slot="desc">
                    <p>最简单的使用方法。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="小红点">
                <div slot="demo">
                    <Row>
                        <Col span="6">
                            <Badge dot>
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                        </Col>
                        <Col span="6">
                            <Badge dot>
                                <Icon type="ios-bell-outline" size="26"></Icon>
                            </Badge>
                        </Col>
                        <Col span="6">
                            <Badge dot>
                                <a href="#">可以是一个链接</a>
                            </Badge>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>强迫症患者慎用！</p>
                </div>
                <i-code lang="html" slot="code">{{ code.dot }}</i-code>
            </Demo>
            <Demo title="封顶数字">
                <div slot="demo">
                    <Row>
                        <Col span="6">
                            <Badge count="100">
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                        </Col>
                        <Col span="6">
                            <Badge count="1000" overflow-count="999">
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>通过设置<code>overflow-count</code>属性设置一个封顶值，当超过时，会显示<code>${overflowCount}+</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.overflow }}</i-code>
            </Demo>
            <Demo title="独立使用及自定义样式">
                <div slot="demo">
                    <Badge count="10"></Badge>
                    <Badge count="20" class-name="demo-badge-alone"></Badge>
                </div>
                <div slot="desc">
                    <p>可以没有 slot 独立展示。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.alone }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Badge props" h3></Anchor>
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
                            <td>count</td>
                            <td>显示的数字，大于<code>overflowCount</code>时，显示<code>${overflowCount}+</code>，为 0 时隐藏</td>
                            <td>Number | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>overflow-count</td>
                            <td>展示封顶的数字值</td>
                            <td>Number | String</td>
                            <td>99</td>
                        </tr>
                        <tr>
                            <td>dot</td>
                            <td>不展示数字，只有一个小红点，如需隐藏 dot ，需要设置<code>count</code>为 0 </td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>class-name</td>
                            <td>自定义的class名称，dot 模式下无效</td>
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
        },
        methods: {

        }
    }
</script>