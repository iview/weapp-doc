<style scoped>
    .ivu-slider{
        position: relative;
        z-index: 1;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Slider 滑块</h1>
            <Anchor title="概述" h2></Anchor>
            <p>滑动输入器，用于在数值区间/自定义区间内进行选择，支持连续或离散值。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Slider v-model="value1"></Slider>
                    <Slider v-model="value2" range></Slider>
                    <Slider v-model="value3" range disabled></Slider>
                </div>
                <div slot="desc">
                    <p>滑块的基本用法，可以使用 v-model 双向绑定数据。</p>
                    <p>通过设置属性 <code>range</code> 开启双滑块，通过设置属性 <code>disabled</code> 禁用滑块。</p>
                    <p>注意，单滑块时，<code>value</code> 格式为数字，当开启双滑块时，<code>value</code> 为长度是2的数组，且每项为数字。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="离散值">
                <div slot="demo">
                    <Slider v-model="value4" :step="10"></Slider>
                    <Slider v-model="value5" :step="10" range></Slider>
                </div>
                <div slot="desc">
                    <p>通过设置属性 <code>step</code> 可以控制每次滑动的间隔。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.step }}</i-code>
            </Demo>
            <Demo title="显示间断点">
                <div slot="demo">
                    <Slider v-model="value6" :step="10" show-stops></Slider>
                    <Slider v-model="value7" :step="10" show-stops range></Slider>
                </div>
                <div slot="desc">
                    <p>通过设置属性 <code>show-stops</code> 可以显示间断点，建议在 <code>step</code> 间隔不密集时使用。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.stops }}</i-code>
            </Demo>
            <Demo title="带有输入框">
                <div slot="demo">
                    <Slider v-model="value8" show-input></Slider>
                </div>
                <div slot="desc">
                    <p>通过设置属性 <code>show-input</code> 可以显示数字输入框，配合使用，仅在单滑块模式下有效。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.input }}</i-code>
            </Demo>
            <Demo title="自定义提示">
                <div slot="demo">
                    <Slider v-model="value9" :tip-format="format"></Slider>
                    <Slider v-model="value10" :tip-format="hideFormat"></Slider>
                </div>
                <div slot="desc">
                    <p>Slider 会把当前值传给 <code>tip-format</code>，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.format }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Slider props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>value</td>
                            <td>滑块选定的值，可以使用 v-model 双向绑定数据。普通模式下，数据格式为数字，在双滑块模式下，数据格式为长度是2的数组，且每项都为数字</td>
                            <td>Number | Array</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>min</td>
                            <td>最小值</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>max</td>
                            <td>最大值</td>
                            <td>Number</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>step</td>
                            <td>步长，取值建议能被（max - min）整除</td>
                            <td>Number</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用滑块</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>range</td>
                            <td>是否开启双滑块模式</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-input</td>
                            <td>是否显示数字输入框，仅在单滑块模式下有效</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-stops</td>
                            <td>是否显示间断点，建议在 step 不密集时使用</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-tip</td>
                            <td>提示的显示控制，可选值为 <code>hover</code>（悬停，默认）、<code>always</code>（总是可见）、<code>never</code>（不可见）</td>
                            <td>String</td>
                            <td>hover</td>
                        </tr>
                        <tr>
                            <td>tip-format</td>
                            <td>Slider 会把当前值传给 <code>tip-format</code>，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip</td>
                            <td>Function</td>
                            <td>value</td>
                        </tr>
                        <tr>
                            <td>input-size</td>
                            <td>数字输入框的尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不填，仅在开启 show-input 时有效</td>
                            <td>String</td>
                            <td>default</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Slider events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>事件名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-change</td>
                            <td>在松开滑动时触发，返回当前的选值，在滑动过程中不会触发</td>
                            <td>value</td>
                        </tr>
                        <tr>
                            <td>on-input</td>
                            <td>滑动条数据变化时触发，返回当前的选值，在滑动过程中实时触发</td>
                            <td>value</td>
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
    import Code from '../../code/slider';
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
                code: Code,
                value1: 25,
                value2: [20, 50],
                value3: [20, 50],
                value4: 30,
                value5: [20, 50],
                value6: 30,
                value7: [20, 50],
                value8: 25,
                value9: 25,
                value10: 25
            }
        },
        methods: {
            format (val) {
                return `Progress: ${val}%`
            },
            hideFormat () {
                return null;
            }
        }
    }
</script>
