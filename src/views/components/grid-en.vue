<style scoped>
    .demo-row{
        margin-bottom: 5px;
        background-image: -webkit-linear-gradient(0deg, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);
        background-image: linear-gradient(90deg, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);
    }
    .demo-col{
        color: #fff;
        padding: 30px 0;
        text-align: center;
        font-size: 18px;
        background: rgba(0, 153, 229, .7);
    }
    .demo-col.light{
        background: rgba(0, 153, 229, .5);
    }
    .demo-row.light .demo-col{
        background: rgba(0, 153, 229, .5);
    }
    .demo-row.light .demo-col.light{
        background: rgba(0, 153, 229, .3);
    }

    .example-demo .ivu-col, .example-demo .ivu-col div{
        color: #fff;
        padding: 10px 0;
        text-align: center;
        background: rgba(0, 153, 229, .9);
    }
    .example-demo .gutter .ivu-col{
        background: transparent !important;
    }
    .example-demo  .ivu-col:nth-child(odd), .example-demo  .ivu-col:nth-child(odd) div{
        background: rgba(0, 153, 229, .7);
    }

    .code-row-bg{
        background: rgba(0,0,0,.05);
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Grid</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <Row class-name="demo-row">
                <Col :span="24" class-name="demo-col">24：100%</Col>
            </Row>
            <Row class-name="demo-row light">
                <Col :span="12" class-name="demo-col">12：50%</Col>
                <Col :span="12" class-name="demo-col light">12：50%</Col>
            </Row>
            <Row class-name="demo-row">
                <Col :span="8" class-name="demo-col">8：33.33%</Col>
                <Col :span="8" class-name="demo-col light">8：33.33%</Col>
                <Col :span="8" class-name="demo-col">8：33.33%</Col>
            </Row>
            <Row class-name="demo-row light">
                <Col :span="6" class-name="demo-col">6：25%</Col>
                <Col :span="6" class-name="demo-col light">6：25%</Col>
                <Col :span="6" class-name="demo-col">6：25%</Col>
                <Col :span="6" class-name="demo-col light">6：25%</Col>
            </Row>
            <Row class-name="demo-row">
                <Col :span="16" class-name="demo-col">16：66.66%</Col>
                <Col :span="8" class-name="demo-col light">8：33.33%</Col>
            </Row>
            <p>We use a 24 aliquot system divided into equal parts.</p>
            <p>We defined two concepts: rows (<code>row</code>) and columns (<code>col</code>). They can be used in the following ways:</p>
            <ul>
                <li>Use <code>row</code> to create a horizontal container</li>
                <li>Insert a <code>col</code> inside a <code>row</code></li>
                <li>Insert your own content in each <code>col</code></li>
                <li>Setting the <code>span</code> parameter for <code>col</code> will define the span range, ranging from 1 to 24</li>
                <li>The sum of <code>col</code>s in each <code>row</code> should equal to 24</li>
            </ul>
            <Alert show-icon style="margin-top: 16px">Note: In a non template/render pattern, it is necessary to use <code>i-col</code>.</Alert>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Row>
                        <Col span="12">col-12</Col>
                        <Col span="12">col-12</Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="8">col-8</Col>
                        <Col span="8">col-8</Col>
                        <Col span="8">col-8</Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="6">col-6</Col>
                        <Col span="6">col-6</Col>
                        <Col span="6">col-6</Col>
                        <Col span="6">col-6</Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>Horizontal arrangement of the layout.</p>
                    <p><code>col</code> must be placed inside <code>row</code>. </p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>

            <Demo title="Grid Gutter">
                <div slot="demo" class="gutter">
                    <Row :gutter="16">
                        <Col span="6">
                            <div>col-6</div>
                        </Col>
                        <Col span="6">
                            <div>col-6</div>
                        </Col>
                        <Col span="6">
                            <div>col-6</div>
                        </Col>
                        <Col span="6">
                            <div>col-6</div>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>Adding <code>gutter</code> property to a <code>row</code> will add spacing to subordinate <code>col</code>s. A gutter of <code>(16+8n)px</code> is recommended for grid spacing.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.gutter }}</i-code>
            </Demo>

            <Demo title="Flex Order">
                <div slot="demo">
                    <Row type="flex">
                        <Col span="6" order="4">1 | order-4</Col>
                        <Col span="6" order="3">2 | order-3</Col>
                        <Col span="6" order="2">3 | order-2</Col>
                        <Col span="6" order="1">4 | order-1</Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>Use Flex's <code>order</code> to change the layout order.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.order }}</i-code>
            </Demo>

            <Demo title="Grid Sort">
                <div slot="demo">
                    <Row>
                        <Col span="18" push="6">col-18 | push-6</Col>
                        <Col span="6" pull="18">col-6 | pull-18</Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>Using <code>push</code> and <code>pull</code> will change the column's order.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.push }}</i-code>
            </Demo>

            <Demo title="Column Offset">
                <div slot="demo">
                    <Row>
                        <Col span="8">col-8</Col>
                        <Col span="8" offset="8">col-8 | offset-8</Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="6" offset="8">col-6 | offset-8</Col>
                        <Col span="6" offset="4">col-6 | offset-4</Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="12" offset="8">col-12 | offset-8</Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>Using the <code>offset</code> property will set the column's left or right offset.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.offset }}</i-code>
            </Demo>

            <Demo title="Flex Layout">
                <div slot="demo">
                    <p>Align child element to the left</p>
                    <Row type="flex" justify="start" class="code-row-bg">
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                    </Row>
                    <p>Align child element to the right</p>
                    <Row type="flex" justify="end" class="code-row-bg">
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                    </Row>
                    <p>Align child element to the center</p>
                    <Row type="flex" justify="center" class="code-row-bg">
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                    </Row>
                    <p>Child element with equal arrangement</p>
                    <Row type="flex" justify="space-between" class="code-row-bg">
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                    </Row>
                    <p>Scattered child elements</p>
                    <Row type="flex" justify="space-around" class="code-row-bg">
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>Passing <code>justify</code> property to <code>row</code> will set the child element's arrangement. Effective when using <code>flex</code>.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.justify }}</i-code>
            </Demo>

            <Demo title="Flex Alignment">
                <div slot="demo">
                    <p>Align Top</p>
                    <Row type="flex" justify="center" align="top" class="code-row-bg">
                        <Col span="4"><p style="height: 80px">col-4</p></Col>
                        <Col span="4"><p style="height: 30px">col-4</p></Col>
                        <Col span="4"><p style="height: 100px">col-4</p></Col>
                        <Col span="4"><p style="height: 60px">col-4</p></Col>
                    </Row>
                    <p>Align Bottom</p>
                    <Row type="flex" justify="center" align="bottom" class="code-row-bg">
                        <Col span="4"><p style="height: 80px">col-4</p></Col>
                        <Col span="4"><p style="height: 30px">col-4</p></Col>
                        <Col span="4"><p style="height: 100px">col-4</p></Col>
                        <Col span="4"><p style="height: 60px">col-4</p></Col>
                    </Row>
                    <p>Align Center</p>
                    <Row type="flex" justify="center" align="middle" class="code-row-bg">
                        <Col span="4"><p style="height: 80px">col-4</p></Col>
                        <Col span="4"><p style="height: 30px">col-4</p></Col>
                        <Col span="4"><p style="height: 100px">col-4</p></Col>
                        <Col span="4"><p style="height: 60px">col-4</p></Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>Passing <code>align</code> to <code>row</code> will align child elements vertically. Effective when using <code>flex</code>.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.align }}</i-code>
            </Demo>

            <Demo title="Responsive Layout">
                <div slot="demo">
                    <Row>
                        <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
                        <Col :xs="20" :sm="16" :md="12" :lg="8">Col</Col>
                        <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>Refer to Bootstrap's <a href="http://getbootstrap.com/css/#grid-media-queries" target="_blank">responsive design</a> using 4 preset definitions: <code>xs</code> <code>sm</code> <code>md</code> <code>lg</code>. See also API section</p>
                    <p>Adjust your browser's dimensions to see the effect.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.reponsive }}</i-code>
            </Demo>

            <Demo title="Other Responsive Properties">
                <div slot="demo">
                    <Row>
                        <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
                        <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
                        <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p><code>span</code> <code>pull</code> <code>push</code> <code>offset</code> <code>order</code> properties can be used with <code>xs</code> <code>sm</code> <code>md</code> <code>lg</code>.</p>
                    <p><code>:xs="6"</code> would equal to <code>:xs="{ span: 6 }"</code>.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.reponsive2 }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Row props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Decsription</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>gutter</td>
                            <td>Grid spacing in pixels, split equally left and right</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>Layout mode. Can optionally make use of <code>flex</code> in a modern browser.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>align</td>
                            <td>Vertical alignment of flex layout. You can choose between <code>top</code>, <code>middle</code>, <code>bottom</code></td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>justify</td>
                            <td>Horizontal arrangement of flex layout. You can choose between <code>start</code>, <code>end</code>, <code>center</code>, <code>space-around</code>, <code>space-between</code></td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>class-name</td>
                            <td>custom defined class's name</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Col props" h3></Anchor>
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
                            <td>span</td>
                            <td>Column span. Value can be between 0 and 24. When 0, it equals to <code>display:none</code></td>
                            <td>Number | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>order</td>
                            <td>Grid order when using <code>flex</code> layout.</td>
                            <td>Number | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>offset</td>
                            <td>Number of cells to the left of grid spacing. No cells can be inside the grid spacing.</td>
                            <td>Number | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>push</td>
                            <td>Number of cells to move to the right</td>
                            <td>Number | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>pull</td>
                            <td>Number of cells to move to the left</td>
                            <td>Number | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>class-name</td>
                            <td>Custom defined class's name</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>xs</td>
                            <td><code><768px</code> can be a span value or an object containing props</td>
                            <td>Number | Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>sm</td>
                            <td><code>≥768px</code> can be a span value or an object containing props</td>
                            <td>Number | Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>md</td>
                            <td><code>≥992px</code> can be a span value or an object containing props</td>
                            <td>Number | Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>lg</td>
                            <td><code>≥1200px</code> can be a span value or an object containing props</td>
                            <td>Number | Object</td>
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
    import Code from '../../code/grid';
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