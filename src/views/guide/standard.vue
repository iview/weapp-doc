<template>
    <i-article>
        <article>
            <h1>参与贡献</h1>
            <Anchor title="开发规范" h2></Anchor>
            <p>贡献组件代码前请务必先与作者联系 <a href="mailto:admin@aresn.com">admin@aresn.com</a>，确定好开发内容和 API，以免产生不必要或重复的工作。</p>
            <Anchor title="使用之前" h3></Anchor>
            <ul>
                <li>使用最新ES2015语法，具体如下：</li>
                <ul>
                    <li>正确使用<code>const</code>和<code>let</code>替代<code>var</code></li>
                    <li>使用模板字符串<code>`${this.data}`</code></li>
                    <li>将工具函数等依赖单独分离，并用<code>import</code>导入</li>
                    <li>对象字面量缩写、箭头函数</li>
                </ul>
                <li>通用工具集可以在<code>src/utils/assist</code>内扩展</li>
                <li>在<code>examples/routers</code>内测试组件</li>
            </ul>
            <Anchor title="组件" h3></Anchor>
            <p>命名</p>
            <ul>
                <li>尽量简单、表意。</li>
                <li>export出的对象使用驼峰命名，比如<code>Page</code>、<code>ButtonGroup</code></li>
                <li>如组件需要嵌套使用，子组件命名在父组件后加<code>-item</code>，比如<code>timeline</code>及<code>timeline-item</code></li>
            </ul>
            <p>目录</p>
            <ul>
                <li>组件在目录<code>src/components/</code>下，每个组件单独一个目录，目录命名使用小写，入口文件为<code>index.js</code>，导出组件，再由根入口文件<code>src/index.js</code>暴露给使用者</li>
                <li>每个组件的文件名使用小写，但与组件的名称一致，比如<code>timeline.vue</code>和<code>timeline-item.vue</code></li>
            </ul>
            <p>属性</p>
            <ul>
                <li>必须规定<code>type</code>或者使用<code>validator</code>进行验证</li>
                <li>如果<code>validator</code>验证为几个值中的一个，则使用<code>src/utils/assist</code>内的<code>oneOf</code>函数验证</li>
                <li>如果有尺寸的参数<code>size</code>，只能使用<code>small</code><code>large</code>，默认是适中，则不用写</li>
            </ul>
            <Anchor title="事件" h3></Anchor>
            <p>命名</p>
            <ul>
                <li>使用<code>on-</code>为前缀，比如<code>on-change</code></li>
            </ul>
            <p>规范</p>
            <ul>
                <li><code>$dispatch</code>和<code>$broadcast</code> 替代方案在 <code>src/mixins/emitter.js</code> 内</li>
                <li>嵌套组件之间通信，可以使用<code>$parent</code>和<code>$children</code>，在 <code>src/utils/assist.js</code> 内提供了 <code>findComponentUpward</code>、<code>findComponentDownward</code>、<code>findComponentsDownward</code> 三个方法来向上或向下查找元素，建议组件可以嵌套其它组件时，查询 parent 或 children 使用这三个方法。参考 Radio、Checkbox、Menu 组件的实现。</li>
            </ul>
            <Anchor title="其它" h3></Anchor>
            <ul>
                <li>css前缀使用<code>ivu-</code></li>
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