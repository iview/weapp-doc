<style>
    .demo-theme-img{
        width: 90%;
        margin: 0 auto;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Customize Theme</h1>
            <p>iView provides a default theme, and allows to customize some basic aspects in order to meet the needs of UI diversity from business and brand.</p>
            <p>iView uses <a href="http://lesscss.org/" target="_blank">Less</a> as developing language of styles. We use <code>.ivu-</code> as prefix, and have defined a set of variables which can be customized.</p>
            <img src="../../images/theme-demo.png" class="demo-theme-img">
            <Anchor title="By overriding variables (Recommend)" h2></Anchor>
            <p>If you are using webpack in your project, we recommend you to override default values of the variables for customization.</p>
            <p>In order to do this, you need to create a dictionary first. For example, create a dictionary <code>my-theme</code> and add a less file <code>index.less</code> in it.</p>
            <i-code lang="auto" bg>{{ code.theme.less }}</i-code>
            <blockquote>
                Note: For entire variable list, check out <a href="https://github.com/iview/iview/blob/2.0/src/styles/custom.less" target="_blank">Default Variables</a>。
            </blockquote>
            <p>After you creating the file which contains the variable you need to override, import it in your entry file <code>main.js</code>:</p>
            <i-code lang="auto" bg>{{ code.theme.lessImport }}</i-code>
            <Anchor title="By tool" h2></Anchor>
            <p>If you did not use webpack, it can be helpful to compile theme file by our tool <a href="https://github.com/iview/iview-theme" target="_blank">iview-theme</a></p>
            <p>Install the tool globally by npm first.</p>
            <i-code lang="auto" bg>{{ code.theme.install }}</i-code>
            <p>Then create a dictionary for the theme file and initialize the theme project. The tool will automatically pull up-to-date source code from iView repository.</p>
            <i-code lang="auto" bg>{{ code.theme.init }}</i-code>
            <p>Edit <code>my-theme/custom.less</code>, override the variables and compile it by this command:</p>
            <i-code lang="auto" bg>{{ code.theme.build }}</i-code>
            <p>The tool will generate the style code <code>iview.css</code> in this dictionary. The only thing you need to do is import it in your entry file <code>main.js</code>:</p>
            <i-code lang="js" bg>{{ code.theme.import }}</i-code>
            <Alert show-icon style="margin-top: 16px">Note: The tool will pull HEAD branch from GitHub, which could be different from the version you use. Also, you need to repull it every time you updating iView.</Alert>
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
