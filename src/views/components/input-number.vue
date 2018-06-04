<template>
    <i-article>
        <article>
            <h1>InputNumber 数字输入框</h1>
            <Anchor title="概述" h2></Anchor>
            <p>使用鼠标或键盘输入一定范围的标准数值。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <InputNumber :max="10" :min="1" v-model="value1"></InputNumber>
                </div>
                <div slot="desc">
                    <p>可以通过输入、鼠标点击或键盘的上下键来改变数值大小。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="小数">
                <div slot="demo">
                    <InputNumber :max="10" :min="1" :step="1.2" v-model="value2"></InputNumber>
                </div>
                <div slot="desc">
                    <p>通过设置<code>step</code>属性控制每次改变的精度。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.step }}</i-code>
            </Demo>
            <Demo title="格式化展示">
                <div slot="demo">
                    <InputNumber
                        :max="10000"
                        v-model="value9"
                        :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                        :parser="value => value.replace(/\$\s?|(,*)/g, '')"></InputNumber>
                    <InputNumber
                        :max="100"
                        v-model="value10"
                        :formatter="value => `${value}%`"
                        :parser="value => value.replace('%', '')"></InputNumber>
                </div>
                <div slot="desc">
                    <p>通过 <code>formatter</code> 格式化数字，以展示具有具体含义的数据，往往需要配合 <code>parser</code> 一起使用。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.formatter }}</i-code>
            </Demo>
            <Demo title="尺寸">
                <div slot="demo">
                    <InputNumber v-model="value3" size="small"></InputNumber>
                    <InputNumber v-model="value4"></InputNumber>
                    <InputNumber v-model="value5" size="large"></InputNumber>
                </div>
                <div slot="desc">
                    <p>通过设置<code>size</code>属性为<code>large</code>和<code>small</code>将输入框设置为大和小尺寸，不设置为默认（中）尺寸。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="不可用">
                <div slot="demo">
                    <InputNumber v-model="value6" :disabled="disabled"></InputNumber>
                    <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
                </div>
                <div slot="desc">
                    <p>通过设置<code>disabled</code>属性禁用输入框，点击按钮切换状态。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="只读">
                <div slot="demo">
                    <InputNumber v-model="value7" readonly></InputNumber>
                </div>
                <div slot="desc">
                    <p>通过设置<code>readonly</code>属性开启只读。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.readonly }}</i-code>
            </Demo>
            <Demo title="不可编辑">
                <div slot="demo">
                    <InputNumber v-model="value8" :editable="false"></InputNumber>
                </div>
                <div slot="desc">
                    <p>通过设置<code>editable</code>属性控制是否能编辑。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.editable }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="InputNumber props" h3></Anchor>
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
                            <td>max</td>
                            <td>最大值</td>
                            <td>Number</td>
                            <td>Infinity</td>
                        </tr>
                        <tr>
                            <td>min</td>
                            <td>最小值</td>
                            <td>Number</td>
                            <td>-Infinity</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>当前值，可以使用 v-model 双向绑定数据</td>
                            <td>Number</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>step</td>
                            <td>每次改变的步伐，可以是小数</td>
                            <td>Number</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>输入框尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不填</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>设置禁用状态</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>占位文本</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>formatter</td>
                            <td>指定输入框展示值的格式</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>parser</td>
                            <td>指定从 formatter 里转换回数字的方式，和 formatter 搭配使用</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>readonly</td>
                            <td>是否设置为只读</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>editable</td>
                            <td>是否可编辑</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>precision</td>
                            <td>数值精度</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>element-id</td>
                            <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="InputNumber events" h3></Anchor>
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
                            <td>数值改变时的回调，返回当前值</td>
                            <td>当前值</td>
                        </tr>
                        <tr>
                            <td>on-focus</td>
                            <td>聚焦时触发</td>
                            <td>event</td>
                        </tr>
                        <tr>
                            <td>on-blur</td>
                            <td>失焦时触发</td>
                            <td>-</td>
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
    import Code from '../../code/input-number';
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
                disabled: true,
                value1: 1,
                value2: 1,
                value3: 2,
                value4: 2,
                value5: 2,
                value6: 1,
                value7: 1,
                value8: 1,
                value9: 1000,
                value10: 100
            }
        }
    }
</script>