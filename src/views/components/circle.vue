<style lang="less">
    .demo-circle-custom{
        & h5{
            color: #3f414d;
            font-size: 28px;
            font-weight: normal;
        }
        & p{
            color: #657180;
            font-size: 14px;
            margin: 10px 0 15px;
        }
        & span{
            display: block;
            padding-top: 15px;
            color: #657180;
            font-size: 14px;
            &:before{
                content: '';
                display: block;
                width: 50px;
                height: 1px;
                margin: 0 auto;
                background: #e0e3e6;
                position: relative;
                top: -15px;
            };
        }
        & span i{
            font-style: normal;
            color: #3f414d;
        }
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Circle 进度环</h1>
            <Anchor title="概述" h2></Anchor>
            <p>图表类组件。一般有两种用途：</p>
            <ul>
                <li>显示某项任务进度的百分比；</li>
                <li>统计某些指标的占比。</li>
            </ul>
            <Alert show-icon style="margin-top: 16px" type="warning">注意：没有使用 <router-link to="/docs/guide/iview-loader">iview-loader</router-link> 时，必须使用 <code>i-circle</code> 标签。</Alert>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Row>
                        <Col span="8">
                            <Circle :percent="80">
                                <span class="demo-circle-inner" style="font-size:24px">80%</span>
                            </Circle>
                        </Col>
                        <Col span="8">
                            <Circle :percent="100" stroke-color="#5cb85c">
                                <Icon type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
                            </Circle>
                        </Col>
                        <Col span="8">
                            <Circle :percent="35" stroke-color="#ff5500">
                        <span class="demo-circle-inner">
                            <Icon type="ios-close-empty" size="50" style="color:#ff5500"></Icon>
                        </span>
                            </Circle>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>圆形进度环有一系列的参数可配置，具体可以查看下面的API文档。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="配合外部组件使用">
                <div slot="demo">
                    <Circle :percent="percent" :stroke-color="color">
                        <Icon v-if="percent == 100" type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
                        <span v-else style="font-size:24px">{{ percent }}%</span>
                    </Circle>
                    <ButtonGroup size="large">
                        <Button icon="ios-plus-empty" @click="add"></Button>
                        <Button icon="ios-minus-empty" @click="minus"></Button>
                    </ButtonGroup>
                </div>
                <div slot="desc">
                    <p>通过数据的联动和逻辑控制，实现交互效果。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.percent }}</i-code>
            </Demo>
            <Demo title="自定义更多样式">
                <div slot="demo">
                    <Circle
                        :size="250"
                        :trail-width="4"
                        :stroke-width="5"
                        :percent="75"
                        stroke-linecap="square"
                        stroke-color="#43a3fb">
                        <div class="demo-circle-custom">
                            <h1>42,001,776</h1>
                            <p>消费人群规模</p>
                            <span>
                                总占人数
                                <i>75%</i>
                            </span>
                        </div>
                    </Circle>
                </div>
                <div slot="desc">
                    <p>通过自定义<code>slot</code>和丰富的配置，可以组合出很多统计效果。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.custom }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Circle props" h3></Anchor>
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
                            <td>percent</td>
                            <td>百分比</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>图表的宽度和高度，单位 px</td>
                            <td>Number</td>
                            <td>120</td>
                        </tr>
                        <tr>
                            <td>stroke-linecap</td>
                            <td>进度环顶端的形状，可选值为<code>square</code>（方）和<code>round</code>（圆）</td>
                            <td>String</td>
                            <td>round</td>
                        </tr>
                        <tr>
                            <td>stroke-width</td>
                            <td>进度环的线宽，单位 px</td>
                            <td>Number</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>stroke-color</td>
                            <td>进度环的颜色</td>
                            <td>String</td>
                            <td>#2db7f5</td>
                        </tr>
                        <tr>
                            <td>trail-width</td>
                            <td>进度环背景的线宽，单位 px</td>
                            <td>Number</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>trail-color</td>
                            <td>进度环背景的颜色</td>
                            <td>String</td>
                            <td>#eaeef2</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Circle slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>无</td>
                            <td>自定义显示中间内容，内容默认垂直居中</td>
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
    import Code from '../../code/circle';
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
                percent: 0
            }
        },
        computed: {
            color () {
                let color = '#2db7f5';
                if (this.percent == 100) {
                    color = '#5cb85c';
                }
                return color;
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
        }
    }
</script>