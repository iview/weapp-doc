<style scoped>
    .ivu-icon{
        font-size: 14px;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Radio</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Basic Component - Radio. It's mainly used to display a set of single choices, or used to display a selection switch.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Standalone Usage">
                <div slot="demo">
                    <Radio v-model="single">Radio</Radio>
                    <p class="demo-data">{{ single }}</p>
                </div>
                <div slot="desc">
                    <p>Use v-model to enable a two-way binding.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.single }}</i-code>
            </Demo>
            <Demo title="Combination">
                <div slot="demo">
                    <RadioGroup v-model="phone">
                        <Radio label="apple">
                            <Icon type="social-apple"></Icon>
                            <span>Apple</span>
                        </Radio>
                        <Radio label="android">
                            <Icon type="social-android"></Icon>
                            <span>Android</span>
                        </Radio>
                        <Radio label="windows">
                            <Icon type="social-windows"></Icon>
                            <span>Windows</span>
                        </Radio>
                    </RadioGroup>
                    <p class="demo-data">{{ phone }}</p>
                    <RadioGroup v-model="animal">
                        <Radio label="金斑蝶"></Radio>
                        <Radio label="爪哇犀牛"></Radio>
                        <Radio label="印度黑羚"></Radio>
                    </RadioGroup>
                    <p class="demo-data">{{ animal }}</p>
                </div>
                <div slot="desc">
                    <p>Use <code>RadioGroup</code> to combine a set of exclusive selection. When using <code>RadioGroup</code>, you shall set <code>label</code> to <code>Radio</code> to enable an auto judgement. The content of each Radio can be customized. If not set, it'll use label's value by default.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.group }}</i-code>
            </Demo>
            <Demo title="Disabled">
                <div slot="demo">
                    <Radio v-model="disabledSingle" disabled>Radio</Radio>
                    <p class="demo-data">{{ disabledSingle }}</p>
                    <RadioGroup v-model="disabledGroup">
                        <Radio label="金斑蝶" disabled></Radio>
                        <Radio label="爪哇犀牛"></Radio>
                        <Radio label="印度黑羚"></Radio>
                    </RadioGroup>
                    <p class="demo-data">{{ disabledGroup }}</p>
                </div>
                <div slot="desc">
                    <p>Set <code>disabled</code> prop to disable a Radio.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="Verticality">
                <div slot="demo">
                    <RadioGroup v-model="vertical" vertical>
                        <Radio label="apple">
                            <Icon type="social-apple"></Icon>
                            <span>Apple</span>
                        </Radio>
                        <Radio label="android">
                            <Icon type="social-android"></Icon>
                            <span>Android</span>
                        </Radio>
                        <Radio label="windows">
                            <Icon type="social-windows"></Icon>
                            <span>Windows</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div slot="desc">
                    <p>Set <code>vertical</code> prop can let Radio-gruop be displayed vertically. It will not work in button type.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.vertical }}</i-code>
            </Demo>
            <Demo title="Button Type">
                <div slot="demo">
                    <RadioGroup v-model="button1" type="button">
                        <Radio label="北京"></Radio>
                        <Radio label="上海"></Radio>
                        <Radio label="深圳"></Radio>
                        <Radio label="杭州"></Radio>
                    </RadioGroup>
                    <p class="demo-data">{{ button1 }}</p>
                    <RadioGroup v-model="button2" type="button">
                        <Radio label="北京"></Radio>
                        <Radio label="上海" disabled></Radio>
                        <Radio label="深圳"></Radio>
                        <Radio label="杭州"></Radio>
                    </RadioGroup>
                    <p class="demo-data">{{ button2 }}</p>
                    <RadioGroup v-model="button3" type="button">
                        <Radio label="北京" disabled></Radio>
                        <Radio label="上海" disabled></Radio>
                        <Radio label="深圳" disabled></Radio>
                        <Radio label="杭州" disabled></Radio>
                    </RadioGroup>
                    <p class="demo-data">{{ button3 }}</p>
                </div>
                <div slot="desc">
                    <p>When using RadioGroup, you can set <code>type</code> to button to apply a button type.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.button }}</i-code>
            </Demo>
            <Demo title="Size">
                <div slot="demo">
                    <RadioGroup v-model="button4" type="button" size="large">
                        <Radio label="北京"></Radio>
                        <Radio label="上海"></Radio>
                        <Radio label="深圳"></Radio>
                        <Radio label="杭州"></Radio>
                    </RadioGroup>
                    <p class="demo-data">{{ button4 }}</p>
                    <RadioGroup v-model="button5" type="button">
                        <Radio label="北京"></Radio>
                        <Radio label="上海"></Radio>
                        <Radio label="深圳"></Radio>
                        <Radio label="杭州"></Radio>
                    </RadioGroup>
                    <p class="demo-data">{{ button5 }}</p>
                    <RadioGroup v-model="button6" type="button" size="small">
                        <Radio label="北京"></Radio>
                        <Radio label="上海"></Radio>
                        <Radio label="深圳"></Radio>
                        <Radio label="杭州"></Radio>
                    </RadioGroup>
                    <p class="demo-data">{{ button6 }}</p>
                </div>
                <div slot="desc">
                    <p>You can adjust the size of the button by setting <code>size</code> to <code>large</code> or <code>small</code>. The default is medium.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Radio props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Return Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>value</td>
                            <td>Only works when Radio is used alone. Use <code>v-model</code> to enable a two-way binding.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>label </td>
                            <td>Only works when Radios are combined by RadioGroup. Assign selected Radio's value, and it'll automatically judge which is selected.</td>
                            <td>String | Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Disable current option or not.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>The size of Radio. Optional value: <code>large</code>, <code>small</code>, <code>default</code> or leave empty.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>true-value</td>
                            <td>Value of the checkbox if it's checked.</td>
                            <td>String, Number, Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>false-value</td>
                            <td>Value of the checkbox if it's not checked.</td>
                            <td>String, Number, Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Radio events" h3></Anchor>
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
                        <td>Emit when Radio's status is changed. Current status is returned. It won't be emitted if you change the state by modifying external data.</td>
                        <td>...</td>
                    </tr>
                    </tbody>
                </table>
                <Anchor title="RadioGroup props" h3></Anchor>
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
                            <td>Assign which is selected. Use <code>v-model</code> to enable a two-way binding.</td>
                            <td>String | Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>Optional value: button or leave empty. If set to button, button type is applied.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>The size of the RadioGroup. Optional value: <code>large</code>, <code>small</code>, <code>default</code> or leave empty.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>vertical</td>
                            <td>Arrange vertically or not. It'll be ignored in button type.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="RadioGroup events" h3></Anchor>
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
                            <td>Emit when selection's status is changed. Return current selected option. It won't be emitted when you change the status by modifying external data.</td>
                            <td>...</td>
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
    import Code from '../../code/radio';
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
                single: false,
                phone: 'apple',
                animal: '爪哇犀牛',
                disabledSingle: true,
                disabledGroup: '爪哇犀牛',
                vertical: 'apple',
                button1: '北京',
                button2: '北京',
                button3: '北京',
                button4: '北京',
                button5: '北京',
                button6: '北京'
            }
        },
        methods: {

        }
    }
</script>