<style scoped>
    .ivu-slider{
        position: relative;
        z-index: 1;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Slider</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>A Slider component for displaying current value and intervals in range.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Slider v-model="value1"></Slider>
                    <Slider v-model="value2" range></Slider>
                    <Slider v-model="value3" range disabled></Slider>
                </div>
                <div slot="desc">
                    <p>Basic slider. You can use <code>v-model</code> to enable a two-way bingding on data.</p>
                    <p>When <code>range</code> is true, display as dual thumb mode. Disable the slider by setting the property <code>disabled</code>.</p>
                    <p></p>
                    <p>Note that when using a single slider, the <code>value</code> format is a number. When using as dual thumb mode, the <code>value</code> is an array of two, and each item is a number.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Discrete values">
                <div slot="demo">
                    <Slider v-model="value4" :step="10"></Slider>
                    <Slider v-model="value5" :step="10" range></Slider>
                </div>
                <div slot="desc">
                    <p>You can control the interval of each slide by setting the property <code>step</code>.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.step }}</i-code>
            </Demo>
            <Demo title="Breakpoints">
                <div slot="demo">
                    <Slider v-model="value6" :step="10" show-stops></Slider>
                    <Slider v-model="value7" :step="10" show-stops range></Slider>
                </div>
                <div slot="desc">
                    <p>You can display breakpoints by setting the property <code>show-stops</code>, which are recommended when the <code>step</code> interval is not intensive.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.stops }}</i-code>
            </Demo>
            <Demo title="With input">
                <div slot="demo">
                    <Slider v-model="value8" show-input></Slider>
                </div>
                <div slot="desc">
                    <p>Synchronize with <code>InptNumber</code> component by setting the property <code>show-input</code>.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.input }}</i-code>
            </Demo>
            <Demo title="Customerize tooltip">
                <div slot="demo">
                    <Slider v-model="value9" :tip-format="format"></Slider>
                    <Slider v-model="value10" :tip-format="hideFormat"></Slider>
                </div>
                <div slot="desc">
                    <p>Slider will pass the current value to <code>tip-format</code> and display the returned value in Tooltip. If null, the Tooltip will be hidden.</p>
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
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>value</td>
                            <td>The value of slider. Use v-model to enable a two-way binding. When using a single slider, the value format is a number. When using as dual thumb mode, the value is an array of two, and each item is a number.</td>
                            <td>Number | Array</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>min</td>
                            <td>The minimum value the slider can slide to.</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>max</td>
                            <td>The maximum value the slider can slide to.</td>
                            <td>Number</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>step</td>
                            <td>The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) .</td>
                            <td>Number</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>If true, the slider will not be interactable.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>range</td>
                            <td>Whether to use the dual thumb mode.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-input</td>
                            <td>Whether to synchronize with InptNumber component, works when range is false.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-stops</td>
                            <td>Whether to display breakpoints.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-tip</td>
                            <td>Tooltip display control, Optional value: <code>hover</code>（Hover, default）,<code>always</code>（Always visible）,<code>never</code>（Invisible）.</td>
                            <td>String</td>
                            <td>hover</td>
                        </tr>
                        <tr>
                            <td>tip-format</td>
                            <td>Slider will pass the current value to tip-format and display the returned value in Tooltip. If null, the Tooltip will be hidden.</td>
                            <td>Function</td>
                            <td>value</td>
                        </tr>
                        <tr>
                            <td>input-size</td>
                            <td>The size of InputNumber. The value could be <code>large</code>, <code>small</code>, <code>default</code>or none. Only works when show-input is open.</td>
                            <td>String</td>
                            <td>default</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Slider events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Description</th>
                            <th>Return Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-change</td>
                            <td>Emitted when slide button is released. It'll return current selected value.</td>
                            <td>value</td>
                        </tr>
                        <tr>
                            <td>on-input</td>
                            <td>Emitted when value changes. It'll be emitted in real time during sliding.</td>
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
