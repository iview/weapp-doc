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
            <h1>Grid 栅格</h1>
            <Anchor title="概述" h2></Anchor>
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
            <p>我们采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。</p>
            <p>我们定义了两个概念，行<code>row</code>和列<code>col</code>，具体使用方法如下：</p>
            <ul>
                <li>使用<code>row</code>在水平方向创建一行</li>
                <li>将一组<code>col</code>插入在<code>row</code>中</li>
                <li>在每个<code>col</code>中，键入自己的内容</li>
                <li>通过设置<code>col</code>的<code>span</code>参数，指定跨越的范围，其范围是1到24</li>
                <li>每个<code>row</code>中的<code>col</code>总和应该为24</li>
            </ul>
            <Alert show-icon style="margin-top: 16px">注意：非 template/render 模式下，需使用 <code>i-col</code>。</Alert>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
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
                    <p>水平排列的布局。</p>
                    <p><code>col</code>必须放在<code>row</code>里面。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>

            <Demo title="区块间隔">
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
                    <p>通过给 <code>row</code> 添加 <code>gutter</code> 属性，可以给下属的 <code>col</code> 添加间距，推荐使用 <code>(16+8n)px</code> 作为栅格间隔。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.gutter }}</i-code>
            </Demo>

            <Demo title="栅格顺序(Flex)">
                <div slot="demo">
                    <Row type="flex">
                        <Col span="6" order="4">1 | order-4</Col>
                        <Col span="6" order="3">2 | order-3</Col>
                        <Col span="6" order="2">3 | order-2</Col>
                        <Col span="6" order="1">4 | order-1</Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>通过 Flex 布局的<code>order</code>来改变栅格的顺序。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.order }}</i-code>
            </Demo>

            <Demo title="栅格排序">
                <div slot="demo">
                    <Row>
                        <Col span="18" push="6">col-18 | push-6</Col>
                        <Col span="6" pull="18">col-6 | pull-18</Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>通过设置<code>push</code>和<code>pull</code>来改变栅格的顺序。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.push }}</i-code>
            </Demo>

            <Demo title="左右偏移">
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
                    <p>通过设置<code>offset</code>属性，将列进行左右偏移，偏移栅格数为offset的值。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.offset }}</i-code>
            </Demo>

            <Demo title="Flex布局">
                <div slot="demo">
                    <p>子元素向左排列</p>
                    <Row type="flex" justify="start" class="code-row-bg">
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                    </Row>
                    <p>子元素向右排列</p>
                    <Row type="flex" justify="end" class="code-row-bg">
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                    </Row>
                    <p>子元素居中排列</p>
                    <Row type="flex" justify="center" class="code-row-bg">
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                    </Row>
                    <p>子元素等宽排列</p>
                    <Row type="flex" justify="space-between" class="code-row-bg">
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                    </Row>
                    <p>子元素分散排列</p>
                    <Row type="flex" justify="space-around" class="code-row-bg">
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                        <Col span="4">col-4</Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>通过给<code>row</code>设置参数<code>justify</code>为不同的值，来定义子元素的排布方式。在<code>flex</code>模式下有效。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.justify }}</i-code>
            </Demo>

            <Demo title="Flex对齐">
                <div slot="demo">
                    <p>顶部对齐</p>
                    <Row type="flex" justify="center" align="top" class="code-row-bg">
                        <Col span="4"><p style="height: 80px">col-4</p></Col>
                        <Col span="4"><p style="height: 30px">col-4</p></Col>
                        <Col span="4"><p style="height: 100px">col-4</p></Col>
                        <Col span="4"><p style="height: 60px">col-4</p></Col>
                    </Row>
                    <p>底部对齐</p>
                    <Row type="flex" justify="center" align="bottom" class="code-row-bg">
                        <Col span="4"><p style="height: 80px">col-4</p></Col>
                        <Col span="4"><p style="height: 30px">col-4</p></Col>
                        <Col span="4"><p style="height: 100px">col-4</p></Col>
                        <Col span="4"><p style="height: 60px">col-4</p></Col>
                    </Row>
                    <p>居中对齐</p>
                    <Row type="flex" justify="center" align="middle" class="code-row-bg">
                        <Col span="4"><p style="height: 80px">col-4</p></Col>
                        <Col span="4"><p style="height: 30px">col-4</p></Col>
                        <Col span="4"><p style="height: 100px">col-4</p></Col>
                        <Col span="4"><p style="height: 60px">col-4</p></Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>通过给<code>row</code>设置参数<code>align</code>为不同的值，来定义子元素在垂直方向上的排布方式。在<code>flex</code>模式下有效。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.align }}</i-code>
            </Demo>

            <Demo title="响应式布局">
                <div slot="demo">
                    <Row>
                        <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
                        <Col :xs="20" :sm="16" :md="12" :lg="8">Col</Col>
                        <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>参照 Bootstrap 的 <a href="http://getbootstrap.com/css/#grid-media-queries" target="_blank">响应式设计</a>，预设四个响应尺寸：xs sm md lg，详见 API。</p>
                    <p>调整浏览器尺寸来查看效果。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.reponsive }}</i-code>
            </Demo>

            <Demo title="其它属性的响应式">
                <div slot="demo">
                    <Row>
                        <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
                        <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
                        <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p><code>span</code> <code>pull</code> <code>push</code> <code>offset</code> <code>order</code> 属性可以通过内嵌到 <code>xs</code> <code>sm</code> <code>md</code> <code>lg</code> 属性中来使用。</p>
                    <p>其中 <code>:xs="6"</code> 相当于 <code>:xs="{ span: 6 }"</code>。</p>
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
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>gutter</td>
                            <td>栅格间距，单位 px，左右平分</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>布局模式，可选值为<code>flex</code>或不选，在现代浏览器下有效</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>align</td>
                            <td>flex 布局下的垂直对齐方式，可选值为<code>top</code>、<code>middle</code>、<code>bottom</code></td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>justify</td>
                            <td>flex 布局下的水平排列方式，可选值为<code>start</code>、<code>end</code>、<code>center</code>、<code>space-around</code>、<code>space-between</code></td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>class-name</td>
                            <td>自定义的class名称</td>
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
                            <td>Number | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>order</td>
                            <td>栅格的顺序，在<code>flex</code>布局模式下有效</td>
                            <td>Number | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>offset</td>
                            <td>栅格左侧的间隔格数，间隔内不可以有栅格</td>
                            <td>Number | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>push</td>
                            <td>栅格向右移动格数</td>
                            <td>Number | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>pull</td>
                            <td>栅格向左移动格数</td>
                            <td>Number | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>class-name</td>
                            <td>自定义的class名称</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>xs</td>
                            <td><code><768px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
                            <td>Number | Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>sm</td>
                            <td><code>≥768px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
                            <td>Number | Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>md</td>
                            <td><code>≥992px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
                            <td>Number | Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>lg</td>
                            <td><code>≥1200px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
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