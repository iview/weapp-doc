<template>
    <i-article>
        <article>
            <h1>Tag</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Tag for categorizing or markuping.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Tag>标签一</Tag>
                    <Tag>标签二</Tag>
                    <Tag v-if="show" closable @on-close="handleClose">标签三</Tag>
                </div>
                <div slot="desc">
                    <p>Usage of basic Tag, and it could be closable by set <code>closable</code> property. </p>
                    <p>Click to close the tag, it will trigger <code>on-close</code> event, you need to implement the logic of your own closure.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Type">
                <div slot="demo">
                    <Tag type="border">标签三</Tag>
                    <Tag type="border" closable>标签四</Tag>
                    <Tag type="dot">标签一</Tag>
                    <Tag type="dot" closable>标签二</Tag>
                </div>
                <div slot="desc">
                    <p>You can select a different style type by setting the <code>type</code> property to <code>border</code> or <code>dot</code>. It is recommended to use the border when you want to close, in the legend of the scene using dot.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.type }}</i-code>
            </Demo>
            <Demo title="Colors">
                <div slot="demo">
                    <Tag closable color="blue">标签一</Tag>
                    <Tag closable color="green">标签二</Tag>
                    <Tag closable color="red">标签三</Tag>
                    <Tag closable color="yellow">标签四</Tag>
                    <br><br>
                    <Tag type="border" closable color="blue">标签一</Tag>
                    <Tag type="border" closable color="green">标签二</Tag>
                    <Tag type="border" closable color="red">标签三</Tag>
                    <Tag type="border" closable color="yellow">标签四</Tag>
                    <br><br>
                    <Tag type="dot" closable color="blue">标签一</Tag>
                    <Tag type="dot" closable color="green">标签二</Tag>
                    <Tag type="dot" closable color="red">标签三</Tag>
                    <Tag type="dot" closable color="yellow">标签四</Tag>
                    <br><br>
                    <Tag closable color="#FFA2D3">标签一</Tag>
                    <Tag type="border" closable color="#FFA2D3">标签一</Tag>
                    <Tag type="dot" closable color="#FFA2D3">标签一</Tag>
                </div>
                <div slot="desc">
                    <p>Four default color, you can also use custom color.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.color }}</i-code>
            </Demo>
            <Demo title="Checkable">
                <div slot="demo">
                    <Tag checkable color="blue">标签一</Tag>
                    <Tag checkable color="green">标签二</Tag>
                    <Tag checkable color="red">标签三</Tag>
                    <Tag checkable color="yellow">标签四</Tag>
                </div>
                <div slot="desc">
                    <p>Set the property <code>checkable</code> to select the tag, and the property <code>checked</code> to control the current selection state.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.checkable }}</i-code>
            </Demo>
            <Demo title="Add & Remove Dynamically">
                <div slot="demo">
                    <Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">标签{{ item + 1 }}</Tag>
                    <Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">添加标签</Button>
                </div>
                <div slot="desc">
                    <p>Generating a set of Tags by array, you can add and remove dynamically.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.add }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Tag props" h3></Anchor>
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
                            <td>closable</td>
                            <td>Tag can be closed.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>checkable</td>
                            <td>Tag can be selected.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>checked</td>
                            <td>The selected state of the tag.</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>Tag style type, the optional value for the <code>border</code>, <code>dot</code> or not fill.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>color</td>
                            <td>Tag color, default values for <code>blue</code>, <code>green</code>, <code>red</code>, <code>yellow</code>, <code>default</code>, you can set custom color.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>The name of the current tag, it will be useful when using v-for, and supporting close.</td>
                            <td>String | Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>fade</td>
                            <td>Whether to use a gradient animation when appearing and disappearing, animation duration may cause flashing of the placeholder.</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Tag events" h3></Anchor>
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
                            <td>on-close</td>
                            <td>Emitted when closed.</td>
                            <td>event, name</td>
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
    import Code from '../../code/tag';
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
                count: [0, 1, 2],
                show: true
            }
        },
        methods: {
            handleClose () {
                this.show = false;
            },
            handleAdd () {
                if (this.count.length) {
                    this.count.push(this.count[this.count.length - 1] + 1);
                } else {
                    this.count.push(0);
                }
            },
            handleClose2 (event, name) {
                const index = this.count.indexOf(name);
                this.count.splice(index, 1);
            }
        }
    }
</script>