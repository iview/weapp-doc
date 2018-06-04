<template>
    <i-article>
        <article>
            <h1>Quick Start</h1>
            <Anchor title="Before Start" h2></Anchor>
            <p>Before using iView, we encourage you to read guide of Vue.js first.</p>
            <ul>
                <li>
                    <a href="https://vuejs.org/v2/guide/components.html" target="_blank">Vue Components</a>
                </li>
                <li>
                    <a href="https://vuejs.org/v2/guide/single-file-components.html" target="_blank">Single File Components</a>
                </li>
            </ul>
            <p>And understand the following concepts of Vue:</p>
            <ul>
                <li>
                    <code>props</code> Transfer Data
                </li>
                <li>
                    <code>slot</code> Content Distribution
                </li>
                <li>
                    <code>events</code> <code>$emit</code> <code>@click</code> Event
                </li>
            </ul>
            <Anchor title="iView CLI (Recommend)" h2></Anchor>
            <p>iView provide an <router-link to="/cli">CLI</router-link> for quickly construct a project with iView.</p>
            <Anchor title="Starter Kit" h2></Anchor>
            <p>We provide a starter kit <a href="https://github.com/iview/iview-project" target="_blank">iview-project</a> for you.</p>
            <p>If you are using it, you are ready for developing and can skip the following part. We recommend it to you since it can save your time.</p>
            <br/>
            <p>If you prefer not to use them or use other utilities like <a href="https://github.com/vuejs/vue-cli" target="_blank">vue-cli</a>, please keep reading.</p>
            <Anchor title="Import iView" h2></Anchor>
            <p>Import iView in the entry file (<code>main.js</code> as usual) of webpack:</p>
            <i-code lang="js" bg>{{ code.install.import }}</i-code>
            <Anchor title="Import on demand" h2></Anchor>
            <!--<p>Only import components what we need will help reduce size.</p>-->
            <!--<i-code bg>{{ code.install.need }}</i-code>-->
            <p>By using the <a href="https://github.com/ant-design/babel-plugin-import" target="_blank">babel-plugin-import</a> , you can load components on demand and reduce the size of files. First installation, then update <code>.babelrc</code> file:</p>
            <i-code bg>{{ code.install.babel_plugins }}</i-code>
            <p>Now you can import components like:</p>
            <i-code bg>{{ code.install.need }}</i-code>
            <Anchor title="Reminder" h2></Anchor>
            <ul>
                <li>Partial import will only effect logic level; you still need to import all the styles, which means add <code>import 'iview/dist/styles/iview.css';</code> to <strong>main.js</strong> or the root component.</li>
                <!--<li>Partial import depends on babel, so it's necessary to add module to webpack in order to let it compiled:</li>-->
                <!--<i-code lang="js" bg>{{ code.install.warning }}</i-code>-->
            </ul>
            <Anchor title="How to pass value to components" h2></Anchor>
            <p>Many components require adding <code>:</code> before properties for passing integer and boolean:</p>
            <i-code lang="html" bg>{{ code.standard.prop }}</i-code>
            <p>If not in template/render mode(such as using CDN), the component name must be separated, such as <code>DatePicker</code> should be <code>date-picker</code>. </p>
            <p>The following components, if not in template/render mode, you need to add a prefix <code>i-</code>:</p>
            <ul>
                <li>Button: <code>i-button</code></li>
                <li>Col: <code>i-col</code></li>
                <li>Table: <code>i-table</code></li>
                <li>Input: <code>i-input</code></li>
                <li>Form: <code>i-form</code></li>
                <li>Menu: <code>i-menu</code></li>
                <li>Select: <code>i-select</code></li>
                <li>Option: <code>i-option</code></li>
                <li>Progress: <code>i-progress</code></li>
            </ul>
            <p>The following components, you must add a prefix <code>i-</code>, unless you use <router-link to="/docs/guide/iview-loader-en">iview-loader</router-link>:</p>
            <ul>
                <li>Switch: <code>i-switch</code></li>
                <li>Circle: <code>i-circle</code></li>
            </ul>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
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
