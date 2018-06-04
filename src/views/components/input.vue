<template>
    <i-article>
        <article>
            <h1>Input 输入框</h1>
            <Anchor title="概述" h2></Anchor>
            <p>基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。</p>
            <Alert show-icon style="margin-top: 16px">注意：非 template/render 模式下，需使用 <code>i-input</code>。</Alert>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
                </div>
                <div slot="desc">
                    <p>基本用法，可以使用 <code>v-model</code> 实现数据的双向绑定。</p>
                    <p>可以直接设置 style 来改变输入框的宽度，默认 100%。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="尺寸">
                <div slot="demo">
                    <Row :gutter="8">
                        <Col span="8">
                            <Input v-model="value1" size="large" placeholder="large size"></Input>
                        </Col>
                        <Col span="8">
                            <Input v-model="value2" placeholder="default size"></Input>
                        </Col>
                        <Col span="8">
                            <Input v-model="value3" size="small" placeholder="small size"></Input>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>输入框有三种尺寸：大、默认（中）、小</p>
                    <p>通过设置<code>size</code>为<code>large</code>和<code>small</code>设置为大和小尺寸，不设置为默认（中）尺寸。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="可清空">
                <div slot="demo">
                    <Input v-model="value14" placeholder="Enter something..." clearable style="width: 200px"></Input>
                </div>
                <div slot="desc">
                    <p>开启属性 <code>clearable</code> 可显示清空按钮。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.clearable }}</i-code>
            </Demo>
            <Demo title="带Icon的输入框">
                <div slot="demo">
                    <Input v-model="value4" icon="ios-clock-outline" placeholder="Enter something..." style="width: 200px"></Input>
                </div>
                <div slot="desc">
                    <p>通过 <code>icon</code> 属性可以在输入框右边加一个图标。</p>
                    <p>点击图标，会触发 <code>on-click</code> 事件。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.icon }}</i-code>
            </Demo>
            <Demo title="文本域">
                <div slot="demo">
                    <Row :gutter="8">
                        <Col span="12">
                            <Input v-model="value5" type="textarea" placeholder="Enter something..."></Input>
                        </Col>
                        <Col span="12">
                            <Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..."></Input>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>通过设置属性 <code>type</code> 为 <code>textarea</code> 来使用文本域，用于多行输入。</p>
                    <p>通过设置属性 <code>rows</code> 控制文本域默认显示的行数。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.textarea }}</i-code>
            </Demo>
            <Demo title="适应文本高度的文本域">
                <div slot="demo">
                    <Row :gutter="8">
                        <Col span="12">
                            <Input v-model="value7" type="textarea" :autosize="true" placeholder="Enter something..."></Input>
                        </Col>
                        <Col span="12">
                            <Input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>设置属性 <code>autosize</code>，文本域会自动适应高度的变化。</p>
                    <p><code>autosize</code>也可以设定为一个对象，指定最小行数和最大行数。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.autosize }}</i-code>
            </Demo>
            <Demo title="禁用状态">
                <div slot="demo">
                    <Row :gutter="8">
                        <Col span="12">
                            <Input v-model="value9" disabled placeholder="Enter something..."></Input>
                        </Col>
                        <Col span="12">
                            <Input v-model="value10" disabled type="textarea" placeholder="Enter something..."></Input>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>通过添加<code>disabled</code>属性可设置为不可用状态。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="复合型输入框">
                <div slot="demo">
                    <Input v-model="value11">
                        <span slot="prepend">http://</span>
                        <span slot="append">.com</span>
                    </Input>
                    <br>
                    <Input v-model="value12">
                        <Select v-model="select1" slot="prepend" style="width: 80px">
                            <Option value="http">http://</Option>
                            <Option value="https">https://</Option>
                        </Select>
                        <Select v-model="select2" slot="append" style="width: 70px">
                            <Option value="com">.com</Option>
                            <Option value="org">.org</Option>
                            <Option value="io">.io</Option>
                        </Select>
                    </Input>
                    <br>
                    <Input v-model="value13">
                        <Select v-model="select3" slot="prepend" style="width: 80px">
                            <Option value="day">Day</Option>
                            <Option value="month">Month</Option>
                        </Select>
                        <Button slot="append" icon="ios-search"></Button>
                    </Input>
                </div>
                <div slot="desc">
                    通过前置和后置的 slot 可以实现复合型的输入框。
                </div>
                <i-code lang="html" slot="code">{{ code.addon }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Input props" h3></Anchor>
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
                            <td>type</td>
                            <td>输入框类型，可选值为 <code>text</code>、<code>password</code>、<code>textarea</code>、<code>url</code>、<code>email</code>、<code>date</code></td>
                            <td>String</td>
                            <td>text</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>绑定的值，可使用 v-model 双向绑定</td>
                            <td>String | Number</td>
                            <td>空</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>输入框尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>占位文本</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>clearable</td>
                            <td>是否显示清空按钮</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>设置输入框为禁用状态</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>readonly</td>
                            <td>设置输入框为只读</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>maxlength</td>
                            <td>最大输入长度</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>输入框尾部图标，仅在 text 类型下有效</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>rows</td>
                            <td>文本域默认行数，仅在 textarea 类型下有效</td>
                            <td>Number</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>autosize</td>
                            <td>自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }</td>
                            <td>Boolean | Object</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>number</td>
                            <td>将用户的输入转换为 Number 类型</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>autofocus</td>
                            <td>自动获取焦点</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>autocomplete</td>
                            <td>原生的自动完成功能，可选值为 off 和 on</td>
                            <td>String</td>
                            <td>off</td>
                        </tr>
                        <tr>
                            <td>element-id</td>
                            <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>spellcheck</td>
                            <td>原生的 spellcheck 属性</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>wrap</td>
                            <td>原生的 wrap 属性，可选值为 hard 和 soft，仅在 textarea 下生效</td>
                            <td>String</td>
                            <td>soft</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Input events" h3></Anchor>
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
                            <td>on-enter</td>
                            <td>按下回车键时触发</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>on-click</td>
                            <td>设置 icon 属性后，点击图标时触发</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>on-change</td>
                            <td>数据改变时触发</td>
                            <td>event</td>
                        </tr>
                        <tr>
                            <td>on-focus</td>
                            <td>输入框聚焦时触发</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>on-blur</td>
                            <td>输入框失去焦点时触发</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>on-keyup</td>
                            <td>原生的 keyup 事件</td>
                            <td>event</td>
                        </tr>
                        <tr>
                            <td>on-keydown</td>
                            <td>原生的 keydown 事件</td>
                            <td>event</td>
                        </tr>
                        <tr>
                            <td>on-keypress</td>
                            <td>原生的 keypress 事件</td>
                            <td>event</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Input slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>prepend</td>
                            <td>前置内容，仅在 text 类型下有效</td>
                        </tr>
                        <tr>
                            <td>append</td>
                            <td>后置内容，仅在 text 类型下有效</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Input methods" h3></Anchor>
                <table>
                    <thead>
                    <tr>
                        <th>方法名</th>
                        <th>说明</th>
                        <th>参数</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>focus</td>
                        <td>手动聚焦输入框</td>
                        <td>无</td>
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
    import Code from '../../code/input';
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
                value: '',
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                value6: '',
                value7: '',
                value8: '',
                value9: '',
                value10: '',
                value11: '',
                value12: '',
                value13: '',
                value14: 'Hello World',
                select1: 'http',
                select2: 'com',
                select3: 'day'
            }
        },
        methods: {

        }
    }
</script>