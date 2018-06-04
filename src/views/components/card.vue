<style lang="less">
    .ivu-article{
        .ivu-card p{
            margin: 0;
        }
        .ivu-card ul{
            padding: 0 !important;
            li{
                list-style: none;
                span{
                    float: right;
                    color: #ffac2d;
                    i:last-child{
                        margin-right: 5px;
                    }
                }
            }
        }
        .ivu-card img{
            height: 85px;
        }

    }
</style>
<template>
    <i-article>
        <article>
            <h1>Card 卡片</h1>
            <Anchor title="概述" h2></Anchor>
            <p>基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基本用法">
                <div slot="demo">
                    <Card style="width:350px">
                        <p slot="title">
                            <Icon type="ios-film-outline"></Icon>
                            Classic film
                        </p>
                        <a href="#" slot="extra" @click.prevent="changeLimit">
                            <Icon type="ios-loop-strong"></Icon>
                            Change
                        </a>
                        <ul>
                            <li v-for="item in randomMovieList">
                                <a :href="item.url" target="_blank">{{ item.name }}</a>
                                <span>
                                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>
                                    {{ item.rate }}
                                </span>
                            </li>
                        </ul>
                    </Card>
                </div>
                <div slot="desc">
                    <p>自定义标题、额外操作和主体内容，可以完全自由控制各个部分，也可以结合其它组件一起使用，较为灵活。</p>
                    <p><blockquote>2.12.0 版本开始，可以通过设置属性 <code>title</code> 和 <code>icon</code> 快速设置标题栏。</blockquote></p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="无边框">
                <div slot="demo">
                    <div style="background:#eee;padding: 20px">
                        <Card :bordered="false">
                            <p slot="title">No border title</p>
                            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                        </Card>
                    </div>
                </div>
                <div slot="desc">
                    <p>通过设置属性<code>bordered</code>为 false ，可以不添加边框，建议在灰色背景下使用。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.bordered }}</i-code>
            </Demo>
            <Demo title="禁用悬停阴影">
                <div slot="demo">
                    <Row>
                        <Col span="11">
                            <Card>
                                <p slot="title">The standard card</p>
                                <p>Content of card</p>
                                <p>Content of card</p>
                                <p>Content of card</p>
                            </Card>
                        </Col>
                        <Col span="11" offset="2">
                            <Card dis-hover>
                                <p slot="title">Disable card with hover shadows</p>
                                <p>Content of card</p>
                                <p>Content of card</p>
                                <p>Content of card</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>通过设置属性<code>dis-hover</code>来禁用鼠标悬停显示阴影的效果。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disHover }}</i-code>
            </Demo>
            <Demo title="卡片阴影">
                <div slot="demo">
                    <Row style="background:#eee;padding:20px">
                        <Col span="11">
                            <Card :bordered="false">
                                <p slot="title">Borderless card</p>
                                <p>Content of card</p>
                                <p>Content of card</p>
                                <p>Content of card</p>
                            </Card>
                        </Col>
                        <Col span="11" offset="2">
                            <Card shadow>
                                <p slot="title">Use a card with a shadow effect</p>
                                <p>Content of card</p>
                                <p>Content of card</p>
                                <p>Content of card</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>通过设置属性<code>shadow</code>来显示卡片阴影，使用该属性后，<code>bordered</code>和<code
                    >dis-hover</code>将无效，建议在灰色背景下使用。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.shadow }}</i-code>
            </Demo>
            <Demo title="简洁卡片">
                <div slot="demo">
                    <Card style="width:320px">
                        <div style="text-align:center">
                            <img src="../../images/logo.png">
                            <h3>A high quality UI Toolkit based on Vue.js</h3>
                        </div>
                    </Card>
                </div>
                <div slot="desc">
                    <p>只包含内容区域，没有标题。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.simple }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Card props" h3></Anchor>
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
                            <td>bordered</td>
                            <td>是否显示边框，建议在灰色背景下使用</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>dis-hover</td>
                            <td>禁用鼠标悬停显示阴影</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>shadow</td>
                            <td>卡片阴影，建议在灰色背景下使用</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>padding</td>
                            <td>卡片内部间距，单位 px</td>
                            <td>Number</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>标题，2.12.0 新增</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>标题前的图标，2.12.0 新增</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Card slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>title</td>
                            <td>自定义卡片标题，如果是简单文字，可以使用<code>&lt;p&gt;</code>标签包裹</td>
                        </tr>
                        <tr>
                            <td>extra</td>
                            <td>额外显示的内容，默认位置在右上角</td>
                        </tr>
                        <tr>
                            <td>无</td>
                            <td>卡片主体内容</td>
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
    import Code from '../../code/card';
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
                movieList: [
                    {
                        name: 'The Shawshank Redemption',
                        url: 'https://movie.douban.com/subject/1292052/',
                        rate: 9.6
                    },
                    {
                        name: 'Leon:The Professional',
                        url: 'https://movie.douban.com/subject/1295644/',
                        rate: 9.4
                    },
                    {
                        name: 'Farewell to My Concubine',
                        url: 'https://movie.douban.com/subject/1291546/',
                        rate: 9.5
                    },
                    {
                        name: 'Forrest Gump',
                        url: 'https://movie.douban.com/subject/1292720/',
                        rate: 9.4
                    },
                    {
                        name: 'Life Is Beautiful',
                        url: 'https://movie.douban.com/subject/1292063/',
                        rate: 9.5
                    },
                    {
                        name: 'Spirited Away',
                        url: 'https://movie.douban.com/subject/1291561/',
                        rate: 9.2
                    },
                    {
                        name: 'Schindler\'s List',
                        url: 'https://movie.douban.com/subject/1295124/',
                        rate: 9.4
                    },
                    {
                        name: 'The Legend of 1900',
                        url: 'https://movie.douban.com/subject/1292001/',
                        rate: 9.2
                    },
                    {
                        name: 'WALL·E',
                        url: 'https://movie.douban.com/subject/2131459/',
                        rate: 9.3
                    },
                    {
                        name: 'Inception',
                        url: 'https://movie.douban.com/subject/3541415/',
                        rate: 9.2
                    }
                ],
                randomMovieList: []
            }
        },
        methods: {
            changeLimit () {
                function getArrayItems(arr, num) {
                    const temp_array = [];
                    for (let index in arr) {
                        temp_array.push(arr[index]);
                    }
                    const return_array = [];
                    for (let i = 0; i<num; i++) {
                        if (temp_array.length>0) {
                            const arrIndex = Math.floor(Math.random()*temp_array.length);
                            return_array[i] = temp_array[arrIndex];
                            temp_array.splice(arrIndex, 1);
                        } else {
                            break;
                        }
                    }
                    return return_array;
                }
                this.randomMovieList = getArrayItems(this.movieList, 5);
            }
        },
        mounted () {
            this.changeLimit();
        }
    }
</script>