<template>
    <i-article>
        <article>
            <h1>Introduction</h1>
            <p>iView is a set of UI components and widgets built on Vue.js.</p>
            <Anchor title="Features" h2></Anchor>
            <ul>
                <li>Dozens of useful and beautiful components.</li>
                <li>Friendly API. It's made for people with all skill levels.</li>
                <li>Extensive documentation.</li>
                <li>Customized theme.</li>
            </ul>
            <Anchor title="Who's using iView" h2></Anchor>
            <ul>
                <li><a href="http://www.talkingdata.com/" target="_blank">TalkingData</a></li>
                <li><a href="http://www.alibaba.com/" target="_blank">Alibaba</a></li>
                <li><a href="https://www.tencent.com/" target="_blank">Tencent</a></li>
                <li><a href="http://www.jd.com/" target="_blank">JD</a></li>
                <li><a href="http://www.didichuxing.com/" target="_blank">DiDi</a></li>
                <li><a href="http://www.meituan.com/" target="_blank">MeiTuan</a></li>
                <li><a href="http://www.sina.com.cn/" target="_blank">Sina</a></li>
                <li><a href="https://www.lenovo.com.cn/" target="_blank">Lenovo</a></li>
            </ul>
            <blockquote>
                If your company or products use iView, welcome to click <a href="https://github.com/iview/iview/issues/2143" target="_blank">here</a> to leave a message.
            </blockquote>
            <Anchor title="Example" h2></Anchor>
            <i-code lang="html" bg>{{ code.introduce.demo }}</i-code>
            <p>Result</p>
            <Slider v-model="value" range></Slider>
            <Anchor title="Version" h2></Anchor>
            <p>
                <a href="https://www.npmjs.com/package/iview" target="_blank">
                    <img src="https://img.shields.io/npm/v/iview.svg?style=flat-square">
                </a>
            </p>
            <Anchor title="Compatibility" h2></Anchor>
            <ul>
                <li>Support Vue.js 2.x</li>
                <li>Support Vue.js 1.x <a href="http://v1.iviewui.com">Visit 1.0 doc</a></li>
                <li>Support SSR</li>
                <li>Support Nuxt.js</li>
                <li><a href="http://electron.atom.io/" target="_blank">Electron</a></li>
                <li>iView does not support IE8 or below since <a href="https://vuejs.org/v2/guide/reactivity.html" target="_blank">Vue.js</a> is using Object.defineProperty which do not be supported by these browsers to track changes.</li>
            </ul>
            <Anchor title="Related Links" h2></Anchor>
            <ul>
                <li>
                    <a href="https://vuejs.org/" target="_blank">Vue.js</a>
                </li>
                <li>
                    <a href="http://webpack.github.io/" target="_blank">webpack</a>
                </li>
                <li>
                    <a href="https://github.com/ant-design/ant-design/" target="_blank">Ant Design</a>
                </li>
                <li>
                    <a href="https://git.oschina.net/icarusion/iview" target="_blank">码云</a>
                </li>
            </ul>
            <Anchor title="License" h2></Anchor>
            <p>iView is released under <a href="https://github.com/iview/iview/blob/2.0/LICENSE" target="_blank">MIT license</a></p>
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
                code: Code,
                value: [20, 50]
            }
        },
        methods: {

        }
    }
</script>
