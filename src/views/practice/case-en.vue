<style>
    .demo-case-img{
        width: 100%;
    }
    .demo-case-img img{
        width: 100%;
    }
    .demo-case .ivu-col p{
        text-align: justify;
        line-height: 1.6;
    }
</style>
<template>
    <i-article>
        <article class="demo-case">
            <h1>Practical Cases</h1>
            <p>iView is a set of front-end solutions developed by <a href="https://www.talkingdata.com/" target="_blank">TalkingData</a> for intermediate and backend business, including engineering, theme customization, multi-language and other functions, greatly improving the development efficiency.</p>
            <p>Since late 2016, iView has been used in many new projects of TalkingData, and even gradually used in refactoring of some core projects.</p>
            <p>iView has gradually become the design and development specification for TalkingData.</p>
            <Anchor title="The Best Case" h2></Anchor>
            <Anchor title="DMap" h3></Anchor>
            <Row :gutter="32">
                <i-col span="10">
                    <p>DMap is a data visualization platform that focuses on location-related big data. TalkingData's data assets and even the big data industry's data are mostly location-giving data. DMap takes geographical analysis of location data as the core, takes into account traditional data visualization methods such as chart analysis, and builds data reports based on this. The ability of large-screen applications can meet the data analysis and visualization requirements of data analysts and data scientists, and can improve the development efficiency of similar applications in the form of JS-SDK in the near future.</p>
                    <p><a href="http://dmap.talkingdata.com/?from=iview" target="_blank">Immediate access</a></p>
                </i-col>
                <i-col span="14">
                    <Carousel dots="outside">
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-4-1.jpg">
                            </div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-4-2.jpg">
                            </div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-4-3.jpg">
                            </div>
                        </Carousel-item>
                    </Carousel>
                </i-col>
            </Row>
            <Anchor title="Smart Selection" h3></Anchor>
            <Row :gutter="32">
                <i-col span="10">
                    <p>Smart Selection (SS) is a joint venture of Tencent Cloud and TalkingData. It combines the advantages of both parties, integrates classic models and prediction algorithms, and integrates massive data and machine learning. It is designed to address the location of entity stores and the operation of business districts. Problems, intelligence products for smart retail and diversified offline industries.</p>
                    <p><a href="https://cloud.tencent.com/product/ss/details" target="_blank">Immediate access</a></p>
                </i-col>
                <i-col span="14">
                    <Carousel dots="outside">
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-6-1.jpg">
                            </div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-6-2.jpg">
                            </div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-6-3.jpg">
                            </div>
                        </Carousel-item>
                    </Carousel>
                </i-col>
            </Row>
            <Anchor title="App Analytics" h3></Anchor>
            <Row :gutter="32">
                <i-col span="10">
                    <p>App analytics is the core product of TalkingData. Due to historical reasons, the project has been precipitated for a long time. Compared with the traditional development model of the previous version, AppAnalytics has fully been refactored based on iView, and its visual effects and interaction has been greatly improved.</p>
                    <p><a href="https://www.talkingdata.com/products.jsp?languagetype=zh_cn" target="_blank">Immediate access</a></p>
                </i-col>
                <i-col span="14">
                    <Carousel dots="outside">
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-1-1.png">
                            </div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-1-2.png">
                            </div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-1-3.png">
                            </div>
                        </Carousel-item>
                    </Carousel>
                </i-col>
            </Row>
            <Anchor title="Easy Mock" h3></Anchor>
            <Row :gutter="32">
                <i-col span="10">
                    <p>Easy Mock is a persistent service that generates mock data quickly and provids visualization view. It based on iView and rendered by server (SSR).</p>
                    <p><a href="https://easy-mock.com/" target="_blank">Immediate access</a></p>
                </i-col>
                <i-col span="14">
                    <Carousel dots="outside">
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-5-1.jpg">
                            </div>
                        </Carousel-item>
                    </Carousel>
                </i-col>
            </Row>
            <Anchor title="Marketing Cloud" h3></Anchor>
            <Row :gutter="32">
                <i-col span="10">
                    <p>Marketing Cloud is an integrated database marketing product, providing a 360-degree analysis service of customer characteristics and building a comprehensive user portrait based on big data.</p>
                    <p><a href="https://www.talkingdata.com/product-MarketingCloud.jsp?languagetype=zh_cn" target="_blank">Immediate access</a></p>
                </i-col>
                <i-col span="14">
                    <Carousel dots="outside">
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-2-1.png">
                            </div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-2-2.png">
                            </div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="../../images/case-2-3.png">
                            </div>
                        </Carousel-item>
                    </Carousel>
                </i-col>
            </Row>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor
        },
        data () {
            return {

            }
        },
        methods: {

        }
    };
</script>