<template>
    <i-article>
        <article>
            <h1>Contributing Guide</h1>
            <p>We welcome any contribution to iView. But before submitting your contribution though, please take a moment and read through the guidelines.</p>
            <Anchor title="PR Guidelines" h2></Anchor>
            <p>Make sure you have got in touch with the author before writing any code, we want to avoid wasteful duplication of effort. You can contact by email <a href="mailto:admin@aresn.com">admin@aresn.com</a>.</p>
            <Anchor title="Syntax" h3></Anchor>
            <ul>
                <li>Use ES2015 syntax as the followings:</li>
                <ul>
                    <li>Substitute<code>const</code>and<code>let</code>for<code>var</code></li>
                    <li>Use template string<code>`${this.data}`</code></li>
                    <li>Divide utility functions from dependencies, and use<code>import</code>to import them</li>
                    <li>Use object literal notation and arrow functions</li>
                </ul>
                <li>Add utilities to<code>src/utils/assist</code></li>
                <li>Test your component in<code>examples/routers</code></li>
            </ul>
            <Anchor title="Components" h3></Anchor>
            <p>Nomenclature</p>
            <ul>
                <li>Be simple and significant</li>
                <li>The object that exported must be in upper camel case, such as<code>Page</code>, <code>ButtonGroup</code></li>
                <li>Add<code>-item</code> after the name of children after the name of parent for nested components, such as<code>timeline</code> and <code>timeline-item</code></li>
            </ul>
            <p>Dictionary</p>
            <ul>
                <li>Each components is under <code>src/components/</code>, and has its own dictionary. Folder name must be lower case, and import file must be<code>index.js</code></li>
                <li>Filename of components must be lower case and same with components' name, such as<code>timeline.vue</code> and <code>timeline-item.vue</code></li>
            </ul>
            <p>Property</p>
            <ul>
                <li>Must use<code>type</code>or<code>validator</code>to validate the inputs</li>
                <li>Function<code>oneOf</code>in<code>src/utils/assist</code>would be useful</li>
                <li>The property<code>size</code>can only be<code>small</code>,<code>default</code>or<code>large</code></li>
            </ul>
            <Anchor title="Events" h3></Anchor>
            <p>Nomenclature</p>
            <ul>
                <li>Use prefix<code>on-</code>for an event, such as<code>on-change</code></li>
            </ul>
            <p>Guidelines</p>
            <ul>
                <li>Review the code in<code>src/mixins/emitter.js</code> if you want to use<code>$dispatch</code>and<code>$broadcast</code>in Vue 2</li>
                <li>You can use<code>$parent</code>and<code>$children</code>if need to pass value between nested components. We've provided three functions<code>findComponentUpward</code>、<code>findComponentDownward</code>、<code>findComponentsDownward</code>in<code>src/utils/assist.js</code>to find elements in parents or children. We encourage you to use them. Review code of Radio、Checkbox、Menu for reference.</li>
            </ul>
            <Anchor title="Other" h3></Anchor>
            <ul>
                <li>CSS prefix is<code>ivu-</code></li>
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
