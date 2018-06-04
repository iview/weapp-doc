<style scoped>
    .top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>BackTop 返回顶部</h1>
            <Anchor title="概述" h2></Anchor>
            <p>当页面内容冗长，需要快捷返回顶部时使用，一般放置在页面右下角位置。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <p>向下滚动页面，灰色的按钮为默认效果。</p>
                </div>
                <div slot="desc">
                    <p>默认位置距离页面右部和底部 30px，滚动至距顶端 400px 时显示。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="自定义样式">
                <div slot="demo">
                    <BackTop :height="100" :bottom="200">
                        <div class="top">返回顶端</div>
                    </BackTop>
                    <p>向下滚动页面，蓝色的按钮为自定义效果。</p>
                </div>
                <div slot="desc">
                    <p>自定义了位置在页面底部 200px,滚动至距顶端 200px 时显示。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.custom }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="BackTop props" h3></Anchor>
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
                            <td>height</td>
                            <td>页面滚动高度达到该值时才显示<code>BackTop</code>组件</td>
                            <td>Number</td>
                            <td>400</td>
                        </tr>
                        <tr>
                            <td>bottom</td>
                            <td>组件距离底部的距离</td>
                            <td>Number</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>right</td>
                            <td>组件距离右部的距离</td>
                            <td>Number</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>duration</td>
                            <td>滚动动画持续时间，单位 毫秒</td>
                            <td>Number</td>
                            <td>1000</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="BackTop events" h3></Anchor>
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
                            <td>on-click</td>
                            <td>点击按钮时触发</td>
                            <td>无</td>
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
    import Code from '../../code/back-top';
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
        },
        methods: {

        }
    }
</script>