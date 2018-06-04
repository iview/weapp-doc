<template>
    <i-article>
        <article>
            <h1>Internationalization</h1>
            <p>The default language is Chinese. To use other languages, you need to do some customization.</p>
            <Anchor title="Use in Webpack" h2></Anchor>
            <p>Import iView</p>
            <i-code lang="js" bg>{{ code.i18n.demo }}</i-code>
            <p>Import iView on demand</p>
            <i-code lang="js" bg>{{ code.i18n.demand }}</i-code>
            <p>Compatible with vue-i18n@6.x+</p>
            <i-code lang="js" bg>{{ code.i18n.vuei18n6 }}</i-code>
            <p>Compatible with vue-i18n@5.x</p>
            <i-code lang="js" bg>{{ code.i18n.vuei18n5 }}</i-code>
            <Alert show-icon style="margin-top: 16px">When you use vue-i18n, you can also import iView components on demand, similar to the example above.</Alert>
            <Anchor title="Use with CDN" h2></Anchor>
            <i-code lang="html" bg>{{ code.i18n.cdn }}</i-code>
            <p>Combined with vue-i18n</p>
            <i-code lang="html" bg>{{ code.i18n.cdnvuei18n }}</i-code>
            <Anchor title="Supported Languages" h2></Anchor>
            <p>iView have beed translated from Chinese to the following languages:</p>
            <ul>
                <li>Chinese Simplified(zh-CN)</li>
                <li>Chinese Traditional(zh-TW)</li>
                <li>English(en-US)</li>
                <li>Turkish(tr-TR)</li>
                <li>Spanish(es-ES)</li>
                <li>Japanese(ja-JP)</li>
                <li>Russian(ru-RU)</li>
                <li>French(fr-FR)</li>
                <li>German(de-DE)</li>
                <li>Brazilian Portuguese(pt-BR)</li>
                <li>Portuguese(pt-PT)</li>
                <li>Korean(ko-KR)</li>
                <li>Vietnamese(vi-VN)</li>
                <li>Swedish(sv-SE)</li>
                <li>Indonesian(id-ID)</li>
                <li>Ukrainian(uk-UA)</li>
                <li>Italian(it-IT)</li>
                <li>Thai(th-TH)</li>
                <li>Hindi(hi-IN)</li>
                <li>Farsi(fa-IR)</li>
                <li>Romanian(ro-RO)</li>
                <li>Greek(el-GR)</li>
                <li>Dutch(nl-NL)</li>
                <li>Czech(cs-CZ)</li>
            </ul>
            <p>If your target language is not included, you are more than welcome to contribute: just add another language config <a href="https://github.com/iview/iview/tree/2.0/src/locale/lang" target="_blank">here</a> and create a pull request.</p>
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
