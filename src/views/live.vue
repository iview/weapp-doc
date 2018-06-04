<style>
    .live-cover{
        height: 150px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .live-info{
        height: 130px;
        padding: 10px;
    }
    .live-title{
        font-size: 16px;
        font-weight: bold;
    }
    .live-time{
        margin-top: 5px;
    }
    .live-cost{
        margin-top: 5px;
    }
    .live-desc{
        margin-top: 5px;
        color: #9ea7b4;
    }
    .live-link{
        height: 150px;
        line-height: 150px;
        text-align: center;
        display: block;
    }
</style>
<template>
    <i-article>
        <article style="min-height: 500px">
            <h1>iView 讲堂</h1>
            <p>iView 讲堂以技术分享为目的，不定期地以直播或录制视频的形式开展。</p>
            <blockquote>近期直播：</blockquote>
            <Card v-for="(item, index) in list" :key="item.title" style="margin-bottom: 10px;">
                <Row>
                    <i-col span="6">
                        <div class="live-cover" :style="{'backgroundImage': 'url(' + item.cover + ')'}"></div>
                    </i-col>
                    <i-col span="14">
                        <div class="live-info">
                            <div class="live-title">{{ item.title }}</div>
                            <div class="live-time" v-if="item.time !== 'finish'">开播时间：{{ item.time }}</div>
                            <!--<div class="live-cost">报名费用：<span style="color: #ff5500">{{ item.cost }}</span></div>-->
                            <div class="live-desc">{{ item.desc }}</div>
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div class="live-link">
                            <i-button type="primary" @click="handleClick(index)">
                                <div><Icon type="android-arrow-dropright-circle" size="20"></Icon></div>
                                <div v-if="item.time === 'finish'">查看教程</div>
                                <div v-else>报名参加</div>
                            </i-button>
                        </div>
                    </i-col>
                </Row>
            </Card>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../components/article.vue';
    import Anchor from '../components/anchor.vue';
    import Config from '../config/config';

    export default {
        components: {
            iArticle,
            Anchor
        },
        data () {
            return {
                list: [
                    {
                        title: 'Vue.js 实战系列合集',
                        time: 'finish',
                        cost: '36元',
                        cover: 'https://file.iviewui.com/iview-live.png',
                        desc: '本系列系统的讲解了 Vue.js 的组件、webpack、插件和 Render 函数用法，包含示例，适合 Vue.js 初学者。 合集包含以下4课：《Vue.js 实战之组件篇》、《Vue.js 实战之工程篇》、《Vue.js 实战之插件篇》、《Vue.js 实战之 Render 函数》。 系列讲座 9折。',
                        link: 'https://segmentfault.com/ls/1650000011074057'
                    },
                    {
                        title: 'Vue.js 实战之插件篇',
                        time: 'finish',
                        cost: '9.9元',
                        cover: 'https://file.iviewui.com/iview-live.png',
                        desc: 'Vue.js 提供了插件机制，可以在全局添加一些功能。它们可以简单到几个方法、属性，也可以很复杂，比如一整套组件库。本课程将介绍几个官方的核心插件，然后通过实战来开发一个插件。',
                        link: 'https://segmentfault.com/l/1500000010070434'
                    },
                    {
                        title: 'Vue.js 实战之工程篇',
                        time: 'finish',
                        cost: '9.9元',
                        cover: 'https://file.iviewui.com/iview-live.png',
                        desc: '高效的开发，离不开基础工程的搭建。本课程主要介绍目前热门的 JavaScript 应用程序的模块打包工具 webpack。在开始学习本章前，需要先安装 Node.js 和 npm，如果你不熟悉它们，可以先查阅相关资料，完成安装并了解 npm 最基本的用法。',
                        link: 'https://segmentfault.com/l/1500000009448189'
                    },
                    {
                        title: 'Vue.js 实战之组件篇',
                        time: 'finish',
                        cost: '9.9元',
                        cover: 'https://file.iviewui.com/iview-live.png',
                        desc: '组件（Component）是 Vue.js 最核心的功能，也是整个框架设计最精彩的地方，当然也是最难掌握的。本课程将带领你由浅入深地学习组件的全部内容，并通过几个实战项目熟练使用 Vue 组件。',
                        link: 'https://segmentfault.com/l/1500000009448056'
                    },
                    {
                        title: 'Vue.js 实战之 Render 函数',
                        time: 'finish',
                        cost: '9.9元',
                        cover: 'https://file.iviewui.com/iview-live.png',
                        desc: '关于 Vue.js 2中 Render 函数的详解，及项目实战。主要内容为：Virtual DOM 与 Vue 2 的 Render 函数介绍；Render 函数使用场景；createElement 用法；函数化组件及实战；实战：用 Render 函数开发一个可排序的表格组件；Q & A',
                        link: 'https://segmentfault.com/l/1500000008892728'
                    },
                    {
                        title: '基于 Vue.js 2.x 的 iView 组件开发实践',
                        time: 'finish',
                        cost: '6.6元',
                        cover: 'https://file.iviewui.com/iview-live.png',
                        desc: 'iView 2.0 版本发布了测试版，已全面支持 Vue.js 2.x。直播主要介绍 iView 2.0 的组件开发实践。主要内容为：升级 2.0 经验分享；部分组件设计思路；Q & A',
                        link: 'https://segmentfault.com/l/1500000008614960'
                    }
                ]
            }
        },
        methods: {
            handleClick (index) {
                window.open(this.list[index].link);
            }
        },
        created () {
            window.localStorage.setItem('liveVersion', Config.liveVersion);
        }
    }
</script>