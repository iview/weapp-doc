<style scoped>
    .ivu-icon{
        font-size: 14px;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Checkbox</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Basic Component - Checkbox. Mainly used for selecting multiple values from several options, or used to tag state switching seprately.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Standalone Usage">
                <div slot="demo">
                    <Checkbox v-model="single">Checkbox</Checkbox>
                    <p class="demo-data">{{ single }}</p>
                </div>
                <div slot="desc">
                    <p>Use v-model to enable two-way binding.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.single }}</i-code>
            </Demo>
            <Demo title="Combination Usage">
                <div slot="demo">
                    <CheckboxGroup v-model="social">
                        <Checkbox label="twitter">
                            <Icon type="social-twitter"></Icon>
                            <span>Twitter</span>
                        </Checkbox>
                        <Checkbox label="facebook">
                            <Icon type="social-facebook"></Icon>
                            <span>Facebook</span>
                        </Checkbox>
                        <Checkbox label="github">
                            <Icon type="social-github"></Icon>
                            <span>Github</span>
                        </Checkbox>
                        <Checkbox label="snapchat">
                            <Icon type="social-snapchat"></Icon>
                            <span>Snapchat</span>
                        </Checkbox>
                    </CheckboxGroup>
                    <p class="demo-data">{{ social }}</p>
                    <CheckboxGroup v-model="fruit">
                        <Checkbox label="香蕉"></Checkbox>
                        <Checkbox label="苹果"></Checkbox>
                        <Checkbox label="西瓜"></Checkbox>
                    </CheckboxGroup>
                    <p class="demo-data">{{ fruit }}</p>
                </div>
                <div slot="desc">
                    <p>Use <code>CheckboxGroup</code> combined with array to generate a combination. In this case, <code>Checkbox</code> uses <code>label</code> to judge selected state automatically. The content of each Checkbox can be customized. If not filled, the value of label prop will be used by default.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.group }}</i-code>
            </Demo>
            <Demo title="Disabled">
                <div slot="demo">
                    <Checkbox v-model="disabledSingle" disabled>Checkbox</Checkbox>
                    <p class="demo-data">{{ disabledSingle }}</p>
                    <CheckboxGroup v-model="disabledGroup">
                        <Checkbox label="香蕉" disabled></Checkbox>
                        <Checkbox label="苹果" disabled></Checkbox>
                        <Checkbox label="西瓜"></Checkbox>
                    </CheckboxGroup>
                    <p class="demo-data">{{ disabledGroup }}</p>
                </div>
                <div slot="desc">
                    <p>To disable Checkbox by setting <code>disabled</code> prop.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="Communication with Other Components">
                <div slot="demo">
                    <Checkbox v-model="checked" :disabled="disabled">
                        <span v-if="checked">Checked</span>
                        <span v-else>Unchecked</span>
                        -
                       <span v-if="!disabled">Usable</span>
                        <span v-else>Disabled</span>
                    </Checkbox>
                    <br>
                    <Button type="primary" @click="checked = !checked">
                        <span v-if="!checked">Checked</span>
                        <span v-else>Unchecked</span>
                    </Button>
                    <Button type="primary" @click="disabled = !disabled">
                        <span v-if="disabled">Usable</span>
                        <span v-else>Disabled</span>
                    </Button>
                </div>
                <div slot="desc">
                    <p>Data linking with other components.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.communication }}</i-code>
            </Demo>
            <Demo title="Select All">
                <div slot="demo">
                    <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                        <Checkbox
                            :indeterminate="indeterminate"
                            :value="checkAll"
                            @click.prevent.native="handleCheckAll">全选</Checkbox>
                    </div>
                    <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                        <Checkbox label="香蕉"></Checkbox>
                        <Checkbox label="苹果"></Checkbox>
                        <Checkbox label="西瓜"></Checkbox>
                    </CheckboxGroup>
                </div>
                <div slot="desc">
                    <p>You might use <code>indeterminate</code> prop when realise select-all effect. The demo code is just a kind of realisation. There are many other ways you can use in your bussiness.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.indeterminate }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Checkbox props" h3></Anchor>
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
                            <td>Only works when used alone. Use v-model to enable two-way binding.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>Only works when combined with other components. The combination will judge the selected state automatically if current selection's value prop is set.</td>
                            <td>String | Number | Boolean</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Disable current selection or not.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>indeterminate</td>
                            <td>Used to set the state of indeterminate. Only used to control styles.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>The size of Checkbox. Optional value: <code>large</code>, <code>small</code>, <code>default</code> or leave empty.</td>
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
                <Anchor title="Checkbox events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Description</th>
                            <th>Return value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-change</td>
                            <td>Only emitted when used alone. Emitted when the state of the selection changed, but won't be emitted if outer data is changed.</td>
                            <td>true | false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="CheckboxGroup props" h3></Anchor>
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
                            <td>Specify the selected item's set. Use v-model to enable a two-way binding.</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>The size of the CheckboxGroup. Optional value: <code>large</code>, <code>small</code>, <code>default</code> or leave empty.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="CheckboxGroup events" h3></Anchor>
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
                            <td>Emit when the state of the selection is changed. Selected array will be returned. It won't be emitted if outer data is changed.</td>
                            <td>[...]</td>
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
    import Code from '../../code/checkbox';
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
                social: ['facebook', 'github'],
                fruit: ['苹果'],
                disabledSingle: true,
                disabledGroup: ['苹果'],
                checked: true,
                disabled: false,
                indeterminate: true,
                checkAll: false,
                checkAllGroup: ['香蕉', '西瓜']
            }
        },
        methods: {
            handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {
                if (data.length === 3) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            }
        }
    }
</script>