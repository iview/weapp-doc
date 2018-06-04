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
            <h1>Card</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Basic container, used to display text, list, images, etc. Can also be used with other components.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
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
                    <p>Customized title, extra operation and main content. User can customize all parts of the component, and combined with other components. It's relatively flexible.</p>
                    <p><blockquote>You can quickly set the title bar by setting the properties <code>title</code> and <code>icon</code> after 2.12.0</blockquote></p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="No Border">
                <div slot="demo">
                    <div style="background:#eee;padding: 20px">
                        <Card :bordered="false">
                            <p slot="title">No border title</p>
                            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                        </Card>
                    </div>
                </div>
                <div slot="desc">
                    <p>Disable the border by setting <code>bordered</code> prop to false. We recommend you to use it when background color is gray.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.bordered }}</i-code>
            </Demo>
            <Demo title="Disable Hover Shadow">
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
                    <p>Disable mouse hover shadow by setting <code>dis-hover</code> prop. </p>
                </div>
                <i-code lang="html" slot="code">{{ code.disHover }}</i-code>
            </Demo>
            <Demo title="Card Shadow">
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
                    <p>Set <code>shadow</code> prop to display card shadow. If the prop is set, <code>bordered</code> prop and <code
                    >dis-hover</code> prop will be invalid. We recommend you to use it when background color is gray.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.shadow }}</i-code>
            </Demo>
            <Demo title="Succinct Card">
                <div slot="demo">
                    <Card style="width:320px">
                        <div style="text-align:center">
                            <img src="../../images/logo.png">
                            <h3>A high quality UI Toolkit based on Vue.js</h3>
                        </div>
                    </Card>
                </div>
                <div slot="desc">
                    <p>Only contains content, no title.</p>
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
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>bordered</td>
                            <td>Show the border or not, recommend setting to true when background color is gray.</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>dis-hover</td>
                            <td>Disable mouse hover shadow.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>shadow</td>
                            <td>Card shadow, recommend using it when background color is gray.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>padding</td>
                            <td>Padding of the card. Unit: px</td>
                            <td>Number</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>Title, new property after 2.12.0</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>Icon of title, new property after 2.12.0</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Card slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Decsription</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>title</td>
                            <td>Custoimzed card title. If the title is simple text, you can use <code>&lt;p&gt;</code> tag to wrap it.</td>
                        </tr>
                        <tr>
                            <td>extra</td>
                            <td>Extra contents, shown at the right head corner by default.</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Main content of the card</td>
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