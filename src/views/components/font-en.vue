<style scoped>
    .demo-font-img{
        width: 100%;
    }
    .api table{
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Font</h1>
            <Anchor title="Overview" h2></Anchor>
            <p>iView's stylesheet has already standardized the typography for achieving the most appealing display effects regardless of the OS and browers. The fonts of the <Icon type="social-apple"></Icon> macOS（iOS）are used whenever they're available, the fallback ones are also provided.</p>
            <Anchor title="Typography Preview" h3></Anchor>
            <ul>
                <li>Chinese Characters</li>
                <img class="demo-font-img" src="../../images/font-zh.png">
                <li>English Characters</li>
                <img class="demo-font-img" src="../../images/font-en.png">
            </ul>
            <Anchor title="Code" h3></Anchor>
            <i-code lang="css" bg>font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;</i-code>
            <Anchor title="Usage Rules" h3></Anchor>
            <Row class="api" :gutter="16">
                <i-col span="12">
                    <table>
                        <thead>
                            <tr>
                                <th>Chinese</th>
                                <th>Example</th>
                                <th>Font Weight</th>
                                <th>Color</th>
                                <th>Font Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>主标题</td>
                                <td><span style="font-size:16px;font-weight:bold;color:#464c5b;">我是标题</span></td>
                                <td>加粗</td>
                                <td>#464c5b</td>
                                <td>16px</td>
                            </tr>
                            <tr>
                                <td>次级标题</td>
                                <td><span style="font-size:14px;font-weight:bold;color:#464c5b;">我是标题</span></td>
                                <td>加粗</td>
                                <td>#464c5b</td>
                                <td>14px</td>
                            </tr>
                            <tr>
                                <td>小标题</td>
                                <td><span style="font-size:12px;font-weight:bold;color:#464c5b;">我是标题</span></td>
                                <td>加粗</td>
                                <td>#464c5b</td>
                                <td>12px</td>
                            </tr>
                            <tr>
                                <td>正文</td>
                                <td><span style="color:#657180;">我是正文</span></td>
                                <td>默认</td>
                                <td>#657180</td>
                                <td>12px</td>
                            </tr>
                            <tr>
                                <td>辅助文字</td>
                                <td><span style="color:#9ea7b4;">我是辅助文字</span></td>
                                <td>默认</td>
                                <td>#9ea7b4</td>
                                <td>12px</td>
                            </tr>
                            <tr>
                                <td>失效文字</td>
                                <td><span style="color:#c3cbd6;">我是失效文字</span></td>
                                <td>默认</td>
                                <td>#c3cbd6</td>
                                <td>12px</td>
                            </tr>
                            <tr>
                                <td>链接文字</td>
                                <td><a href="#">我是链接文字</a></td>
                                <td>默认</td>
                                <td>#3399ff</td>
                                <td>12px</td>
                            </tr>
                        </tbody>
                    </table>
                </i-col>
                <i-col span="12">
                    <table>
                        <thead>
                            <tr>
                                <th>English</th>
                                <th>Example</th>
                                <th>Font Weight</th>
                                <th>Color</th>
                                <th>Font Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Main Head</td>
                                <td><span style="font-size:16px;font-weight:bold;color:#464c5b;">This is an example</span></td>
                                <td>bold</td>
                                <td>#464c5b</td>
                                <td>16px</td>
                            </tr>
                            <tr>
                                <td>Sub Head</td>
                                <td><span style="font-size:14px;font-weight:bold;color:#464c5b;">This is an example</span></td>
                                <td>bold</td>
                                <td>#464c5b</td>
                                <td>14px</td>
                            </tr>
                            <tr>
                                <td>Small Head</td>
                                <td><span style="font-size:12px;font-weight:bold;color:#464c5b;">This is an example</span></td>
                                <td>bold</td>
                                <td>#464c5b</td>
                                <td>12px</td>
                            </tr>
                            <tr>
                                <td>Text</td>
                                <td><span style="color:#657180;">This is an example</span></td>
                                <td>normal</td>
                                <td>#657180</td>
                                <td>12px</td>
                            </tr>
                            <tr>
                                <td>Help</td>
                                <td><span style="color:#9ea7b4;">This is an example</span></td>
                                <td>normal</td>
                                <td>#9ea7b4</td>
                                <td>12px</td>
                            </tr>
                            <tr>
                                <td>Disabled</td>
                                <td><span style="color:#c3cbd6;">This is an example</span></td>
                                <td>normal</td>
                                <td>#c3cbd6</td>
                                <td>12px</td>
                            </tr>
                            <tr>
                                <td>Link</td>
                                <td><a href="#">This is an example</a></td>
                                <td>normal</td>
                                <td>#3399ff</td>
                                <td>12px</td>
                            </tr>
                        </tbody>
                    </table>
                </i-col>
            </Row>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
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

            }
        }
    }
</script>