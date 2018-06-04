<style scoped>
    .ivu-icon{
        font-size: 14px;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Checkbox 多选框</h1>
            <Anchor title="概述" h2></Anchor>
            <p>基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="单独使用">
                <div slot="demo">
                    <Checkbox v-model="single">Checkbox</Checkbox>
                    <p class="demo-data">{{ single }}</p>
                </div>
                <div slot="desc">
                    <p>使用 v-model 可以双向绑定数据。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.single }}</i-code>
            </Demo>
            <Demo title="组合使用">
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
                    <p>使用<code>CheckboxGroup</code>配合数组来生成组合。在组合使用时，<code>Checkbox</code> 使用 <code>label</code> 来自动判断选中状态。每个 Checkbox 的内容可以自定义，如不填写则默认使用 label 的值。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.group }}</i-code>
            </Demo>
            <Demo title="不可用">
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
                    <p>通过设置<code>disabled</code>属性来禁用多选框。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="与其它组件通信">
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
                    <p>与其它组件进行数据联动。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.communication }}</i-code>
            </Demo>
            <Demo title="全选">
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
                    <p>在实现全选效果时，你可能会用到 <code>indeterminate</code> 属性。示例代码只是一种写法，业务中可以用更多的方法，比如计算属性。</p>
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
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>value</td>
                            <td>只在单独使用时有效。可以使用 v-model 双向绑定数据</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中</td>
                            <td>String | Number | Boolean</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用当前项</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>indeterminate</td>
                            <td>设置 indeterminate 状态，只负责样式控制</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>多选框的尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>true-value</td>
                            <td>选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
                            <td>String, Number, Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>false-value</td>
                            <td>没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
                            <td>String, Number, Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Checkbox events" h3></Anchor>
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
                            <td>只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发</td>
                            <td>true | false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="CheckboxGroup props" h3></Anchor>
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
                            <td>指定选中项目的集合，可以使用 v-model 双向绑定数据</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>多选框组的尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="CheckboxGroup events" h3></Anchor>
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
                            <td>在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发</td>
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