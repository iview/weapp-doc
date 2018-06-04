<style>
    .demo-breadcrumb-separator{
        color: #ff5500;
        padding: 0 5px;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Breadcrumb 面包屑</h1>
            <Anchor title="概述" h2></Anchor>
            <p>显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Breadcrumb>
                        <BreadcrumbItem to="/">Home</BreadcrumbItem>
                        <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
                        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div slot="desc">
                    <p>最基础的用法，通过设置<code>to</code>属性添加链接。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="带图标的">
                <div slot="demo">
                    <Breadcrumb>
                        <BreadcrumbItem to="/">
                            <Icon type="ios-home-outline"></Icon> Home
                        </BreadcrumbItem>
                        <BreadcrumbItem to="/components/breadcrumb">
                            <Icon type="social-buffer-outline"></Icon> Components
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon type="pound"></Icon> Breadcrumb
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div slot="desc">
                    <p>可自定义每项的内容，比如带有一个图标。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.icon }}</i-code>
            </Demo>
            <Demo title="分隔符">
                <div slot="demo">
                    <Breadcrumb separator=">">
                        <BreadcrumbItem to="/">Home</BreadcrumbItem>
                        <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
                        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
                    </Breadcrumb>
                    <Breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
                        <BreadcrumbItem to="/">Home</BreadcrumbItem>
                        <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
                        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div slot="desc">
                    <p>通过设置<code>separator</code>属性来自定义分隔符，比如<code> > </code>，也可以接受自定义的HTML字符串。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.separator }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Breadcrumb props" h3></Anchor>
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
                            <td>separator</td>
                            <td>自定义分隔符</td>
                            <td>String | Element String</td>
                            <td>/</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="BreadcrumbItem props" h3></Anchor>
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
                            <td>to</td>
                            <td>链接，不传则没有链接</td>
                            <td>String | Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>href</td>
                            <td>同 to，未来将废弃</td>
                            <td>String | Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>replace</td>
                            <td>路由跳转时，开启 replace 将不会向 history 添加新记录</td>
                            <td>Boolean</td>
                            <td>false</td>
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
    import Code from '../../code/breadcrumb';
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