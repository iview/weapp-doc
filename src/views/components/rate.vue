<template>
    <i-article>
        <article>
            <h1>Rate 评分</h1>
            <Anchor title="概述" h2></Anchor>
            <p>对事物进行快速的评级操作，或对评价进行展示。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Rate v-model="value"></Rate>
                </div>
                <div slot="desc">
                    <p>基本用法。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="半星">
                <div slot="demo">
                    <Rate allow-half v-model="valueHalf"></Rate>
                </div>
                <div slot="desc">
                    <p>设置属性 <code>allow-half</code> 可以选中半星。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.half }}</i-code>
            </Demo>
            <Demo title="显示提示">
                <div slot="demo">
                    <Row>
                        <Col span="12">
                            <Rate show-text v-model="valueText"></Rate>
                        </Col>
                        <Col span="12">
                            <Rate show-text allow-half v-model="valueCustomText">
                                <span style="color: #f5a623">{{ valueCustomText }}</span>
                            </Rate>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>设置属性 <code>show-text</code> 可以显示提示文字。</p>
                    <p>提示内容也可以通过 slot 自定义。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.text }}</i-code>
            </Demo>
            <Demo title="只读">
                <div slot="demo">
                    <Rate disabled v-model="valueDisabled"></Rate>
                </div>
                <div slot="desc">
                    <p>设置属性 <code>disabled</code> 开启只读模式，无法交互。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Rate props" h3></Anchor>
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
                            <td>star 总数</td>
                            <td>Number</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>当前 star 数，可以使用 v-model 双向绑定数据</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>allow-half</td>
                            <td>是否允许半选</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否只读，无法进行交互</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-text</td>
                            <td>是否显示提示文字</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>clearable</td>
                            <td>是否可以取消选择</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Rate events" h3></Anchor>
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
                            <td>on-change</td>
                            <td>评分改变时触发</td>
                            <td>value</td>
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
    import Code from '../../code/rate';
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
                code: Code,
                value: 0,
                valueHalf: 2.5,
                valueText: 3,
                valueCustomText: 3.8,
                valueDisabled: 2
            }
        },
        methods: {

        }
    };
</script>