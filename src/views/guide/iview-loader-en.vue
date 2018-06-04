<template>
    <i-article>
        <article>
            <h1>iView Loader</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Uniform iView tag writing specification, all tags can be used in the form of capital letters, including two tags <code>Switch</code> and <code>Circle</code> that are restricted by Vue.</p>
            <p>Although not recommended, you can use the loader option configuration to open all tag prefixes, such as <code>i-date-picker</code> .</p>
            <p><a href="https://vuejs.org/v2/style-guide/#Component-name-casing-in-templates-strongly-recommended" target="_blank">Why is it recommended to always be PascalCase in a single file component and a string template.</a></p>
            <Anchor title="Usage" h2></Anchor>
            <Anchor title="Install" h3></Anchor>
            <p>First, install iview-loader through npm</p>
            <i-code lang="auto" bg>{{ code.loader.install }}</i-code>
            <Anchor title="Setting" h3></Anchor>
            <p>Configure webpack to rewrite the normal vue-loader configuration, such as: </p>
            <i-code bg>{{ code.loader.webpack }}</i-code>
            <Anchor title="Illustrate" h3></Anchor>
            <ul>
                <li>You can write <code>&lt;Switch&gt;</code> and <code>&lt;Circle&gt;</code> tags now；</li>
                <li>After the parameter <code>prefix</code> is set to <code>true</code>, all iView component tag names can be prefixed, such as <code>&lt;i-row&gt;</code> and <code>&lt;i-select&gt;</code> .</li>
            </ul>
            <p>The following is the complete tag name: </p>
            <i-code bg>{{ code.loader.tags }}</i-code>
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