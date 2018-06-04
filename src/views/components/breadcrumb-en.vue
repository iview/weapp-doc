<style>
    .demo-breadcrumb-separator{
        color: #ff5500;
        padding: 0 5px;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Breadcrumb</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Show the hierarchical structure of the website, inform the user of current location, and provide a navigation to upper nodes.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Breadcrumb>
                        <BreadcrumbItem to="/">Home</BreadcrumbItem>
                        <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
                        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div slot="desc">
                    <p>Simplest usage: add link by setting <code>to</code> prop.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="With Icon">
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
            <Demo title="Separator">
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
                    <p>Customize separator by setting <code>separator</code> prop like <code> > </code>. Customized HTML string is also acceptable.</p>
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
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>separator</td>
                            <td>Customized separator</td>
                            <td>String | Element String</td>
                            <td>/</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="BreadcrumbItem props" h3></Anchor>
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
                            <td>to</td>
                            <td>Link, no link if not set.</td>
                            <td>String | Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>href</td>
                            <td>Same as to, and will be abandoned.</td>
                            <td>String | Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>replace</td>
                            <td>set <code>true</code>, the navigation will not leave a history record</td>
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