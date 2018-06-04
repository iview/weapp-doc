<template>
    <i-article>
        <article>
            <h1>快速上手</h1>
            <Anchor title="使用之前" h2></Anchor>
            <p>在开始使用 iView Weapp 之前，你需要先阅读 <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/" target="_blank">微信小程序自定义组件</a> 的相关文档。</p>
            <Anchor title="如何使用" h2></Anchor>
            <p>到 <a href="https://github.com/TalkingData/iview-weapp" target="_blank">GitHub</a> 下载 iView Weapp 的代码，将 <code>dist</code> 目录拷贝到自己的项目中。然后按照如下的方式使用组件，以 Button 为例，其它组件在对应的文档页查看：</p>
            <p>
                1. 添加需要的组件。在页面的 json 中配置（路径根据自己项目位置配置）：
            </p>
            <i-code bg lang="json">{{ code.button }}</i-code>
            <p>
                2. 在 wxml 中使用组件：
            </p>
            <i-code bg lang="html">{{ code.wxml }}</i-code>
            <Anchor title="预览所有组件" h2></Anchor>
            <p>我们内置了所有组件的示例，您可以扫描右侧的小程序码体验，或按以下方式在微信开发者工具中查看：</p>
            <i-code bg lang="shell">{{ code.install }}</i-code>
            <p>然后，将 <code>examples</code> 目录在微信开发者工具中打开即可。</p>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import Anchor from '../../components/anchor.vue';
    import Study from '../../components/study.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor,
            Study
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