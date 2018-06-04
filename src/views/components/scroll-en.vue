<style>

</style>
<template>
    <i-article>
        <article>
            <h1>Scroll</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Used for load more data when scroll to bottom or top.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Reach Bottom">
                <div slot="demo">
                    <Scroll :on-reach-bottom="handleReachBottom">
                        <Card dis-hover v-for="(item, index) in list1" :key="index" style="margin: 32px 0">
                            Content {{ item }}
                        </Card>
                    </Scroll>
                </div>
                <div slot="desc">
                    <p>Load more data when scroll the bottom.</p>
                    <p>Need to return a Promise object.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.bottom }}</i-code>
            </Demo>
            <Demo title="Reach Top">
                <div slot="demo">
                    <Scroll :on-reach-top="handleReachTop">
                        <Card dis-hover v-for="(item, index) in list2" :key="index" style="margin: 32px 0">
                            Content {{ item }}
                        </Card>
                    </Scroll>
                </div>
                <div slot="desc">
                    <p>Load more data when scroll the top.</p>
                    <p>Need to return a Promise object.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.top }}</i-code>
            </Demo>

            <Demo title="Reach Edge">
                <div slot="demo">
                    <Scroll :on-reach-edge="handleReachEdge">
                        <Card dis-hover v-for="(item, index) in list3" :key="index" style="margin: 32px 0">
                            Content {{ item }}
                        </Card>
                    </Scroll>
                </div>
                <div slot="desc">
                    <p>Load more data when scroll the bottom or top.</p>
                    <p>Need to return a Promise object.</p>
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
                        <th>Property</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Default</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>height</td>
                        <td>The height of scroll container.</td>
                        <td>String | Number</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td>loading-text</td>
                        <td>The text of loading.</td>
                        <td>String</td>
                        <td>Loading</td>
                    </tr>
                    <tr>
                        <td>on-reach-top</td>
                        <td>Call when scroll to the top, need to return a Promise object.</td>
                        <td>Function</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>on-reach-bottom</td>
                        <td>Call when scroll to the bottom, need to return a Promise object.</td>
                        <td>Function</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>on-reach-edge</td>
                        <td>Call when scroll to the top or bottom, need to return a Promise object.</td>
                        <td>Function</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>distance-to-edge</td>
                        <td>Distance from edge to trigger the callback. If negative, callback will fire before reaching edge. Positive values should be under 24.</td>
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