<template>
    <i-article>
        <article>
            <h1>Page</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Use Page to paging data pieces when amount is too big.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Page :total="100"></Page>
                </div>
                <div slot="desc">
                    <p>Basic paging operation. It will be folded when there are too many pages.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Pieces in Each Page">
                <div slot="demo">
                    <Page :total="100" show-sizer></Page>
                </div>
                <div slot="desc">
                    <p>You can set pieces amount shown in each page.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.sizer }}</i-code>
            </Demo>
            <Demo title="Elevator">
                <div slot="demo">
                    <Page :total="100" show-elevator></Page>
                </div>
                <div slot="desc">
                    <p>Directly jump to certain page.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.elevator }}</i-code>
            </Demo>
            <Demo title="Amount">
                <div slot="demo">
                    <Page :total="100" show-total></Page>
                </div>
                <div slot="desc">
                    <p>Describe how many pieces of data are shown. It accepts slot to customize content. Default: <code v-pre>Total {{ total }} items</code></p>
                </div>
                <i-code lang="html" slot="code">{{ code.total }}</i-code>
            </Demo>
            <Demo title="Mini Size">
                <div slot="demo">
                    <Page :total="40" size="small"></Page>
                    <br>
                    <Page :total="40" size="small" show-elevator show-sizer></Page>
                    <br>
                    <Page :total="40" size="small" show-total></Page>
                </div>
                <div slot="desc">
                    <p>Set <code>size</code> to <code>small</code> to use mini size. The functions of mini size are same to the normal size.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.mini }}</i-code>
            </Demo>
            <Demo title="Conciseness">
                <div slot="demo">
                    <Page :current="2" :total="50" simple></Page>
                </div>
                <div slot="desc">
                    <p>Set <code>simple</code> prop to use a more concise Page component. It changes page by entering page number then tapping Enter, or by clicking certain page number, or by tapping Up and Down keys. concise Page CANNOT use amount, elevator and you can't let user change piece amount shown in each page.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.simple }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Page props" h3></Anchor>
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
                            <td>current</td>
                            <td>Current page number, support .sync modifier.</td>
                            <td>Number</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>total</td>
                            <td>Data piece amount</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>page-size</td>
                            <td>Amount shown in each page.</td>
                            <td>Number</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>page-size-opts</td>
                            <td>The configuration of switching the amount of data pieces shown in each page.</td>
                            <td>Array</td>
                            <td>[10, 20, 30, 40]</td>
                        </tr>
                        <tr>
                            <td>placement</td>
                            <td>The direction page-size switching dropdown expands. Optional: <code>bottom</code>, <code>top</code></td>
                            <td>String</td>
                            <td>bottom</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>Optional: <code>small</code>(mini size) or leave empty (default).</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>simple</td>
                            <td>Enable concise Page component.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-total</td>
                            <td>Piece amount</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-elevator</td>
                            <td>Show elevator. By using this, user can directly jump to certain page.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-sizer</td>
                            <td>Show page sizer(page-size switching dropdown). It is used to change <code>page-size</code>'s value.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>class-name</td>
                            <td>Custom class name.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>styles</td>
                            <td>Custom stylesheet.</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>transfer</td>
                            <td>Whether to append the layer in body. When used in Tabs or a fixed Table column, suggests adding this property, it will not be affected by the parent style, resulting in better results.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Page events" h3></Anchor>
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
                            <td>on-change</td>
                            <td>Callback when page number is changed. It returns the changed page number.</td>
                            <td>Page number</td>
                        </tr>
                        <tr>
                            <td>on-page-size-change</td>
                            <td>Callback when page sizer is used (when page-size is changed). It returns the changed page size.</td>
                            <td>page-size</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Page slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>-</td>
                            <td>Customize how to show data piece amount.</td>
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
    import Code from '../../code/page';
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