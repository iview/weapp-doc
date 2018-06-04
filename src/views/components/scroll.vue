<style>

</style>
<template>
    <i-article>
        <article>
            <h1>Scroll 无限滚动</h1>
            <Anchor title="概述" h2></Anchor>
            <p>常用于滚动至底部时，触发加载更多数据。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="底部触发">
                <div slot="demo">
                    <Scroll :on-reach-bottom="handleReachBottom">
                        <Card dis-hover v-for="(item, index) in list1" :key="index" style="margin: 32px 0">
                            Content {{ item }}
                        </Card>
                    </Scroll>
                </div>
                <div slot="desc">
                    <p>当滚动至底部时，触发加载更多。</p>
                    <p>需返回 Promise。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.bottom }}</i-code>
            </Demo>
            <Demo title="顶部触发">
                <div slot="demo">
                    <Scroll :on-reach-top="handleReachTop">
                        <Card dis-hover v-for="(item, index) in list2" :key="index" style="margin: 32px 0">
                            Content {{ item }}
                        </Card>
                    </Scroll>
                </div>
                <div slot="desc">
                    <p>当滚动至顶部时，触发加载更多。</p>
                    <p>需返回 Promise。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.top }}</i-code>
            </Demo>

            <Demo title="边缘触发">
                <div slot="demo">
                    <Scroll :on-reach-edge="handleReachEdge">
                        <Card dis-hover v-for="(item, index) in list3" :key="index" style="margin: 32px 0">
                            Content {{ item }}
                        </Card>
                    </Scroll>
                </div>
                <div slot="desc">
                    <p>当滚动至底部或顶部时，触发加载更多。</p>
                    <p>需返回 Promise。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.edge }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Scroll props" h3></Anchor>
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
                            <td>滚动区域的高度，单位像素</td>
                            <td>String | Number</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td>loading-text</td>
                            <td>加载中的文案</td>
                            <td>String</td>
                            <td>加载中</td>
                        </tr>
                        <tr>
                            <td>on-reach-top</td>
                            <td>滚动至顶部时触发，需返回 Promise</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-reach-bottom</td>
                            <td>滚动至底部时触发，需返回 Promise</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-reach-edge</td>
                            <td>滚动至顶部或底部时触发，需返回 Promise</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>distance-to-edge</td>
                            <td>从边缘到触发回调的距离。如果是负的，回调将在到达边缘之前触发。值最好在 24 以下。</td>
                            <td>Number | Array</td>
                            <td>[20, 20]</td>
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
    import Code from '../../code/scroll';
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
                list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                list2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                list3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        methods: {
            handleReachBottom () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const last = this.list1[this.list1.length - 1];
                        for (let i = 1; i < 11; i++) {
                            this.list1.push(last + i);
                        }
                        resolve();
                    }, 2000);
                });
            },
            handleReachTop () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const first = this.list2[0];
                        for (let i = 1; i < 11; i++) {
                            this.list2.unshift(first - i);
                        }
                        resolve();
                    }, 2000);
                });
            },
            handleReachEdge (dir) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        if (dir > 0) {
                            const first = this.list3[0];
                            for (let i = 1; i < 11; i++) {
                                this.list3.unshift(first - i);
                            }
                        } else {
                            const last = this.list3[this.list3.length - 1];
                            for (let i = 1; i < 11; i++) {
                                this.list3.push(last + i);
                            }
                        }
                        resolve();
                    }, 2000);
                });
            }
        }
    }
</script>