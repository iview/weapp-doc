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
            <h1>Circle</h1>
            <Anchor title="Overview" h2></Anchor>
            <p>Circular progress bar. When to use:</p>
            <ul>
                <li>To display the current progress of an operation flow.</li>
                <li>To display the percentage of some indexes.</li>
            </ul>
            <Alert show-icon style="margin-top: 16px" type="warning">Warning: If you don't use <router-link to="/docs/guide/iview-loader-en">iview-loader</router-link>, you have to use <code>i-circle</code> tag.</Alert>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
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
                    <p>Circle has many modifiable attributes. Check out the details at the bottom.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="With Other Components">
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
                    <p>Circle can interact with other useful components, such as update the value dynamically.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.percent }}</i-code>
            </Demo>
            <Demo title="Customize">
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
                    <p>You can customize inner content by <code>slot</code>.</p>
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
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>percent</td>
                            <td>Completion percentage.</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>Size (i.e. width and height) of circular progress bar in px.</td>
                            <td>Number</td>
                            <td>120</td>
                        </tr>
                        <tr>
                            <td>stroke-linecap</td>
                            <td>Shape of cap, options: <code>square</code>, <code>round</code>.</td>
                            <td>String</td>
                            <td>round</td>
                        </tr>
                        <tr>
                            <td>stroke-width</td>
                            <td>Width of the line in px.</td>
                            <td>Number</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>stroke-color</td>
                            <td>Color of the line.</td>
                            <td>String</td>
                            <td>#2db7f5</td>
                        </tr>
                        <tr>
                            <td>trail-width</td>
                            <td>Width of unfilled circle in px</td>
                            <td>Number</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>trail-color</td>
                            <td>Color of unfilled circle.</td>
                            <td>String</td>
                            <td>#eaeef2</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Circle slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>—</td>
                            <td>Customized inner content. Be vertically centered by default.</td>
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
