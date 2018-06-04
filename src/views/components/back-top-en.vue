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
            <h1>BackTop</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Backtop can be used when page content is very long and a shortcut is needed to go back to the top fluently. Usually placed at the right bottom of the page.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <p>Scroll down. The gray button shows the default BackTop style.</p>
                </div>
                <div slot="desc">
                    <p>Default at 30px to the right and the bottom, display when scroll to 400px to the top.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Customized Style">
                <div slot="demo">
                    <BackTop :height="100" :bottom="200">
                        <div class="top">返回顶端</div>
                    </BackTop>
                    <p>Scroll down. The blue button shows the customized BackTop style.</p>
                </div>
                <div slot="desc">
                    <p>Custimize the position of the BackTop button at 200px to the bottom, and display when scroll to 200px to the top.</p>
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
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>height</td>
                            <td>Display <code>BackTop</code> component when scrolled height reach this value.</td>
                            <td>Number</td>
                            <td>400</td>
                        </tr>
                        <tr>
                            <td>bottom</td>
                            <td>The distance of the component to the bottom.</td>
                            <td>Number</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>right</td>
                            <td>The distance of the component to the right.</td>
                            <td>Number</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>duration</td>
                            <td>Duration time of scrolling animation. Unit: ms</td>
                            <td>Number</td>
                            <td>1000</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="BackTop events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Description</th>
                            <th>Return Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-click</td>
                            <td>Emit when click button.</td>
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