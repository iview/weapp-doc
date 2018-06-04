<template>
    <i-article>
        <article>
            <h1>国际化</h1>
            <p>iView 的所有组件文案默认使用的是中文，通过设置可以使用其它语言。</p>
            <Anchor title="在 Webpack 中使用" h2></Anchor>
            <p>完整引入 iView</p>
            <i-code lang="js" bg>{{ code.i18n.demo }}</i-code>
            <p>按需引入 iView</p>
            <i-code lang="js" bg>{{ code.i18n.demand }}</i-code>
            <p>兼容 vue-i18n@6.x+</p>
            <i-code lang="js" bg>{{ code.i18n.vuei18n6 }}</i-code>
            <p>兼容 vue-i18n@5.x</p>
            <i-code lang="js" bg>{{ code.i18n.vuei18n5 }}</i-code>
            <Alert show-icon style="margin-top: 16px">使用 vue-i18n 时，也可以按需引入 iView 组件，用法与上面的示例类似。</Alert>
            <Anchor title="通过 CDN 使用" h2></Anchor>
            <i-code lang="html" bg>{{ code.i18n.cdn }}</i-code>
            <p>结合 vue-i18n 使用</p>
            <i-code lang="html" bg>{{ code.i18n.cdnvuei18n }}</i-code>
            <Anchor title="支持的语言" h2></Anchor>
            <p>iView 目前已支持以下语言：</p>
            <ul>
                <li>简体中文（zh-CN）</li>
                <li>繁体中文（zh-TW）</li>
                <li>英文（en-US）</li>
                <li>土耳其语（tr-TR）</li>
                <li>西班牙语（es-ES）</li>
                <li>日语（ja-JP）</li>
                <li>俄语（ru-RU）</li>
                <li>法语（fr-FR）</li>
                <li>德语（de-DE）</li>
                <li>巴西葡萄牙语（pt-BR）</li>
                <li>葡萄牙语（pt-PT）</li>
                <li>韩语（ko-KR）</li>
                <li>越南语（vi-VN）</li>
                <li>瑞典语（sv-SE）</li>
                <li>印尼语（id-ID）</li>
                <li>乌克兰语（uk-UA）</li>
                <li>意大利语（it-IT）</li>
                <li>泰语（th-TH）</li>
                <li>印地语（hi-IN）</li>
                <li>波斯语（fa-IR）</li>
                <li>罗马尼亚语（ro-RO）</li>
                <li>希腊语（el-GR）</li>
                <li>荷兰语（nl-NL）</li>
                <li>捷克语（cs-CZ）</li>
            </ul>
            <p>欢迎贡献代码，以支持更多语言。只需在<a href="https://github.com/iview/iview/tree/2.0/src/locale/lang" target="_blank">这里</a>添加一个语言配置文件即可。</p>
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