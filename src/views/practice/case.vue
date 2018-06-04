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
            <h1>实践案例</h1>
            <p>iView 是由 <a href="https://www.talkingdata.com/" target="_blank">TalkingData</a> 开发的，面向中后台业务的一整套前端解决方案，包含了工程构建、主题定制、多语言等功能，极大提升了开发效率。</p>
            <p>从 2016 年下旬开始，TalkingData 的众多新项目开始使用 iView，部分核心项目已逐步开始使用 iView 重构。</p>
            <p>iView 已逐步成为 TalkingData 的设计和开发规范。</p>
            <Anchor title="最佳实践" h2></Anchor>
            <Anchor title="谛听（DMap）" h3></Anchor>
            <Row :gutter="32">
                <i-col span="10">
                    <p>DMap 是一个专注于位置相关大数据的数据可视化平台。TalkingData 的数据资产乃至大数据行业的数据大部分都是给予位置的数据，DMap 以给予位置的大数据的地理分析为核心，兼顾图表分析等传统数据可视化手段，并在此基础上构建数据报告、大屏应用的能力，可以满足数据分析师和数据科学家的数据分析及可视化需求，并能够在不久的将来以 JS-SDK 的形式提高相似应用的开发效率。</p>
                    <p><a href="http://dmap.talkingdata.com/?from=iview" target="_blank">立即访问</a></p>
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
            <Anchor title="智选" h3></Anchor>
            <Row :gutter="32">
                <i-col span="10">
                    <p>智能选址（Smart  Selection，SS）是腾讯云与 TalkingData 联合，依托双方优势，结合经典模型和预测算法，将海量数据与机器学习有机整合，旨在解决实体门店的选址、商圈经营等场景问题，为智慧零售及多元化线下产业助力的数据智能产品。</p>
                    <p><a href="https://cloud.tencent.com/product/ss/details" target="_blank">立即访问</a></p>
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
            <Anchor title="App 统计分析" h3></Anchor>
            <Row :gutter="32">
                <i-col span="10">
                    <p>App 统计分析是 TalkingData 最核心的产品，因历史原因，项目已沉淀很久，开发模式也比较传统，现已全面基于 iView 进行重构，视觉和交互都有极大的提升。</p>
                    <p><a href="https://www.talkingdata.com/products.jsp?languagetype=zh_cn" target="_blank">立即访问</a></p>
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
                    <p>Easy Mock 是由大搜车开发的一个可视化，并且能快速生成模拟数据的持久化服务。全站基于 iView 并且由服务端渲染（SSR）。</p>
                    <p><a href="https://easy-mock.com/" target="_blank">立即访问</a></p>
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
            <Anchor title="MarketingCloud 营销云" h3></Anchor>
            <Row :gutter="32">
                <i-col span="10">
                    <p>Marketing Cloud营销云是一体化数据营销产品，提供360度客群特征分析服务，用大数据全面构建人群画像。</p>
                    <p><a href="https://www.talkingdata.com/product-MarketingCloud.jsp?languagetype=zh_cn" target="_blank">立即访问</a></p>
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